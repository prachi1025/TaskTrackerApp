/**
 * Zustand store for managing tasks with localStorage persistence.
 * Each task has an id, name, description, priority, and completion status.
 * Handles creating, toggling, deleting, and clearing tasks.
 */

import { create } from "zustand";
import { getFormattedDateTime } from "../utils/date-time.js";

/**
 * Loads tasks from localStorage.
 * @returns {Array} An array of tasks or an empty array if none exist.
 */
const loadTasksFromLocalStorage = () => {
  try {
    const storedTasks = localStorage.getItem("task-storage");
    const parsed = storedTasks ? JSON.parse(storedTasks) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Error loading tasks from localStorage:", error);
    return [];
  }
};

/**
 * Saves tasks to localStorage.
 * @param {Array} tasks - Array of tasks to be saved to localStorage.
 */
const saveTasksToLocalStorage = (tasks) => {
  try {
    localStorage.setItem("task-storage", JSON.stringify(tasks));
  } catch (error) {
    console.error("Error saving tasks to localStorage:", error);
  }
};

/**
 * Zustand store for managing tasks.
 * Provides functions to add, toggle, delete, and clear tasks.
 */
export const useTaskStore = create((set, get) => ({
  // Initial state: load tasks from localStorage
  tasks: loadTasksFromLocalStorage(),

  /**
   * Adds a new task to the store and saves it to localStorage.
   * @param {Object} taskData - Contains name, desc, and priority of the new task.
   */
  addTask: (taskData) => {
    const newTask = {
      id: Date.now(),
      name: taskData.name.trim(),
      desc: taskData.desc.trim(),
      priority: taskData.priority,
      completed: false,
      createdAt: getFormattedDateTime(),
    };

    const updatedTasks = [newTask, ...get().tasks];
    saveTasksToLocalStorage(updatedTasks);
    set({ tasks: updatedTasks });
  },

}));

export default useTaskStore;
