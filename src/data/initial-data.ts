
import type { Subject } from "@/types";
import { BookOpen, Landmark, Scale, Globe, ScrollText } from "lucide-react";
import React from "react";

export const initialData: Subject[] = [
  {
    id: "history",
    name: "History",
    icon: () => React.createElement(ScrollText),
    topics: [
      { id: "hist-1", name: "Ancient India: Indus Valley Civilization", completed: false },
      { id: "hist-2", name: "Ancient India: Vedic Period", completed: false },
      { id: "hist-3", name: "Ancient India: Mauryan & Post-Mauryan", completed: false },
      { id: "hist-4", name: "Medieval India: Delhi Sultanate", completed: false },
      { id: "hist-5", name: "Medieval India: Mughal Empire", completed: false },
      { id: "hist-6", name: "Modern India: British Conquest", completed: false },
      { id: "hist-7", name: "Modern India: 1857 Revolt", completed: false },
      { id: "hist-8", name: "Modern India: Freedom Struggle", completed: false },
    ],
  },
  {
    id: "polity",
    name: "Polity & Constitution",
    icon: () => React.createElement(Landmark),
    topics: [
      { id: "pol-1", name: "Making of the Constitution", completed: false },
      { id: "pol-2", name: "Preamble, Union & its Territory, Citizenship", completed: false },
      { id: "pol-3", name: "Fundamental Rights & Duties, DPSP", completed: false },
      { id: "pol-4", name: "Union & State Executive", completed: false },
      { id: "pol-5", name: "Parliament & State Legislatures", completed: false },
      { id: "pol-6", name: "Judiciary", completed: false },
      { id: "pol-7", name: "Constitutional & Non-Constitutional Bodies", completed: false },
    ],
  },
  {
    id: "geography",
    name: "Geography",
    icon: () => React.createElement(Globe),
    topics: [
      { id: "geo-1", name: "Physical Geography: Geomorphology", completed: false },
      { id: "geo-2", name: "Physical Geography: Climatology", completed: false },
      { id: "geo-3", name: "Physical Geography: Oceanography", completed: false },
      { id: "geo-4", name: "Indian Geography: Physical Features", completed: false },
      { id: "geo-5", name: "Indian Geography: River Systems", completed: false },
      { id: "geo-6", name: "Indian Geography: Climate, Soil & Vegetation", completed: false },
      { id: "geo-7", name: "World Geography: Continents & Countries", completed: false },
    ],
  },
  {
    id: "economy",
    name: "Economy",
    icon: () => React.createElement(Scale),
    topics: [
      { id: "eco-1", name: "Basics of Indian Economy", completed: false },
      { id: "eco-2", name: "National Income Accounting", completed: false },
      { id: "eco-3", name: "Money and Banking", completed: false },
      { id: "eco-4", name: "Inflation and Business Cycle", completed: false },
      { id: "eco-5", name: "Government Budgeting and Fiscal Policy", completed: false },
      { id: "eco-6", name: "External Sector: Balance of Payments", completed: false },
      { id: "eco-7", name: "Agriculture and Food Management", completed: false },
    ],
  },
  {
    id: "csat",
    name: "CSAT",
    icon: () => React.createElement(BookOpen),
    topics: [
        { id: "csat-1", name: "Comprehension", completed: false },
        { id: "csat-2", name: "Interpersonal skills including communication skills", completed: false },
        { id: "csat-3", name: "Logical reasoning and analytical ability", completed: false },
        { id: "csat-4", name: "Decision making and problem solving", completed: false },
        { id: "csat-5", name: "General mental ability", completed: false },
        { id: "csat-6", name: "Basic numeracy (numbers and their relations, orders of magnitude, etc.)", completed: false },
        { id: "csat-7", name: "Data interpretation (charts, graphs, tables, data sufficiency etc.)", completed: false },
    ],
  },
];
