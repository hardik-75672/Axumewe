import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Palette, 
  Monitor, 
  Smartphone, 
  ShoppingCart, 
  Search, 
  Target,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Palette,
      title: "Brand Identity Design",
      shortDesc: "Crafting unique visual identities that reflect your brand's essence",
      fullDesc: "We create comprehensive brand identities that capture the soul of your business. From logo design to complete visual systems, we ensure your brand stands out with authentic African-inspired aesthetics merged with contemporary design principles.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Color Palettes", "Typography Systems"],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: Monitor,
      title: "Web Design & Development",
      shortDesc: "Modern, responsive websites that deliver exceptional user experiences",
      fullDesc: "Our web solutions combine stunning visuals with flawless functionality. We build responsive, fast-loading websites that not only look beautiful but also convert visitors into customers, incorporating cultural elements that resonate with your audience.",
      features: ["Responsive Design", "User Experience", "Performance Optimization", "CMS Integration", "E-commerce Solutions"],
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: Smartphone,
      title: "Mobile App Design",
      shortDesc: "Intuitive mobile experiences that users love and remember",
      fullDesc: "We design mobile applications that seamlessly blend functionality with beauty. Our apps are crafted with user-centric design principles, ensuring smooth interactions and engaging experiences that reflect both modern usability and cultural authenticity.",
      features: ["UI/UX Design", "Prototype Development", "User Testing", "App Store Optimization", "Cross-platform Design"],
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      shortDesc: "Complete online stores that drive sales and customer satisfaction",
      fullDesc: "From concept to conversion, we build e-commerce platforms that sell. Our solutions include everything from user-friendly interfaces to secure payment systems, designed to maximize sales while providing customers with memorable shopping experiences.",
      features: ["Store Development", "Payment Integration", "Inventory Management", "Analytics Setup", "Mobile Commerce"],
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: Search,
      title: "Digital Marketing",
      shortDesc: "Strategic campaigns that amplify your brand's reach and impact",
      fullDesc: "Our digital marketing strategies are culturally informed and globally effective. We create campaigns that not only reach your target audience but also resonate with them on a deeper level, driving engagement and building lasting brand loyalty.",
      features: ["SEO Optimization", "Social Media Strategy", "Content Marketing", "PPC Campaigns", "Analytics & Reporting"],
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: Target,
      title: "Strategic Consulting",
      shortDesc: "Expert guidance to elevate your digital presence and business goals",
      fullDesc: "We provide strategic insights that help businesses navigate the digital landscape successfully. Our consulting services combine market analysis, user research, and cultural insights to develop strategies that drive real business results.",
      features: ["Business Analysis", "Market Research", "Digital Strategy", "User Experience Audit", "Growth Planning"],
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800"
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
    <section id="services" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-8"
          >
            Comprehensive Digital
            <span className="text-primary-500"> Solutions</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
          >
            From brand identity to digital marketing, we offer end-to-end solutions 
            that transform businesses and create meaningful connections with audiences worldwide.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Services List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                onClick={() => setActiveService(index)}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeService === index
                    ? 'bg-white shadow-lg border-2 border-primary-200'
                    : 'bg-white/50 hover:bg-white hover:shadow-md'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                      activeService === index
                        ? 'bg-primary-500 text-white'
                        : 'bg-primary-100 text-primary-500'
                    }`}
                  >
                    <service.icon size={24} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600">
                      {service.shortDesc}
                    </p>
                    {activeService === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-neutral-200"
                      >
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature) => (
                            <span
                              key={feature}
                              className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                  <ArrowRight 
                    className={`transition-transform duration-300 ${
                      activeService === index ? 'rotate-90' : ''
                    }`} 
                    size={20} 
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Service Details */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="sticky top-24"
          >
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="relative h-64">
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      {(() => {
                        const CurrentIcon = services[activeService].icon;
                        return <CurrentIcon className="text-white" size={20} />;
                      })()}
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {services[activeService].title}
                    </h3>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {services[activeService].fullDesc}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-600 transition-colors duration-200 flex items-center group"
                >
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;