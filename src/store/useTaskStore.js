/**
 * Zustand store for managing tasks with localStorage persistence.
 * Each task has an id, name, description, priority, and completion status.
 * Handles creating, toggling, deleting, and clearing tasks.
 */

import { create } from "zustand";
import { getFormattedDateTime } from "../utils/date-time.js";
import { loadTasksFromLocalStorage, saveTasksToLocalStorage } from "../utils/local-storage.js";

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

  /**
   * Toggles the completion status of a task by id and saves to localStorage.
   * @param {number} id - Unique id of the task to toggle.
   */
  toggleTaskCompletion: (id) => {
    const updatedTasks = get().tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
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
  },

  /**
   * Clears all tasks from the store and localStorage.
   */
  clearTasks: () => {
    saveTasksToLocalStorage([]);
    set({ tasks: [] });
  },
}));

export default useTaskStore;
