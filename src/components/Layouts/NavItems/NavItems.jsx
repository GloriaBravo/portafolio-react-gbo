import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Usamos Routes en lugar de Switch
import { NavItems } from "./components/NavItems/NavItems"; // Asegúrate de importar el componente

const App = () => {
  return (
    <Router>
      <div>
        <NavItems /> {/* Barra de navegación */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/ContactMe" element={<ContactMe />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => <div>Home Page</div>;
const AboutMe = () => <div>About Me Page</div>;
const Projects = () => <div>Projects Page</div>;
const ContactMe = () => <div>Contact Me Page</div>;

export default App;
