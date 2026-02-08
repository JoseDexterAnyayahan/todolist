"use client";

import { Sunrise, Sun, Sunset, Moon } from "lucide-react";

export default function TimeOfDayChart() {
  const timeSlots = [
    { name: "Morning", icon: <Sunrise size={16} />, count: 12, percentage: 25, time: "6AM-12PM" },
    { name: "Afternoon", icon: <Sun size={16} />, count: 18, percentage: 38, time: "12PM-6PM" },
    { name: "Evening", icon: <Sunset size={16} />, count: 15, percentage: 31, time: "6PM-10PM" },
    { name: "Night", icon: <Moon size={16} />, count: 3, percentage: 6, time: "10PM-6AM" },
  ];

  const maxCount = Math.max(...timeSlots.map(s => s.count));

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 rounded-xl p-4 border border-zinc-200 dark:border-zinc-800">
      <div className="space-y-3">
        {timeSlots.map((slot, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <div className="text-zinc-600 dark:text-zinc-400">
                  {slot.icon}
                </div>
                <div>
                  <span className="text-sm font-medium text-zinc-900 dark:text-white">
                    {slot.name}
                  </span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-500 ml-1.5">
                    {slot.time}
                  </span>
                </div>
              </div>
              <span className="text-sm font-semibold text-zinc-900 dark:text-white">
                {slot.count}
              </span>
            </div>
            <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-orange-500 to-pink-500 h-2 rounded-full transition-all"
                style={{ width: `${(slot.count / maxCount) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}