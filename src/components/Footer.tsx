import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  ArrowRight,
  Globe,
  Brain,
} from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" },
  ];

  const services = [
    { name: "Sentient Business Design", id: "services" },
    { name: "AI-Augmented Foresight", id: "services" },
    { name: "Policy Simulation", id: "services" },
    { name: "MVP-as-a-Service", id: "services" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Facebook, href: "#", name: "Facebook" },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl fony-african font-bold mb-4">
                Join the Sentient Revolution
              </h3>
              <p className="text-neutral-300 text-lg">
                Subscribe to Future Seeds newsletter for monthly insights on
                sentient design, regenerative innovation, and stories from our
                global community of change agents.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-neutral-800 border border-neutral-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center group"
              >
                Subscribe
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  size={18}
                />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <button
                onClick={() => scrollToSection("home")}
                className="flex items-center space-x-2 mb-6 cursor-pointer"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-tribal-gold to-tribal-copper rounded-african flex items-center justify-center animate-drum-beat">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="text-2xl fony-african font-bold text-primary-400">
                  AxumWe
                </span>
              </button>
              <p className="text-neutral-300 mb-6 leading-relaxed font-african">
                Planetary design innovation studio leading the world in building
                sentient ventures, systems, and policies. We translate
                speculative foresight and ancestral wisdom into the building
                blocks of a thriving, post-regenerative civilization.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-neutral-800 rounded-african flex items-center justify-center hover:bg-tribal-gold transition-colors duration-200"
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => scrollToSection(link.id)}
                      className="text-neutral-300 hover:text-tribal-gold transition-colors duration-200 cursor-pointer font-african text-left"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul> */}
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => scrollToSection(service.id)}
                      className="text-neutral-300 hover:text-tribal-gold transition-colors duration-200 cursor-pointer font-african text-left"
                    >
                      {service.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Mail className="text-tribal-gold mt-1" size={16} />
                  <div>
                    <p className="text-neutral-300 text-sm font-african">
                      towncryer@axumwe.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="text-tribal-gold mt-1" size={20} />
                  <div>
                    <p className="text-neutral-300 text-sm font-african">
                      4D Unit, Karaoke Drive, Ruaka, Nairobi, Kenya
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="text-tribal-gold mt-1" size={18} />
                  <div>
                    <p className="text-neutral-300 text-sm font-african">
                      330 Arrowhead Blvd, Unit 50 A, Jonesborrow, Georgia, 30236
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-400">
            <p className="font-african">
              © 2025 AxumWe Design future studio. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <motion.a
                href="#"
                whileHover={{ color: "#FFD700" }}
                className="hover:text-tribal-gold transition-colors duration-200 font-african"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: "#FFD700" }}
                className="hover:text-tribal-gold transition-colors duration-200 font-african"
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: "#FFD700" }}
                className="hover:text-tribal-gold transition-colors duration-200 font-african"
              >
                Cookie Policy
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
