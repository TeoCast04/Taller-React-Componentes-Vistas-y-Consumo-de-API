// src/components/AddProjectForm.js
import React, { useState } from 'react';

// Formulario para agregar proyectos al portafolio
const AddProjectForm = ({ onAddProject }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProject({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '10px' }}>
      <input
        type="text"
        placeholder="Título del proyecto"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Descripción del proyecto"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Agregar Proyecto</button>
    </form>
  );
};

export default AddProjectForm;
