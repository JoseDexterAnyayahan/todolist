"use client";

import { Trophy, Zap, Target, Star, Award, Flame } from "lucide-react";

export default function Achievements() {
  const achievements = [
    { 
      name: "First Task", 
      description: "Complete your first task",
      icon: <Star size={20} />,
      unlocked: true,
      color: "from-yellow-500 to-orange-500"
    },
    { 
      name: "Week Warrior", 
      description: "7 day streak",
      icon: <Flame size={20} />,
      unlocked: true,
      color: "from-orange-500 to-red-500"
    },
    { 
      name: "Speedster", 
      description: "Complete 10 tasks in one day",
      icon: <Zap size={20} />,
      unlocked: true,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      name: "Perfectionist", 
      description: "100% completion rate",
      icon: <Target size={20} />,
      unlocked: false,
      color: "from-purple-500 to-pink-500"
    },
    { 
      name: "Century", 
      description: "Complete 100 tasks",
      icon: <Trophy size={20} />,
      unlocked: false,
      color: "from-green-500 to-emerald-500"
    },
    { 
      name: "Legendary", 
      description: "30 day streak",
      icon: <Award size={20} />,
      unlocked: false,
      color: "from-indigo-500 to-purple-500"
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {achievements.map((achievement, index) => (
        <div
          key={index}
          className={`
            rounded-xl p-3 border transition-all
            ${
              achievement.unlocked
                ? "bg-gradient-to-br " + achievement.color + " border-transparent"
                : "bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 opacity-40"
            }
          `}
        >
          <div className={`
            w-10 h-10 rounded-lg flex items-center justify-center mb-2
            ${
              achievement.unlocked
                ? "bg-white/20 text-white"
                : "bg-zinc-200 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-600"
            }
          `}>
            {achievement.icon}
          </div>
          <p className={`
            text-xs font-semibold truncate
            ${achievement.unlocked ? "text-white" : "text-zinc-600 dark:text-zinc-400"}
          `}>
            {achievement.name}
          </p>
          <p className={`
            text-xs mt-0.5 line-clamp-2
            ${achievement.unlocked ? "text-white/80" : "text-zinc-500 dark:text-zinc-500"}
          `}>
            {achievement.description}
          </p>
        </div>
      ))}
    </div>
  );
}