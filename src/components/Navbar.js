import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // For React Router navigation
import './Navbar.css'; // We'll create this CSS file for styling

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/podcast logo.jpg" alt="Podcast Logo" />
      </div>
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li onClick={toggleMenu}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/episodes">Episodes</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/about">About</Link>
        </li>
        {/* <li>
          <Link to="/subscribe">Subscribe</Link>
        </li> */}
      </ul>
      <div className="burger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;