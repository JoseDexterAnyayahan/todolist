"use client";

import { useState } from "react";
import { ArrowUpDown, Calendar, Flag, Type } from "lucide-react";

interface SortDropdownProps {
  value: "date" | "priority" | "title";
  onChange: (value: "date" | "priority" | "title") => void;
}

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "date" as const, label: "Date", icon: <Calendar size={16} /> },
    { value: "priority" as const, label: "Priority", icon: <Flag size={16} /> },
    { value: "title" as const, label: "Name", icon: <Type size={16} /> },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          px-4 py-2.5 rounded-xl border flex items-center gap-2
          bg-zinc-50 border-zinc-200
          dark:bg-zinc-950 dark:border-zinc-800
          text-zinc-900 dark:text-white
          transition-colors
        "
      >
        <ArrowUpDown size={18} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 w-40 rounded-xl border bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 shadow-lg z-20 overflow-hidden">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`
                  w-full px-4 py-3 flex items-center gap-3 text-sm transition-colors
                  ${
                    value === option.value
                      ? "bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
                  }
                `}
              >
                {option.icon}
                {option.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}