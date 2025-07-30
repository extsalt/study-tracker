
import type { LucideIcon } from 'lucide-react';

export interface Topic {
  id: string;
  name: string;
  completed: boolean;
}

export interface Subject {
  id: string;
  name: string;
  icon: LucideIcon;
  topics: Topic[];
}
