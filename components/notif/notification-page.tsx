"use client";

import { X, Check, Trash2, CheckCheck, Bell } from "lucide-react";
import { useState } from "react";

interface Notification {
  id: number;
  type: "reminder" | "completed" | "deadline" | "info";
  title: string;
  message: string;
  time: string;
  read: boolean;
}

export default function NotificationPage() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: "deadline",
      title: "Task Deadline Approaching",
      message: "Complete project proposal is due in 2 hours",
      time: "2h ago",
      read: false,
    },
    {
      id: 2,
      type: "completed",
      title: "Task Completed",
      message: "You completed 'Morning workout routine'",
      time: "3h ago",
      read: false,
    },
    {
      id: 3,
      type: "reminder",
      title: "Daily Reminder",
      message: "Don't forget to review your goals for today",
      time: "5h ago",
      read: true,
    },
    {
      id: 4,
      type: "info",
      title: "Weekly Summary",
      message: "You completed 12 tasks this week. Great job!",
      time: "1d ago",
      read: true,
    },
  ]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const deleteNotification = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const getNotificationColor = (type: Notification["type"]) => {
    switch (type) {
      case "deadline":
        return {
          bg: "bg-red-500/10 dark:bg-red-500/15",
          text: "text-red-600 dark:text-red-400",
          border: "border-red-500/20",
        };
      case "completed":
        return {
          bg: "bg-green-500/10 dark:bg-green-500/15",
          text: "text-green-600 dark:text-green-400",
          border: "border-green-500/20",
        };
      case "reminder":
        return {
          bg: "bg-amber-500/10 dark:bg-amber-500/15",
          text: "text-amber-600 dark:text-amber-400",
          border: "border-amber-500/20",
        };
      default:
        return {
          bg: "bg-blue-500/10 dark:bg-blue-500/15",
          text: "text-blue-600 dark:text-blue-400",
          border: "border-blue-500/20",
        };
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-xl border-b border-border">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 dark:bg-amber-500/15 flex items-center justify-center">
                <Bell size={20} className="text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Notifications</h1>
                <p className="text-xs text-muted-foreground">
                  {unreadCount > 0 ? `${unreadCount} unread` : "All caught up!"}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          {notifications.length > 0 && (
            <div className="flex gap-2">
              <button
                onClick={markAllAsRead}
                disabled={unreadCount === 0}
                className="flex-1 px-4 py-2 rounded-xl bg-muted/50 hover:bg-muted transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm font-medium text-foreground"
              >
                <CheckCheck size={16} />
                Mark all read
              </button>
              <button
                onClick={clearAll}
                className="flex-1 px-4 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium text-red-600 dark:text-red-400"
              >
                <Trash2 size={16} />
                Clear all
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Notifications List */}
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-3">
        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-20 h-20 rounded-full bg-muted/50 flex items-center justify-center mb-4">
              <Bell size={32} className="text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-1">No notifications</h3>
            <p className="text-sm text-muted-foreground">You're all caught up!</p>
          </div>
        ) : (
          notifications.map((notif) => {
            const colors = getNotificationColor(notif.type);
            return (
              <div
                key={notif.id}
                className={`
                  relative group bg-muted/30 hover:bg-muted/50 rounded-2xl p-4 border transition-all duration-300
                  ${notif.read ? "border-border" : `${colors.border} shadow-lg`}
                `}
              >
                {/* Unread Indicator */}
                {!notif.read && (
                  <div className="absolute top-4 right-4 w-2.5 h-2.5 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                )}

                <div className="flex gap-3">
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                    {notif.type === "deadline" && <Bell size={18} className={colors.text} />}
                    {notif.type === "completed" && <Check size={18} className={colors.text} />}
                    {notif.type === "reminder" && <Bell size={18} className={colors.text} />}
                    {notif.type === "info" && <Bell size={18} className={colors.text} />}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-foreground mb-1">
                      {notif.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {notif.message}
                    </p>
                    <span className="text-xs text-muted-foreground">{notif.time}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {!notif.read && (
                      <button
                        onClick={() => markAsRead(notif.id)}
                        className="w-8 h-8 rounded-lg bg-green-500/10 hover:bg-green-500/20 flex items-center justify-center transition-all duration-300"
                        title="Mark as read"
                      >
                        <Check size={16} className="text-green-600 dark:text-green-400" />
                      </button>
                    )}
                    <button
                      onClick={() => deleteNotification(notif.id)}
                      className="w-8 h-8 rounded-lg bg-red-500/10 hover:bg-red-500/20 flex items-center justify-center transition-all duration-300"
                      title="Delete"
                    >
                      <X size={16} className="text-red-600 dark:text-red-400" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}