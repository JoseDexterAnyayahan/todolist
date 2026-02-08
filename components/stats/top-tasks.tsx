"use client";

import { CheckCircle2 } from "lucide-react";

export default function TopTasks() {
  const tasks = [
    { title: "Design login screen", completedAt: "2 hours ago" },
    { title: "Create empty state", completedAt: "5 hours ago" },
    { title: "Prepare portfolio shots", completedAt: "Yesterday" },
  ];

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
      {tasks.map((task, index) => (
        <div
          key={index}
          className={`p-4 flex items-start gap-3 ${
            index !== tasks.length - 1 ? "border-b border-zinc-200 dark:border-zinc-800" : ""
          }`}
        >
          <CheckCircle2 size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-zinc-900 dark:text-white truncate">
              {task.title}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              {task.completedAt}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}