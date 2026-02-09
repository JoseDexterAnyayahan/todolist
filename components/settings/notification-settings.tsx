"use client";

import {
  X,
  Bell,
  Clock,
  Mail,
  Smartphone,
  Volume2,
  Zap,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface NotificationSettingsProps {
  onClose: () => void;
}

export default function NotificationSettings({
  onClose,
}: NotificationSettingsProps) {
  const [settings, setSettings] = useState({
    pushEnabled: true,
    emailEnabled: false,
    soundEnabled: true,
    reminderTime: "09:00",
    taskReminders: true,
    deadlineAlerts: true,
    achievementNotifs: true,
    weeklyDigest: false,
  });

  const handleToggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: typeof prev[key] === "boolean" ? !prev[key] : prev[key],
    }));
  };

  const ToggleSwitch = ({
    enabled,
    onToggle,
  }: {
    enabled: boolean;
    onToggle: () => void;
  }) => (
    <button
      onClick={onToggle}
      className={`
        relative w-12 h-7 rounded-full transition-all duration-300
        ${
          enabled
            ? "bg-gradient-to-r from-amber-400 to-amber-500 shadow-lg shadow-amber-500/30"
            : "bg-zinc-300 dark:bg-zinc-700"
        }
      `}
    >
      <div
        className={`
          absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300
          ${enabled ? "translate-x-5" : ""}
        `}
      />
    </button>
  );

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-0 gap-0">
        <DialogHeader className="p-5 pb-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 dark:bg-amber-500/15 flex items-center justify-center">
              <Bell size={20} className="text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold">
                Notification Settings
              </DialogTitle>
              <p className="text-xs text-muted-foreground mt-0.5">
                Customize how you get notified
              </p>
            </div>
          </div>
        </DialogHeader>

        <div className="p-5 space-y-4 max-h-[60vh] overflow-y-auto">
          {/* Main Notification Types */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Delivery Methods
            </h4>

            {/* Push Notifications */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-border hover:bg-muted/50 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center flex-shrink-0">
                  <Smartphone
                    size={18}
                    className="text-blue-600 dark:text-blue-400"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Push Notifications
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Get alerts on this device
                  </p>
                </div>
              </div>
              <ToggleSwitch
                enabled={settings.pushEnabled}
                onToggle={() => handleToggle("pushEnabled")}
              />
            </div>

            {/* Email Notifications */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-border hover:bg-muted/50 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-950/30 flex items-center justify-center flex-shrink-0">
                  <Mail
                    size={18}
                    className="text-green-600 dark:text-green-400"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Email Updates
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Receive updates via email
                  </p>
                </div>
              </div>
              <ToggleSwitch
                enabled={settings.emailEnabled}
                onToggle={() => handleToggle("emailEnabled")}
              />
            </div>

            {/* Sound Notifications */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-border hover:bg-muted/50 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/30 flex items-center justify-center flex-shrink-0">
                  <Volume2
                    size={18}
                    className="text-purple-600 dark:text-purple-400"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Notification Sounds
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Play sound for alerts
                  </p>
                </div>
              </div>
              <ToggleSwitch
                enabled={settings.soundEnabled}
                onToggle={() => handleToggle("soundEnabled")}
              />
            </div>
          </div>

          {/* Notification Types */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              What to Notify
            </h4>

            {/* Task Reminders */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-border hover:bg-muted/50 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center flex-shrink-0">
                  <Clock
                    size={18}
                    className="text-amber-600 dark:text-amber-400"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Task Reminders
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Upcoming task notifications
                  </p>
                </div>
              </div>
              <ToggleSwitch
                enabled={settings.taskReminders}
                onToggle={() => handleToggle("taskReminders")}
              />
            </div>

            {/* Deadline Alerts */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-border hover:bg-muted/50 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/30 flex items-center justify-center flex-shrink-0">
                  <Zap size={18} className="text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Deadline Alerts
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Urgent deadline warnings
                  </p>
                </div>
              </div>
              <ToggleSwitch
                enabled={settings.deadlineAlerts}
                onToggle={() => handleToggle("deadlineAlerts")}
              />
            </div>

            {/* Achievement Notifications */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-border hover:bg-muted/50 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-yellow-50 dark:bg-yellow-950/30 flex items-center justify-center flex-shrink-0">
                  <CheckCircle
                    size={18}
                    className="text-yellow-600 dark:text-yellow-400"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Achievements
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Milestones & badges earned
                  </p>
                </div>
              </div>
              <ToggleSwitch
                enabled={settings.achievementNotifs}
                onToggle={() => handleToggle("achievementNotifs")}
              />
            </div>

            {/* Weekly Digest */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-border hover:bg-muted/50 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 flex items-center justify-center flex-shrink-0">
                  <Mail
                    size={18}
                    className="text-indigo-600 dark:text-indigo-400"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Weekly Digest
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Sunday summary email
                  </p>
                </div>
              </div>
              <ToggleSwitch
                enabled={settings.weeklyDigest}
                onToggle={() => handleToggle("weeklyDigest")}
              />
            </div>
          </div>

          {/* Daily Reminder Time */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Reminder Schedule
            </h4>

            <div className="p-4 rounded-2xl bg-muted/30 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Clock
                  size={16}
                  className="text-amber-600 dark:text-amber-400"
                />
                <p className="text-sm font-semibold text-foreground">
                  Daily Reminder Time
                </p>
              </div>
              <input
                type="time"
                value={settings.reminderTime}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    reminderTime: e.target.value,
                  }))
                }
                className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white text-sm font-medium focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 pt-4 border-t border-border">
          <button
            onClick={onClose}
            className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-semibold shadow-lg shadow-amber-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            Save Settings
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
