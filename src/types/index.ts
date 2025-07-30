
import type React from 'react';

export interface Topic {
  id: string;
  name: string;
  completed: boolean;
}

export interface Subject {
  id: string;
  name: string;
  icon: () => React.ReactElement;
  topics: Topic[];
}
