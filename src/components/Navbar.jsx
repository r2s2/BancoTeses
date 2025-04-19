import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a CSS file for styling the Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Elaboração</Link></li>
        <li><Link to="/cadastro">Cadastro de Teses</Link></li>
        <li><Link to="/cadastro-dispositivos">Cadastro de Dispositivos</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;