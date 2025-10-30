/**
 * TaskList Component
 * Displays tasks in a responsive Pinterest-style Masonry layout
 * (Filter buttons are for UI only; no filtering functionality)
 * @component
 */

import Masonry from "react-masonry-css";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onToggle }) => {
  // Masonry breakpoints for responsive layout
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="p-4 sm:p-6 w-full">
      {/* Header + Filter Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
        <h2 className="text-2xl font-semibold text-primary text-center sm:text-left">
          Your Tasks
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center sm:justify-end gap-2">
          {["All", "Completed", "Pending"].map((type) => (
            <button
              key={type}
              className="btn btn-sm btn-outline cursor-default opacity-70"
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      {tasks.length === 0 ? (
        <p className="text-center text-primary">No tasks found.</p>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto -ml-4" // fixes column spacing
          columnClassName="masonry-column pl-4 flex flex-col gap-4"
        >
          {tasks.map((task) => (
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