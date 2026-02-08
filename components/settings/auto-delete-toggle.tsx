"use client";

import { useState } from "react";

export default function AutoDeleteToggle() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setEnabled(!enabled);
      }}
      className={`
        relative w-14 h-8 rounded-full
        transition-colors cursor-pointer
        ${enabled ? "bg-green-500" : "bg-zinc-200 dark:bg-zinc-700"}
        border ${enabled ? "border-green-600" : "border-zinc-300 dark:border-zinc-600"}
      `}
    >
      <div
        className={`
          absolute top-1 left-1 w-6 h-6 rounded-full
          bg-white shadow-md 
          transition-transform
          ${enabled ? "translate-x-6" : ""}
        `}
      />
    </div>
  );
}