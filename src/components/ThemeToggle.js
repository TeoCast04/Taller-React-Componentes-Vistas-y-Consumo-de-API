// src/components/ThemeToggle.js
import React, { useState } from 'react';

// Botón para alternar entre temas claro y oscuro
const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.body.style.backgroundColor = theme === 'light' ? '#333' : '#fff';
  };

  return (
    <button onClick={toggleTheme} style={{ position: 'absolute', top: '10px', right: '10px' }}>
      Cambiar Tema
    </button>
  );
};

export default ThemeToggle;
