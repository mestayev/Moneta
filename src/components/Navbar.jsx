// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/monetochka" className="nav-link">Монетка</Link></li>
        {/* <li><Link to="/ruletka" className="nav-link">Рулетка</Link></li> */}
        <li><Link to="/kosti" className="nav-link">Кости</Link></li>
        <li><Link to="/about" className="nav-link">О сайте</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
