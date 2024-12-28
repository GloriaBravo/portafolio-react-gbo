import { Projects } from "./components/Layouts/Projects/Projects";
import { ContactMe } from "./components/Pages/ContactMe/ContactMe";
import { AboutMe } from "./components/Pages/AboutMe/AboutMe";
import { Home } from "./components/Pages/Home/Home";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AboutMe" element={<AboutMe />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/ContactMe" element={<ContactMe />} />
    </Routes>
  );
};
