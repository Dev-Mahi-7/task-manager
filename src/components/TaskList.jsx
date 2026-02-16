import { useTasks } from "../context/TaskContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { tasks } = useTasks();

  if (!tasks.length) {
    return <p className="text-center text-gray-500 text-2xl">No tasks found</p>;
  }

  return (
     <div className="space-y-2 h-100 overflow-y-auto">
      {[...tasks].reverse().map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
