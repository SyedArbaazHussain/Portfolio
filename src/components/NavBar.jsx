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
    <nav className="sticky top-0 flex w-full bg-green-600 justify-center items-center h-[10vh]">
      <div className="flex w-screen h-full xl:w-4/5 xl:h-4/5 bg-red-600 text-center items-center gap-5 ">
        <div className="h-full">
          <img
            className="h-full bg-yellow-700"
            src="/me-head-circle.png"
            alt="My Image"
          />
        </div>
        <div className="flex justify-center items-center h-full flex-1 bg-yellow-700">
          <div className="text-xl">SYED ARBAAZ HUSSAIN</div>
        </div>
        <div className="hidden flex-grow xl:flex xl:flex-row xl:flex-grow ">
          <div className="bg-slate-500 flex-grow">3</div>
          <div className="bg-slate-500 flex-grow">23</div>
          <div className="bg-slate-500 flex-grow">33</div>
          <div className="bg-slate-400 flex-grow">4</div>
          <div className="bg-slate-300 flex-grow">5</div>
          <div className="bg-slate-300 flex-grow">56</div>
          <div className="bg-slate-300 flex-grow">57</div>
          <div className="bg-slate-300 flex-grow">58</div>
        </div>
        <div className="flex h-full w-fit xl:hidden bg-yellow-700">
          <button
            className="relative flex items-center content-center justify-center rounded-full mx-2 h-full  bg-slate-700 ring-0 ring-gray-300 hover:ring-8 focus:ring-4 ring-opacity-30 transition duration-200 shadow-xl"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col justify-between w-6 h-6 transform transition-all duration-300 origin-center ">
              <div className="bg-white h-[4px] w-full rounded transform transition-all duration-300 origin-left group-focus:rotate-45 group-focus:w-2/3 delay-150"></div>
              <div className="bg-white h-[4px] w-full rounded transform transition-all duration-300 group-focus:translate-x-10"></div>
              <div className="bg-white h-[4px] w-full rounded transform transition-all duration-300 origin-left group-focus:-rotate-45 group-focus:w-2/3 delay-150"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed xl:hidden flex flex-col h-fit w-[80vw] top-[10vh] bg-gray-700 z-50"
        >
          <div className="bg-slate-500 flex-grow">3</div>
          <div className="bg-slate-500 flex-grow">23</div>
          <div className="bg-slate-500 flex-grow">33</div>
          <div className="bg-slate-400 flex-grow">4</div>
          <div className="bg-slate-300 flex-grow">5</div>
          <div className="bg-slate-300 flex-grow">56</div>
          <div className="bg-slate-300 flex-grow">57</div>
          <div className="bg-slate-300 flex-grow">58</div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
