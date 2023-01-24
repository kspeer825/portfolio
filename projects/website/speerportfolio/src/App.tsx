import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import Professional from './pages/Professional';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/professional" element={<Professional />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
