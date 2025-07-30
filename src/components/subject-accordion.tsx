"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import type { SubjectData, Topic, IconName } from "@/types";
import { Label } from "./ui/label";
import React from "react";
import { BookOpen, Landmark, Scale, Globe, ScrollText, Shield, type LucideProps } from "lucide-react";

const iconMap: Record<IconName, React.ComponentType<LucideProps>> = {
  BookOpen,
  Landmark,
  Scale,
  Globe,
  ScrollText,
  Shield,
};

interface SubjectAccordionProps {
  subjects: SubjectData[];
  onTopicToggle: (subjectId: string, topicId: string, completed: boolean) => void;
}

const TopicItem = ({ topic, subjectId, onTopicToggle }: { topic: Topic, subjectId: string, onTopicToggle: (subjectId: string, topicId: string, completed: boolean) => void }) => {
  
  const renderTopic = (topic: Topic, isSubTopic: boolean) => {
    return (
      <div key={topic.id} className="flex flex-col">
        <div className={`flex items-center space-x-3 rounded-md p-2 transition-colors hover:bg-secondary/50 ${isSubTopic ? 'ml-6' : ''}`}>
          <Checkbox
            id={`${subjectId}-${topic.id}`}
            checked={topic.completed}
            onCheckedChange={(checked) =>
              onTopicToggle(subjectId, topic.id, !!checked)
            }
          />
          <Label
            htmlFor={`${subjectId}-${topic.id}`}
            className={`text-sm cursor-pointer ${
              topic.completed ? "text-muted-foreground line-through" : ""
            }`}
          >
            {topic.name}
          </Label>
        </div>
        {topic.subTopics && topic.subTopics.length > 0 && (
          <div className="space-y-1">
            {topic.subTopics.map((subTopic) => renderTopic(subTopic, true))}
          </div>
        )}
      </div>
    );
  };

  return renderTopic(topic, false);
};


export default function SubjectAccordion({ subjects, onTopicToggle }: SubjectAccordionProps) {
  return (
    <Accordion type="multiple" className="w-full">
      {subjects.map((subject) => {
        let completedTopics = 0;
        let totalTopics = 0;
        const countTopics = (topics: Topic[]) => {
          topics.forEach(topic => {
            totalTopics++;
            if (topic.completed) completedTopics++;
            if (topic.subTopics) countTopics(topic.subTopics);
          });
        };
        countTopics(subject.topics);

        const progress = totalTopics > 0 ? (completedTopics / totalTopics) * 100 : 0;
        const Icon = iconMap[subject.icon];
        
        return (
          <AccordionItem value={subject.id} key={subject.id} className="border-b-0">
            <div className="bg-card p-4 rounded-lg shadow-sm mb-4 transition-all hover:shadow-md">
              <AccordionTrigger className="w-full text-left hover:no-underline p-0">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4">
                    {Icon && <Icon className="h-6 w-6 text-primary" />}
                    <div className="flex flex-col items-start">
                        <span className="font-headline font-semibold text-lg text-card-foreground">
                            {subject.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                            {completedTopics} / {totalTopics} topics completed
                        </span>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <Progress value={progress} className="mt-2 h-2" />
              <AccordionContent className="pt-6">
                <div className="space-y-2">
                  {subject.topics.map((topic) => (
                    <TopicItem key={topic.id} topic={topic} subjectId={subject.id} onTopicToggle={onTopicToggle} />
                  ))}
                </div>
              </AccordionContent>
            </div>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}