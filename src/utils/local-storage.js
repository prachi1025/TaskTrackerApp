/**
 * Utility functions for handling localStorage operations.
 * These functions manage saving and loading themes and tasks in localStorage.
 */

/**
 * Loads tasks from localStorage.
 * @returns {Array} An array of tasks or an empty array if none exist.
 */
export const loadTasksFromLocalStorage = () => {
  try {
    const storedTasks = localStorage.getItem("task-storage");
    const parsed = storedTasks ? JSON.parse(storedTasks) : [];
    return Array.isArray(parsed) ? parsed : []; // ensures always an array
  } catch (error) {
    console.error("Error loading tasks from localStorage:", error);
    return [];
  }
};

/**
 * Saves tasks to localStorage.
 * @param {Array} tasks - Array of tasks to be saved to localStorage.
 */
export const saveTasksToLocalStorage = (tasks) => {
  try {
    localStorage.setItem("task-storage", JSON.stringify(tasks));
  } catch (error) {
    console.error("Error saving tasks to localStorage:", error);
  }
};

/**
 * Loads the saved theme from localStorage.
 * @returns {string} The stored theme name, or "nord" if none exists.
 */
export const loadThemeFromLocalStorage = () => {
  try {
    return localStorage.getItem("chat-theme") || "nord";
  } catch (error) {
    console.error("Error loading theme from localStorage:", error);
    return "nord";
  }
};

/**
 * Saves the selected theme to localStorage.
 * @param {string} theme - The new theme name to save.
 */
export const saveThemeToLocalStorage = (theme) => {
  try {
    localStorage.setItem("chat-theme", theme);
  } catch (error) {
    console.error("Error saving theme to localStorage:", error);
  }
};
