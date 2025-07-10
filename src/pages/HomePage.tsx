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
  Brain,
  Leaf,
  Eye,
} from "lucide-react";
import hero from "./Hero4.png";
import hero2 from "./20067973.jpg";
import VisionMissionPage from "./VisionMissionPage";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      title: "Sentient Business Model Canvas",
      category: "Strategic Framework",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Post-capitalist business model templates with planetary intelligence metrics",
      icon: Brain,
      color: "from-primary-500 to-secondary-500",
    },
    {
      title: "AI-Augmented Foresight Tools",
      category: "Innovation Platform",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Emotionally intelligent design prototypes with bio-sensing integration",
      icon: Sparkles,
      color: "from-secondary-500 to-accent-500",
    },
    {
      title: "Regenerative Policy Simulator",
      category: "Governance Tool",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Narrative-driven simulations for deep-future policy design",
      icon: Leaf,
      color: "from-accent-500 to-primary-500",
    },
  ];

  const testimonials = [
    {
      name: "Dr. Amara Okafor",
      role: "Director of Innovation",
      organization: "United Nations Development Programme",
      content:
        "AxumWe's sentient design approach has revolutionized how we think about sustainable development. Their tools bridge ancient wisdom with cutting-edge technology.",
      avatar:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5,
    },
    {
      name: "Prof. Kwame Asante",
      role: "Futures Research Lead",
      organization: "African Union Commission",
      content:
        "The MVP-as-a-Service approach allowed us to rapidly prototype policy innovations that are now being implemented across member states.",
      avatar:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5,
    },
    {
      name: "Zara Mohammed",
      role: "Chief Innovation Officer",
      organization: "Future Earth Initiative",
      content:
        "AxumWe doesn't just design products—they design entire ecosystems of change. Their work is essential for planetary transformation.",
      avatar:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5,
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "50+",
      label: "Sentient Ventures Launched",
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
      value: "100+",
      label: "Policy Innovations",
      color: "text-accent-500",
    },
    {
      icon: Star,
      value: "4.9",
      label: "Impact Rating",
      color: "text-tribal-gold",
    },
  ];

  const impactMetrics = [
    {
      number: "2.5M",
      label: "Lives Impacted",
      description: "Through regenerative ventures and policies",
      icon: Heart,
    },
    {
      number: "150%",
      label: "Average ROI",
      description: "For organizations using sentient models",
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
            src={hero2}
            // src="https://images.pexels.com/photos/6200343/pexels-photo-6200343.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="African innovation and transformation"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-primary-900/70 to-secondary-900/80 bg-african-pattern"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Content */}
            <div className="mt-20">
              {/* <motion.div variants={itemVariants} className="mb-6"></motion.div> */}

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-7xl font-african font-bold mb-8 leading-tight"
              >
                <span className="text-white">Design </span>
                <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-tribal-gold via-tribal-copper to-tribal-sunset"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  Future Studio
                </motion.span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-neutral-200 mb-12 max-w-3xl leading-relaxed font-african"
              >
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-tribal-gold via-tribal-copper to-tribal-sunset"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  Future Planetary Civilization&nbsp;
                </motion.span>
                is not just Sustainable or Regenerative, but it is the emergence
                of a Sentient Ecosystem: co-agency amongst humans, AI, nature,
                and non-human systems
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-1xl text-neutral-200 mb-12 max-w-3xl leading-relaxed font-african"
              >
                Addressing today’s challenges by world-building future
                civilizations as proof of social, economic and business models
                and ventures, products, services and ecosystems as minimum
                viable paradigms (MVPs) that thrive.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6 mb-16"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(210, 105, 30, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("services")}
                  className="group bg-gradient-to-r from-primary-500 to-tribal-copper text-white px-8 py-4 rounded-african font-african font-semibold text-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 flex items-center justify-center shadow-2xl"
                >
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Explore Our Services
                  </motion.span>
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                    size={20}
                  />
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("about")}
                  className="group border-2 border-tribal-gold text-tribal-gold px-8 py-4 rounded-african font-african font-semibold text-lg hover:border-white hover:text-white transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Play className="mr-2" size={20} />
                  </motion.div>
                  Watch Vision
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
                    className="group bg-gradient-to-br from-tribal-gold/10 to-tribal-copper/10 backdrop-blur-sm rounded-african p-4 border border-tribal-gold/30 hover:bg-tribal-gold/20 transition-all duration-300 animate-kente-wave"
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
                        className={`mx-auto mb-2 text-tribal-gold`}
                        size={24}
                      />
                    </motion.div>
                    <motion.div
                      className="text-2xl font-bold text-tribal-gold font-african"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1, type: "spring" }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-neutral-300 font-african">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Visual Element - Enhanced with Animations */}

            <motion.div variants={itemVariants} className="relative top-0">
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
                  className="relative overflow-hidden rounded-tribal shadow-2xl transform-gpu border-4 border-tribal-gold/30"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(210, 105, 30, 0.1), rgba(34, 139, 34, 0.1))",
                  }}
                >
                  <img
                    src={hero}
                    // src="https://images.pexels.com/photos/6200343/pexels-photo-6200343.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Sentient innovation"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-500/30 to-transparent bg-adinkra-pattern"></div>

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
                      className="absolute top-4 right-4 w-12 h-12 border-2 border-tribal-gold/60 rounded-full animate-drum-beat"
                    />

                    <motion.div
                      animate={{
                        rotate: [360, 0],
                        y: [0, -10, 0],
                      }}
                      transition={{ duration: 6, repeat: Infinity }}
                      className="absolute bottom-4 left-4 w-8 h-8 bg-tribal-kente/60 rounded-lg rotate-45"
                    />

                    {/* Brain Pattern */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.7, 0.3],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                      <Brain className="text-tribal-gold/20" size={80} />
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Floating Achievement Cards */}
                <motion.div
                  initial={{ scale: 0, rotate: -15, x: -50, y: -50 }}
                  animate={{ scale: 1, rotate: 0, x: 0, y: 0 }}
                  transition={{ delay: 1, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.1, rotate: 5, y: -5 }}
                  className="absolute -top-8 -left-8 bg-gradient-to-r from-tribal-gold to-tribal-copper text-white p-6 rounded-african shadow-2xl backdrop-blur-sm border border-tribal-gold/30"
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
                  <div className="text-2xl font-bold mb-1 font-african">
                    50+
                  </div>
                  <div className="text-sm opacity-90 font-african">
                    Ubuntu Ventures
                  </div>
                </motion.div>

                <motion.div
                  initial={{ scale: 0, rotate: 15, x: 50, y: 50 }}
                  animate={{ scale: 1, rotate: 0, x: 0, y: 0 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.1, rotate: -5, y: -5 }}
                  className="absolute -bottom-8 -right-8 bg-gradient-to-r from-tribal-kente to-secondary-500 text-white p-6 rounded-african shadow-2xl backdrop-blur-sm border border-tribal-gold/30"
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
                  <div className="text-2xl font-bold mb-1 font-african">25</div>
                  <div className="text-sm opacity-90 font-african">
                    African Nations
                  </div>
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
                  className="absolute -inset-4 bg-gradient-to-r from-tribal-gold/20 via-tribal-copper/20 to-tribal-kente/20 rounded-tribal blur-xl"
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
            className="w-6 h-10 border-2 border-tribal-gold/70 rounded-african flex justify-center cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-tribal-gold rounded-african mt-2"
            />
          </motion.div>
          <motion.p
            className="text-tribal-gold text-sm mt-2 font-african font-medium"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to discover
          </motion.p>
        </motion.div>
      </section>

      {/* Vision & Mission Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-2 gap-16"
          > 
            <motion.div
              variants={itemVariants}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-tribal-gold/20 text-tribal-gold rounded-african mb-6 animate-drum-beat">
                <Eye size={32} />
              </div>
              <h2 className="text-3xl font-african font-bold text-neutral-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed font-african">
                Evolving the Future with Anthropocentric Wisdom and Sentient
                Emergence for Humans, Non-Humans and the Planetary Ecosystem,
                rooted in African innovation and ancestral knowledge.
              </p>
            </motion.div>
 
            <motion.div
              variants={itemVariants}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-tribal-copper/20 text-tribal-copper rounded-african mb-6 animate-drum-beat">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-african font-bold text-neutral-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed font-african">
                To research, prototype, and scale sentient-aligned business
                models, products, systems that empower post-regenerative
                conscious economies, rooted in planetary intelligence,
                anthropocentric wisdoms, and futures innovation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section> */}
      <VisionMissionPage />

      {/* Featured Products Section */}
      {/* <section
        ref={ref}
        className="py-24 bg-gradient-to-br from-white via-neutral-50 to-primary-50 bg-kente-pattern"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isFeaturesInView ? "visible" : "hidden"}
            className="text-center mb-20"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-primary-500 font-african font-semibold text-sm uppercase tracking-wider">
                Featured Solutions
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-6xl font-african font-bold text-neutral-900 mb-8"
            >
              Transform Your world with
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tribal-gold via-tribal-copper to-tribal-kente">
                sentient Innovation
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-african"
            >
              Rooted in African wisdom and Ubuntu philosophy, our solutions
              bridge ancestral knowledge with cutting-edge innovation to create
              regenerative futures that honor our heritage while serving all of
              humanity.
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
                className="group relative bg-white rounded-tribal shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-tribal-gold/20"
              >
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
                    <span className="bg-tribal-gold/90 backdrop-blur-sm text-white px-3 py-1 rounded-african text-sm font-african font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <motion.h3
                    className="text-2xl font-african font-semibold text-neutral-900 mb-4 group-hover:text-primary-500 transition-colors duration-300"
                    whileHover={{ x: 10 }}
                  >
                    {product.title}
                  </motion.h3>
                  <p className="text-neutral-600 leading-relaxed mb-6 font-african">
                    {product.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-r ${product.color} text-white px-6 py-3 rounded-african font-african font-medium hover:shadow-lg transition-all duration-200 flex items-center group`}
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
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(210, 105, 30, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("services")}
              className="bg-gradient-to-r from-tribal-gold to-tribal-copper text-white px-12 py-4 rounded-african font-african font-semibold text-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-xl"
            >
              View All Services
              <ArrowRight className="ml-2" size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section> */}

      {/* Impact Metrics Section */}
      <section
        ref={impactRef}
        className="py-24 bg-gradient-to-r from-tribal-earth via-primary-500 to-tribal-copper relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-adinkra-pattern"></div>
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
              className="text-4xl md:text-5xl font-african font-bold text-white mb-8"
            >
              Axumewe
              <span className="text-tribal-gold"> Impact</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-african"
            >
              Real results from African organizations and global partners
              transforming their approach to complex challenges through Ubuntu
              philosophy and regenerative design methodologies.
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
                className="text-center bg-white/10 backdrop-blur-sm rounded-tribal p-8 border border-tribal-gold/30 hover:bg-tribal-gold/20 transition-all duration-300"
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
                  className="inline-flex items-center justify-center w-16 h-16 bg-tribal-gold rounded-african mb-6 animate-drum-beat"
                >
                  <metric.icon className="text-white" size={32} />
                </motion.div>
                <motion.div
                  className="text-5xl font-bold text-white mb-4 font-african"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2, type: "spring" }}
                >
                  {metric.number}
                </motion.div>
                <h3 className="text-xl font-african font-semibold text-tribal-gold mb-2">
                  {metric.label}
                </h3>
                <p className="text-white/80 leading-relaxed font-african">
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
        className="py-24 bg-gradient-to-br from-neutral-50 to-primary-50 bg-kente-pattern"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isTestimonialsInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-primary-500 font-african font-semibold text-sm uppercase tracking-wider">
                Impact Stories
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-african font-bold text-neutral-900 mb-8"
            >
              Transforming Organization
              <span className="text-tribal-gold"> Worldwide</span>
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
                className="bg-white rounded-tribal p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-tribal-gold/20"
              >
                <div className="flex items-center mb-6">
                  <motion.img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-tribal-gold/50"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  />
                  <div>
                    <h4 className="font-african font-semibold text-neutral-900 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-neutral-600 font-african">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-tribal-gold font-african font-medium">
                      {testimonial.organization}
                    </p>
                  </div>
                </div>

                <motion.p
                  className="text-neutral-700 leading-relaxed font-african italic mb-6"
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
      <section className="py-24 bg-gradient-to-r from-tribal-earth via-tribal-copper to-tribal-kente relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-10 left-10 w-32 h-32 border border-tribal-gold/30 rounded-african"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute bottom-10 right-10 w-24 h-24 border border-tribal-gold/30 rounded-african rotate-45"
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
              className="text-4xl md:text-6xl font-african font-bold text-white mb-8"
              animate={{
                textShadow: [
                  "0 0 20px rgba(255, 215, 0, 0.5)",
                  "0 0 40px rgba(255, 215, 0, 0.8)",
                  "0 0 20px rgba(255, 215, 0, 0.5)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Ready to Design sentient Futures?
            </motion.h2>
            <motion.p
              className="text-xl text-white/90 mb-12 font-african leading-relaxed"
              whileHover={{ scale: 1.05 }}
            >
              Join African organizations and global partners using Ubuntu
              philosophy to create regenerative solutions that honor ancestral
              wisdom while building futures for all life.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                className="bg-white text-tribal-earth px-10 py-4 rounded-african font-african font-semibold text-lg hover:bg-neutral-100 transition-all duration-300 shadow-2xl"
              >
                Begin Your Journey
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("services")}
                className="border-2 border-tribal-gold text-tribal-gold px-10 py-4 rounded-african font-african font-semibold text-lg hover:bg-tribal-gold/10 hover:text-white transition-all duration-300"
              >
                Explore Solutions
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
