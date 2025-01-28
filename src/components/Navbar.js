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
        <img src="/assets/logo.png" alt="Podcast Logo" />
      </div>
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/episodes">Episodes</Link>
        </li>
        <li>
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