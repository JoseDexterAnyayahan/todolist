"use client";

import { useState } from "react";
import Slide from "./slide";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const slides = [
  {
    title: "Welcome",
    description: "Manage your tasks with clarity and ease every day.",
  },
  {
    title: "Stay Focused",
    description: "Track progress and maintain momentum effortlessly.",
  },
  {
    title: "Simple & Clean",
    description: "A minimal interface built for productivity.",
  },
];

export default function Onboarding() {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div className="
      min-h-screen
      bg-white dark:bg-black
      md:bg-zinc-200 dark:md:bg-zinc-800
      md:flex md:justify-center
      transition-colors
    ">
      {/* MOBILE FRAME */}
      <div
        className="
          w-screen md:w-full md:max-w-sm h-screen relative overflow-hidden
          bg-white dark:bg-black
          border-x border-zinc-200 dark:border-zinc-800
          transition-colors
        "
      >
        {/* PREMIUM GRADIENT BACKGROUND */}
        <div className="absolute inset-0 
          bg-[radial-gradient(circle_at_80%_20%,#f59e0b22,transparent_45%),radial-gradient(circle_at_20%_80%,#14b8a622,transparent_45%)]
          dark:opacity-100 opacity-70
        " />

        {/* SOFT OVERLAY */}
        <div className="
          absolute inset-0 pointer-events-none
          bg-gradient-to-b from-black/[0.03] to-transparent
          dark:from-white/[0.04]
        " />

        {/* SLIDES */}
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div key={i} className="min-w-full flex items-center justify-center px-6">
              <Slide {...s} />
            </div>
          ))}
        </div>

        {/* BOTTOM CONTROLS */}
        <div className="absolute bottom-6 left-0 w-full px-6 flex flex-col gap-5">

          {/* SLIDE INDICATORS */}
          <div className="flex justify-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-8 bg-black dark:bg-white"
                    : "w-3 bg-zinc-300 dark:bg-zinc-700"
                }`}
              />
            ))}
          </div>

          {/* NEXT BUTTON */}
          <div className="flex justify-end">
            {index === slides.length - 1 ? (
              <Link href="/todo" className="w-full">
                <Button className="
                  w-full h-12 rounded-xl font-medium shadow-lg
                  bg-black text-white hover:bg-zinc-800
                  dark:bg-white dark:text-black dark:hover:bg-zinc-200
                ">
                  Start
                </Button>
              </Link>
            ) : (
              <Button
                onClick={next}
                className="
                  w-full h-12 rounded-xl font-medium backdrop-blur border
                  bg-zinc-100 text-black border-zinc-300 hover:bg-zinc-200
                  dark:bg-zinc-900 dark:text-white dark:border-zinc-700 dark:hover:bg-zinc-800
                "
              >
                Next
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
