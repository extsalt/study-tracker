
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import type { Subject } from "@/types";
import { Label } from "./ui/label";

interface SubjectAccordionProps {
  subjects: Subject[];
  onTopicToggle: (subjectId: string, topicId: string, completed: boolean) => void;
}

export default function SubjectAccordion({ subjects, onTopicToggle }: SubjectAccordionProps) {
  return (
    <Accordion type="multiple" className="w-full">
      {subjects.map((subject) => {
        const completedTopics = subject.topics.filter((t) => t.completed).length;
        const totalTopics = subject.topics.length;
        const progress = totalTopics > 0 ? (completedTopics / totalTopics) * 100 : 0;
        const Icon = subject.icon;

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
                <div className="space-y-4">
                  {subject.topics.map((topic) => (
                    <div key={topic.id} className="flex items-center space-x-3 rounded-md p-3 transition-colors hover:bg-secondary/50">
                      <Checkbox
                        id={`${subject.id}-${topic.id}`}
                        checked={topic.completed}
                        onCheckedChange={(checked) =>
                          onTopicToggle(subject.id, topic.id, !!checked)
                        }
                      />
                      <Label
                        htmlFor={`${subject.id}-${topic.id}`}
                        className={`text-sm ${
                          topic.completed ? "text-muted-foreground line-through" : ""
                        }`}
                      >
                        {topic.name}
                      </Label>
                    </div>
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
