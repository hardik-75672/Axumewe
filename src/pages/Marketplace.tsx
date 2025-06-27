import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Filter, 
  Search, 
  ShoppingCart, 
  Star, 
  Download, 
  Package,
  Gamepad2,
  BookOpen,
  Palette,
  Zap
} from 'lucide-react';

const Marketplace = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { name: 'All', icon: Package, count: 24 },
    { name: 'Speculative Tools', icon: Zap, count: 8 },
    { name: 'Learning Products', icon: BookOpen, count: 6 },
    { name: 'Posters & Artifacts', icon: Palette, count: 5 },
    { name: 'Web Games & Apps', icon: Gamepad2, count: 5 }
  ];

  const products = [
    {
      id: 1,
      title: "Climate Resilient City Builder",
      category: "Web Games & Apps",
      price: 49.99,
      format: "Digital Download",
      rating: 4.9,
      reviews: 127,
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Interactive simulation game for designing climate-resilient urban environments",
      tags: ["Simulation", "Climate", "Urban Planning"],
      featured: true
    },
    {
      id: 2,
      title: "Transition Design Card Deck",
      category: "Speculative Tools",
      price: 29.99,
      format: "Printable PDF",
      rating: 4.8,
      reviews: 89,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "52 strategic thinking cards for navigating complex transitions",
      tags: ["Strategy", "Cards", "Workshop"],
      featured: false
    },
    {
      id: 3,
      title: "Regenerative Futures Playbook",
      category: "Learning Products",
      price: 39.99,
      format: "Digital + Print",
      rating: 4.9,
      reviews: 156,
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Complete guide to regenerative design thinking and implementation",
      tags: ["Guide", "Regenerative", "Design"],
      featured: true
    },
    {
      id: 4,
      title: "African Futures Poster Series",
      category: "Posters & Artifacts",
      price: 19.99,
      format: "High-res Digital",
      rating: 4.7,
      reviews: 73,
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Beautiful poster series celebrating African innovation and futures",
      tags: ["Art", "Inspiration", "Culture"],
      featured: false
    },
    {
      id: 5,
      title: "Systems Thinking Canvas",
      category: "Speculative Tools",
      price: 24.99,
      format: "Printable PDF",
      rating: 4.8,
      reviews: 94,
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Visual framework for mapping complex systems and relationships",
      tags: ["Canvas", "Systems", "Framework"],
      featured: false
    },
    {
      id: 6,
      title: "Community Resilience Toolkit",
      category: "Learning Products",
      price: 59.99,
      format: "Digital Kit",
      rating: 4.9,
      reviews: 112,
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Comprehensive toolkit for building community resilience and adaptation",
      tags: ["Community", "Resilience", "Toolkit"],
      featured: true
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
                Marketplace
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-display font-bold text-neutral-900 mb-8"
            >
              Tools for
              <span className="text-primary-500"> Transformation</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-serif"
            >
              Discover our collection of games, simulations, frameworks, and learning materials 
              designed to help you navigate complex challenges and design regenerative futures.
            </motion.p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
              <input
                type="text"
                placeholder="Search tools and resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border border-neutral-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.name
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                <category.icon size={18} />
                <span>{category.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeCategory === category.name
                    ? 'bg-white/20 text-white'
                    : 'bg-neutral-200 text-neutral-500'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-neutral-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {product.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-tribal-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  )}

                  <div className="absolute top-4 right-4">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-4 right-4"
                  >
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200">
                      <ShoppingCart size={20} />
                    </button>
                  </motion.div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-tribal-gold fill-current" />
                      <span className="text-sm font-medium text-neutral-700">{product.rating}</span>
                      <span className="text-sm text-neutral-500">({product.reviews})</span>
                    </div>
                    <div className="flex items-center space-x-1 text-neutral-500">
                      <Download size={16} />
                      <span className="text-sm">{product.format}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-primary-500 transition-colors duration-300">
                    {product.title}
                  </h3>

                  <p className="text-neutral-600 leading-relaxed mb-4 text-sm">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary-500">
                      ${product.price}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-primary-500 text-white px-6 py-2 rounded-full font-medium hover:bg-primary-600 transition-colors duration-200"
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-neutral-700 mb-2">No products found</h3>
              <p className="text-neutral-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Stay Updated on New Tools
            </h2>
            <p className="text-xl text-white/90 mb-8 font-serif">
              Be the first to know when we release new games, frameworks, and learning materials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border-0 focus:ring-2 focus:ring-white/50 transition-all duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-neutral-100 transition-colors duration-200"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Marketplace;