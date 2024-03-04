import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Cotizacion from './Components/Cotizacion';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cotizacion" element={<Cotizacion />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;