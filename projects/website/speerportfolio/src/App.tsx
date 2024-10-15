import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import Professional from './pages/Professional';
import Carvings from './pages/Carvings';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/woodworking" element={<Carvings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
