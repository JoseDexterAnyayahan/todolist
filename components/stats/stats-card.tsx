import { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: ReactNode;
  color: "green" | "blue" | "orange" | "purple";
  trend?: string;
}

export default function StatsCard({ title, value, subtitle, icon, color, trend }: StatsCardProps) {
  const colorClasses = {
    green: "bg-green-50 text-green-600 dark:bg-green-950/30 dark:text-green-400",
    blue: "bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400",
    orange: "bg-orange-50 text-orange-600 dark:bg-orange-950/30 dark:text-orange-400",
    purple: "bg-purple-50 text-purple-600 dark:bg-purple-950/30 dark:text-purple-400",
  };

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 rounded-xl p-4 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute top-0 right-0 w-20 h-20 ${colorClasses[color]} opacity-10 rounded-full blur-2xl`} />
      
      <div className={`w-10 h-10 rounded-lg ${colorClasses[color]} flex items-center justify-center mb-3 relative z-10`}>
        {icon}
      </div>
      <div className="relative z-10">
        <div className="flex items-baseline gap-2">
          <p className="text-2xl font-bold text-zinc-900 dark:text-white">
            {value}
          </p>
          {trend && (
            <span className="text-xs font-medium text-green-600 dark:text-green-400">
              {trend}
            </span>
          )}
        </div>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
          {title}
        </p>
        {subtitle && (
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}