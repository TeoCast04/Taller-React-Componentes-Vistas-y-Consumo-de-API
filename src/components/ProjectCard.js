// src/components/ProjectCard.js
import React from 'react';

// Tarjeta de Proyecto que muestra el título, descripción y botones para editar o eliminar
const ProjectCard = ({ title, description, onEdit, onDelete }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={onEdit}>Editar</button>
      <button onClick={onDelete}>Eliminar</button>
    </div>
  );
};

export default ProjectCard;
