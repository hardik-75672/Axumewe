import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users,
  Star,
  ArrowRight,
  Filter,
  Search,
  Video,
  Mic,
  BookOpen,
  Zap
} from 'lucide-react';

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState('upcoming'); // 'upcoming' or 'past'

  const eventTypes = [
    { name: 'All', count: 12 },
    { name: 'Festival', count: 1 },
    { name: 'Workshop', count: 4 },
    { name: 'Webinar', count: 3 },
    { name: 'Fireside Chat', count: 4 }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "New Moon Futures Festival 2024",
      type: "Festival",
      date: "March 21-23, 2024",
      time: "9:00 AM - 6:00 PM GMT",
      location: "Hybrid: Lagos, Nigeria + Virtual",
      description: "Our flagship annual event bringing together 500+ change agents, innovators, and visionaries from across Africa and beyond.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      speakers: ["Dr. Amara Okafor", "Prof. Kwame Asante", "Zara Mohammed", "+20 more"],
      price: "Early Bird: $150",
      capacity: "500 attendees",
      featured: true,
      tags: ["Innovation", "Futures", "Networking", "Africa"],
      highlights: [
        "50+ speakers and facilitators",
        "Interactive workshops and simulations",
        "Cultural performances and art",
        "Networking and collaboration spaces"
      ]
    },
    {
      id: 2,
      title: "Climate Resilience Workshop: Urban Planning",
      type: "Workshop",
      date: "March 14, 2024",
      time: "2:00 PM - 5:00 PM GMT",
      location: "Virtual",
      description: "Deep-dive workshop on integrating climate resilience into urban planning processes using our City Builder simulation.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      speakers: ["Dr. Sarah Kimani", "Urban Planning Team"],
      price: "Free for members, $25 for non-members",
      capacity: "50 participants",
      featured: false,
      tags: ["Climate", "Urban Planning", "Workshop"],
      highlights: [
        "Hands-on simulation experience",
        "Expert-led discussions",
        "Take-home resources",
        "Q&A with practitioners"
      ]
    },
    {
      id: 3,
      title: "Fireside Chat: Regenerative Business Models",
      type: "Fireside Chat",
      date: "March 8, 2024",
      time: "3:00 PM GMT",
      location: "Virtual",
      description: "Intimate conversation with successful African entrepreneurs implementing regenerative business practices.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      speakers: ["Taiwo Adebayo", "Guest Entrepreneurs"],
      price: "Free",
      capacity: "100 attendees",
      featured: false,
      tags: ["Business", "Regenerative", "Entrepreneurship"],
      highlights: [
        "Real-world case studies",
        "Interactive Q&A session",
        "Networking breakouts",
        "Resource sharing"
      ]
    },
    {
      id: 4,
      title: "Systems Thinking Masterclass",
      type: "Workshop",
      date: "March 28, 2024",
      time: "10:00 AM - 4:00 PM GMT",
      location: "Accra, Ghana + Virtual",
      description: "Comprehensive masterclass on systems thinking tools and methodologies for complex problem solving.",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600",
      speakers: ["Prof. Kwame Asante", "Systems Team"],
      price: "$75 (In-person), $45 (Virtual)",
      capacity: "30 in-person, 100 virtual",
      featured: true,
      tags: ["Systems Thinking", "Methodology", "Problem Solving"],
      highlights: [
        "Hands-on tool practice",
        "Real case study work",
        "Certification pathway",
        "Peer learning groups"
      ]
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: "Transition Design Summit 2023",
      type: "Festival",
      date: "November 15-17, 2023",
      location: "Cape Town, South Africa",
      description: "Three-day summit exploring the future of transition design in African contexts.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      attendees: "350+",
      rating: 4.9,
      highlights: [
        "30+ workshops delivered",
        "15 countries represented",
        "5 new partnerships formed",
        "100+ tools shared"
      ],
      recording: true
    },
    {
      id: 6,
      title: "Community Resilience Webinar Series",
      type: "Webinar",
      date: "October 2023",
      location: "Virtual",
      description: "Monthly webinar series on building community resilience through participatory design.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
      attendees: "200+ per session",
      rating: 4.7,
      highlights: [
        "4 sessions completed",
        "Expert facilitators",
        "Interactive workshops",
        "Community showcase"
      ],
      recording: true
    }
  ];

  const events = viewMode === 'upcoming' ? upcomingEvents : pastEvents;
  const filteredEvents = activeFilter === 'All' 
    ? events 
    : events.filter(event => event.type === activeFilter);

  const getEventIcon = (type) => {
    switch (type) {
      case 'Festival':
        return Star;
      case 'Workshop':
        return BookOpen;
      case 'Webinar':
        return Video;
      case 'Fireside Chat':
        return Mic;
      default:
        return Calendar;
    }
  };

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
      <section className="py-16 bg-gradient-to-br from-secondary-50 to-primary-50">
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
                Events & Festival
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-display font-bold text-neutral-900 mb-8"
            >
              Connect &
              <span className="text-secondary-500"> Learn Together</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-serif"
            >
              Join our global community at workshops, festivals, and conversations that inspire 
              action and build connections across cultures and continents.
            </motion.p>
          </motion.div>

          {/* View Toggle */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex justify-center mb-8"
          >
            <div className="bg-white rounded-full p-1 shadow-lg">
              <button
                onClick={() => setViewMode('upcoming')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  viewMode === 'upcoming'
                    ? 'bg-secondary-500 text-white shadow-md'
                    : 'text-neutral-600 hover:text-secondary-500'
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setViewMode('past')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  viewMode === 'past'
                    ? 'bg-secondary-500 text-white shadow-md'
                    : 'text-neutral-600 hover:text-secondary-500'
                }`}
              >
                Past Events
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-wrap justify-center gap-4"
          >
            {eventTypes.map((type) => (
              <motion.button
                key={type.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(type.name)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === type.name
                    ? 'bg-secondary-500 text-white shadow-lg'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                <span>{type.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeFilter === type.name
                    ? 'bg-white/20 text-white'
                    : 'bg-neutral-200 text-neutral-500'
                }`}>
                  {type.count}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Event */}
      {filteredEvents.find(e => e.featured) && viewMode === 'upcoming' && (
        <section className="py-16 bg-gradient-to-r from-secondary-500 to-primary-500">
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
                    Featured Event
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                  {filteredEvents.find(e => e.featured)?.title}
                </h2>
                <p className="text-xl text-white/90 mb-8 font-serif">
                  {filteredEvents.find(e => e.featured)?.description}
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8 text-white/80">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{filteredEvents.find(e => e.featured)?.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>{filteredEvents.find(e => e.featured)?.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users size={16} />
                    <span>{filteredEvents.find(e => e.featured)?.capacity}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap size={16} />
                    <span>{filteredEvents.find(e => e.featured)?.price}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-secondary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-neutral-100 transition-colors duration-200 flex items-center"
                >
                  Register Now
                  <ArrowRight className="ml-2" size={20} />
                </motion.button>
              </div>
              
              <div>
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={filteredEvents.find(e => e.featured)?.image}
                  alt={filteredEvents.find(e => e.featured)?.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Events Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredEvents.filter(e => !e.featured || viewMode === 'past').map((event) => (
              <motion.div
                key={event.id}
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
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.type}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    {(() => {
                      const IconComponent = getEventIcon(event.type);
                      return <IconComponent className="text-white" size={20} />;
                    })()}
                  </div>

                  {viewMode === 'past' && event.recording && (
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                        Recording Available
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-secondary-500 transition-colors duration-300">
                    {event.title}
                  </h3>

                  <p className="text-neutral-600 leading-relaxed mb-4 text-sm">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-2 mb-4 text-sm text-neutral-500">
                    <div className="flex items-center space-x-2">
                      <Calendar size={14} />
                      <span>{event.date}</span>
                    </div>
                    {event.time && (
                      <div className="flex items-center space-x-2">
                        <Clock size={14} />
                        <span>{event.time}</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-2">
                      <MapPin size={14} />
                      <span>{event.location}</span>
                    </div>
                    {viewMode === 'upcoming' && event.capacity && (
                      <div className="flex items-center space-x-2">
                        <Users size={14} />
                        <span>{event.capacity}</span>
                      </div>
                    )}
                    {viewMode === 'past' && event.attendees && (
                      <div className="flex items-center space-x-2">
                        <Users size={14} />
                        <span>{event.attendees} attended</span>
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Rating for past events */}
                  {viewMode === 'past' && event.rating && (
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(event.rating) ? 'text-tribal-gold fill-current' : 'text-neutral-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-neutral-600">{event.rating}</span>
                    </div>
                  )}

                  {/* Price for upcoming events */}
                  {viewMode === 'upcoming' && event.price && (
                    <div className="mb-4">
                      <span className="text-lg font-semibold text-secondary-500">
                        {event.price}
                      </span>
                    </div>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-secondary-500 text-white py-3 rounded-full font-medium hover:bg-secondary-600 transition-colors duration-200 flex items-center justify-center group"
                  >
                    {viewMode === 'upcoming' ? 'Register' : 'View Details'}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">📅</div>
              <h3 className="text-2xl font-semibold text-neutral-700 mb-2">No events found</h3>
              <p className="text-neutral-500">Try adjusting your filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary-500 to-primary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Stay Connected with Our Events
            </h2>
            <p className="text-xl text-white/90 mb-8 font-serif">
              Never miss an opportunity to learn, connect, and grow with our global community.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-secondary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-neutral-100 transition-colors duration-200"
              >
                Subscribe to Updates
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors duration-200"
              >
                View Calendar
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;