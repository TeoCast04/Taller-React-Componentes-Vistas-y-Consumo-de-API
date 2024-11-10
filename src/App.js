import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importa los componentes
import Navbar from './components/Navbar';  // Barra de navegación
import Footer from './components/Footer';  // Pie de página
import Home from './pages/home/Home';      // Página principal (home)
import Portfolio from './pages/Portfolio'; // Página del portafolio
import Contact from './pages/Contact';     // Página de contacto

// Componente principal de la app
function App() {
  return (
    <Router>
      {/* Barra de navegación */}
      <Navbar />
      
      {/* Contenido principal */}
      <div style={{ padding: '20px' }}>
        <Routes>
          {/* Rutas de las páginas */}
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      
      {/* Pie de página */}
      <Footer />
    </Router>
  );
}

export default App;
