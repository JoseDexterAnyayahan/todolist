"use client";

import { Bell, BellDot } from "lucide-react";
import { useState } from "react";
import NotificationModal from "./notif/notification-modal";
export default function Header() {
  const [hasNotifications, setHasNotifications] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <>
      <header className="flex items-center justify-between">
        {/* LEFT — TITLE */}
        <div className="flex flex-col leading-tight">
          <span className="text-xs font-medium text-muted-foreground tracking-wide">
            {today}
          </span>

          <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {greeting()} 👋
          </h1>
        </div>

        {/* RIGHT — NOTIFICATION BELL */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="
            relative h-10 w-10
            flex items-center justify-center
            rounded-xl
            border border-border
            bg-background
            hover:bg-muted/50
            transition-all duration-300
            hover:scale-105
            active:scale-95
            group
          "
        >
          {hasNotifications ? (
            <>
              <BellDot size={20} className="text-foreground transition-transform group-hover:rotate-12" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full border-2 border-background animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
            </>
          ) : (
            <Bell size={20} className="text-muted-foreground group-hover:text-foreground transition-all group-hover:rotate-12" />
          )}
        </button>
      </header>

      <NotificationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onNotificationsChange={setHasNotifications}
      />
    </>
  );
}