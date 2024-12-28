import React from 'react';
import './Projects.css'; 
import { Header } from '../Header/Header';

const projectData = [
    {
        id: 1,
        title: 'Piedra, papel y tijera',
        description: 'Se realiza una aplicacion que se puede interactuar en la web y se puede jugar contra el computador',
        imageUrl: '/images/Experiences/piedra.JPG', 
        link: 'https://trabajo-triqui.vercel.app', 
    },
    {
        id: 2,
        title: 'Gestor de Finanzas',
        description: 'Se realiza una aplicacion la cual se puede llevar un control de los gastos, y los pagos recibidos',
        imageUrl: '/images/Experiences/gestor_finanzas.JPG', 
        link: 'https://complementaria.vercel.app',
    },
    {
        id: 3,
        title: 'Mascotas',
        description: 'Esta aplicacion se realizo para la muestra de diferentes mascotas para su adopcion.',
        imageUrl: '/images/Experiences/mascotas.JPG', 
        link: 'https://mascotas-html-ohf9.vercel.app',
    },
];

export const Projects = () => {
    return (
        <>
        <Header />
        <div className="projects-container">
            {projectData.map((project) => (
                <div key={project.id} className="project-card">
                    <img src={project.imageUrl} alt={project.title} className="project-image" />
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                    >
                        Visitar
                    </a>
                </div>
            ))}
        </div>
        </>
    );
};
