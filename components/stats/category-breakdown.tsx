"use client";

import { Flag } from "lucide-react";

export default function CategoryBreakdown() {
  // Mock data - replace with actual data
  const categories = [
    { name: "High", count: 8, color: "bg-red-500", percentage: 30 },
    { name: "Medium", count: 12, color: "bg-yellow-500", percentage: 45 },
    { name: "Low", count: 7, color: "bg-green-500", percentage: 25 },
  ];

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 rounded-xl p-4 border border-zinc-200 dark:border-zinc-800 space-y-4">
      {categories.map((category, index) => (
        <div key={index}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Flag size={14} className="text-zinc-500 dark:text-zinc-400" />
              <span className="text-sm font-medium text-zinc-900 dark:text-white">
                {category.name}
              </span>
            </div>
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              {category.count} tasks
            </span>
          </div>
          <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2">
            <div
              className={`${category.color} h-2 rounded-full transition-all`}
              style={{ width: `${category.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}