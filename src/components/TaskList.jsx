/**
 * TaskList Component
 * Displays tasks in a responsive Pinterest-style Masonry layout
 * @component
 */

import { useState } from "react";
import Masonry from "react-masonry-css";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onToggle }) => {
  const [filter, setFilter] = useState("All");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true;
  });

  // Masonry breakpoints for responsive layout
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="p-4 sm:p-6 w-full">
      {/* header and filter Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
        <h2 className="text-2xl font-semibold text-primary text-center sm:text-left">
          Your Tasks
        </h2>

        <div className="flex justify-center sm:justify-end gap-2">
          {["All", "Completed", "Pending"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`btn btn-sm ${
                filter === type ? "btn-primary" : "btn-outline"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry grid */}
      {filteredTasks.length === 0 ? (
        <p className="text-center text-primary">No tasks found.</p>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto -ml-4" // fixes column spacing
          columnClassName="masonry-column pl-4 flex flex-col gap-4"
        >
          {filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          ))}
        </Masonry>
      )}
    </div>
  );
};

export default TaskList;