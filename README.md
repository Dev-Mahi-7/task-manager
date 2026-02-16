# 📝 Task Manager App

A modern and responsive Task Manager application built using React, Tailwindcss and Context API.  
This app allows users to manage daily tasks efficiently with features like task creation, filtering, completion tracking, and persistent storage.

---

## 🚀 Live Demo

👉 https://task-manager-ten-azure-26.vercel.app/

---

## 📌 Project Overview

This project was developed as part of a frontend interview assignment.  
The goal was to build a clean, scalable, and user-friendly task management application using React functional components and global state management via Context API.

---

## ✨ Features

### ✅ Core Features

- 📋 Display list of tasks
- ➕ Add new task with validation
- 🔄 Toggle task completion status
- 🎯 Filter tasks (All / Active / Completed)
- 📊 Summary section (Total, Completed, Remaining)
- 🎨 Completed tasks visually distinct

### ⭐ Bonus Features

- 💾 Persistent storage using **localStorage**
- 🗑️ Delete task functionality
- 🆕 Latest tasks appear first
- ⚡ Fast and responsive UI with TailwindCSS

---

## 🛠️ Tech Stack

- ⚛️ **React (Functional Components)**
- 🎯 **Context API** for global state management
- 🎨 **TailwindCSS** for styling
- ⚡ **Vite** for fast development

---

## 📂 Folder Structure

src/
│
├── components/
│ ├── TaskForm.jsx
│ ├── TaskList.jsx
│ ├── TaskItem.jsx
│ ├── FilterBar.jsx
│ └── Summary.jsx
│
├── context/
│ ├── TaskContext.jsx
│
├── data/
│ └── seedData.js
│
├── App.jsx
└── main.jsx

---

## ⚙️ Setup & Installation

```bash

### 1 Git clone repo

git clone https://github.com/Dev-Mahi-7/task-manager.git
cd task-manager

### 2 install dependencies
npm i

### 3 run the server
npm run dev

App will run at:
http://localhost:5173
```
