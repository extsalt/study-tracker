
import type React from 'react';
import type { LucideProps } from 'lucide-react';

export interface Topic {
  id: string;
  name: string;
  completed: boolean;
}

export type IconName = "BookOpen" | "Landmark" | "Scale" | "Globe" | "ScrollText";

export interface SubjectData {
  id: string;
  name: string;
  icon: IconName;
  topics: Topic[];
}

export interface Subject extends Omit<SubjectData, 'icon'> {
  icon: React.ComponentType<LucideProps>;
}
