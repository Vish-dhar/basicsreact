import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import { ThemeProvider } from './ThemeContext.jsx';

import Home from './Home.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';
import Contact from './Contact.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);