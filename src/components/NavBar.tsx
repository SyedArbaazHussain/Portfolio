import { useState, useEffect, useRef } from "react";
import DarkMode from "../assets/dark-mode.svg";
import LightMode from "../assets/light-mode.svg";
import DarkModeHover from "../assets/dark-mode-hover.svg";
import LightModeHover from "../assets/light-mode-hover.svg";
import HamBurger from "../assets/hamburger.svg";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
      <nav className="z-50 sticky top-[10vh] ml-[10vw] w-fit rounded-full transition-all duration-300 ease-in-out">
        <div className="flex-row-reverse flex justify-center items-center px-0 mx-auto">
          {/* Mobile Menu Button */}
          <div className="flex gap-4">
            <button
              className="p-3 rounded-full text-black  bg-blue-700 hover:bg-blue-900 focus:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-white transition-transform duration-300 transform hover:scale-110"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <img className="h-6 w-6" src={HamBurger} alt="HamBurger"/>
            </button>
            <button
                onClick={toggleDarkMode}
                type="button"
                aria-pressed={isDarkMode}
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                className="group block px-3 py-2 text-base font-semibold rounded-full w-fit
                          text-white dark:text-black text-left
                          bg-blue-900 dark:bg-blue-200
                          hover:bg-blue-500/80 dark:hover:bg-blue-400 hover:text-black
                          transition-transform duration-300 transform hover:scale-110"
              >
                {isDarkMode ? (
                  <>
                    <span className="flex gap-2 group-hover:hidden">
                      <img src={LightMode} className="w-6" alt="Light Mode" /> LIGHT
                    </span>

                    <span className="hidden gap-2 group-hover:flex">
                      <img src={LightModeHover} className="w-6" alt="Light Mode" /> LIGHT
                    </span>
                  </>
                ) : (
                  <>
                    <span className="flex gap-2 group-hover:hidden">
                      <img src={DarkMode} className="w-6" alt="Dark Mode" /> DARK
                    </span>
                    {/* Hover state */}
                    <span className="hidden gap-2 group-hover:flex">
                      <img src={DarkModeHover} className="w-6" alt="Dark Mode" /> DARK
                    </span>
                  </>
                )}
              </button>

          </div>
        </div>

        {/* Menu */}
        {isOpen && (
          <div
            ref={menuRef}
            className="ml-7 sm:ml-0 absolute inset-x-0 bg-white dark:bg-blue-900 bg-opacity-50 dark:bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-md rounded-3xl transition-transform duration-500 ease-in-out mt-2"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => (window.location.href = "#")}
                className="block w-full text-left px-3 py-2 text-base font-semibold text-black dark:text-white dark:hover:bg-blue-700  hover:bg-blue-500 rounded-3xl transition duration-300"
              >
                HOME
              </button>
              <button
                onClick={() => (window.location.href = "#about")}
                className="block w-full text-left px-3 py-2 text-base font-semibold text-black dark:text-white dark:hover:bg-blue-700  hover:bg-blue-500 rounded-3xl transition duration-300"
              >
                ABOUT
              </button>
              <button
                onClick={() => (window.location.href = "#projects")}
                className="block w-full text-left px-3 py-2 text-base font-semibold text-black dark:text-white dark:hover:bg-blue-700  hover:bg-blue-500 rounded-3xl transition duration-300"
              >
                PROJECTS
              </button>
              <button
                onClick={() => (window.location.href = "#blogs")}
                className="block w-full text-left px-3 py-2 text-base font-semibold text-black dark:text-white dark:hover:bg-blue-700  hover:bg-blue-500 rounded-3xl transition duration-300"
              >
                BLOGS
              </button>
            </div>
          </div>
        )}
      </nav>
  );
};

export default NavBar;