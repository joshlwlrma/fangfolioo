import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      
      <Link to="/" className="nav-logo-button">
        <span>FangFolio</span>
      </Link>
      
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/" className="button">
            <span>About Me</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="button">
            <span>Projects</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/skills" className="button">
            <span>Skills</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="button">
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;