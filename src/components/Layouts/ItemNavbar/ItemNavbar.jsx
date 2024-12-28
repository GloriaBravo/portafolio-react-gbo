import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import './ItemNavbar.css';  


export const ItemNavbar = ({ link, content }) => {
  return (
    <li className="navbar-item">
      <NavLink
        to={link}
        className="navbar-link"
        activeClassName="active" 
      >
        {content}
      </NavLink>
    </li>
  );
};

ItemNavbar.propTypes = {
  link: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
