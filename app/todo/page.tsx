import Header from "@/components/header";
import TaskInput from "@/components/task-input";
import TaskItem from "@/components/task-item";
import FilterTabs from "@/components/filter-tabs";
import { tasks } from "@/lib/mock-data";

export default function TodoPage() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <Header />
      <TaskInput />
      <FilterTabs />

      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
