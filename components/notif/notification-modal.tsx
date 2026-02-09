"use client";

import { X, Check, Trash2, CheckCheck, Bell, Clock, AlertCircle, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Notification {
  id: number;
  type: "reminder" | "completed" | "deadline" | "info";
  title: string;
  message: string;
  time: string;
  read: boolean;
}

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNotificationsChange: (hasNotifications: boolean) => void;
}

export default function NotificationModal({ isOpen, onClose, onNotificationsChange }: NotificationModalProps) {
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

  useEffect(() => {
    onNotificationsChange(unreadCount > 0);
  }, [unreadCount, onNotificationsChange]);

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

  const getNotificationIcon = (type: Notification["type"]) => {
    switch (type) {
      case "deadline":
        return AlertCircle;
      case "completed":
        return CheckCircle;
      case "reminder":
        return Clock;
      default:
        return Bell;
    }
  };

  const getNotificationColor = (type: Notification["type"]) => {
    switch (type) {
      case "deadline":
        return {
          bg: "bg-red-50 dark:bg-red-950/30",
          text: "text-red-600 dark:text-red-400",
          border: "border-red-200 dark:border-red-800/50",
          glow: "shadow-red-500/20",
        };
      case "completed":
        return {
          bg: "bg-green-50 dark:bg-green-950/30",
          text: "text-green-600 dark:text-green-400",
          border: "border-green-200 dark:border-green-800/50",
          glow: "shadow-green-500/20",
        };
      case "reminder":
        return {
          bg: "bg-amber-50 dark:bg-amber-950/30",
          text: "text-amber-600 dark:text-amber-400",
          border: "border-amber-200 dark:border-amber-800/50",
          glow: "shadow-amber-500/20",
        };
      default:
        return {
          bg: "bg-blue-50 dark:bg-blue-950/30",
          text: "text-blue-600 dark:text-blue-400",
          border: "border-blue-200 dark:border-blue-800/50",
          glow: "shadow-blue-500/20",
        };
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[85vh] p-0 gap-0 border-border bg-background">
        <DialogHeader className="p-5 pb-0 space-y-0 border-b border-border/50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/25">
                <Bell size={20} className="text-white" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-[10px] font-bold flex items-center justify-center shadow-lg shadow-red-500/50">
                    {unreadCount}
                  </span>
                )}
              </div>
              <div>
                <DialogTitle className="text-xl font-bold text-foreground">Notifications</DialogTitle>
                <p className="text-xs font-medium text-muted-foreground">
                  {unreadCount > 0 ? `${unreadCount} unread message${unreadCount > 1 ? 's' : ''}` : "All caught up! 🎉"}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          {notifications.length > 0 && (
            <div className="flex gap-2 pb-4">
              <button
                onClick={markAllAsRead}
                disabled={unreadCount === 0}
                className="flex-1 px-4 py-2.5 rounded-xl bg-muted/60 hover:bg-muted dark:bg-muted/40 dark:hover:bg-muted/60 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm font-semibold text-foreground hover:scale-[1.02] active:scale-95"
              >
                <CheckCheck size={16} />
                Mark all read
              </button>
              <button
                onClick={clearAll}
                className="flex-1 px-4 py-2.5 rounded-xl bg-red-50 hover:bg-red-100 dark:bg-red-950/30 dark:hover:bg-red-950/50 transition-all duration-300 flex items-center justify-center gap-2 text-sm font-semibold text-red-600 dark:text-red-400 hover:scale-[1.02] active:scale-95"
              >
                <Trash2 size={16} />
                Clear all
              </button>
            </div>
          )}
        </DialogHeader>

        {/* Notifications List */}
        <ScrollArea className="flex-1 h-[calc(85vh-180px)]">
          <div className="p-5 pt-4 space-y-3">
            {notifications.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="w-24 h-24 rounded-full bg-muted/50 dark:bg-muted/30 flex items-center justify-center mb-4 shadow-inner">
                  <Bell size={36} className="text-muted-foreground/50" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">No notifications</h3>
                <p className="text-sm text-muted-foreground">You're all caught up!</p>
              </div>
            ) : (
              notifications.map((notif) => {
                const colors = getNotificationColor(notif.type);
                const Icon = getNotificationIcon(notif.type);
                
                return (
                  <div
                    key={notif.id}
                    className={`
                      relative group bg-card hover:bg-muted/50 dark:hover:bg-muted/30 rounded-2xl p-4 border transition-all duration-300 hover:shadow-lg
                      ${notif.read ? "border-border" : `${colors.border} shadow-md ${colors.glow}`}
                    `}
                  >
                    {/* Unread Indicator */}
                    {!notif.read && (
                      <div className="absolute top-4 right-4 w-2.5 h-2.5 bg-amber-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                    )}

                    <div className="flex gap-3.5">
                      {/* Icon */}
                      <div className={`w-11 h-11 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                        <Icon size={20} className={colors.text} strokeWidth={2.5} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-foreground mb-1 leading-tight">
                          {notif.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                          {notif.message}
                        </p>
                        <div className="flex items-center gap-1.5">
                          <Clock size={12} className="text-muted-foreground/60" />
                          <span className="text-xs font-medium text-muted-foreground/80">{notif.time}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        {!notif.read && (
                          <button
                            onClick={() => markAsRead(notif.id)}
                            className="w-9 h-9 rounded-xl bg-green-50 hover:bg-green-100 dark:bg-green-950/30 dark:hover:bg-green-950/50 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm"
                            title="Mark as read"
                          >
                            <Check size={16} className="text-green-600 dark:text-green-400" strokeWidth={2.5} />
                          </button>
                        )}
                        <button
                          onClick={() => deleteNotification(notif.id)}
                          className="w-9 h-9 rounded-xl bg-red-50 hover:bg-red-100 dark:bg-red-950/30 dark:hover:bg-red-950/50 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm"
                          title="Delete"
                        >
                          <X size={16} className="text-red-600 dark:text-red-400" strokeWidth={2.5} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}