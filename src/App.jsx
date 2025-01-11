// src/App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Monetochka from './components/Monetochka';
import Ruletka from './components/Ruletka';
import Kosti from './components/Kosti';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="app-content">
        <Routes>
        <Route path="/" element={<About />} />
          <Route path="/monetochka" element={<Monetochka />} />
          <Route path="/ruletka" element={<Ruletka />} />
          <Route path="/kosti" element={<Kosti />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
