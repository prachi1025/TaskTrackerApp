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

  const validateForm = () => {
    if (!name.trim()) {
      toast.error("Task name is required!");
      return false;
    }
    return true;
  };

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
        <input
          type="text"
          placeholder="Enter task name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200"
        />
      </div>

      {/* Description */}
      <div>
        <label className="label">
          <span className="label-text font-semibold">Description</span>
        </label>
        <textarea
          placeholder="Enter task description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200 resize-none"
        />
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