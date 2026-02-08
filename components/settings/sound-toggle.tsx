"use client";

import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function SoundToggle() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setEnabled(!enabled);
      }}
      className="
        relative w-14 h-8 rounded-full
        bg-zinc-200 dark:bg-zinc-700
        border border-zinc-300 dark:border-zinc-600
        transition-colors cursor-pointer
      "
    >
      <div
        className={`
          absolute top-1 left-1 w-6 h-6 rounded-full
          bg-white dark:bg-zinc-900 shadow-md 
          transition-transform
          flex items-center justify-center
          text-zinc-900 dark:text-white
          ${enabled ? "translate-x-6" : ""}
        `}
      >
        {enabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
      </div>
    </div>
  );
}