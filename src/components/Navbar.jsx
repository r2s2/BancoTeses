import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a CSS file for styling the Navbar

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Cadastro</Link>
                </li>
                <li>
                    <Link to="/cadastro-dispositivos">Cadastro de Dispositivos</Link>
                </li>
                <li>
                    <Link to="/elaboracao">Elaboração</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;