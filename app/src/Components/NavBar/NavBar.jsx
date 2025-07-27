import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import image from '../../assets/images/Logo/mainlogo.jpg';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={image} alt="Logo" />
      </div>

      <div className="title">
        <h1>
          Portraits <span>By</span> <span>Couple</span>
        </h1>
      </div>

      <button className="toggle-button" onClick={handleToggle}>
        ☰
      </button>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/home" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/services" onClick={closeMenu}>Services</Link>
        <Link to="/merge-arts" onClick={closeMenu}>Merge Arts</Link>
        <Link to="/photo-arts" onClick={closeMenu}>Photo Arts</Link>
        <Link to="/threading-photos" onClick={closeMenu}>Threading Photos</Link>
        <Link to="/customised-gifts" onClick={closeMenu}>Customised Gifts</Link>
      </div>

      <div className="action">
        <button>Add Fav</button>
      </div>
    </div>
  );
};

export default NavBar;
