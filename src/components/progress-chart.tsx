
"use client";

import { TrendingUp, ListTodo, Library } from "lucide-react";
import { Pie, PieChart, Tooltip } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface ProgressChartProps {
  stats: {
    totalTopics: number;
    completedTopics: number;
    progress: number;
    inProgressSubjects: number;
    backlogSubjects: number;
  };
}

export default function ProgressChart({ stats }: ProgressChartProps) {
  const {
    totalTopics,
    completedTopics,
    progress,
    inProgressSubjects,
    backlogSubjects,
  } = stats;
  const pendingTopics = totalTopics - completedTopics;

  const chartData = [
    { name: "Completed", value: completedTopics, fill: "hsl(var(--primary))" },
    { name: "Pending", value: pendingTopics, fill: "hsl(var(--muted))" },
  ];

  const chartConfig = {
    topics: {
      label: "Topics",
    },
    completed: {
      label: "Completed",
    },
    pending: {
      label: "Pending",
    },
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{progress.toFixed(1)}%</div>
          <p className="text-xs text-muted-foreground">
            {completedTopics} of {totalTopics} topics completed
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">In Progress</CardTitle>
          <ListTodo className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{inProgressSubjects}</div>
          <p className="text-xs text-muted-foreground">
            Subjects partially studied
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Backlog</CardTitle>
          <Library className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{backlogSubjects}</div>
          <p className="text-xs text-muted-foreground">
            Subjects not started yet
          </p>
        </CardContent>
      </Card>
       <Card className="md:col-span-2 lg:col-span-3">
        <CardHeader>
          <CardTitle>Topics Breakdown</CardTitle>
          <CardDescription>
            A visual representation of your completed vs. pending topics.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
            <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square h-[250px]"
            >
                <PieChart>
                <Tooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={60}
                    strokeWidth={5}
                >
                </Pie>
                </PieChart>
            </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
