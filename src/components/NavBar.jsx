import { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';

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
      <nav className="sticky top-0 w-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg">
      <div className="flex justify-between items-center h-16 px-4 max-w-7xl mx-auto">
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full"
              src="/me-head-circle.png"
              alt="My Image"
            />
            <div className="ml-4 text-xl font-bold text-white sm:text-2xl md:text-3xl">
              SYED ARBAAZ HUSSAIN
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <NavLink href="#home">HOME</NavLink>
            <NavLink href="#about">ABOUT</NavLink>
            <NavLink href="#projects">PROJECTS</NavLink>
            <NavLink href="#contact">CONTACT</NavLink>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
  
        {/* Mobile Menu */}
        {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-16 inset-x-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-md"
        >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink href="#home">HOME</MobileNavLink>
              <MobileNavLink href="#about">ABOUT</MobileNavLink>
              <MobileNavLink href="#projects">PROJECTS</MobileNavLink>
              <MobileNavLink href="#contact">CONTACT</MobileNavLink>
            </div>
          </div>
        )}
      </nav>
    );
  };
  
  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
    >
      {children}
    </a>
  );
  
NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

  const MobileNavLink = ({ href, children }) => (
    <a
      href={href}
      className="text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
    >
      {children}
  </a>
);

MobileNavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
  
  export default NavBar;