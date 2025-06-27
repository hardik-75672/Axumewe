import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  BookOpen,
  Download,
  Search,
  Filter,
  Calendar,
  User,
  Clock,
  Star,
  ArrowRight,
  FileText,
  Video,
  Headphones,
} from "lucide-react";

const Learning = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { name: "All", count: 24 },
    { name: "Blog Posts", count: 12 },
    { name: "Research Papers", count: 6 },
    { name: "Free Downloads", count: 4 },
    { name: "Newsletter Archive", count: 2 },
  ];

  const resources = [
    {
      id: 1,
      title: "The Future of Transition Design in Africa",
      category: "Blog Posts",
      type: "Article",
      author: "Dr. Amara Okafor",
      date: "March 15, 2024",
      readTime: "8 min read",
      description:
        "Exploring how transition design principles are being adapted and applied across African contexts to address local challenges.",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Transition Design", "Africa", "Innovation"],
      featured: true,
      rating: 4.9,
    },
    {
      id: 2,
      title: "Systems Thinking for Climate Resilience",
      category: "Research Papers",
      type: "Research",
      author: "Prof. Kwame Asante",
      date: "February 28, 2024",
      readTime: "25 min read",
      description:
        "A comprehensive analysis of systems thinking approaches to building climate resilience in urban environments.",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Systems Thinking", "Climate", "Urban Planning"],
      featured: false,
      rating: 4.8,
    },
    {
      id: 3,
      title: "Community Engagement Toolkit",
      category: "Free Downloads",
      type: "Toolkit",
      author: "Axumewe Team",
      date: "February 20, 2024",
      readTime: "Download",
      description:
        "A practical toolkit for engaging communities in transition design processes, including templates and worksheets.",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Community", "Engagement", "Toolkit"],
      featured: true,
      rating: 4.9,
    },
    {
      id: 4,
      title: "Regenerative Business Models in Practice",
      category: "Blog Posts",
      type: "Case Study",
      author: "Zara Mohammed",
      date: "February 10, 2024",
      readTime: "12 min read",
      description:
        "Real-world examples of how African businesses are implementing regenerative practices and circular economy principles.",
      image:
        "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Business Models", "Regenerative", "Case Study"],
      featured: false,
      rating: 4.7,
    },
    {
      id: 5,
      title: "Future Seeds Newsletter - January 2024",
      category: "Newsletter Archive",
      type: "Newsletter",
      author: "Editorial Team",
      date: "January 31, 2024",
      readTime: "15 min read",
      description:
        "Monthly insights on emerging trends, tools, and stories from the transition design community.",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Newsletter", "Trends", "Community"],
      featured: false,
      rating: 4.6,
    },
    {
      id: 6,
      title: "Scenario Planning Workshop Template",
      category: "Free Downloads",
      type: "Template",
      author: "Strategic Foresight Team",
      date: "January 25, 2024",
      readTime: "Download",
      description:
        "Step-by-step template for facilitating scenario planning workshops in your organization or community.",
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Scenario Planning", "Workshop", "Template"],
      featured: false,
      rating: 4.8,
    },
  ];

  const filteredResources = resources.filter((resource) => {
    const matchesCategory =
      activeCategory === "All" || resource.category === activeCategory;
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const getTypeIcon = (type) => {
    switch (type) {
      case "Article":
      case "Case Study":
        return FileText;
      case "Research":
        return BookOpen;
      case "Toolkit":
      case "Template":
        return Download;
      case "Newsletter":
        return Headphones;
      default:
        return FileText;
    }
  };

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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-accent-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
                Learning & Resources
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-display font-bold text-neutral-900 mb-8"
            >
              Expand Your
              <span className="text-accent-500"> Knowledge</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-serif"
            >
              Dive deep into transition design, systems thinking, and
              regenerative practices with our curated collection of articles,
              research, and free resources.
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
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search articles, research, and resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border border-neutral-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-200 text-lg"
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
                    ? "bg-accent-500 text-white shadow-lg"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                <span>{category.name}</span>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    activeCategory === category.name
                      ? "bg-white/20 text-white"
                      : "bg-neutral-200 text-neutral-500"
                  }`}
                >
                  {category.count}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Resource */}
      {filteredResources.find((r) => r.featured) && (
        <section className="py-16 bg-gradient-to-r from-accent-500 to-primary-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="mb-4">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured Resource
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                  {filteredResources.find((r) => r.featured)?.title}
                </h2>
                <p className="text-xl text-white/90 mb-8 font-serif">
                  {filteredResources.find((r) => r.featured)?.description}
                </p>
                <div className="flex items-center space-x-6 mb-8 text-white/80">
                  <div className="flex items-center space-x-2">
                    <User size={16} />
                    <span>
                      {filteredResources.find((r) => r.featured)?.author}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span>
                      {filteredResources.find((r) => r.featured)?.readTime}
                    </span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-accent-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-neutral-100 transition-colors duration-200 flex items-center"
                >
                  Read Now
                  <ArrowRight className="ml-2" size={20} />
                </motion.button>
              </div>
              <div>
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={filteredResources.find((r) => r.featured)?.image}
                  alt={filteredResources.find((r) => r.featured)?.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Resources Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredResources
              .filter((r) => !r.featured)
              .map((resource) => (
                <motion.div
                  key={resource.id}
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
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="absolute top-4 left-4">
                      <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {resource.type}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4">
                      {(() => {
                        const IconComponent = getTypeIcon(resource.type);
                        return (
                          <IconComponent className="text-white" size={20} />
                        );
                      })()}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-tribal-gold fill-current" />
                        <span className="text-sm font-medium text-neutral-700">
                          {resource.rating}
                        </span>
                      </div>
                      <span className="text-sm text-neutral-500">
                        {resource.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-accent-500 transition-colors duration-300">
                      {resource.title}
                    </h3>

                    <p className="text-neutral-600 leading-relaxed mb-4 text-sm">
                      {resource.description}
                    </p>

                    <div className="flex items-center space-x-4 mb-4 text-sm text-neutral-500">
                      <div className="flex items-center space-x-1">
                        <User size={14} />
                        <span>{resource.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{resource.date}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-accent-500 text-white py-3 rounded-full font-medium hover:bg-accent-600 transition-colors duration-200 flex items-center justify-center group"
                    >
                      {resource.type === "Toolkit" ||
                      resource.type === "Template"
                        ? "Download"
                        : "Read More"}
                      <ArrowRight
                        className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                        size={16}
                      />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
          </motion.div>

          {filteredResources.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-semibold text-neutral-700 mb-2">
                No resources found
              </h3>
              <p className="text-neutral-500">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-accent-500 to-primary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Stay Updated with Future Seeds
            </h2>
            <p className="text-xl text-white/90 mb-8 font-serif">
              Get monthly insights, new resources, and stories from the
              transition design community delivered to your inbox.
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
                className="bg-white text-accent-600 px-8 py-3 rounded-full font-semibold hover:bg-neutral-100 transition-colors duration-200"
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

export default Learning;
