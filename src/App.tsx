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
import MarketplaceHeader from "./components/MarketplaceHeader";
import MarketplacePage from "./pages/MarketPlacePages";
import EventsPage from "./components/EventsPage";
import ShowRoomPage from "./pages/ShowroomPages";

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section id="home">
          <HomePage />
        </section>

        {/* Services Section */}
        <section id="services">
          <Services />
        </section>

        {/* showroom Section */}
        <section id="showroom">
          <ShowRoomPage />
        </section>

        <section id="marketplace">
          <MarketplacePage />
        </section>

        <section id="events">
          <EventsPage />
        </section>

        <section id="Approach">
          <Approach />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>

        {/* About Section */}
        {/* <section id="about">
          <About />
        </section> */}

        {/* Portfolio Section */}
        {/* <section id="portfolio">
          <Portfolio />
        </section> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
