import React from 'react';
import './BusinessCard.css'; // Asegúrate de importar el CSS
import { BusinessCard } from "../../Layouts/BusinessCard/BusinessCard"; // Asegúrate de que esta ruta sea correcta


export const BusinessCard = ({ name, title, email, phone, imageUrl }) => {
  return (
    <div className="business-card">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p className="title">{title}</p>
      <p className="contact">Email: {email}</p>
      <p className="contact">Teléfono: {phone}</p>
    </div>
  );
};
