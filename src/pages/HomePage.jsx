/**
 * @file HomePage.jsx
 * @description Main landing page with Add/Edit task modals and task list.
 */

import { useState } from "react";
import { Plus } from "lucide-react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Header from "../components/Header";
import { useTaskStore } from "../store/useTaskStore.js";

const HomePage = () => {
  const { tasks, addTask, deleteTask, toggleTaskCompletion, updateTask, getTaskById } = useTaskStore();

  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  // Add new task handler
  const handleAddTask = (taskData) => {
    addTask(taskData);
    setShowModal(false);
  };

  // Edit button click — open modal prefilled
  const handleEditTask = (taskId) => {
    const task = getTaskById(taskId);
    setEditingTask(task);
    setShowModal(true);
  };

  // Save edited task
  const handleUpdateTask = (updatedData) => {
    updateTask(editingTask.id, updatedData);
    setEditingTask(null);
    setShowModal(false);
  };

  // Close modal
  const handleCloseModal = () => {
    setEditingTask(null);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      <Header />

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
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleTaskCompletion}
          onEdit={handleEditTask}
        />
      </main>

      {/* Floating Modal (Add / Edit) */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-base-100 rounded-xl shadow-lg p-6 w-full max-w-md relative m-5">
            <button
              className="btn btn-sm btn-circle absolute right-3 top-3"
              onClick={handleCloseModal}
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-4 text-center">
              {editingTask ? "Edit Task" : "Add New Task"}
            </h2>

            <TaskForm
              onAddTask={editingTask ? handleUpdateTask : handleAddTask}
              existingTask={editingTask}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;