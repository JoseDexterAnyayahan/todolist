"use client";

import Link from "next/link";
import { Settings } from "lucide-react";

export default function Header() {
  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  return (
    <header className="flex items-center justify-between">
      {/* LEFT — TITLE */}
      <div className="flex flex-col leading-tight">
        <span className="text-xs text-zinc-500 dark:text-zinc-400">
          {today}
        </span>

        <h1 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          My Tasks
        </h1>
      </div>

      {/* RIGHT — SETTINGS ICON */}
      <Link
        href="/settings"
        className="
          h-9 w-9
          flex items-center justify-center
          rounded-lg
          border border-zinc-200
          bg-white
          hover:bg-zinc-50
          transition

          dark:border-zinc-800
          dark:bg-zinc-900
          dark:hover:bg-zinc-800
        "
      >
        <Settings size={18} className="text-zinc-600 dark:text-zinc-300" />
      </Link>
    </header>
  );
}
