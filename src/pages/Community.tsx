import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Crown, 
  Users, 
  MessageCircle, 
  Calendar,
  Star,
  ArrowRight,
  Zap,
  BookOpen,
  Video,
  Award
} from 'lucide-react';

const Community = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const memberships = [
    {
      icon: Crown,
      title: "Elders' Circle VIP",
      subtitle: "Premium Community Access",
      description: "Join our most exclusive community of senior practitioners, thought leaders, and change agents.",
      features: [
        "Monthly virtual gatherings with global leaders",
        "Early access to all new tools and content",
        "Direct access to our founding team",
        "Exclusive research previews",
        "Priority booking for events",
        "Custom consultation sessions",
        "VIP Discord channel access"
      ],
      price: "$297/month",
      badge: "Most Popular",
      color: "from-tribal-gold to-primary-500"
    },
    {
      icon: Users,
      title: "Transition Fellows Hub",
      subtitle: "Practitioner Network",
      description: "Connect with fellow practitioners implementing transition design in their communities and organizations.",
      features: [
        "Access to practitioner forums",
        "Monthly skill-sharing sessions",
        "Resource library access",
        "Peer mentorship matching",
        "Project collaboration space",
        "Regional meetup coordination",
        "Certification pathway access"
      ],
      price: "$97/month",
      badge: "Best Value",
      color: "from-secondary-500 to-accent-500"
    },
    {
      icon: MessageCircle,
      title: "Story Circles",
      subtitle: "Future Tellers Gatherings",
      description: "Participate in intimate storytelling circles that explore possible futures and share wisdom.",
      features: [
        "Bi-weekly story circles",
        "Narrative development workshops",
        "Cultural storytelling traditions",
        "Future scenario explorations",
        "Creative writing prompts",
        "Story sharing platform",
        "Guest storyteller sessions"
      ],
      price: "$47/month",
      badge: "Creative Focus",
      color: "from-accent-500 to-primary-500"
    }
  ];

  const events = [
    {
      title: "New Moon Futures Festival",
      date: "March 21-23, 2024",
      type: "Annual Festival",
      description: "Our flagship event bringing together change agents from across Africa and beyond.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["3 days of workshops", "50+ speakers", "Networking sessions", "Cultural performances"]
    },
    {
      title: "Climate Resilience Workshop Series",
      date: "Every 2nd Thursday",
      type: "Monthly Workshop",
      description: "Deep-dive workshops on building climate resilience in communities and organizations.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Expert facilitators", "Hands-on activities", "Take-home resources", "Community Q&A"]
    },
    {
      title: "Fireside Chats with Innovators",
      date: "Every Friday 3PM GMT",
      type: "Weekly Series",
      description: "Intimate conversations with African innovators, entrepreneurs, and thought leaders.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Live Q&A", "Recording access", "Guest networking", "Follow-up resources"]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Accelerated Learning",
      description: "Learn faster through peer collaboration and expert guidance"
    },
    {
      icon: Users,
      title: "Global Network",
      description: "Connect with change agents across Africa and worldwide"
    },
    {
      icon: BookOpen,
      title: "Exclusive Content",
      description: "Access premium resources, tools, and research"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Showcase your work and get recognized for your impact"
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
                Community & Memberships
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-display font-bold text-neutral-900 mb-8"
            >
              Join the
              <span className="text-secondary-500"> Circle</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-serif"
            >
              Connect with a global community of change agents, practitioners, and visionaries 
              working to create regenerative futures. Learn together, share wisdom, and amplify your impact.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Membership Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-display font-bold text-neutral-900 mb-8"
            >
              Choose Your
              <span className="text-secondary-500"> Membership</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-serif"
            >
              Each membership tier offers unique benefits designed to support your journey 
              as a change agent and transition designer.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-3 gap-8"
          >
            {memberships.map((membership, index) => (
              <motion.div
                key={membership.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-neutral-100"
              >
                {/* Badge */}
                {membership.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className={`bg-gradient-to-r ${membership.color} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg`}>
                      {membership.badge}
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${membership.color} text-white rounded-full mb-6`}
                  >
                    <membership.icon size={40} />
                  </motion.div>

                  <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
                    {membership.title}
                  </h3>
                  <p className="text-secondary-500 font-medium mb-4">
                    {membership.subtitle}
                  </p>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {membership.description}
                  </p>

                  <div className="text-4xl font-bold text-neutral-900 mb-2">
                    {membership.price}
                  </div>
                  <div className="text-sm text-neutral-500">
                    Cancel anytime
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <ul className="space-y-3">
                    {membership.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <Star className="text-secondary-500 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm text-neutral-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r ${membership.color} text-white py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center group`}
                >
                  Join the Circle
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold text-neutral-900 mb-8">
              Upcoming
              <span className="text-secondary-500"> Events</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-serif">
              Join us for workshops, festivals, and conversations that inspire action 
              and build connections across our global community.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.type}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar className="text-secondary-500" size={16} />
                    <span className="text-sm text-secondary-500 font-medium">
                      {event.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    {event.title}
                  </h3>

                  <p className="text-neutral-600 leading-relaxed mb-4">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {event.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-secondary-500 text-white py-3 rounded-full font-semibold hover:bg-secondary-600 transition-colors duration-200"
                  >
                    Register Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold text-neutral-900 mb-8">
              Community
              <span className="text-secondary-500"> Benefits</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 text-secondary-500 rounded-full mb-4"
                >
                  <benefit.icon size={32} />
                </motion.div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
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
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-white/90 mb-8 font-serif">
              Become part of a global movement of change agents working to create 
              regenerative futures for all.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-secondary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-neutral-100 transition-colors duration-200"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors duration-200 flex items-center justify-center"
              >
                <Video className="mr-2" size={20} />
                Watch Community Tour
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Community;