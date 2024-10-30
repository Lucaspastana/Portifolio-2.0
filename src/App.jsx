// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './nav'; // Verifique se o caminho está correto

// Definindo os componentes diretamente no App.js para teste
const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Us</h1>;
const Services = () => <h1>Our Services</h1>;
const Contact = () => <h1>Contact Us</h1>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;

