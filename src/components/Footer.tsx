import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", path: "/" },
    { name: "Marketplace", path: "/marketplace" },
    { name: "Showroom", path: "/showroom" },
    { name: "Consulting", path: "/consulting" },
    { name: "Community", path: "/community" },
  ];

  const services = [
    { name: "Custom Game Design", path: "/consulting" },
    { name: "Strategic Foresight", path: "/consulting" },
    { name: "Licensing Programs", path: "/licensing" },
    { name: "Facilitator Training", path: "/consulting" },
    { name: "Community Building", path: "/community" },
  ];

  const resources = [
    { name: "Learning Hub", path: "/learning" },
    { name: "Research Papers", path: "/learning" },
    { name: "Free Downloads", path: "/learning" },
    { name: "Newsletter Archive", path: "/learning" },
    { name: "Events Calendar", path: "/events" },
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
              <h3 className="text-3xl font-display font-bold mb-4">
                Join the Transformation
              </h3>
              <p className="text-neutral-300 text-lg">
                Subscribe to Future Seeds newsletter for monthly insights, new
                tools, and stories from our global community of change agents.
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
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="text-2xl font-display font-bold text-primary-400">
                  Axumewe
                </span>
              </Link>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                Empowering communities across Africa and beyond with games,
                simulations, and strategic tools that transform how we think
                about sustainability, resilience, and regenerative futures.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-200"
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
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path}>
                      <motion.span
                        whileHover={{ x: 5 }}
                        className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 cursor-pointer"
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
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
                    <Link to={service.path}>
                      <motion.span
                        whileHover={{ x: 5 }}
                        className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 cursor-pointer"
                      >
                        {service.name}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Resources */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <Link to={resource.path}>
                      <motion.span
                        whileHover={{ x: 5 }}
                        className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 cursor-pointer"
                      >
                        {resource.name}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="mt-8 space-y-3">
                <div className="flex items-start space-x-3">
                  <Mail className="text-primary-400 mt-1" size={16} />
                  <div>
                    <p className="text-neutral-300 text-sm">
                      hello@transitionstudio.io
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="text-primary-400 mt-1" size={16} />
                  <div>
                    <p className="text-neutral-300 text-sm">
                      +234 (0) 123 456 7890
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="text-primary-400 mt-1" size={16} />
                  <div>
                    <p className="text-neutral-300 text-sm">Lagos, Nigeria</p>
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
            <p>© 2024 Transition Design Studio. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <motion.a
                href="#"
                whileHover={{ color: "#C65D22" }}
                className="hover:text-primary-400 transition-colors duration-200"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: "#C65D22" }}
                className="hover:text-primary-400 transition-colors duration-200"
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: "#C65D22" }}
                className="hover:text-primary-400 transition-colors duration-200"
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
