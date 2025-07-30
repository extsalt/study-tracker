
"use client";

import { useState, useEffect, useMemo } from "react";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { initialData } from "@/data/initial-data.tsx";
import type { SubjectData } from "@/types";
import ProgressChart from "@/components/progress-chart";
import SubjectAccordion from "@/components/subject-accordion";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const [subjects, setSubjects] = useLocalStorage<SubjectData[]>("subjects", initialData);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleTopicToggle = (subjectId: string, topicId: string, completed: boolean) => {
    const newSubjects = subjects.map((subject) => {
      if (subject.id === subjectId) {
        const newTopics = subject.topics.map((topic) => {
          if (topic.id === topicId) {
            return { ...topic, completed };
          }
          return topic;
        });
        return { ...subject, topics: newTopics };
      }
      return subject;
    });
    setSubjects(newSubjects);
  };

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
    const totalTopics = subjects.reduce((acc, subject) => acc + subject.topics.length, 0);
    const completedTopics = subjects.reduce(
      (acc, subject) => acc + subject.topics.filter((t) => t.completed).length,
      0
    );
    const progress = totalTopics > 0 ? (completedTopics / totalTopics) * 100 : 0;

    let inProgressSubjects = 0;
    let backlogSubjects = 0;

    subjects.forEach((subject) => {
      const completedCount = subject.topics.filter((t) => t.completed).length;
      if (completedCount > 0 && completedCount < subject.topics.length) {
        inProgressSubjects++;
      } else if (completedCount === 0) {
        backlogSubjects++;
      }
    });

    return {
      totalTopics,
      completedTopics,
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
