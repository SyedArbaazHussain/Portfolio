import { useState, useEffect, useRef } from "react";
import DarkMode from "../assets/dark-mode.svg";
import LightMode from "../assets/light-mode.svg";

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

  return (
    <>
      <nav className="z-50 sticky top-20 ml-32 max-sm:ml-7 max-md:ml-10 max-lg:ml-20 w-fit rounded-full transition-all duration-500 ease-in-out h-0">
        <div className="max-sm:flex-row-reverse flex justify-center items-center px-0 mx-auto">
          {/* Mobile Menu Button */}
          <div className="flex gap-4 max-sm:m-0">
            <button
              className="max-sm:m-0 p-3 rounded-full text-black hover:bg-blue-500 bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white transition-transform duration-300 transform hover:scale-110  cursor-hand-light dark:cursor-hand-dark"
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
            <button
              onClick={toggleDarkMode}
              className=" block px-3 py-2 text-base font-semibold rounded-full w-fit text-white dark:text-black dark:hover:bg-blue-400 hover:bg-blue-700 transition duration-300 text-left bg-blue-900 dark:bg-blue-200  cursor-hand-light dark:cursor-hand-dark"
            >
              {isDarkMode ? (
                <span className="flex gap-2">
                  <img src={LightMode} className="w-6" />
                  LIGHT
                </span>
              ) : (
                <span className="flex gap-2">
                  <img src={DarkMode} className="w-6" />
                  DARK
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="max-sm:ml-7 absolute inset-x-0 bg-white dark:bg-blue-900 bg-opacity-50 dark:bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-md rounded-3xl transition-transform duration-500 ease-in-out mt-2"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => (window.location.href = "#")}
                className="block w-full text-left px-3 py-2 text-base font-semibold text-black dark:text-white dark:hover:bg-blue-700  hover:bg-blue-500 rounded-3xl transition duration-300  cursor-hand-light dark:cursor-hand-dark"
              >
                HOME
              </button>
              <button
                onClick={() => (window.location.href = "#about")}
                className="block w-full text-left px-3 py-2 text-base font-semibold text-black dark:text-white dark:hover:bg-blue-700  hover:bg-blue-500 rounded-3xl transition duration-300  cursor-hand-light dark:cursor-hand-dark"
              >
                ABOUT
              </button>
              <button
                onClick={() => (window.location.href = "#projects")}
                className="block w-full text-left px-3 py-2 text-base font-semibold text-black dark:text-white dark:hover:bg-blue-700  hover:bg-blue-500 rounded-3xl transition duration-300  cursor-hand-light dark:cursor-hand-dark"
              >
                PROJECTS
              </button>
              {/* <button
                onClick={() => (window.location.href = "#contact")}
                className="block w-full text-left px-3 py-2 text-base font-semibold text-black dark:text-white dark:hover:bg-blue-700  hover:bg-blue-500 rounded-3xl transition duration-300  cursor-hand-light dark:cursor-hand-dark"
              >
                CONTACT
              </button> */}
              <button
                onClick={() => (window.location.href = "#blogs")}
                className="block w-full text-left px-3 py-2 text-base font-semibold text-black dark:text-white dark:hover:bg-blue-700  hover:bg-blue-500 rounded-3xl transition duration-300  cursor-hand-light dark:cursor-hand-dark"
              >
                BLOGS
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
