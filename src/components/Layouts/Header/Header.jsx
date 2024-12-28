import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav aria-label="Main navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active" aria-label="Ir a la página principal">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active" aria-label="Información sobre nosotros">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active" aria-label="Contacta con nosotros">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
