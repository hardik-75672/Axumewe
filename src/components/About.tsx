import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Globe, Award, Users } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "Every project is infused with our love for design and African culture"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Connecting local heritage with international design standards"
    },
    {
      icon: Award,
      title: "Excellence First",
      description: "Committed to delivering award-winning digital experiences"
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Building bridges between communities through thoughtful design"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <div>
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
                About Axumwe
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-8 leading-tight"
            >
              Where Heritage Meets
              <span className="text-primary-500"> Innovation</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-neutral-600 mb-8 leading-relaxed"
            >
              Founded on the belief that design should tell stories and connect cultures, 
              Axumwe is more than a design studio—we're cultural ambassadors in the digital realm. 
              Our name, inspired by the ancient Kingdom of Axum, reflects our commitment to 
              building lasting legacies through exceptional design.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-neutral-600 mb-12 leading-relaxed"
            >
              We specialize in creating digital experiences that honor African aesthetics 
              while embracing global design trends, ensuring every project resonates with 
              both local authenticity and international appeal.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary-500 mb-2">150%</div>
                <div className="text-sm text-neutral-600">Average ROI Increase</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-500 mb-2">24/7</div>
                <div className="text-sm text-neutral-600">Global Support</div>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="African designers at work"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -10 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -top-8 -left-8 bg-white p-6 rounded-xl shadow-xl"
            >
              <div className="text-2xl font-bold text-primary-500 mb-1">5+</div>
              <div className="text-sm text-neutral-600">Years Excellence</div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, rotate: 10 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 10 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-accent-500 text-white p-6 rounded-xl shadow-xl"
            >
              <div className="text-2xl font-bold mb-1">50+</div>
              <div className="text-sm opacity-90">Happy Clients</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-500 rounded-full mb-4"
              >
                <value.icon size={32} />
              </motion.div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {value.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;