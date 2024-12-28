import { BusinessCard } from '../../Layouts/BussinessCard/BussinessCard';
import { ContainerSection } from '../../Layouts/ContainerSection/ContainerSection';
import { Header } from '../../Layouts/Header/Header';
import { Appss } from '../../Layouts/IntroProfile/IntroProfile';
import { Projects } from '../../Layouts/Projects/Projects';
import { ContactMe } from '../ContactMe/ContactMe';
import './Home.css';

export const Home = () => {
  return (
    <>
      <Header />
      <main>

        <ContainerSection>
          <section aria-labelledby="intro-profile">
            <h2 id="intro-profile">Sobre Mí</h2>
            <Appss
              src={("../../assets/images/Foto-Glory.jpeg")}
              alt="Foto de Gloria Bravo Oviedo"
            />
          </section>
        </ContainerSection>

        <ContainerSection>
          <section aria-labelledby="projects">
            <h2 id="projects">Proyectos</h2>
            <Projects />
          </section>
        </ContainerSection>

        <ContainerSection>
          <section aria-labelledby="business-card">
            <h2 id="business-card">Tarjeta de Presentación</h2>
            <BusinessCard
              name="Gloria Bravo Oviedo"
              title="Estudiante de Tecnología en Análisis y Desarrollo de Software"
              email="gloria72159@hotmail.com"
              phone="319 725 2865"
              imageUrl={("../../assets/images/Foto-Glory.jpeg")}
            />
          </section>
        </ContainerSection>

        <ContainerSection>
          <section aria-labelledby="contact-me">
            <h2 id="contact-me">Contáctame</h2>
            <ContactMe />
          </section>
        </ContainerSection>

      </main>
    </>
  );
};
