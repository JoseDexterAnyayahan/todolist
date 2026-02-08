"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  
  // Return a placeholder with same dimensions to avoid layout shift
  if (!mounted) {
    return (
      <div className="relative w-14 h-8 rounded-full bg-zinc-200 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={(e) => {
        e.stopPropagation();
        setTheme(isDark ? "light" : "dark");
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          e.stopPropagation();
          setTheme(isDark ? "light" : "dark");
        }
      }}
      className="
        relative w-14 h-8 rounded-full
        bg-zinc-200 dark:bg-zinc-700
        border border-zinc-300 dark:border-zinc-600
        transition-colors cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600
      "
    >
      <div
        className={`
          absolute top-1 left-1 w-6 h-6 rounded-full
          bg-white dark:bg-zinc-900 shadow-md
          transition-transform
          flex items-center justify-center
          text-zinc-900 dark:text-white
          ${isDark ? "translate-x-6" : ""}
        `}
      >
        {isDark ? <Moon size={14} /> : <Sun size={14} />}
      </div>
    </div>
  );
}