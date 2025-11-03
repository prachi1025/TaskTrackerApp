/**
 * Zustand store for managing tasks with localStorage persistence.
 * Each task has an id, name, description, priority, and completion status.
 * Handles creating, toggling, deleting, clearing, and editing tasks.
 */

import { create } from "zustand";
import { getFormattedDateTime } from "../utils/date-time.js";
import { loadTasksFromLocalStorage, saveTasksToLocalStorage } from "../utils/local-storage.js";
import toast from "react-hot-toast";

/**
 * Zustand store for managing tasks.
 * Provides functions to add, toggle, delete, clear, update, and fetch tasks.
 */
export const useTaskStore = create((set, get) => ({
  // Initial state: load tasks from localStorage
  tasks: loadTasksFromLocalStorage(),

  /**
   * Adds a new task to the store and saves it to localStorage.
   * @param {Object} taskData - Contains name, desc, and priority of the new task.
   */
  addTask: (taskData) => {
    const now = getFormattedDateTime();
    const newTask = {
      id: Date.now(),
      name: taskData.name.trim(),
      desc: taskData.desc.trim(),
      priority: taskData.priority || "Medium",
      completed: false,
      createdAt: now, // created timestamp
      updatedAt: now, // initially same as createdAt
    };

    const updatedTasks = [newTask, ...get().tasks];
    saveTasksToLocalStorage(updatedTasks);
    set({ tasks: updatedTasks });
  },

  /**
   * Toggles the completion status of a task by id and saves to localStorage.
   * @param {number} id - Unique id of the task to toggle.
   */
  toggleTaskCompletion: (id) => {
    const updatedTasks = get().tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            completed: !task.completed,
            updatedAt: getFormattedDateTime(), // also update timestamp when toggled
          }
        : task
    );
    saveTasksToLocalStorage(updatedTasks);
    set({ tasks: updatedTasks });
  },

  /**
   * Deletes a task by id and saves to localStorage.
   * @param {number} id - Unique id of the task to be deleted.
   */
  deleteTask: (id) => {
    const updatedTasks = get().tasks.filter((task) => task.id !== id);
    saveTasksToLocalStorage(updatedTasks);
    set({ tasks: updatedTasks });
    toast.success("Task deleted!");
  },

  /**
   * Clears all tasks from the store and localStorage.
   */
  clearTasks: () => {
    saveTasksToLocalStorage([]);
    set({ tasks: [] });
  },

  /**
   * Updates an existing task by id with new data (including priority) and saves to localStorage.
   * @param {number} id - Unique id of the task to update.
   * @param {Object} updatedData - New task fields (name, desc, priority).
   */
  updateTask: (id, updatedData) => {
    const updatedTasks = get().tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            name: updatedData.name?.trim() || task.name,
            desc: updatedData.desc?.trim() || task.desc,
            priority: updatedData.priority || task.priority,
            updatedAt: getFormattedDateTime(), // last edit timestamp
          }
        : task
    );

    saveTasksToLocalStorage(updatedTasks);
    set({ tasks: updatedTasks });
  },

  /**
   * Retrieves a specific task by id (for pre-filling the edit form).
   * @param {number} id - Unique id of the task to fetch.
   * @returns {Object|null} - Task object if found, else null.
   */
  getTaskById: (id) => {
    return get().tasks.find((task) => task.id === id) || null;
  },
}));

export default useTaskStore;