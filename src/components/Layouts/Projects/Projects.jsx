import React from 'react';
import './Projects.css'; // Archivo CSS específico para el estilo de las cards

const projectData = [
    {
        id: 1,
        title: 'Piedra, papel y tijera',
        description: 'Se realiza una aplicacion que se puede interactuar en la web y se puede jugar contra el computador',
        imageUrl: '/src/assets/images/Experiences/piedra.JPG',
    },
    {
        id: 2,
        title: 'Api Los Simpson',
        description: 'Se consume una api, las cual funciona llamando diferentes personajes con su respectiva descripcion',
        imageUrl: '/src/assets/images/Experiences/Simpson.JPG',
    },
    {
        id: 1,
        title: 'Api Git',
        description: 'En este caso se consume una api la cual trae diferentes git.',
        imageUrl: '/src/assets/images/Experiences/git.JPG',
    },
    {
        id: 1,
        title: 'Eleccion',
        description: 'En este proyecto se hizo una combinacion de eleccion y formulario, para poder paracticar varias cosas en la aplicacion.',
        imageUrl: '/src/assets/images/Experiences/pagina-eleccion.JPG',
    },

];

export const Projects = () => {
    return (
        <div className="projects-container">
            {projectData.map((project) => (
                <div key={project.id} className="project-card">
                    <img src={project.imageUrl} alt={project.title} className="project-image" />
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                </div>
            ))}
        </div>
    );
};
