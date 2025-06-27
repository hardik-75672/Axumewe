import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Play,
  Star,
  Users,
  Globe,
  Zap,
  Sparkles,
  Target,
  Heart,
  Layers,
  Hexagon,
  Circle,
} from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const testimonialsRef = useRef(null);
  const impactRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, {
    once: true,
    margin: "-100px",
  });
  const isTestimonialsInView = useInView(testimonialsRef, {
    once: true,
    margin: "-100px",
  });
  const isImpactInView = useInView(impactRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const products = [
    {
      title: "Climate Resilient City Builder",
      category: "Simulation Game",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Design sustainable cities for the future with real-time climate modeling",
      icon: Target,
      color: "from-primary-500 to-secondary-500",
    },
    {
      title: "Transition Design Cards",
      category: "Speculative Tools",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Strategic thinking cards for navigating complex transformations",
      icon: Sparkles,
      color: "from-secondary-500 to-accent-500",
    },
    {
      title: "Regenerative Futures Playbook",
      category: "Learning Kit",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Complete guide to designing regenerative systems and communities",
      icon: Heart,
      color: "from-accent-500 to-primary-500",
    },
  ];

  const testimonials = [
    {
      name: "Dr. Amara Okafor",
      role: "Urban Planning Director",
      organization: "Lagos State Government",
      content:
        "The Climate City Builder transformed how we approach urban resilience planning. Our team now thinks systemically about climate adaptation.",
      avatar:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5,
    },
    {
      name: "Prof. Kwame Asante",
      role: "Sustainability Research Lead",
      organization: "University of Ghana",
      content:
        "These tools bridge the gap between academic theory and practical application. Our students are designing real solutions for their communities.",
      avatar:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5,
    },
    {
      name: "Zara Mohammed",
      role: "Innovation Director",
      organization: "African Development Bank",
      content:
        "The strategic foresight workshops have revolutionized our approach to development projects. We're now building for multiple possible futures.",
      avatar:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5,
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Change Makers Trained",
      color: "text-primary-500",
    },
    {
      icon: Globe,
      value: "25",
      label: "Countries Reached",
      color: "text-secondary-500",
    },
    {
      icon: Zap,
      value: "500+",
      label: "Projects Launched",
      color: "text-accent-500",
    },
    {
      icon: Star,
      value: "4.9",
      label: "Average Rating",
      color: "text-tribal-gold",
    },
  ];

  const impactMetrics = [
    {
      number: "2.5M",
      label: "Lives Impacted",
      description: "Through our tools and methodologies",
      icon: Heart,
    },
    {
      number: "150%",
      label: "Average ROI",
      description: "For organizations using our solutions",
      icon: Target,
    },
    {
      number: "85%",
      label: "Success Rate",
      description: "In achieving transformation goals",
      icon: Zap,
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center bg-gradient-to-br from-neutral-900 via-primary-900 to-secondary-900"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Geometric Shapes */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute top-20 left-10 w-32 h-32 border-2 border-tribal-gold/30 rounded-full"
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "2s" }}
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg rotate-45"
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "4s" }}
            className="absolute bottom-40 left-1/4 w-16 h-16 border-2 border-secondary-400/40 rotate-45"
          />

          {/* Animated Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-tribal-gold/60 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Main Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3601094/pexels-photo-3601094.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="African innovation and transformation"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-primary-900/70 to-secondary-900/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Content */}
            <div>
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-tight"
              >
                <span className="text-white">Design the</span>
                <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-tribal-gold via-primary-400 to-accent-400"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  Future Together
                </motion.span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-neutral-200 mb-12 max-w-3xl leading-relaxed font-serif"
              >
                Empowering communities across Africa and beyond with games,
                simulations, and strategic tools that transform how we think
                about sustainability, resilience, and regenerative futures.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6 mb-16"
              >
                <Link to="/marketplace">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(196, 93, 34, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 flex items-center justify-center shadow-2xl"
                  >
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Explore Our Tools
                    </motion.span>
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                      size={20}
                    />
                  </motion.button>
                </Link>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg hover:border-white transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Play className="mr-2" size={20} />
                  </motion.div>
                  Watch Demo
                </motion.button>
              </motion.div>

              {/* Animated Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{
                      scale: 1.1,
                      rotateY: 10,
                    }}
                    className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <stat.icon
                        className={`mx-auto mb-2 ${stat.color}`}
                        size={24}
                      />
                    </motion.div>
                    <motion.div
                      className="text-2xl font-bold text-white"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1, type: "spring" }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-neutral-300">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Visual Element - Enhanced with Animations */}
            <motion.div variants={itemVariants} className="relative">
              {/* Main 3D Card Container */}
              <motion.div
                animate={{
                  rotateY: [0, 5, 0],
                  rotateX: [0, 2, 0],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="relative perspective-1000"
              >
                {/* Central Hero Image */}
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    rotateY: 10,
                    rotateX: 5,
                  }}
                  className="relative overflow-hidden rounded-3xl shadow-2xl transform-gpu"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(196, 93, 34, 0.1), rgba(25, 118, 210, 0.1))",
                  }}
                >
                  <img
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="African innovation"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-500/30 to-transparent"></div>

                  {/* Animated Overlay Elements */}
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    {/* Floating Geometric Shapes */}
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 10, repeat: Infinity }}
                      className="absolute top-4 right-4 w-12 h-12 border-2 border-tribal-gold/60 rounded-full"
                    />

                    <motion.div
                      animate={{
                        rotate: [360, 0],
                        y: [0, -10, 0],
                      }}
                      transition={{ duration: 6, repeat: Infinity }}
                      className="absolute bottom-4 left-4 w-8 h-8 bg-accent-500/60 rounded-lg rotate-45"
                    />

                    {/* Hexagon Pattern */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.7, 0.3],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                      <Hexagon className="text-white/20" size={80} />
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Floating Achievement Cards */}
                <motion.div
                  initial={{ scale: 0, rotate: -15, x: -50, y: -50 }}
                  animate={{ scale: 1, rotate: 0, x: 0, y: 0 }}
                  transition={{ delay: 1, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.1, rotate: 5, y: -5 }}
                  className="absolute -top-8 -left-8 bg-gradient-to-r from-tribal-gold to-primary-500 text-white p-6 rounded-xl shadow-2xl backdrop-blur-sm border border-white/20"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="mb-2"
                  >
                    <Target className="text-white" size={24} />
                  </motion.div>
                  <div className="text-2xl font-bold mb-1">500+</div>
                  <div className="text-sm opacity-90">Active Projects</div>
                </motion.div>

                <motion.div
                  initial={{ scale: 0, rotate: 15, x: 50, y: 50 }}
                  animate={{ scale: 1, rotate: 0, x: 0, y: 0 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.1, rotate: -5, y: -5 }}
                  className="absolute -bottom-8 -right-8 bg-gradient-to-r from-accent-500 to-secondary-500 text-white p-6 rounded-xl shadow-2xl backdrop-blur-sm border border-white/20"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="mb-2"
                  >
                    <Globe className="text-white" size={24} />
                  </motion.div>
                  <div className="text-2xl font-bold mb-1">25</div>
                  <div className="text-sm opacity-90">Countries</div>
                </motion.div>

                {/* Floating Mini Cards */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute top-1/4 -right-12 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Layers className="text-tribal-gold" size={20} />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.6 }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute bottom-1/4 -left-12 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Circle className="text-secondary-400" size={20} />
                  </motion.div>
                </motion.div>

                {/* Animated Connection Lines */}
                <motion.div
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ delay: 2, duration: 2 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <svg className="w-full h-full" viewBox="0 0 400 400">
                    <motion.path
                      d="M50,50 Q200,100 350,50 T350,350 Q200,300 50,350 T50,50"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                      animate={{
                        strokeDashoffset: [0, -20],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#FFD700"
                          stopOpacity="0.6"
                        />
                        <stop
                          offset="50%"
                          stopColor="#C65D22"
                          stopOpacity="0.4"
                        />
                        <stop
                          offset="100%"
                          stopColor="#1976D2"
                          stopOpacity="0.6"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>

                {/* Pulsing Glow Effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-tribal-gold/20 to-secondary-500/20 rounded-3xl blur-xl"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-tribal-gold/70 rounded-full flex justify-center cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-tribal-gold rounded-full mt-2"
            />
          </motion.div>
          <motion.p
            className="text-tribal-gold text-sm mt-2 font-medium"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to explore
          </motion.p>
        </motion.div>
      </section>

      {/* Featured Products Section */}
      <section
        ref={featuresRef}
        className="py-24 bg-gradient-to-br from-white via-neutral-50 to-primary-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isFeaturesInView ? "visible" : "hidden"}
            className="text-center mb-20"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
                Featured Tools
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-6xl font-display font-bold text-neutral-900 mb-8"
            >
              Transform Your World with
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500">
                Purpose-Built Tools
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-serif"
            >
              From interactive simulations to strategic frameworks, our tools
              help you design regenerative solutions for complex challenges.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isFeaturesInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                variants={itemVariants}
                whileHover={{
                  y: -20,
                  scale: 1.05,
                  rotateY: 5,
                }}
                className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-neutral-100"
              >
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Floating Icon */}
                  <motion.div
                    className="absolute top-4 right-4"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${product.color} rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <product.icon className="text-white" size={24} />
                    </div>
                  </motion.div>

                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-neutral-800 px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <motion.h3
                    className="text-2xl font-semibold text-neutral-900 mb-4 group-hover:text-primary-500 transition-colors duration-300"
                    whileHover={{ x: 10 }}
                  >
                    {product.title}
                  </motion.h3>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-r ${product.color} text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200 flex items-center group`}
                  >
                    Learn More
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                      size={16}
                    />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isFeaturesInView ? "visible" : "hidden"}
            className="text-center mt-16"
          >
            <Link to="/marketplace">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(196, 93, 34, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-12 py-4 rounded-full font-semibold text-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-xl"
              >
                View All Tools
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section
        ref={impactRef}
        className="py-24 bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-tribal-pattern"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isImpactInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-display font-bold text-white mb-8"
            >
              Measuring Our
              <span className="text-tribal-gold"> Impact</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-serif"
            >
              Real results from communities and organizations transforming their
              approach to complex challenges through our tools and
              methodologies.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isImpactInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  rotateY: 10,
                }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-tribal-gold rounded-full mb-6"
                >
                  <metric.icon className="text-white" size={32} />
                </motion.div>
                <motion.div
                  className="text-5xl font-bold text-white mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2, type: "spring" }}
                >
                  {metric.number}
                </motion.div>
                <h3 className="text-xl font-semibold text-tribal-gold mb-2">
                  {metric.label}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={testimonialsRef}
        className="py-24 bg-gradient-to-br from-neutral-50 to-primary-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isTestimonialsInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
                Impact Stories
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-8"
            >
              Transforming Communities
              <span className="text-primary-500"> Worldwide</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isTestimonialsInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-neutral-100"
              >
                <div className="flex items-center mb-6">
                  <motion.img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-primary-200"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  />
                  <div>
                    <h4 className="font-semibold text-neutral-900 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-neutral-600">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-primary-500 font-medium">
                      {testimonial.organization}
                    </p>
                  </div>
                </div>

                <motion.p
                  className="text-neutral-700 leading-relaxed font-serif italic mb-6"
                  whileHover={{ x: 5 }}
                >
                  "{testimonial.content}"
                </motion.p>

                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 text-tribal-gold fill-current" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute bottom-10 right-10 w-24 h-24 border border-tribal-gold/30 rounded-lg rotate-45"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-6xl font-display font-bold text-white mb-8"
              animate={{
                textShadow: [
                  "0 0 20px rgba(255, 215, 0, 0.5)",
                  "0 0 40px rgba(255, 215, 0, 0.8)",
                  "0 0 20px rgba(255, 215, 0, 0.5)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Ready to Design Your Future?
            </motion.h2>
            <motion.p
              className="text-xl text-white/90 mb-12 font-serif leading-relaxed"
              whileHover={{ scale: 1.05 }}
            >
              Join thousands of change makers using our tools to create
              regenerative solutions for their communities and organizations.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-neutral-100 transition-all duration-300 shadow-2xl"
                >
                  Book Discovery Call
                </motion.button>
              </Link>
              <Link to="/marketplace">
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  Explore Tools
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
