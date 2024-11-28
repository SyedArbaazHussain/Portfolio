import { useState, useEffect, useRef } from "react";
import headImg from "/me-head-circle-thumb.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <nav className="sticky top-4 w-full dark:bg-slate-500 bg-gray-800 bg-opacity-20 dark:bg-opacity-50 backdrop-filter backdrop-blur-md border-4 border-blue-400 dark:border-blue-500 rounded-full transition-all duration-500 ease-in-out">
      <div className="flex justify-between items-center h-16 px-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <img
            className="h-12 w-12 transition-transform duration-300 hover:scale-110"
            src={headImg}
            alt="My Image"
          />
          <div className="ml-4 text-xl font-bold text-black sm:text-xl md:text-2xl dark:text-white">
            SYED ARBAAZ HUSSAIN
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:max-lg:space-x-1 md:space-x-4">
          <button
            onClick={() => (window.location.href = "#")}
            className="bg-blue-500 px-3 py-2 rounded-full text-xs font-medium dark:text-white text-black sm:text-sm md:text-base transition duration-300 hover:bg-blue-600"
          >
            HOME
          </button>
          <button
            onClick={() => (window.location.href = "#about")}
            className="bg-blue-500 px-3 py-2 rounded-full text-xs font-medium dark:text-white text-black sm:text-sm md:text-base transition duration-300 hover:bg-blue-600"
          >
            ABOUT
          </button>
          <button
            onClick={() => (window.location.href = "#projects")}
            className="bg-blue-500 px-3 py-2 rounded-full text-xs font-medium dark:text-white text-black sm:text-sm md:text-base transition duration-300 hover:bg-blue-600"
          >
            PROJECTS
          </button>
          <button
            onClick={() => (window.location.href = "#contact")}
            className="bg-blue-500 px-3 py-2 rounded-full text-xs font-medium dark:text-white text-black sm:text-sm md:text-base transition duration-300 hover:bg-blue-600"
          >
            CONTACT
          </button>
          <button
            onClick={toggleDarkMode}
            className="bg-blue-500 px-3 py-2 rounded-full text-xs font-medium text-black dark:text-white sm:text-sm md:text-base transition duration-300 hover:bg-blue-600"
          >
            {isDarkMode ? "Light" : "Dark"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full text-black hover:bg-blue-500 bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white transition-transform duration-300 transform hover:scale-110"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-50 inset-x-0 bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-md rounded-3xl transition-transform duration-500 ease-in-out"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => (window.location.href = "#home")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-black dark:text-white hover:bg-gray-200 transition duration-300"
            >
              HOME
            </button>
            <button
              onClick={() => (window.location.href = "#about")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-black dark:text-white hover:bg-gray-200 transition duration-300"
            >
              ABOUT
            </button>
            <button
              onClick={() => (window.location.href = "#projects")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-black dark:text-white hover:bg-gray-200 transition duration-300"
            >
              PROJECTS
            </button>
            <button
              onClick={() => (window.location.href = "#contact")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-black dark:text-white hover:bg-gray-200 transition duration-300"
            >
              CONTACT
            </button>
            <button
              onClick={toggleDarkMode}
              className="block w-full text-left px-3 py-2 text-base font-medium text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
            >
              {isDarkMode ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
