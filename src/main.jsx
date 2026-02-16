import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TaskProvider } from "./context/TaskContext";
import "react-toastify/ReactToastify.css"
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TaskProvider>
<ToastContainer position="bottom-right" />
    <App />
  </TaskProvider>
);
