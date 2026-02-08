"use client";

export default function StreakCalendar() {
  const days = [
    3, 0, 2, 5, 4, 0, 1,
    2, 4, 3, 0, 5, 2, 3,
    0, 1, 4, 2, 3, 5, 0,
    4, 2, 0, 3, 1, 4, 2,
    5, 3, 0, 0, 0, 0, 0,
  ];

  const getIntensity = (count: number) => {
    if (count === 0) return "bg-zinc-100 dark:bg-zinc-900";
    if (count === 1) return "bg-green-200 dark:bg-green-950";
    if (count === 2) return "bg-green-300 dark:bg-green-900";
    if (count === 3) return "bg-green-400 dark:bg-green-800";
    if (count === 4) return "bg-green-500 dark:bg-green-700";
    return "bg-green-600 dark:bg-green-600";
  };

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 rounded-xl p-4 border border-zinc-200 dark:border-zinc-800">
      <div className="grid grid-cols-7 gap-1.5">
        {days.map((count, index) => (
          <div
            key={index}
            className={`aspect-square rounded ${getIntensity(count)} transition-colors hover:ring-2 ring-zinc-300 dark:ring-zinc-700 cursor-pointer`}
            title={`${count} tasks completed`}
          />
        ))}
      </div>
      <div className="flex items-center justify-between mt-3 text-xs text-zinc-500 dark:text-zinc-400">
        <span>Less</span>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-zinc-100 dark:bg-zinc-900" />
          <div className="w-3 h-3 rounded bg-green-300 dark:bg-green-900" />
          <div className="w-3 h-3 rounded bg-green-500 dark:bg-green-700" />
          <div className="w-3 h-3 rounded bg-green-600 dark:bg-green-600" />
        </div>
        <span>More</span>
      </div>
    </div>
  );
}