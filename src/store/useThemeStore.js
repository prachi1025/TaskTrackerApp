/**
 * Zustand store to manage app's theme settings.
 * stores the selected theme in both localStorage and React state.
 */
import { create } from "zustand";

export const useThemeStore = create((set) => ({
    // get the saved theme from localStorage (if any available) or use the default "nord" theme
  theme: localStorage.getItem("chat-theme") || "nord",

  /**
   * Updates the theme both in localStorage and Zustand store.
   * @param {string} theme - new theme name to set
   */
  setTheme: (theme) => {
    // save the selected theme to localStorage for persistence
    localStorage.setItem("chat-theme", theme);
    // update the Zustand store with the new theme in state
    set({ theme });
  },
}))