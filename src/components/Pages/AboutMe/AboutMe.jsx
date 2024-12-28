import React from "react";
import { Header } from "../../Layouts/Header/Header";
import logo from "../../../assets/images/Experiences/Logo_Glory.jpeg";
import "./AboutMe.css";

export const AboutMe = () => {
	return (
		<>
			<Header />
			<section className="about-me-section">
				<img src={logo} alt="Logo" className="contact-logo" />
				<h2 id="about-me" className="about-me-title">
					¿Quién soy?
				</h2>
				<p className="about-me-description">
					Hola, me llamo Gloria Bravo Oviedo, actualmente soy
					estudiante de una Tecnología en Análisis y Desarrollo de
					Software en el Sena. Me gusta lo que estoy aprendiendo ya
					que es una evolución cada día a la tecnología. Mostraré
					algunos de los proyectos formativos realizados.
				</p>
			</section>
		</>
	);
};
