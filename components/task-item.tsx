"use client";

import Link from "next/link";
import { CheckCircle2, Circle, Flag, Calendar, MoreVertical } from "lucide-react";
import { useState } from "react";

export type Task = {
  id: number;
  title: string;
  completed: boolean;
  priority?: "Low" | "Medium" | "High";
  dueDate?: string;
  description?: string;
};

export default function TaskItem({ task }: { task: Task }) {
  const [showMenu, setShowMenu] = useState(false);

  // Priority colors
  const priorityColors = {
    High: "text-red-500 dark:text-red-400",
    Medium: "text-yellow-500 dark:text-yellow-400",
    Low: "text-green-500 dark:text-green-400",
  };

  // Check if task is overdue
  const isOverdue = task.dueDate && new Date(task.dueDate) < new Date() && !task.completed;

  // Format due date
  const formatDueDate = (dateString?: string) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const taskDate = new Date(date);
    taskDate.setHours(0, 0, 0, 0);

    const diffTime = taskDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Tomorrow";
    if (diffDays === -1) return "Yesterday";
    if (diffDays < -1) return `${Math.abs(diffDays)} days overdue`;
    if (diffDays < 7) return `In ${diffDays} days`;
    
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const dueDateText = formatDueDate(task.dueDate);

  return (
    <div className="relative">
      <Link href={`/task/${task.id}`} className="block">
        <div
          className="
            group relative rounded-2xl
            border border-zinc-200 dark:border-zinc-800
            bg-white/70 dark:bg-zinc-900/70
            backdrop-blur-xl
            p-4 shadow-sm
            transition-all
            hover:bg-zinc-50 dark:hover:bg-zinc-900
            hover:border-zinc-300 dark:hover:border-zinc-700
            hover:shadow-md
            active:scale-[0.99]
          "
        >
          {/* TOP GLOW */}
          <div className="
            pointer-events-none absolute inset-0 rounded-2xl
            bg-gradient-to-b from-black/[0.03] dark:from-white/[0.05]
            to-transparent opacity-0 group-hover:opacity-100 transition
          " />

          {/* OVERDUE INDICATOR */}
          {isOverdue && (
            <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full m-2 animate-pulse" />
          )}

          <div className="flex items-start gap-3">
            {/* STATUS ICON */}
            <button
              onClick={(e) => {
                e.preventDefault();
                // Handle toggle completion
                console.log("Toggle task completion");
              }}
              className="
                mt-0.5 text-zinc-400 dark:text-zinc-500
                hover:text-zinc-700 dark:hover:text-white
                transition-colors
              "
            >
              {task.completed ? (
                <CheckCircle2 size={20} className="text-emerald-500" />
              ) : (
                <Circle size={20} />
              )}
            </button>

            {/* CONTENT */}
            <div className="flex-1 min-w-0">
              {/* TITLE */}
              <p
                className={`
                  text-sm font-medium tracking-tight transition-colors mb-1
                  ${
                    task.completed
                      ? "line-through text-zinc-400 dark:text-zinc-500"
                      : "text-zinc-800 dark:text-white"
                  }
                `}
              >
                {task.title}
              </p>

              {/* DESCRIPTION */}
              {task.description && (
                <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-1 mb-2">
                  {task.description}
                </p>
              )}

              {/* META INFO */}
              <div className="flex items-center gap-3 flex-wrap">
                {/* PRIORITY */}
                {task.priority && (
                  <div className="flex items-center gap-1">
                    <Flag size={12} className={priorityColors[task.priority]} />
                    <span className={`text-xs font-medium ${priorityColors[task.priority]}`}>
                      {task.priority}
                    </span>
                  </div>
                )}

                {/* DUE DATE */}
                {dueDateText && (
                  <div className="flex items-center gap-1">
                    <Calendar size={12} className={isOverdue ? "text-red-500" : "text-zinc-400 dark:text-zinc-500"} />
                    <span className={`text-xs ${isOverdue ? "text-red-500 font-medium" : "text-zinc-500 dark:text-zinc-400"}`}>
                      {dueDateText}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* MORE MENU */}
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowMenu(!showMenu);
              }}
              className="
                opacity-0 group-hover:opacity-100
                text-zinc-400 hover:text-zinc-700
                dark:text-zinc-500 dark:hover:text-white
                transition-all p-1 -m-1
              "
            >
              <MoreVertical size={16} />
            </button>
          </div>
        </div>
      </Link>

      {/* QUICK ACTIONS MENU */}
      {showMenu && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setShowMenu(false)}
          />
          <div className="absolute right-0 top-full mt-1 w-40 rounded-xl border bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 shadow-lg z-20 overflow-hidden">
            <button
              onClick={(e) => {
                e.stopPropagation();
                console.log("Edit task");
                setShowMenu(false);
              }}
              className="w-full px-4 py-2.5 text-left text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
            >
              Edit
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                console.log("Duplicate task");
                setShowMenu(false);
              }}
              className="w-full px-4 py-2.5 text-left text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
            >
              Duplicate
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                console.log("Delete task");
                setShowMenu(false);
              }}
              className="w-full px-4 py-2.5 text-left text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}