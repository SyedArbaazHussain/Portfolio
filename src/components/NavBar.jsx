import React, { useState, useEffect, useRef } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference for detecting outside clicks

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <nav className="sticky top-0 flex w-full bg-green-600 justify-center items-center h-[10vh]">
      <div className="flex w-4/5 bg-red-600 text-center items-center gap-5 h-4/5">
        <div className="h-full">
          <img className="h-full" src="/me-head-circle.png" alt="My Image" />
        </div>
        <div className="flex justify-center items-center h-full flex-1">
          <div className="text-xl">SYED ARBAAZ HUSSAIN</div>
        </div>
        <div className="hidden md:flex md:flex-row flex-grow">
          <div className="bg-slate-500 flex-grow">3</div>
          <div className="bg-slate-400 flex-grow">4</div>
          <div className="bg-slate-300 flex-grow">5</div>
        </div>
        <div className="flex h-full w-fit md:hidden">
          <button
            className="relative flex items-center justify-center rounded-full w-[50px] h-[50px] bg-slate-700 ring-0 ring-gray-300 hover:ring-8 focus:ring-4 ring-opacity-30 transition duration-200 shadow-md"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center">
              <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg] group-focus:w-2/3 delay-150"></div>
              <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10"></div>
              <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-focus:w-2/3 delay-150"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed md:hidden flex flex-col h-screen w-[80vw] left-[10vw] top-[10vh] bg-white z-50"
        >
          <div className="bg-slate-500">3</div>
          <div className="bg-slate-400">4</div>
          <div className="bg-slate-300">5</div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
