import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">LOGO</NavLink>
        </li>
        <li>
          <NavLink to="/">Products</NavLink>
        </li>
        <li>
          <NavLink to="/">Infrastructure</NavLink>
        </li>
        <li>
          <NavLink to="/">Quality Assurance</NavLink>
        </li>
        <li>
          <NavLink to="/">About</NavLink>
        </li>
        <li>
          <NavLink to="/">ENG</NavLink>
        </li>
        <li>
          <NavLink to="/">BUTTON</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
