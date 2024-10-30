import { BusinessCard } from '../../Layouts/BussinessCard/BussinessCard';
import { ContainerSections } from '../../Layouts/ContainerSections/ContainerSections';
import { Header } from '../../Layouts/Header/Header';


Projects
import { IntroProfile } from '../../Layouts/IntroProfile/IntroProfile';
import { Projects } from '../../Layouts/Projects/Projects';
import { ContactMe } from '../ContactMe/ContactMe';
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
          <section aria-labelledby="projects">
            <h2 id="projects">Proyectos</h2>
            <Projects />
          </section>
        </ContainerSections>

        <ContainerSections>
          <section aria-labelledby="business-card">
            <h2 id="business-card">Tarjeta de Presentación</h2>
            <BusinessCard
              name="Gloria Bravo Oviedo"
              title="Estudiante de Tecnología en Análisis y Desarrollo de Software"
              email="gloria72159@hotmail.com"
              phone="319 725 2865"
              imageUrl="/src/assets/images/Foto-Glory.jpeg"
            />
          </section>
        </ContainerSections>
        
        <ContainerSections>
          <section aria-labelledby="contact-me">
            <ContactMe /> {/* Agrega el nuevo componente aquí */}
          </section>
        </ContainerSections>
      </main>
    </>
  );
};
