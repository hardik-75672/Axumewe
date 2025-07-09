import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Filter } from "lucide-react";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Branding", "Web Design", "Mobile App", "E-commerce"];

  const projects = [
    {
      title: "Kente Digital Banking",
      category: "Mobile App",
      description:
        "Revolutionary mobile banking app celebrating African textile patterns",
      image:
        "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["UI/UX", "Fintech", "Mobile"],
    },
    {
      title: "Adinkra Crafts Marketplace",
      category: "E-commerce",
      description:
        "Online marketplace connecting artisans with global customers",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["E-commerce", "Marketplace", "Cultural"],
    },
    {
      title: "Ubuntu Wellness Brand",
      category: "Branding",
      description: "Complete brand identity for holistic wellness platform",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Branding", "Wellness", "Identity"],
    },
    {
      title: "Baobab Learning Platform",
      category: "Web Design",
      description:
        "Educational platform promoting African languages and culture",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Education", "Platform", "Cultural"],
    },
    {
      title: "Akwaaba Tourism App",
      category: "Mobile App",
      description: "Travel app showcasing hidden gems across Africa",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Travel", "Tourism", "Mobile"],
    },
    {
      title: "Shea Butter Collective",
      category: "E-commerce",
      description: "Fair trade platform for African beauty products",
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Beauty", "Fair Trade", "E-commerce"],
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <section id="portfolio" className="py-24 bg-white">
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
                Our Portfolio
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl fony-african font-bold text-neutral-900 mb-8"
            >
              Crafted with
              <span className="text-primary-500"> Purpose</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
            >
              Each project tells a unique story, blending African heritage with
              modern design to create digital experiences that resonate across
              cultures and continents.
            </motion.p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-primary-500 text-white shadow-lg"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
                  >
                    <ExternalLink size={18} />
                  </motion.div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-primary-500 font-medium">
                      {project.category}
                    </span>
                    <div className="flex gap-1">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-primary-500 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-neutral-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-600 transition-colors duration-200"
            >
              View All Projects
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Summary Visual Model Section */}
      <section className="py-24  text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-2">
              <span className="text-primary-500 text-3xl">🦋</span>
            </div>
            <h2 className="text-4xl text-neutral-800 font-bold mb-2">
              Summary Visual Model
            </h2>
            <p className="text-lg text-neutral-800 ">
              Our methodology flow from framing to impact.
            </p>
          </div>
          <div className="bg-neutral-800 rounded-2xl overflow-hidden shadow-lg mb-12">
            <div className="grid grid-cols-3 text-left text-base font-semibold border-b border-neutral-700">
              <div className="py-4 px-6">DESIGN LENS</div>
              <div className="py-4 px-6">METHOD/TOOL</div>
              <div className="py-4 px-6">OUTPUT</div>
            </div>
            <div className="divide-y divide-neutral-700">
              <div className="grid grid-cols-3">
                <div className="py-4 px-6 font-medium text-primary-500">
                  Systems &amp; Sentient Framing
                </div>
                <div className="py-4 px-6">
                  Ecosystem Mapping, Futures Canvas
                </div>
                <div className="py-4 px-6">
                  Root Cause Maps, Opportunity Fields
                </div>
              </div>
              <div className="grid grid-cols-3">
                <div className="py-4 px-6 font-medium text-primary-500">
                  Foresight &amp; Psychology
                </div>
                <div className="py-4 px-6">
                  Speculative Scenarios, Ritual Storytelling
                </div>
                <div className="py-4 px-6">
                  Time Travel Kits, Futures Personas
                </div>
              </div>
              <div className="grid grid-cols-3">
                <div className="py-4 px-6 font-medium text-primary-500">
                  Transition Design
                </div>
                <div className="py-4 px-6">
                  Visioning, Lifestyle Shifts, Theories of Change
                </div>
                <div className="py-4 px-6">
                  Regenerative System Interventions
                </div>
              </div>
              <div className="grid grid-cols-3">
                <div className="py-4 px-6 font-medium text-primary-500">
                  MVP Innovation
                </div>
                <div className="py-4 px-6">
                  Human/AI Sprints, Deep Field Labs
                </div>
                <div className="py-4 px-6">
                  Prototype, MVP, Showcase License
                </div>
              </div>
              <div className="grid grid-cols-3">
                <div className="py-4 px-6 font-medium text-primary-500">
                  Policy &amp; Governance
                </div>
                <div className="py-4 px-6">
                  Civic Simulations, Digital Twins
                </div>
                <div className="py-4 px-6">Sentient Policy Recommendations</div>
              </div>
              <div className="grid grid-cols-3">
                <div className="py-4 px-6 font-medium text-primary-500">
                  Measurement &amp; Metrics
                </div>
                <div className="py-4 px-6">
                  Relational Data, Planetary Wellbeing Frameworks
                </div>
                <div className="py-4 px-6">Sentient Impact Dashboard</div>
              </div>
            </div>
          </div>

          {/* Ready to Deploy Section */}
          <div className="bg-neutral-800 rounded-2xl p-10 text-center shadow-lg">
            <h3 className="text-3xl font-bold mb-4 text-primary-500">
              Ready to Deploy?
            </h3>
            <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
              Let us know how you want to bring this approach to life. We can
              guide you through adapting our methodology into a compelling
              contextual blueprint for your private practice, company use or
              demonstration with your partners, clients, and community.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-full transition-colors">
                Create PDF Overview
              </button>
              <button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-full transition-colors">
                Animate Explainer Video
              </button>
              <button className="bg-neutral-900 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-full transition-colors border border-primary-500">
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
