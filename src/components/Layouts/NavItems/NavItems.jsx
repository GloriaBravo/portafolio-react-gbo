import React from "react";
import { ItemNavbar } from "../../UI/ItemNavbar/ItemNavbar";
import logo from "../../../assets/images/GLOIRY.jpg";
import "./NavItems.css";

export const NavItems = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />

      <ul className="navbar-list">
        <ItemNavbar content="Home" />
        <ItemNavbar content="About Me" />
        <ItemNavbar content="Contact Me" />
        <ItemNavbar content="Other Routes" />
      </ul>
    </nav>
  );
};
