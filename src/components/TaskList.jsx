/**
 * TaskList Component
 * Displays tasks in a responsive Pinterest-style Masonry layout
 * Includes search, filter, and modal confirmation for clearing all tasks
 * @component
 */

import { useState } from "react";
import Masonry from "react-masonry-css";
import TaskItem from "./TaskItem";
import { useTaskStore } from "../store/useTaskStore.js";
import TaskSearch from "./TaskSearch.jsx";
import toast from "react-hot-toast";

const TaskList = ({ tasks, onDelete, onToggle, onEdit }) => {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { clearTasks } = useTaskStore();

  // Modal visibility state
  const [showModal, setShowModal] = useState(false);

  /**
   * handles clearing all tasks
   */
  const handleClearTasks = () => {
    if (tasks.length === 0) return toast.error("No tasks to clear!");
    setShowModal(true);
  };

  /**
   * function to confirm clearing all tasks
   */
  const confirmClearAll = () => {
    clearTasks();
    toast.success("All tasks cleared!");
    setShowModal(false);
  };

  /**
   * function to cancel clearing all tasks
   */
  const cancelClearAll = () => {
    setShowModal(false);
  };

  // Real-time search handler
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  /**
   * Filters and searches tasks based on current filter and search query
   * @returns {Array} - filtered and searched tasks
   */
  const filteredTasks = tasks.filter((task) => {
    // Filter logic
    const matchesFilter =
      filter === "All" ||
      (filter === "Completed" && task.completed) ||
      (filter === "Pending" && !task.completed);
    // Search logic
    const matchesSearch =
      task.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.desc.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  // Masonry breakpoints
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
  };

  return (
    <div className="p-4 sm:p-6 w-full relative">
      {/* Header row with Search and Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
        <h2 className="text-2xl font-semibold text-primary text-center sm:text-left">
          Your Tasks
        </h2>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
          <TaskSearch onSearch={handleSearch} />

          {/* Filters */}
          <div className="flex justify-center sm:justify-end gap-2">
            {["All", "Completed", "Pending"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`btn btn-sm ${
                  filter === type ? "btn-primary" : "btn-outline"
                }`}
              >
                {type}
              </button>
            ))}

            {/* Clear All Button */}
            {tasks.length > 0 && (
              <button
                onClick={handleClearTasks}
                className="btn btn-sm badge-error hover:brightness-110"
              >
                Clear All
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Masonry grid */}
      {filteredTasks.length === 0 ? (
        <p className="text-center text-primary">No tasks found.</p>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto -mx-8"
          columnClassName="masonry-column pl-2 flex flex-col gap-2"
        >
          {filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={onDelete}
              onToggle={onToggle}
              onEdit={onEdit}
            />
          ))}
        </Masonry>
      )}

      {/* Floating modal for clear all confirmation */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-base-200 p-6 rounded-2xl shadow-xl w-[90%] sm:w-[400px] text-center animate-fadeIn">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Are you sure you want to clear all tasks?
            </h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmClearAll}
                className="btn badge-error hover:brightness-110"
              >
                Yes, Clear All
              </button>
              <button onClick={cancelClearAll} className="btn btn-outline">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList