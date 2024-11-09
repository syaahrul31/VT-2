import React from 'react';
import { FaSearch, FaBell, FaUserCircle, FaSun, FaMoon } from 'react-icons/fa';

function NavbarAdmin() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleSidebar = () => {
    // Implement your sidebar toggle functionality here
    alert('Sidebar toggle clicked');
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Implement dark mode toggle functionality here
    alert('Dark mode toggle clicked');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 md:left-64 border-b-2 border-gray-200 bg-gray-100 mx-8">
      <div className="flex justify-between items-center h-16">
        {/* Left Side: Menu Icon (Mobile) and Search Bar (Desktop) */}
        <div className="flex items-center">
          {/* Menu Icon for Mobile */}
          <button
            className="text-2xl text-gray-600 md:hidden"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            &#9776;
          </button>

          {/* Search Bar for Desktop */}
          <div className="hidden md:flex items-center">
            <FaSearch className="text-gray-500 mr-4" />
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
            />
          </div>
        </div>

        {/* Right Side: Notification Icon, Dark Mode Toggle, and Profile */}
        <div className="flex items-center space-x-4">
          {/* Notification Icon with Badge */}
          <div className="relative">
            <FaBell className="text-gray-600 text-xl" />
            <span className="absolute top-0 right-0 block w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </div>

          {/* Dark Mode Toggle */}
          <button
            className="text-xl text-gray-600 focus:outline-none"
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Profile Section */}
          <button className="flex items-center bg-blue-600 text-white px-3 py-1.5 rounded-full focus:outline-none">
            <FaUserCircle className="text-lg mr-2" />
            <span>Admin</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavbarAdmin;
