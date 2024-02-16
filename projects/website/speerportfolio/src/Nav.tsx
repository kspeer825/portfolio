import React, { FunctionComponent } from 'react';
import { NavLink } from "react-router-dom";
import './Nav.css';


const NavBar: FunctionComponent<{}> = () => {

  return (
    <nav className="Nav">
      <NavLink className="NavLink" to="/"> Home </NavLink>
      <NavLink className="NavLink" to="/professional"> Professional Experience </NavLink>
      <NavLink className="NavLink" to="/projects"> Personal Projects </NavLink>
      <NavLink className="NavLink" to="/about"> About </NavLink>
    </nav >
  );
};

export default NavBar;
