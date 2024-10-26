import React from 'react';
import { ContainerSections } from '../../Layouts/ContainerSections/ContainerSections';
import { Header } from '../../Layouts/Header/Header';
import { Projects } from '../../Layouts/Projects/Projects';
import { IntroProfile } from '../../Layouts/IntroProfile/IntroProfile';
import { BusinessCard } from '../../Layouts/BusinessCard/BusinessCard'; // Asegúrate de importar el componente
import "./Home.css";

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <ContainerSections>
          <section aria-labelledby="about-me">
            <h2 id="about-me">¿Quién soy?</h2>
            <IntroProfile />
            <p>
              Hola, me llamo Gloria Bravo Oviedo, actualmente soy estudiante de una Tecnología en Análisis y Desarrollo de Software en el Sena.
              Me gusta lo que estoy aprendiendo ya que es una evolución cada día a la tecnología.
              Mostraré algunos de los proyectos formativos realizados.
            </p>
          </section>
        </ContainerSections>

        <ContainerSections>
          <section aria-labelledby="business-card">
            <h2 id="business-card">Tarjeta de Presentación</h2>
            <BusinessCard 
              name="Gloria Bravo Oviedo"
              title="Estudiante de Tecnología en Análisis y Desarrollo de Software"
              email="gloria.oviedo@example.com" // Cambia esto por tu email real
              phone="(123) 456-7890" // Cambia esto por tu número real
              imageUrl="ruta-a-tu-imagen.jpg" // Cambia esto por la ruta de tu imagen
            />
          </section>
        </ContainerSections>

        <ContainerSections>
          <section aria-labelledby="projects">
            <h2 id="projects">Proyectos</h2>
            <Projects />
          </section>
        </ContainerSections>
      </main>
    </>
  );
};



