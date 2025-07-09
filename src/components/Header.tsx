import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ShoppingCart, User, Bell, Search } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(3); // Mock cart count
  const [notifications, setNotifications] = useState(2); // Mock notifications

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mock backend functions
  const handleCartClick = () => {
    console.log("Cart clicked - would open cart sidebar");
  };

  const handleUserClick = () => {
    console.log("User clicked - would open user menu");
  };

  const handleNotificationClick = () => {
    console.log("Notifications clicked - would show notifications");
    setNotifications(0); // Clear notifications
  };

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Approach", id: "Approach" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-tribal-gold to-tribal-copper rounded-african flex items-center justify-center animate-drum-beat">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span
              className={`text-xl font-display font-bold transition-colors duration-300 ml-2 ${
                isScrolled ? "text-tribal-gold" : "text-white"
              }`}
            >
              AxumWe
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ y: -2 }}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    isScrolled
                      ? "text-neutral-700 hover:text-tribal-gold"
                      : "text-white hover:text-tribal-gold"
                  }`}
                >
                  {item.name}
                  {/* Hover indicator */}
                  <div
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-african scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                      isScrolled ? "bg-tribal-gold" : "bg-tribal-gold"
                    }`}
                  />
                </button>
              </motion.div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSearch("")}
              className={`p-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? "text-neutral-700 hover:bg-neutral-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <Search size={20} />
            </motion.button>

            {/* Notifications */}
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNotificationClick}
              className={`relative p-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? "text-neutral-700 hover:bg-neutral-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <Bell size={20} />
              {notifications > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {notifications}
                </motion.span>
              )}
            </motion.button> */}

            {/* Cart Button */}
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCartClick}
              className={`relative p-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? "text-neutral-700 hover:bg-neutral-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <ShoppingCart size={20} />
              {cartItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-tribal-kente text-white text-xs rounded-african w-5 h-5 flex items-center justify-center animate-drum-beat"
                >
                  {cartItems}
                </motion.span>
              )}
            </motion.button> */}

            {/* User Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleUserClick}
              className={`p-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? "text-neutral-700 hover:bg-neutral-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <User size={20} />
            </motion.button>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isScrolled
                  ? "bg-tribal-gold text-white hover:bg-tribal-copper font-african"
                  : "bg-tribal-gold/20 backdrop-blur-sm text-tribal-gold border border-tribal-gold/30 hover:bg-tribal-gold/30 font-african"
              }`}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-full transition-colors duration-300 ${
              isScrolled ? "text-neutral-700" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden bg-white/95 backdrop-blur-md overflow-hidden border-t border-neutral-200"
      >
        <nav className="px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <motion.div key={item.name} whileHover={{ x: 10 }}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left font-medium transition-colors duration-200 text-neutral-700 hover:text-primary-500"
              >
                {item.name}
              </button>
            </motion.div>
          ))}

          {/* Mobile Action Buttons */}
          <div className="pt-4 space-y-3 border-t border-neutral-200">
            <div className="flex items-center justify-between">
              <span className="text-sm text-neutral-600">Quick Actions</span>
              <div className="flex space-x-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSearch}
                  className="p-2 text-neutral-600 hover:text-primary-500 transition-colors"
                >
                  <Search size={18} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNotificationClick}
                  className="relative p-2 text-neutral-600 hover:text-primary-500 transition-colors"
                >
                  <Bell size={18} />
                  {notifications > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {notifications}
                    </span>
                  )}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCartClick}
                  className="relative p-2 text-neutral-600 hover:text-primary-500 transition-colors"
                >
                  <ShoppingCart size={18} />
                  {cartItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {cartItems}
                    </span>
                  )}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleUserClick}
                  className="p-2 text-neutral-600 hover:text-primary-500 transition-colors"
                >
                  <User size={18} />
                </motion.button>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-tribal-gold text-white py-3 rounded-african font-african font-medium hover:bg-tribal-copper transition-colors duration-200"
            >
              Get Started
            </motion.button>
          </div>
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Header;
