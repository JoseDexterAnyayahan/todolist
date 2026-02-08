"use client";

import { useState } from "react";
import { Plus, Flag, Calendar, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

export default function TaskInput() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<"Low" | "Medium" | "High">("Medium");
  const [date, setDate] = useState("");

  // Reset form
  const resetForm = () => {
    setTitle("");
    setDescription("");
    setPriority("Medium");
    setDate("");
  };

  // Handle submit
  const handleSubmit = () => {
    if (!title.trim()) return;
    
    // TODO: Add task to your state/database
    console.log({
      title,
      description,
      priority,
      dueDate: date,
      completed: false,
    });

    resetForm();
    setOpen(false);
  };

  // Quick add buttons
  const quickDates = [
    { label: "Today", days: 0 },
    { label: "Tomorrow", days: 1 },
    { label: "Next Week", days: 7 },
  ];

  const setQuickDate = (days: number) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    setDate(date.toISOString().split('T')[0]);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* FLOATING BUTTON */}
      <DialogTrigger asChild>
        <button
          className="
            fixed bottom-24 right-4
            h-14 w-14 rounded-full
            flex items-center justify-center
            shadow-lg transition-all
            bg-zinc-900 text-white hover:bg-zinc-800 hover:scale-110
            dark:bg-white dark:text-black dark:hover:bg-zinc-200
            z-50
          "
        >
          <Plus size={24} />
        </button>
      </DialogTrigger>

      {/* MODAL */}
      <DialogContent
        className="
          rounded-2xl
          border border-zinc-200
          bg-white
          dark:border-zinc-800
          dark:bg-zinc-900
          max-w-md
          max-h-[90vh]
          overflow-y-auto
        "
      >
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-semibold text-zinc-900 dark:text-white">
              New Task
            </DialogTitle>
            <button
              onClick={() => setOpen(false)}
              className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </DialogHeader>

        <div className="flex flex-col gap-4 mt-2">
          {/* TITLE */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
              Title *
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Design landing page"
              autoFocus
              className="
                w-full rounded-lg border
                border-zinc-200 bg-white
                px-3 py-2.5 text-sm outline-none
                text-zinc-900 placeholder:text-zinc-400
                focus:border-zinc-400 focus:ring-2 focus:ring-zinc-100
                dark:border-zinc-800 dark:bg-zinc-950 
                dark:text-white dark:placeholder:text-zinc-500
                dark:focus:border-zinc-600 dark:focus:ring-zinc-800
                transition-all
              "
            />
            {title.trim() && (
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {title.length} characters
              </p>
            )}
          </div>

          {/* DESCRIPTION */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
              Description
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add more details about this task..."
              className="
                w-full rounded-lg border
                border-zinc-200 bg-white
                px-3 py-2.5 text-sm outline-none resize-none
                text-zinc-900 placeholder:text-zinc-400
                focus:border-zinc-400 focus:ring-2 focus:ring-zinc-100
                dark:border-zinc-800 dark:bg-zinc-950
                dark:text-white dark:placeholder:text-zinc-500
                dark:focus:border-zinc-600 dark:focus:ring-zinc-800
                transition-all
              "
            />
          </div>

          {/* PRIORITY */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
              Priority
            </label>

            <div className="grid grid-cols-3 gap-2 text-sm">
              {(["Low", "Medium", "High"] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setPriority(p)}
                  className={`
                    rounded-lg border px-3 py-2.5 flex items-center justify-center gap-1.5 transition-all font-medium
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

          {/* DATE */}
          <div className="flex flex-col gap-2">
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
                relative rounded-lg border
                border-zinc-200 bg-white
                dark:border-zinc-800 dark:bg-zinc-950
              "
            >
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="
                  w-full px-3 py-2.5 text-sm bg-transparent outline-none
                  text-zinc-900 dark:text-white
                  focus:border-zinc-400 dark:focus:border-zinc-600
                  [color-scheme:light] dark:[color-scheme:dark]
                "
              />
              <Calendar
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500 pointer-events-none"
              />
            </div>
          </div>

          {/* AI SUGGESTION (Optional Feature) */}
          <button
            className="
              w-full rounded-lg border border-dashed
              border-zinc-300 dark:border-zinc-700
              px-3 py-2.5 text-xs
              text-zinc-600 dark:text-zinc-400
              hover:bg-zinc-50 dark:hover:bg-zinc-900
              transition-colors
              flex items-center justify-center gap-2
            "
          >
            <Sparkles size={14} />
            Suggest subtasks with AI (Coming soon)
          </button>
        </div>

        {/* FOOTER */}
        <DialogFooter className="mt-6 flex gap-2">
          <Button
            onClick={() => {
              resetForm();
              setOpen(false);
            }}
            variant="outline"
            className="
              flex-1 rounded-lg font-medium transition-colors
              border-zinc-200 text-zinc-700 hover:bg-zinc-50
              dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900
            "
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!title.trim()}
            className="
              flex-1 rounded-lg font-medium transition-all
              bg-zinc-900 text-white hover:bg-zinc-800
              dark:bg-white dark:text-black dark:hover:bg-zinc-200
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            Add Task
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}