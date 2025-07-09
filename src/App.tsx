import React from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./pages/Contact";
import Approach from "./components/Approach";

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section id="home">
          <HomePage />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Services Section */}
        <section id="services">
          <Services />
        </section>

        {/* Portfolio Section */}
        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="Approach">
          <Approach />
        </section>
        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
