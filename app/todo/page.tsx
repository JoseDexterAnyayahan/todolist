"use client";

import { useState } from "react";
import Header from "@/components/header";
import TaskInput from "@/components/task-input";
import TaskItem from "@/components/task-item";
import FilterTabs from "@/components/filter-tabs";
import BottomNav from "@/components/bottom-nav";
import SearchBar from "@/components/search-bar";
import SortDropdown from "@/components/sort-dropdown";
import QuickStats from "@/components/quick-stats";
import { tasks } from "@/lib/mock-data";
import { Search } from "lucide-react";

export default function TodoPage() {
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [sortBy, setSortBy] = useState<"date" | "priority" | "title">("date");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // Filter tasks based on current filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  // Search filter
  const searchedTasks = filteredTasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort tasks (simplified for UI/UX demo)
  const sortedTasks = [...searchedTasks].sort((a, b) => {
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    }
    // For demo purposes, just use id as sort order
    return a.id - b.id;
  });

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-white dark:bg-black transition-colors">
      {/* AMBIENT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-15%] right-[-20%] w-[320px] h-[320px] bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-20%] w-[320px] h-[320px] bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      {/* SCROLL CONTAINER */}
      <div className="flex-1 overflow-y-auto pb-28">
        {/* HEADER */}
        <div
          className="
            sticky top-0 z-20 backdrop-blur border-b
            bg-white/70 border-zinc-200
            dark:bg-black/40 dark:border-zinc-800/60
            transition-colors
          "
        >
          <div className="px-4 pt-6 pb-4">
            <Header />
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex flex-col gap-6 px-4 pt-6">
          {/* QUICK STATS */}
          <QuickStats tasks={tasks} />

          {/* SEARCH & SORT BAR */}
          <div className="flex items-center gap-2">
            {showSearch ? (
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                onClose={() => {
                  setShowSearch(false);
                  setSearchQuery("");
                }}
              />
            ) : (
              <>
                <button
                  onClick={() => setShowSearch(true)}
                  className="
                    flex-1 flex items-center gap-2 px-4 py-2.5 rounded-xl border
                    bg-zinc-50 border-zinc-200
                    dark:bg-zinc-950 dark:border-zinc-800
                    text-zinc-400 dark:text-zinc-600
                    transition-colors
                  "
                >
                  <Search size={18} />
                  <span className="text-sm">Search tasks...</span>
                </button>
                <SortDropdown value={sortBy} onChange={setSortBy} />
              </>
            )}
          </div>

          {/* FILTER TABS */}
          <FilterTabs selected={filter} onChange={setFilter} />

          {/* TASK LIST */}
          {sortedTasks.length > 0 ? (
            <section className="flex flex-col gap-3">
              {sortedTasks.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </section>
          ) : (
            <EmptyState hasSearch={searchQuery.length > 0} />
          )}
        </div>
      </div>

      <TaskInput />
      <BottomNav />
    </div>
  );
}

/* ---------------- EMPTY STATE ---------------- */

function EmptyState({ hasSearch }: { hasSearch: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-6">
      <div
        className="
          w-16 h-16 rounded-2xl border flex items-center justify-center shadow-inner
          bg-zinc-100 border-zinc-200
          dark:bg-zinc-900 dark:border-zinc-800
          transition-colors
        "
      >
        <div className="w-6 h-6 rounded-md bg-zinc-300 dark:bg-zinc-700 transition-colors" />
      </div>

      <h3 className="mt-6 text-lg font-semibold text-black dark:text-white transition-colors">
        {hasSearch ? "No tasks found" : "No tasks yet"}
      </h3>

      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-500 max-w-[240px] transition-colors">
        {hasSearch
          ? "Try adjusting your search or filters"
          : "Create your first task to start organizing your day and building momentum."}
      </p>
    </div>
  );
}