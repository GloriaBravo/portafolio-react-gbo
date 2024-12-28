import React from "react";
import "./IntroProfile.css";
import logo from "../../../assets/images/Experiences/Logo_Glory.jpeg";

export const Appss = () => {
	return (
		<div>
			<h1>Mi Perfil</h1>
			<img src={logo} alt="Logo" className="contact-logo" />
      	<h2>Gloria Bravo O.</h2>
        <p>
          Soy una persona apasionada por la tecnología y la innovación. Me gusta aprender y
          mejorar constantemente. Me considero una persona proactiva y responsable, con una
          gran capacidad para trabajar en equipo y resolver problemas de manera efectiva.
        </p>
		</div>
	);
};
