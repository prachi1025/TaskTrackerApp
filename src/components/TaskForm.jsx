/**
 * TaskForm Component
 * Handles creating and editing tasks.
 * @component
 */

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { NAME_LIMIT, DESC_LIMIT } from "../constants/character-limits.js";

const TaskForm = ({ onAddTask, existingTask }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [priority, setPriority] = useState("Medium");

  // Prefill when editing
  useEffect(() => {
    if (existingTask) {
      setName(existingTask.name);
      setDesc(existingTask.desc);
      setPriority(existingTask.priority);
    }
  }, [existingTask]);

  /**
   * validates form inputs
   * @returns {boolean} - whether the form is valid
   */
  const validateForm = () => {
    if (!name.trim()) {
      toast.error("Task name is required!");
      return false;
    }
    return true;
  };

  /**
   * handles name change with character limit
   * @param {Object} e - form submit event
   */
  const handleNameChange = (e) => {
    const value = e.target.value;
    if (value.length <= NAME_LIMIT) {
      setName(value);
    } else {
      toast.error(`Task name cannot exceed ${NAME_LIMIT} characters!`);
    }
  }

  /**
   * handles description change with character limit
   * @param {Object} e - Form submit event
   */
  const handleDescChange = (e) => {
    const value = e.target.value;
    if (value.length <= DESC_LIMIT) {
      setDesc(value);
    } else {
      toast.error(`Description cannot exceed ${DESC_LIMIT} characters!`);
    }
  }

  /**
   * handles submit for both add and edit forms
   * @param {Object} e - Form submit event 
   * @returns toast notifications for add/update actions
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    onAddTask({ name, desc, priority });

    if (!existingTask) {
      toast.success("Task added successfully!");
      setName("");
      setDesc("");
      setPriority("Medium");
    } else {
      toast.success("Task updated successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Task Name */}
      <div>
        <label className="label">
          <span className="label-text font-semibold">Task Name</span>
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter task name"
            value={name}
            onChange={handleNameChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200"
          />
          <span className="absolute right-3 bottom-2 text-xs text-gray-500">
            {name.length}/{NAME_LIMIT}
          </span>
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="label">
          <span className="label-text font-semibold">Description</span>
        </label>
        <div className="relative">
          <textarea
            placeholder="Enter task description"
            value={desc}
            onChange={handleDescChange}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200 resize-none"
          />
          <span className="absolute right-3 bottom-2 text-xs text-gray-500">
            {desc.length}/{DESC_LIMIT}
          </span>
        </div>
      </div>

      {/* Priority Selector */}
      <div>
        <label className="label">
          <span className="label-text font-semibold">Priority</span>
        </label>

        <div className="flex flex-wrap gap-2">
          {["Low", "Medium", "High"].map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => setPriority(level)}
              className={`btn flex-1 ${
                priority === level
                  ? level === "High"
                    ? "btn-error"
                    : level === "Medium"
                    ? "btn-warning"
                    : "btn-success"
                  : "btn-outline"
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-primary w-full mt-4">
        {existingTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;