"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("en");

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "fr", name: "Français" },
    { code: "de", name: "Deutsch" },
  ];

  return (
    <div className="relative">
      <div
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400 cursor-pointer"
      >
        <span>{languages.find(l => l.code === selected)?.name}</span>
        <ChevronDown size={14} />
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          />
          <div className="absolute right-0 top-full mt-2 w-32 rounded-xl border bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 shadow-lg z-20 overflow-hidden">
            {languages.map((lang) => (
              <div
                key={lang.code}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(lang.code);
                  setIsOpen(false);
                }}
                className={`
                  w-full px-4 py-2.5 text-left text-sm transition-colors cursor-pointer
                  ${
                    selected === lang.code
                      ? "bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
                  }
                `}
              >
                {lang.name}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}