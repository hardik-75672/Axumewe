import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Play, 
  Calendar, 
  Download, 
  Users, 
  Building, 
  GraduationCap,
  Zap,
  Globe,
  MessageCircle,
  Lightbulb
} from 'lucide-react';

const Showroom = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeDemo, setActiveDemo] = useState(0);

  const simulations = [
    {
      title: "Climate Resilient City Builder",
      subtitle: "Urban Planning Simulation",
      description: "Design and manage climate-resilient cities with this comprehensive urban planning simulation. Test different strategies for adaptation, mitigation, and community resilience.",
      features: [
        "Real-time climate impact modeling",
        "Community engagement scenarios",
        "Resource management systems",
        "Policy implementation tools"
      ],
      useCases: [
        { icon: Building, label: "City Governments", description: "Urban planning departments" },
        { icon: GraduationCap, label: "Universities", description: "Urban studies programs" },
        { icon: Users, label: "NGOs", description: "Community development" }
      ],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      video: "https://example.com/city-builder-demo.mp4",
      stats: { users: "2,500+", cities: "150+", scenarios: "50+" }
    },
    {
      title: "Regenerative Startup Simulator",
      subtitle: "Business Model Innovation",
      description: "Explore regenerative business models and test sustainable startup strategies in this interactive business simulation environment.",
      features: [
        "Impact measurement frameworks",
        "Stakeholder relationship mapping",
        "Financial sustainability modeling",
        "Market dynamics simulation"
      ],
      useCases: [
        { icon: Lightbulb, label: "Entrepreneurs", description: "Startup development" },
        { icon: GraduationCap, label: "Business Schools", description: "Entrepreneurship courses" },
        { icon: Building, label: "Incubators", description: "Startup acceleration" }
      ],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      video: "https://example.com/startup-simulator-demo.mp4",
      stats: { startups: "1,200+", models: "75+", participants: "5,000+" }
    },
    {
      title: "Talking Drum Crisis Communicator",
      subtitle: "Emergency Response System",
      description: "A culturally-informed crisis communication platform that combines traditional African communication methods with modern technology.",
      features: [
        "Multi-channel communication",
        "Cultural context integration",
        "Community network mapping",
        "Real-time response coordination"
      ],
      useCases: [
        { icon: Globe, label: "Governments", description: "Emergency management" },
        { icon: Users, label: "Communities", description: "Local response teams" },
        { icon: Building, label: "NGOs", description: "Humanitarian response" }
      ],
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      video: "https://example.com/talking-drum-demo.mp4",
      stats: { communities: "300+", messages: "50K+", response: "85%" }
    },
    {
      title: "Oracles' Futures Engine",
      subtitle: "Strategic Foresight Platform",
      description: "Harness collective wisdom and scenario planning to explore multiple possible futures and develop robust strategies for uncertainty.",
      features: [
        "Scenario generation tools",
        "Collective intelligence gathering",
        "Trend analysis and mapping",
        "Strategic planning frameworks"
      ],
      useCases: [
        { icon: Building, label: "Organizations", description: "Strategic planning" },
        { icon: GraduationCap, label: "Research Institutes", description: "Futures studies" },
        { icon: Users, label: "Policy Makers", description: "Long-term planning" }
      ],
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
      video: "https://example.com/oracles-engine-demo.mp4",
      stats: { scenarios: "1,000+", oracles: "500+", insights: "10K+" }
    }
  ];

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
      <section className="py-16 bg-gradient-to-br from-secondary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-secondary-500 font-semibold text-sm uppercase tracking-wider">
                Studio Showroom
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-display font-bold text-neutral-900 mb-8"
            >
              Immersive
              <span className="text-secondary-500"> Simulations</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-serif"
            >
              Experience our flagship simulations and MVP prototypes designed to help organizations, 
              communities, and individuals navigate complex challenges through interactive learning.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Simulation Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation Tabs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {simulations.map((sim, index) => (
              <motion.button
                key={sim.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveDemo(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeDemo === index
                    ? 'bg-secondary-500 text-white shadow-lg'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {sim.title.split(' ')[0]} {sim.title.split(' ')[1]}
              </motion.button>
            ))}
          </motion.div>

          {/* Active Simulation Display */}
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Content */}
            <div>
              <div className="mb-6">
                <span className="text-secondary-500 font-medium text-sm uppercase tracking-wider">
                  {simulations[activeDemo].subtitle}
                </span>
              </div>

              <h2 className="text-4xl font-display font-bold text-neutral-900 mb-6">
                {simulations[activeDemo].title}
              </h2>

              <p className="text-lg text-neutral-600 mb-8 leading-relaxed font-serif">
                {simulations[activeDemo].description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {simulations[activeDemo].features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <Zap className="text-secondary-500" size={16} />
                      <span className="text-neutral-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {Object.entries(simulations[activeDemo].stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-secondary-500">{value}</div>
                    <div className="text-sm text-neutral-600 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-secondary-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-secondary-600 transition-colors duration-200 flex items-center justify-center"
                >
                  <Calendar className="mr-2" size={20} />
                  Book a Demo
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-secondary-500 text-secondary-500 px-8 py-4 rounded-full font-semibold hover:bg-secondary-50 transition-colors duration-200 flex items-center justify-center"
                >
                  <Download className="mr-2" size={20} />
                  Download PDF
                </motion.button>
              </div>
            </div>

            {/* Right: Media */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <img
                  src={simulations[activeDemo].image}
                  alt={simulations[activeDemo].title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent"></div>
                
                {/* Play Button Overlay */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                >
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200">
                    <Play className="text-white ml-1" size={32} />
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Info Card */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-neutral-100"
              >
                <div className="text-sm text-neutral-600 mb-1">Interactive Demo</div>
                <div className="text-lg font-semibold text-neutral-900">Available Now</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Use Cases */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-20"
          >
            <h3 className="text-2xl font-semibold text-neutral-900 mb-8 text-center">
              Perfect for
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {simulations[activeDemo].useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.label}
                  whileHover={{ y: -5 }}
                  className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 text-secondary-500 rounded-full mb-4"
                  >
                    <useCase.icon size={32} />
                  </motion.div>
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                    {useCase.label}
                  </h4>
                  <p className="text-neutral-600">
                    {useCase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary-500 to-accent-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-white/90 mb-8 font-serif">
              Book a personalized demo and see how our simulations can transform 
              your organization's approach to complex challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-secondary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-neutral-100 transition-colors duration-200 flex items-center justify-center"
              >
                <Calendar className="mr-2" size={20} />
                Schedule Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors duration-200 flex items-center justify-center"
              >
                <MessageCircle className="mr-2" size={20} />
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Showroom;