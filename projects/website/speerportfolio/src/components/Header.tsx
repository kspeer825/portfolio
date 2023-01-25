import React from 'react';
import '../App.css';
import linkedin_logo from '../content/linkedin_logo.svg';
import github_logo from '../content/github_logo.svg';
import gmail_logo from '../content/gmail_logo.png';


function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <h2> Kyle Speer </h2>
        <p> Hi! I'm a software engineer with interests in DevOps, testing, and woodworking. </p>
        <div className="App-header-links">
          <a href={`mailto:kyle.d.speer@gmail.com?subject=""&body=""`}>
            <img src={gmail_logo} className="App-logo" alt="GMail Logo" />
          </a>
          <a href="https://www.linkedin.com/in/kyle-d-speer">
            <img src={linkedin_logo} className="App-logo" alt="LinkedIn Logo" />
          </a>
          <a href="https://github.com/kspeer825">
            <img src={github_logo} className="App-logo" alt="Github Logo" />
          </a>
        </div>
      </header>
    </div >

  );
}
export default Header;
