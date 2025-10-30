/**
 * Zustand store to manage app's theme settings.
 * Stores the selected theme in both localStorage and React state.
 */
import { create } from "zustand";
import { loadThemeFromLocalStorage, saveThemeToLocalStorage } from "../utils/local-storage.js";

export const useThemeStore = create((set) => ({
  // Get the saved theme from localStorage (if any available) or use the default "nord" theme
  theme: loadThemeFromLocalStorage(),

  /**
   * Updates the theme both in localStorage and Zustand store.
   * @param {string} theme - new theme name to set
   */
  setTheme: (theme) => {
    // Save the selected theme to localStorage for persistence
    saveThemeToLocalStorage(theme);
    // Update the Zustand store with the new theme in state
    set({ theme });
  },
}));
