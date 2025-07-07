import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Marketplace from './pages/Marketplace';
import Showroom from './pages/Showroom';
import Consulting from './pages/Consulting';
import Licensing from './pages/Licensing';
import Community from './pages/Community';
import Learning from './pages/Learning';
import Events from './pages/Events';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/showroom" element={<Showroom />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/licensing" element={<Licensing />} />
            <Route path="/community" element={<Community />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;