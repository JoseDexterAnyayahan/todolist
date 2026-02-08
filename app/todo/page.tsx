import Header from "@/components/header";
import TaskInput from "@/components/task-input";
import TaskItem from "@/components/task-item";
import FilterTabs from "@/components/filter-tabs";
import { tasks } from "@/lib/mock-data";

export default function TodoPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      
      {/* SOFT TOP GRADIENT */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white/5 to-transparent dark:from-white/10 -z-10" />

      {/* CONTENT */}
      <div className="flex flex-col gap-6 px-4 pt-6 pb-10">
        
        {/* HEADER */}
        <Header />

        {/* INPUT CARD */}
        <div className="bg-zinc-900/60 backdrop-blur border border-zinc-800 rounded-2xl p-3 shadow-sm">
          <TaskInput />
        </div>

        {/* FILTER TABS */}
        <FilterTabs />

        {/* TASK LIST */}
        <section className="flex flex-col gap-3">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))
          ) : (
            <div className="text-center py-16 text-zinc-500">
              <p className="text-lg font-medium">No tasks yet</p>
              <p className="text-sm">Add your first task ✨</p>
            </div>
          )}
        </section>

      </div>
    </div>
  );
}
