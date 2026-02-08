"use client";

import { X, Flag } from "lucide-react";
import { useState } from "react";

interface PrioritySelectorProps {
  onClose: () => void;
}

export default function PrioritySelector({ onClose }: PrioritySelectorProps) {
  const [selected, setSelected] = useState<"Low" | "Medium" | "High">("Medium");

  return (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 max-w-sm w-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Flag size={20} className="text-zinc-600 dark:text-zinc-400" />
            <h3 className="text-lg font-semibold">Default Priority</h3>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-3">
          {(["Low", "Medium", "High"] as const).map((priority) => (
            <button
              key={priority}
              onClick={() => setSelected(priority)}
              className={`
                w-full p-4 rounded-xl border transition-all flex items-center gap-3
                ${
                  selected === priority
                    ? priority === "High"
                      ? "bg-red-50 border-red-500 dark:bg-red-950/30 dark:border-red-500"
                      : priority === "Medium"
                      ? "bg-yellow-50 border-yellow-500 dark:bg-yellow-950/30 dark:border-yellow-500"
                      : "bg-green-50 border-green-500 dark:bg-green-950/30 dark:border-green-500"
                    : "border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                }
              `}
            >
              <Flag
                size={18}
                className={
                  selected === priority
                    ? priority === "High"
                      ? "text-red-600 dark:text-red-400"
                      : priority === "Medium"
                      ? "text-yellow-600 dark:text-yellow-400"
                      : "text-green-600 dark:text-green-400"
                    : "text-zinc-400 dark:text-zinc-600"
                }
              />
              <div className="flex-1 text-left">
                <p className="font-medium text-sm">{priority}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {priority === "High" && "For urgent tasks"}
                  {priority === "Medium" && "For regular tasks"}
                  {priority === "Low" && "For optional tasks"}
                </p>
              </div>
              {selected === priority && (
                <div className="w-5 h-5 rounded-full bg-current flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full mt-6 px-4 py-2.5 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 font-medium transition-colors"
        >
          Save
        </button>
      </div>
    </div>
  );
}