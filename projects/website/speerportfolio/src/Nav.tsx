import React, { FunctionComponent } from 'react';
import { NavLink } from "react-router-dom";
import linkedin_logo from './content/linkedin_logo.svg';
import github_logo from './content/github_logo.svg';
import gmail_logo from './content/gmail_logo.png';
import './Nav.css';


const NavBar: FunctionComponent<{}> = () => {

  return (
    <nav className="Nav">
      <NavLink className="NavLink" to="/"> Home </NavLink>
      <NavLink className="NavLink" to="/projects"> Personal Projects </NavLink>
      <NavLink className="NavLink" to="/professional"> Professional Experience  </NavLink>
      <NavLink className="NavLink" to="/about"> About </NavLink>
      <a href="https://www.linkedin.com/in/kyle-d-speer">
        <img src={linkedin_logo} className="App-logo" alt="LinkedIn Logo" />
      </a>
      <a href="https://github.com/kspeer825">
        <img src={github_logo} className="App-logo" alt="Github Logo" />
      </a>
      <a href={`mailto:kyle.d.speer@gmail.com?subject=""&body=""`}>
        <img src={gmail_logo} className="App-logo" alt="GMail Logo" />
      </a>

    </nav >
  );
};

export default NavBar;
