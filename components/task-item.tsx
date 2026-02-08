type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export default function TaskItem({ task }: { task: Task }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl border shadow-sm">
      <div className="flex items-center gap-3">
        <div
          className={`w-5 h-5 rounded-full border ${
            task.completed ? "bg-green-500" : ""
          }`}
        />
        <p
          className={`text-sm ${
            task.completed ? "line-through text-muted-foreground" : ""
          }`}
        >
          {task.title}
        </p>
      </div>

      <button className="text-red-500 text-sm">Delete</button>
    </div>
  );
}
