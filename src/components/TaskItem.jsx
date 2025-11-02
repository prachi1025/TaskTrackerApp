/**
 * TaskItem Component
 * Represents a single task with toggle, delete, and edit actions.
 * @component
 */

import { CheckCircle, Circle, Trash2, Pencil } from "lucide-react";

const TaskItem = ({ task, onDelete, onToggle, onEdit }) => {
  return (
    <div
      className={`shadow-md rounded-xl p-4 flex flex-col justify-between transition-all duration-200 break-words overflow-hidden ${
        task.completed ? "opacity-80 bg-primary/20" : "bg-base-100"
      }`}
    >
      {/* Top row */}
      <div className="flex items-center justify-between mb-3">
        {/* Left: Toggle complete */}
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

        {/* Right: Edit + Delete buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => onEdit(task.id)}
            className="text-blue-500 hover:text-blue-600 transition-colors"
            aria-label="Edit task"
          >
            <Pencil className="w-5 h-5" />
          </button>

          <button
            onClick={() => onDelete(task.id)}
            className="text-red-500 hover:text-red-600 transition-colors"
            aria-label="Delete task"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Task content */}
      <div>
        <h3
          className={`text-lg font-semibold break-words ${
            task.completed ? "line-through text-gray-600" : "text-primary"
          }`}
        >
          {task.name}
        </h3>

        {task.desc && (
          <p className="text-sm mt-1 text-gray-600 break-words">{task.desc}</p>
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

        {/* Created / Updated info */}
        <p className="text-xs text-gray-500 mt-2 italic">
          {task.updatedAt !== task.createdAt
            ? task.updatedAt
            : task.createdAt
        }
        </p>
      </div>
    </div>
  )
}

export default TaskItem;