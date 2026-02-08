"use client";

import { X, Bell, Clock, Calendar } from "lucide-react";
import { useState } from "react";

interface NotificationSettingsProps {
  onClose: () => void;
}

export default function NotificationSettings({ onClose }: NotificationSettingsProps) {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(false);
  const [reminderTime, setReminderTime] = useState("09:00");

  return (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Bell size={20} className="text-zinc-600 dark:text-zinc-400" />
            <h3 className="text-lg font-semibold">Notifications</h3>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          {/* Push Notifications */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
            <div>
              <p className="text-sm font-medium">Push Notifications</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Get notified on this device</p>
            </div>
            <button
              onClick={() => setPushEnabled(!pushEnabled)}
              className={`
                relative w-12 h-7 rounded-full transition-colors
                ${pushEnabled ? "bg-green-500" : "bg-zinc-300 dark:bg-zinc-700"}
              `}
            >
              <div
                className={`
                  absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow-md transition-transform
                  ${pushEnabled ? "translate-x-5" : ""}
                `}
              />
            </button>
          </div>

          {/* Email Notifications */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
            <div>
              <p className="text-sm font-medium">Email Notifications</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Receive updates via email</p>
            </div>
            <button
              onClick={() => setEmailEnabled(!emailEnabled)}
              className={`
                relative w-12 h-7 rounded-full transition-colors
                ${emailEnabled ? "bg-green-500" : "bg-zinc-300 dark:bg-zinc-700"}
              `}
            >
              <div
                className={`
                  absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow-md transition-transform
                  ${emailEnabled ? "translate-x-5" : ""}
                `}
              />
            </button>
          </div>

          {/* Reminder Time */}
          <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2 mb-2">
              <Clock size={16} className="text-zinc-500 dark:text-zinc-400" />
              <p className="text-sm font-medium">Daily Reminder</p>
            </div>
            <input
              type="time"
              value={reminderTime}
              onChange={(e) => setReminderTime(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-sm"
            />
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-6 px-4 py-2.5 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 font-medium transition-colors"
        >
          Done
        </button>
      </div>
    </div>
  );
}