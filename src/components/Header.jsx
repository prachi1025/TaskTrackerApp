/**
 * Header component for the application.
 * This component displays the app name and navigation links.
 * @component
 */

import { ListTodo, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-4 sm:px-6 fixed top-0 left-0 right-0 z-50">
        {/* Left section */}
        <div className="flex-1">
            <Link 
                to="/"
                className="text-xl sm:text-2xl font-bold text-primary flex items-center gap-2"
            >
                <ListTodo className="w-6 h-6" />
                Task Tracker 
            </Link>
        </div>

        {/* Right section */}
        <div className="flex-none ml-1">
            <Link 
                to="/settings"
                className="btn btn-ghost"
            >
                <Settings className="w-5 h-5" />
            </Link>
        </div>
    </div>
  )
}

export default Header