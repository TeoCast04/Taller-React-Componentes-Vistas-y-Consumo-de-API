// src/pages/Portfolio.js
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import AddProjectForm from '../components/AddProjectForm';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  const addProject = (project) => setProjects([...projects, project]);
  const deleteProject = (index) => setProjects(projects.filter((_, i) => i !== index));
  const editProject = (index) => {
    const newTitle = prompt('Nuevo título:', projects[index].title);
    const newDescription = prompt('Nueva descripción:', projects[index].description);
    const updatedProjects = projects.map((proj, i) => i === index ? { title: newTitle, description: newDescription } : proj);
    setProjects(updatedProjects);
  };

  return (
    <div>
      <h2>Mis Proyectos</h2>
      <AddProjectForm onAddProject={addProject} />
      {projects.map((proj, i) => (
        <ProjectCard
          key={i}
          title={proj.title}
          description={proj.description}
          onEdit={() => editProject(i)}
          onDelete={() => deleteProject(i)}
        />
      ))}
    </div>
  );
};

export default Portfolio;
