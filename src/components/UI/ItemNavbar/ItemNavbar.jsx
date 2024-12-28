import React from 'react';
import { NavLink } from "react-router-dom";

export const ItemNavbar = ({ content, link }) => {
  return (
    <li className="navbar-item">
      <NavLink 
        to={link} 
        className="navbar-link" 
        activeClassName="active" 
        aria-label={`Ir a ${content}`}
      >
        {content}
      </NavLink>
    </li>
  );
};
