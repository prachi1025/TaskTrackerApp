/**
 * @file HomePage.jsx
 * @description This file defines the HomePage component for the application.
 * It serves as the main landing page for users.
 * @component
 */
import { useState } from "react";
import { Plus } from "lucide-react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Header from "../components/Header";
import { useTaskStore } from "../store/useTaskStore.js";

const HomePage = () => {
  // Accessing task store
  const { tasks, addTask, deleteTask, toggleTaskCompletion } = useTaskStore();
  // State to control modal visibility
  const [showModal, setShowModal] = useState(false);

  // Handler to add a new task
  const handleAddTask = (taskData) => {
    addTask(taskData);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      {/* Header */}
      <Header />

      {/* Page content */}
      <main className="flex-grow flex flex-col items-center px-4 pt-20 sm:pt-20">
        {/* Add Task Button */}
        <button
          className="btn btn-primary flex items-center gap-2 mb-0 shadow-md"
          onClick={() => setShowModal(true)}
        >
          <Plus className="w-5 h-5" /> Add Task
        </button>

        {/* Task List */}
        <TaskList
          tasks={tasks}                  onDelete={deleteTask}
          onToggle={toggleTaskCompletion}
        />

      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-base-100 rounded-xl shadow-lg p-6 w-full max-w-md relative m-5">
            <button
              className="btn btn-sm btn-circle absolute right-3 top-3"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center">
              Add New Task
            </h2>
            <TaskForm onAddTask={handleAddTask} />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;