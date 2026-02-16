import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import Summary from "./components/Summary";

export default function App() {
  return (
    <div className="min-h-screen bg-linear-to-br  from-slate-950/95 via-pink-900 to-amber-500 p-2 md:p-4">
      <div className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm rounded-xl p-3 md:p-6">
        <h1 className="text-2xl font-bold mb-4 text-center uppercase">Task Manager</h1>
        <TaskForm />
        <FilterBar />
        <TaskList />
        <Summary />
      </div>
    </div>
  );
}
