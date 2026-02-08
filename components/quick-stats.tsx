"use client";

import { CheckCircle2, Clock, ListTodo, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface QuickStatsProps {
  tasks: Task[];
}

export default function QuickStats({ tasks }: QuickStatsProps) {
  const completed = tasks.filter((t) => t.completed).length;
  const pending = tasks.filter((t) => !t.completed).length;
  const total = tasks.length;
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="space-y-3">
      {/* Progress Bar */}
      <div className="bg-muted/50 rounded-2xl p-4 border border-border backdrop-blur-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-foreground">Today's Progress</span>
          <span className="text-xs font-bold text-amber-500">{completionRate}%</span>
        </div>
        <div className="h-2.5 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-700 ease-out shadow-[0_0_12px_rgba(251,191,36,0.4)]"
            style={{ width: `${completionRate}%` }}
          />
        </div>
        <div className="flex items-center gap-1.5 mt-2">
          <TrendingUp size={12} className="text-muted-foreground" />
          <span className="text-xs text-muted-foreground">
            {completed} of {total} tasks completed
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-3">
        <StatCard
          icon={<ListTodo size={18} />}
          value={total}
          label="Total"
          color="purple"
          delay={0}
        />
        <StatCard
          icon={<CheckCircle2 size={18} />}
          value={completed}
          label="Done"
          color="green"
          delay={100}
        />
        <StatCard
          icon={<Clock size={18} />}
          value={pending}
          label="Active"
          color="blue"
          delay={200}
        />
      </div>
    </div>
  );
}

function StatCard({
  icon,
  value,
  label,
  color,
  delay,
}: {
  icon: React.ReactNode;
  value: number;
  label: string;
  color: "green" | "blue" | "purple";
  delay: number;
}) {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const duration = 600;
      const steps = 30;
      const stepValue = value / steps;
      const stepDelay = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        if (currentStep >= steps) {
          setAnimatedValue(value);
          clearInterval(interval);
        } else {
          setAnimatedValue(Math.round(stepValue * currentStep));
        }
      }, stepDelay);

      return () => clearInterval(interval);
    }, delay);
  }, [value, delay]);

  const colorClasses = {
    green: {
      bg: "bg-green-500/10 dark:bg-green-500/15",
      text: "text-green-600 dark:text-green-400",
      glow: "shadow-[0_0_12px_rgba(34,197,94,0.2)]",
    },
    blue: {
      bg: "bg-blue-500/10 dark:bg-blue-500/15",
      text: "text-blue-600 dark:text-blue-400",
      glow: "shadow-[0_0_12px_rgba(59,130,246,0.2)]",
    },
    purple: {
      bg: "bg-purple-500/10 dark:bg-purple-500/15",
      text: "text-purple-600 dark:text-purple-400",
      glow: "shadow-[0_0_12px_rgba(168,85,247,0.2)]",
    },
  };

  return (
    <div className="bg-muted/30 hover:bg-muted/50 rounded-2xl p-4 border border-border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg group">
      <div className={`w-10 h-10 rounded-xl ${colorClasses[color].bg} ${colorClasses[color].text} ${colorClasses[color].glow} flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
        {icon}
      </div>
      <p className="text-2xl font-bold text-foreground mb-0.5 tabular-nums">{animatedValue}</p>
      <p className="text-xs font-medium text-muted-foreground tracking-wide">{label}</p>
    </div>
  );
}