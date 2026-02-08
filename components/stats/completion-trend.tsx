"use client";

export default function CompletionTrend() {
  const months = [
    { month: "Jan", completed: 15, total: 20 },
    { month: "Feb", completed: 18, total: 22 },
    { month: "Mar", completed: 12, total: 18 },
    { month: "Apr", completed: 20, total: 24 },
  ];

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 rounded-xl p-4 border border-zinc-200 dark:border-zinc-800">
      <div className="space-y-3">
        {months.map((data, index) => {
          const percentage = Math.round((data.completed / data.total) * 100);
          return (
            <div key={index}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-medium text-zinc-900 dark:text-white">
                  {data.month}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    {data.completed}/{data.total}
                  </span>
                  <span className="text-sm font-semibold text-zinc-900 dark:text-white">
                    {percentage}%
                  </span>
                </div>
              </div>
              <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all ${
                    percentage >= 80 
                      ? "bg-green-500" 
                      : percentage >= 60 
                      ? "bg-yellow-500" 
                      : "bg-orange-500"
                  }`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}