"use client";

import BottomNav from "@/components/bottom-nav";
import StatsCard from "@/components/stats/stats-card";
import StreakCalendar from "@/components/stats/streak-calendar";
import ProductivityChart from "@/components/stats/productivity-chart";
import CategoryBreakdown from "@/components/stats/category-breakdown";
import TimeOfDayChart from "@/components/stats/time-of-day-chart";
import CompletionTrend from "@/components/stats/completion-trend";
import TopTasks from "@/components/stats/top-tasks";
import Achievements from "@/components/stats/achievements";
import { 
  CheckCircle2, 
  Clock, 
  Zap, 
  TrendingUp, 
  Target, 
  Calendar,
  Award,
  Sun,
  BarChart3
} from "lucide-react";

export default function StatsPage() {
  // Mock data - replace with actual data from your state/database
  const stats = {
    completed: 47,
    pending: 12,
    overdue: 3,
    streak: 7,
    longestStreak: 14,
    completionRate: 79,
    weeklyAverage: 6.7,
    totalTasks: 59,
    thisWeek: 12,
    thisMonth: 47,
  };

  return (
    <div className="min-h-screen pb-28 px-4 pt-6 bg-white text-zinc-900 dark:bg-black dark:text-white">
      
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold tracking-tight mb-1">
          Statistics
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Track your productivity and progress
        </p>
      </div>

      {/* OVERVIEW CARDS */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <StatsCard
          title="Completed"
          value={stats.completed}
          subtitle="all time"
          icon={<CheckCircle2 size={20} />}
          color="green"
          trend="+12%"
        />
        <StatsCard
          title="Pending"
          value={stats.pending}
          subtitle="active tasks"
          icon={<Clock size={20} />}
          color="blue"
        />
        <StatsCard
          title="Streak"
          value={`${stats.streak} days`}
          subtitle={`Best: ${stats.longestStreak}`}
          icon={<Zap size={20} />}
          color="orange"
          trend="🔥"
        />
        <StatsCard
          title="Rate"
          value={`${stats.completionRate}%`}
          subtitle="completion"
          icon={<TrendingUp size={20} />}
          color="purple"
          trend="+5%"
        />
      </div>

      {/* WEEKLY GOAL */}
      <div className="mb-6">
        <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-3 flex items-center gap-2">
          <Target size={16} />
          Weekly Goal
        </h2>
        <div className="bg-zinc-50 dark:bg-zinc-950 rounded-xl p-4 border border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              {stats.thisWeek} of 20 tasks
            </span>
            <span className="text-sm font-semibold text-zinc-900 dark:text-white">
              {Math.round((stats.thisWeek / 20) * 100)}%
            </span>
          </div>
          <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2.5">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full transition-all"
              style={{ width: `${Math.round((stats.thisWeek / 20) * 100)}%` }}
            />
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
            {20 - stats.thisWeek} tasks to reach your goal
          </p>
        </div>
      </div>

      {/* COMPLETION TREND */}
      <div className="mb-6">
        <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-3 flex items-center gap-2">
          <BarChart3 size={16} />
          Completion Trend
        </h2>
        <CompletionTrend />
      </div>

      {/* PRODUCTIVITY CHART */}
      <div className="mb-6">
        <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-3 flex items-center gap-2">
          <TrendingUp size={16} />
          Weekly Activity
        </h2>
        <ProductivityChart />
      </div>

      {/* TIME OF DAY ANALYSIS */}
      <div className="mb-6">
        <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-3 flex items-center gap-2">
          <Sun size={16} />
          Most Productive Time
        </h2>
        <TimeOfDayChart />
      </div>

      {/* STREAK CALENDAR */}
      <div className="mb-6">
        <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-3 flex items-center gap-2">
          <Calendar size={16} />
          Activity Heatmap
        </h2>
        <StreakCalendar />
      </div>

      {/* PRIORITY BREAKDOWN */}
      <div className="mb-6">
        <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-3">
          Priority Breakdown
        </h2>
        <CategoryBreakdown />
      </div>

      {/* TOP COMPLETED TASKS */}
      <div className="mb-6">
        <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-3">
          Recently Completed
        </h2>
        <TopTasks />
      </div>

      {/* ACHIEVEMENTS */}
      <div className="mb-6">
        <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-3 flex items-center gap-2">
          <Award size={16} />
          Achievements
        </h2>
        <Achievements />
      </div>

      <BottomNav />
    </div>
  );
}