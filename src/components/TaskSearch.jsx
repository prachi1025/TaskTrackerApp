/**
 * TaskSearch Component
 * Handles real-time searching of tasks
 * @component
 */

import { useState } from "react";

const TaskSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      placeholder="Search tasks..."
      value={query}
      onChange={handleChange}
      className="input input-bordered input-sm w-full sm:w-64 rounded-xl shadow-sm focus:ring-2 focus:ring-primary outline-none"
    />
  );
};

export default TaskSearch