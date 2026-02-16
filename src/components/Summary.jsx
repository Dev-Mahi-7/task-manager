import { useTasks } from "../context/TaskContext";

export default function Summary() {
  const { allTasks } = useTasks();

  const total = allTasks.length;
  const completed = allTasks.filter((t) => t.completed).length;
  const remaining = total - completed;

  return (
    <div className="mt-4 flex items-center justify-around border-t border-t-gray-200 pt-4 text-sm text-gray-700">
      <p className=" px-4 py-2 text-lg md:text-xl shadow-lg" >Total: {total}</p>
      <p className=" px-4 py-2 text-lg md:text-xl shadow-lg" >Completed: {completed}</p>
      <p className=" px-4 py-2 text-lg md:text-xl shadow-lg" >Remaining: {remaining}</p>
    </div>
  );
}
