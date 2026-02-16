import { GoTrash } from "react-icons/go";
import { useTasks } from "../context/TaskContext";

export default function TaskItem({ task }) {
  const { toggleTask, deleteTask } = useTasks();

  const priorityColors = {
    High: "bg-red-100",
    Medium: "bg-yellow-100",
    Low: "bg-green-100",
  };

  return (
    <div
      className={`flex justify-between items-center p-3 border border-gray-200 ${
        task.completed ? "bg-green-100 line-through opacity-60" : "bg-white"
      }`}
    >
      <div>
        <h3 className="font-semibold">{task.title}</h3>
        <p className="text-sm text-gray-500">
          {task.assignedTo || "Unassigned"}
        </p>
      </div>

      <div className="flex items-center gap-6">
        <span className={`px-2 py-1 font-bold rounded text-xs ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>

        <input
          type="checkbox"
          className="text-2xl border cursor-pointer w-5 h-5"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-500 text-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
        >
          <GoTrash />
        </button>
      </div>
    </div>
  );
}
