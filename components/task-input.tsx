import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TaskInput() {
  return (
    <div className="flex gap-2">
      <Input placeholder="Add new task..." />
      <Button disabled>Add</Button>
    </div>
  );
}
