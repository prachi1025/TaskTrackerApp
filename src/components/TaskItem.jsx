/**
 * TaskItem Component
 * Represents a single task with toggle and delete actions.
 * @component
 */

import { CheckCircle, Circle, Trash2 } from "lucide-react";

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`shadow-md rounded-xl p-4 flex flex-col justify-between transition-all duration-200 break-words overflow-hidden ${
        task.completed ? "opacity-80 bg-primary" : "bg-base-100"
      }`}
    >
      {/* top rtow: toggle and delete buttons*/}
      <div className="flex items-center justify-between mb-3">
        {/* toggle button */}
        <button
          onClick={() => onToggle(task.id)}
          className="transition-transform hover:scale-110"
          aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
        >
          {task.completed ? (
            <CheckCircle className="w-6 h-6 text-green-500" />
          ) : (
            <Circle className="w-6 h-6 text-gray-400" />
          )}
        </button>

        {/* delete button */}
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 hover:text-red-600 transition-colors"
          aria-label="Delete task"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>

      {/* task content */}
      <div>
        <h3
          className={`text-lg font-semibold break-words ${
            task.completed ? "line-through text-gray-600" : "text-primary"
          }`}
        >
          {task.name}
        </h3>

        {task.desc && (
          <p className="text-sm mt-1 text-gray-600 break-words">
            {task.desc}
          </p>
        )}

        <span
          className={`badge mt-3 ${
            task.priority === "High"
              ? "badge-error"
              : task.priority === "Medium"
              ? "badge-warning"
              : "badge-success"
          }`}
        >
          {task.priority}
        </span>
      </div>
    </div>
  );
};

export default TaskItem;
