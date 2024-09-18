import { useState, useEffect, useRef } from "react";

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
    <nav className="sticky top-0 flex w-full bg-green-600 justify-center content-center items-center h-[9vh]">
      <div className="flex w-full h-full xl:w-[80vw] xl:h-full bg-red-600 text-center items-center gap-5 ">
        <div className="h-full flex-shrink-0 justify-center items-center content-center">
          <img
            className="h-5/6 bg-yellow-700"
            src="/me-head-circle.png"
            alt="My Image"
          />
        </div>
        <div className="flex justify-center items-center h-full flex-1 bg-yellow-700">
          <div className="text-3xl text-nowrap">SYED ARBAAZ HUSSAIN</div>
        </div>
        <div className="hidden flex-grow xl:flex xl:flex-row xl:flex-grow h-4/6 justify-center content-center">
          <div className="bg-slate-500 flex-grow justify-center content-center text-center text-xl">
            HOME
          </div>
          <div className="bg-slate-400 flex-grow justify-center content-center text-center text-xl">
            ABOUT
          </div>
          <div className="bg-slate-300 flex-grow justify-center content-center text-center text-xl">
            PROJECTS
          </div>
          <div className="bg-slate-600 flex-grow justify-center content-center text-center text-xl">
            CONTACT
          </div>
        </div>
        <div className="flex flex-shrink max-h-full h-5/6 px-1 py-1 min-w-20 max-w-22 xl:hidden bg-yellow-300">
          <button
            className="relative flex items-center content-center justify-center rounded-full mx-2 h-full w-full bg-slate-700 ring-0 ring-gray-300 hover:ring-8 focus:ring-4 ring-opacity-30 transition duration-200 shadow-xl"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col justify-center w-full h-full transform transition-all duration-300 origin-center items-center">
              <div className="bg-white h-[4px] w-2/6 my-[2px] py-[2px]  rounded transform transition-all duration-300 origin-left group-focus:rotate-45 group-focus:w-2/3 delay-150"></div>
              <div className="bg-white h-[4px] w-2/6 my-[2px] py-[2px]  rounded transform transition-all duration-300 group-focus:translate-x-10"></div>
              <div className="bg-white h-[4px] w-2/6 my-[2px] py-[2px]  rounded transform transition-all duration-300 origin-left group-focus:-rotate-45 group-focus:w-2/3 delay-150"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed xl:hidden flex flex-col h-[30%] w-[70vw] top-[10vh] bg-gray-700 z-50"
        >
          <div className="bg-slate-500 flex-grow justify-center content-center text-center text-2xl">
            HOME
          </div>
          <div className="bg-slate-400 flex-grow justify-center content-center text-center text-2xl">
            ABOUT
          </div>
          <div className="bg-slate-300 flex-grow justify-center content-center text-center text-2xl">
            PROJECTS
          </div>
          <div className="bg-slate-600 flex-grow justify-center content-center text-center text-2xl">
            CONTACT
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
