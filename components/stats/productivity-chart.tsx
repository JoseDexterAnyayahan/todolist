"use client";

export default function ProductivityChart() {
  const weekData = [
    { day: "Mon", completed: 5 },
    { day: "Tue", completed: 8 },
    { day: "Wed", completed: 6 },
    { day: "Thu", completed: 9 },
    { day: "Fri", completed: 7 },
    { day: "Sat", completed: 4 },
    { day: "Sun", completed: 3 },
  ];

  const maxCompleted = Math.max(...weekData.map(d => d.completed));

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 rounded-xl p-4 border border-zinc-200 dark:border-zinc-800">
      <div className="flex items-end justify-between gap-2 h-40">
        {weekData.map((data, index) => (
          <div key={index} className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full flex items-end justify-center h-32 relative group">
              <div
                className="w-full bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-lg transition-all hover:opacity-80 cursor-pointer relative"
                style={{
                  height: `${(data.completed / maxCompleted) * 100}%`,
                  minHeight: data.completed > 0 ? "12px" : "0px",
                }}
              >
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs px-2 py-1 rounded whitespace-nowrap">
                    {data.completed} tasks
                  </div>
                </div>
              </div>
            </div>
            <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
              {data.day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}