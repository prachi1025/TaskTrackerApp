/**
 * @file SettingsPage.jsx
 * @description This file defines the SettingsPage component for the application.
 * It serves as the settings page for users where users can customise the app theme.
 */

import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore.js"
import { CheckCircle, Circle } from "lucide-react";

const PREVIEW_TASKS = [
  { id: 1, title: "Finish React Assignment", completed: true },
  { id: 2, title: "Submit Task Tracker Project", completed: false },
  { id: 3, title: "Update Resume for Placements", completed: false },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="min-h-screen container mx-auto px-4 pt-20 max-w-5xl">
      <div className="space-y-6">
        {/* Theme Selector */}
        <div className="flex flex-col gap-2">
          {/* Header Section */}
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold text-primary">Themes 🌸</h1>
            <p className="text-sm text-base-content/70">
              Select your preferred theme for the application.
            </p>
          </div>
          {/* Theme Options Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 mt-2">
            {THEMES.map((t) => (
              <button
                key={t}
                className={`group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors
                  ${theme === t ? "bg-base-200" : "hover:bg-base-200/50"}`}
                onClick={() => setTheme(t)}
              >
                <div className="relative h-8 w-full rounded-md overflow-hidden" data-theme={t}>
                  <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                    <div className="rounded bg-primary"></div>
                    <div className="rounded bg-secondary"></div>
                    <div className="rounded bg-accent"></div>
                    <div className="rounded bg-neutral"></div>
                  </div>
                </div>
                <span className="text-[11px] font-medium truncate w-full text-center">
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Preview Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Preview</h3>
          <div className="rounded-xl border border-base-300 overflow-hidden bg-base-100 shadow-lg" data-theme={theme}>
            <div className="p-4">
              <h4 className="font-semibold mb-2">My Tasks</h4>
              <div className="space-y-3">
                {PREVIEW_TASKS.map((task) => (
                  <div
                    key={task.id}
                    className={`flex items-center justify-between p-3 rounded-lg border ${
                      task.completed
                        ? "bg-primary text-primary-content border-primary"
                        : "bg-base-200 border-base-300"
                    }`}
                  >
                    <p
                      className={`text-sm ${
                        task.completed ? "line-through opacity-70" : ""
                      }`}
                    >
                      {task.title}
                    </p>
                    {task.completed ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Circle className="w-5 h-5 opacity-50" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;