import React, { useRef, useState } from "react";
import EventsHeader from "./EventsHeader";
import FilterButtons from "./FilterButtons";
import EventCard from "./EventCard";
import { events, categories } from "../data/events"; // Adjust the import path as necessary
import { Brain, Star, Target, Zap } from "lucide-react";
import { motion, useInView } from "framer-motion";

const EventsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const testimonialsRef = useRef(null);
  const filteredEvents =
    activeFilter === "all"
      ? events
      : events.filter((event) => event.category === activeFilter);
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

  const isTestimonialsInView = useInView(testimonialsRef, {
    once: true,
    margin: "-100px",
  });

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const testimonials = [
    {
      name: "Fatima O.",
      role: "Director of Innovation",
      organization: "FutureAfrica Capitae",
      content:
        "AxumWe helped us reimagine our entire venture through the lens of regenerative futures. Their sentient business design labs are decades ahead.",
      avatar:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5,
    },
    {
      name: "Kenji M.",
      role: "Civic Innovation Lead",
      organization: "Tokyo SmartGov Labs",
      content:
        "Working with AxumWe was like stepping into the future – their tools don’t just solve problems, they awaken systems. The MVP we launched is both ethical and visionary.",
      avatar:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5,
    },
    {
      name: "Lucia V.",
      role: "UX Director",
      organization: "BioSense Technologies",
      content:
        "Their sentient products and rituals-based design interfaces helped us create emotional resonance with our users. Our team was floored.",
      avatar:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5,
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 pt-20">
      <section className="py-16 bg-gradient-to-r from-tribal-earth to-tribal-copper bg-adinkra-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-african font-bold text-white mb-8">
              Value Proposition
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-white/90">
              <div>
                <Zap className="mx-auto mb-4" size={40} />
                <p className="font-african leading-relaxed">
                  Pioneer global transition from sustainable to regenerative to
                  sentient futures through design innovation
                </p>
              </div>
              <div>
                <Target className="mx-auto mb-4" size={40} />
                <p className="font-african leading-relaxed">
                  Deliver future-fit models, tools, and ventures that solve
                  today's systemic crises
                </p>
              </div>
              <div>
                <Brain className="mx-auto mb-4" size={40} />
                <p className="font-african leading-relaxed">
                  Offer post-anthropocentric design perspectives grounded in
                  emerging science
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <EventsHeader />

        <FilterButtons
          categories={categories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
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

export default EventsPage;
