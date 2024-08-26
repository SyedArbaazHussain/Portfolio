import { useState, useEffect } from 'react';
import ProfilePicture from '../../public/me-head-circle.png'; // Adjust the import path as needed

const Navbar = () => {
    const [isShrunk, setIsShrunk] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Adjust this value as needed
                setIsShrunk(true);
            } else {
                setIsShrunk(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar ${isShrunk ? 'shrink' : ''}`}>
            <img className='navbar-image' src={ProfilePicture} width="80px" alt="Profile" />
            <p className='navbar-name'>SYED ARBAAZ HUSSAIN</p>
            <div className="hamburger" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
