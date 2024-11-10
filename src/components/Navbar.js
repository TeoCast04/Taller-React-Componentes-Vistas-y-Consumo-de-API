// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ThemeToggle from './ThemeToggle'; // Importa el componente ThemeToggle


// Componente Navbar para la navegación principal
const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
      <div>
        <Link to="/">Inicio</Link> | 
        <Link to="/portfolio">Portafolio</Link> |
        <Link to="/contact">Contacto</Link>
      </div>
      {/* Botón de cambio de tema en la esquina superior derecha */}
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;

