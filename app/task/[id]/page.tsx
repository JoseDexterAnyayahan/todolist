"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Calendar, 
  Flag, 
  Trash2, 
  CheckCircle2,
  Circle,
  Clock,
  Copy,
  Share2,
  MoreVertical
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function TaskDetailPage() {
  const params = useParams();
  const taskId = params?.id;

  // Mock data - replace with actual data fetching
  const [title, setTitle] = useState("Design login screen");
  const [description, setDescription] = useState("Create a modern login interface with email and social options");
  const [priority, setPriority] = useState<"Low" | "Medium" | "High">("High");
  const [date, setDate] = useState("2025-02-09");
  const [completed, setCompleted] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  // Quick date functions
  const quickDates = [
    { label: "Today", days: 0 },
    { label: "Tomorrow", days: 1 },
    { label: "Next Week", days: 7 },
  ];

  const setQuickDate = (days: number) => {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + days);
    setDate(newDate.toISOString().split('T')[0]);
  };

  const handleSave = () => {
    // TODO: Save to your state/database
    console.log({ title, description, priority, date, completed });
  };

  const handleDelete = () => {
    // TODO: Delete from your state/database
    console.log("Delete task", taskId);
  };

  const handleDuplicate = () => {
    // TODO: Duplicate task
    console.log("Duplicate task", taskId);
  };

  const handleShare = () => {
    // TODO: Share task
    console.log("Share task", taskId);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-white">
      <div className="px-4 pt-6 pb-28 flex flex-col gap-6">

        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/todo">
              <Button
                size="icon"
                variant="ghost"
                className="
                  rounded-lg
                  border border-zinc-200
                  bg-white
                  hover:bg-zinc-50
                  dark:border-zinc-800
                  dark:bg-zinc-900
                  dark:hover:bg-zinc-800
                "
              >
                <ArrowLeft size={18} />
              </Button>
            </Link>

            <h1 className="text-lg font-semibold tracking-tight">
              Task Details
            </h1>
          </div>

          {/* MORE MENU */}
          <div className="relative">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setShowMoreMenu(!showMoreMenu)}
              className="
                rounded-lg
                border border-zinc-200
                bg-white
                hover:bg-zinc-50
                dark:border-zinc-800
                dark:bg-zinc-900
                dark:hover:bg-zinc-800
              "
            >
              <MoreVertical size={18} />
            </Button>

            {showMoreMenu && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowMoreMenu(false)}
                />
                <div className="absolute right-0 top-full mt-2 w-40 rounded-xl border bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 shadow-lg z-20 overflow-hidden">
                  <button
                    onClick={() => {
                      handleDuplicate();
                      setShowMoreMenu(false);
                    }}
                    className="w-full px-4 py-2.5 text-left text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors flex items-center gap-2"
                  >
                    <Copy size={14} />
                    Duplicate
                  </button>
                  <button
                    onClick={() => {
                      handleShare();
                      setShowMoreMenu(false);
                    }}
                    className="w-full px-4 py-2.5 text-left text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors flex items-center gap-2"
                  >
                    <Share2 size={14} />
                    Share
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* STATUS TOGGLE */}
        <button
          onClick={() => setCompleted(!completed)}
          className="
            rounded-2xl border p-4
            flex items-center gap-3
            transition-all
            border-zinc-200 bg-white hover:bg-zinc-50
            dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800
          "
        >
          {completed ? (
            <CheckCircle2 size={24} className="text-emerald-500" />
          ) : (
            <Circle size={24} className="text-zinc-400 dark:text-zinc-500" />
          )}
          <div className="flex-1 text-left">
            <p className="text-sm font-medium">
              {completed ? "Completed" : "Mark as complete"}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {completed ? "Task is done" : "Click to complete this task"}
            </p>
          </div>
        </button>

        {/* FORM */}
        <div
          className="
            rounded-2xl
            border border-zinc-200
            bg-white
            dark:border-zinc-800
            dark:bg-zinc-900
            p-5
            flex flex-col gap-6
          "
        >
          {/* TITLE */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
              Title *
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Design landing page"
              className="
                rounded-lg
                border border-zinc-200
                bg-white
                px-3 py-2.5
                text-sm
                outline-none
                focus:border-zinc-400 focus:ring-2 focus:ring-zinc-100
                dark:border-zinc-800
                dark:bg-zinc-950
                dark:focus:border-zinc-600 dark:focus:ring-zinc-800
                dark:text-white
                transition-all
              "
            />
            {title && (
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {title.length} characters
              </p>
            )}
          </div>

          {/* DESCRIPTION */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              placeholder="Add notes or extra details..."
              className="
                rounded-lg
                border border-zinc-200
                bg-white
                px-3 py-2.5
                text-sm
                outline-none
                resize-none
                focus:border-zinc-400 focus:ring-2 focus:ring-zinc-100
                dark:border-zinc-800
                dark:bg-zinc-950
                dark:focus:border-zinc-600 dark:focus:ring-zinc-800
                dark:text-white
                transition-all
              "
            />
          </div>

          {/* PRIORITY */}
          <div className="flex flex-col gap-3">
            <label className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
              Priority
            </label>

            <div className="grid grid-cols-3 gap-2 text-sm">
              {(["Low", "Medium", "High"] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setPriority(p)}
                  className={`
                    rounded-lg
                    border
                    px-3 py-2.5
                    flex items-center justify-center gap-2
                    transition-all font-medium

                    ${
                      priority === p
                        ? p === "High"
                          ? "bg-red-500 text-white border-red-500"
                          : p === "Medium"
                          ? "bg-yellow-500 text-white border-yellow-500"
                          : "bg-green-500 text-white border-green-500"
                        : "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800"
                    }
                  `}
                >
                  <Flag size={14} />
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* DUE DATE */}
          <div className="flex flex-col gap-3">
            <label className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
              Due Date
            </label>

            {/* Quick Date Buttons */}
            <div className="grid grid-cols-3 gap-2">
              {quickDates.map((quick) => (
                <button
                  key={quick.label}
                  onClick={() => setQuickDate(quick.days)}
                  className="
                    px-3 py-2 rounded-lg border text-xs font-medium
                    border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50
                    dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800
                    transition-colors
                  "
                >
                  {quick.label}
                </button>
              ))}
            </div>

            {/* Date Picker */}
            <div
              className="
                relative
                rounded-lg
                border border-zinc-200
                bg-white
                dark:border-zinc-800
                dark:bg-zinc-950
              "
            >
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="
                  w-full
                  px-3 py-2.5
                  text-sm
                  bg-transparent
                  outline-none
                  dark:text-white
                  [color-scheme:light] dark:[color-scheme:dark]
                "
              />

              <Calendar
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500 pointer-events-none"
              />
            </div>
          </div>

          {/* CREATED/MODIFIED INFO */}
          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
              <Clock size={12} />
              <span>Created on Feb 8, 2025 • Last modified today</span>
            </div>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-col gap-3">
          <Button
            onClick={handleSave}
            disabled={!title.trim()}
            className="
              h-11
              rounded-lg
              font-medium
              bg-zinc-900 text-white hover:bg-zinc-800
              dark:bg-white dark:text-black dark:hover:bg-zinc-200
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all
            "
          >
            Save Changes
          </Button>

          <Button
            onClick={() => setShowDeleteConfirm(true)}
            variant="outline"
            className="
              h-11
              rounded-lg
              border-red-300 text-red-600 hover:bg-red-50
              dark:border-red-900 dark:text-red-400 dark:hover:bg-red-950/20
              flex items-center justify-center gap-2
              transition-colors
            "
          >
            <Trash2 size={16} />
            Delete Task
          </Button>
        </div>
      </div>

      {/* DELETE CONFIRMATION DIALOG */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-2">Delete Task?</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
              This action cannot be undone. The task will be permanently deleted.
            </p>
            <div className="flex gap-3">
              <Button
                onClick={() => setShowDeleteConfirm(false)}
                variant="outline"
                className="flex-1 rounded-lg"
              >
                Cancel
              </Button>
              <Button
                onClick={handleDelete}
                className="flex-1 rounded-lg bg-red-600 text-white hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}