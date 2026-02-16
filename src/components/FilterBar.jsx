import { useTasks } from "../context/TaskContext";

export default function FilterBar() {
  const { filter, setFilter } = useTasks();

  const filters = ["all", "active", "completed"];

  return (
    <div className="flex justify-center gap-2 mb-4">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-3 py-1 capitalize cursor-pointer hover:scale-105 active:scale-95 transition-all rounded ${
            filter === f ? "bg-green-500 text-white" : "bg-gray-200"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
