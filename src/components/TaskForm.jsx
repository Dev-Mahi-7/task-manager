import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { toast } from "react-toastify";

export default function TaskForm() {
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const [assignedTo, setAssignedTo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      toast.error("Please Enter Title !");
      return;
    }

    if (!assignedTo.trim()) {
      toast.error("Please Enter Assigned Name !");
      return;
    }
    toast.success("Task Added !")
    addTask({ title, priority, assignedTo });
    setTitle("");
    setAssignedTo("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2">
      <input
        className="w-full border border-gray-200 outline-0 text-xl py-2 px-4"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className="flex gap-2">
        <select
          className="border text-xl outline-0 border-gray-200 cursor-pointer p-2 w-1/3"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <input
          className="border text-xl border-gray-200 outline-0 px-4 py-2 flex-1"
          placeholder="Assigned user"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
        />
      </div>
      <div className="btn flex justify-end items-center ">
      <button className="bg-green-500 font-xl cursor-pointer hover:scale-105 transition-all active:scale-95 uppercase font-bold w-fit text-white px-4 py-2 rounded ">
        Add Task
      </button>
      </div>
    </form>
  );
}
