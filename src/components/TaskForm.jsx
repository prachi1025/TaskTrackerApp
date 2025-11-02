/**
 * TaskForm Component
 * Handles creating a new task (name, description, priority)
 * @component
 */

import { useState } from "react";
import toast from "react-hot-toast";

const TaskForm = ({ onAddTask }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [priority, setPriority] = useState("Medium");

  // Character limits
  const NAME_LIMIT = 50
  const DESC_LIMIT = 250

  /**
   * form validation function to ensure required fields are filled
   * @returns boolean - whether the form is valid or not
   */
  const validateForm = () => {
    if (!name.trim()) {
      toast.error("Task name is required!");
      return false;
    }
    return true;
  };

  /**
   * Handles changes to the task name input field
   * ensures character limit is not exceeded
   * @param {Object} e - the event object from the infut field
   */
  const handleNameChange = (e) => {
    const value = e.target.value;
    if (value.length <= NAME_LIMIT) {
      setName(value);
    } else {
      toast.error(`Task name cannot exceed ${NAME_LIMIT} characters!`);
    }
  };

  /**
   * Handles changes to the task description input field
   * ensures character limit is not exceeded
   * @param {Object} e - the event object from the textarea field
   */
  const handleDescChange = (e) => {
    const value = e.target.value; 
    if (value.length <= DESC_LIMIT) {
      setDesc(value);
    } else {
      toast.error(`Description cannot exceed ${DESC_LIMIT} characters!`);
    }
  };

  /**
   * Handles form submission
   * @param {Object} e - the event object from the form
   */
  const handleSubmit = (e) => {
      e.preventDefault();
      if (!validateForm()) return;

      onAddTask({ name, desc, priority });
      setName("");
      setDesc("");
      setPriority("Medium");
      toast.success("Task added successfully!");
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
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;