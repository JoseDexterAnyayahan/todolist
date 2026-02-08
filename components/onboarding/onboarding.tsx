"use client";

import { useState } from "react";
import Slide from "./slide";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const slides = [
  {
    emoji: "😁",
    title: "Welcome",
    description: "Manage your task very easily!",
  },
  {
    emoji: "🎯",
    title: "Stay Focused",
    description: "Track progress and reach your goals faster.",
  },
  {
    emoji: "✨",
    title: "Simple & Clean",
    description: "Minimal design for maximum productivity.",
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
    <div className="min-h-screen flex justify-center bg-zinc-700">
      {/* MOBILE FRAME */}
      <div className="w-full max-w-sm h-screen relative overflow-hidden bg-black">

        {/* GRADIENT BACKGROUND */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#f59e0b33,transparent_40%),radial-gradient(circle_at_20%_80%,#14b8a633,transparent_40%)]" />

        {/* SLIDES */}
        <div
          className="flex h-full transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div key={i} className="min-w-full">
              <Slide {...s} />
            </div>
          ))}
        </div>

        {/* NEXT BUTTON */}
        <div className="absolute bottom-6 right-6">
          {index === slides.length - 1 ? (
            <Link href="/todo">
              <Button className="rounded-xl px-6">Start</Button>
            </Link>
          ) : (
            <Button
              onClick={next}
              className="rounded-xl px-6 bg-zinc-800 hover:bg-zinc-700"
            >
              Next &raquo;
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
