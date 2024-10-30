
// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Estilos personalizados (opcional)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">MyApp</Link>
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        </li>
        <li>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </li>
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </nav>
  );
};

export default Navbar;
