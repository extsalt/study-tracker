
"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { initialData } from "@/data/initial-data.tsx";
import type { SubjectData, Topic } from "@/types";
import ProgressChart from "@/components/progress-chart";
import SubjectAccordion from "@/components/subject-accordion";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const [subjects, setSubjects] = useLocalStorage<SubjectData[]>("subjects", initialData);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleTopicToggle = useCallback((subjectId: string, topicId: string, completed: boolean) => {
    const newSubjects = subjects.map((subject) => {
      if (subject.id === subjectId) {
        const newTopics = subject.topics.map(topic => {
            const findAndToggle = (t: Topic): Topic => {
                if (t.id === topicId) {
                    const toggleChildren = (childTopics: Topic[] | undefined, status: boolean): Topic[] | undefined => {
                        return childTopics?.map(child => ({
                            ...child,
                            completed: status,
                            subTopics: toggleChildren(child.subTopics, status)
                        }));
                    }
                    return { ...t, completed, subTopics: toggleChildren(t.subTopics, completed) };
                }
                if (t.subTopics) {
                    return { ...t, subTopics: t.subTopics.map(findAndToggle) };
                }
                return t;
            };
            return findAndToggle(topic);
        });
        return { ...subject, topics: newTopics };
      }
      return subject;
    });
    setSubjects(newSubjects);
  }, [subjects, setSubjects]);

  const stats = useMemo(() => {
    if (!isClient) {
      return {
        totalTopics: 0,
        completedTopics: 0,
        progress: 0,
        inProgressSubjects: 0,
        backlogSubjects: 0,
      };
    }
    
    let totalTopics = 0;
    let completedTopics = 0;

    const countTopics = (topics: Topic[]) => {
      topics.forEach(topic => {
        if (!topic.subTopics || topic.subTopics.length === 0) {
            totalTopics++;
            if (topic.completed) {
                completedTopics++;
            }
        }
        if (topic.subTopics) {
          countTopics(topic.subTopics);
        }
      });
    };
    
    subjects.forEach(subject => countTopics(subject.topics));
    
    const countCompletedTopicsOnly = (topics: Topic[]) => {
        let count = 0;
        topics.forEach(topic => {
            if (topic.completed) {
                count++;
            }
            if(topic.subTopics){
                count += countCompletedTopicsOnly(topic.subTopics);
            }
        });
        return count;
    };

    let grandTotalTopics = 0;
    const countAllTopics = (topics: Topic[]) => {
        let count = 0;
        topics.forEach(topic => {
            count++;
            if(topic.subTopics){
                count += countAllTopics(topic.subTopics);
            }
        });
        return count;
    }
    subjects.forEach(subject => grandTotalTopics += countAllTopics(subject.topics));
    let grandCompletedTopics = 0;
    subjects.forEach(subject => grandCompletedTopics += countCompletedTopicsOnly(subject.topics));


    const progress = grandTotalTopics > 0 ? (grandCompletedTopics / grandTotalTopics) * 100 : 0;

    let inProgressSubjects = 0;
    let backlogSubjects = 0;

    subjects.forEach((subject) => {
      let subjectTotal = 0;
      let subjectCompleted = 0;
      const countSubjectTopics = (topics: Topic[]) => {
        topics.forEach(topic => {
          subjectTotal++;
          if (topic.completed) subjectCompleted++;
          if (topic.subTopics) countSubjectTopics(topic.subTopics);
        });
      };
      countSubjectTopics(subject.topics);

      if (subjectCompleted > 0 && subjectCompleted < subjectTotal) {
        inProgressSubjects++;
      } else if (subjectCompleted === 0) {
        backlogSubjects++;
      }
    });

    return {
      totalTopics: grandTotalTopics,
      completedTopics: grandCompletedTopics,
      progress,
      inProgressSubjects,
      backlogSubjects,
    };
  }, [subjects, isClient]);

  if (!isClient) {
    return (
      <div className="min-h-screen bg-background font-body text-foreground">
        <main className="container mx-auto p-4 md:p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold font-headline text-primary-foreground/90">UPSC Tracker</h1>
            <p className="text-muted-foreground mt-2">Track your subject-wise progress for the UPSC examinations.</p>
          </header>
          <div className="grid gap-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Skeleton className="h-28 rounded-lg" />
              <Skeleton className="h-28 rounded-lg" />
              <Skeleton className="h-28 rounded-lg" />
            </div>
            <Skeleton className="h-96 rounded-lg" />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <main className="container mx-auto p-4 md:p-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold font-headline text-primary-foreground/90">UPSC Tracker</h1>
          <p className="text-muted-foreground mt-2">Track your subject-wise progress for the UPSC examinations.</p>
        </header>

        <ProgressChart stats={stats} />

        <div className="mt-8">
          <SubjectAccordion subjects={subjects} onTopicToggle={handleTopicToggle} />
        </div>
      </main>
       <footer className="text-center p-4 text-muted-foreground text-sm">
          <p>Happy Studying!</p>
        </footer>
    </div>
  );
}
