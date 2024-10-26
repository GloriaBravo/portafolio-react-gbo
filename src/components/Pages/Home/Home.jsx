import React from 'react'
import { ContainerSections } from '../../Layouts/ContainerSections/ContainerSections';
import { Header } from '../../Layouts/Header/Header';
import { Projects } from '../../Layouts/Projects/Projects';
import { IntroProfile } from '../../Layouts/IntroProfile/IntroProfile';

export const Home = () => {
  return (
    <>
      <Header />
      <ContainerSections>
        <h2>¿Quién soy?</h2> {/* Corregido: añadido el signo de interrogación y la tilde */}
        <img src="" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi aliquam quis tempore id quibusdam dicta perferendis, 
          nisi quas necessitatibus, quasi, fugit nihil. Autem illo architecto repellat? Aliquid similique voluptas error.
        </p>
      </ContainerSections>
      <ContainerSections>
        <Projects />
      </ContainerSections>
      <IntroProfile />
    </>
  );
};

