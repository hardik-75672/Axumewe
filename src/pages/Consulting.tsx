import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Lightbulb, 
  Users, 
  Target, 
  Gamepad2, 
  BookOpen, 
  Award,
  ArrowRight,
  CheckCircle,
  Calendar
} from 'lucide-react';

const Consulting = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Gamepad2,
      title: "Custom Game Design",
      description: "Bespoke serious games and simulations tailored to your specific challenges and learning objectives.",
      features: [
        "Stakeholder needs assessment",
        "Custom mechanics design",
        "Iterative prototyping",
        "User testing & refinement",
        "Deployment support"
      ],
      priceRange: "$15K - $75K",
      timeline: "3-6 months",
      caseStudy: {
        client: "African Development Bank",
        challenge: "Training loan officers on climate risk assessment",
        solution: "Interactive simulation game with real-world scenarios",
        result: "40% improvement in risk assessment accuracy"
      }
    },
    {
      icon: Target,
      title: "Strategic Foresight",
      description: "Navigate uncertainty with scenario planning, trend analysis, and strategic futures thinking.",
      features: [
        "Environmental scanning",
        "Scenario development",
        "Strategic implications analysis",
        "Decision-making frameworks",
        "Implementation roadmaps"
      ],
      priceRange: "$10K - $50K",
      timeline: "2-4 months",
      caseStudy: {
        client: "Lagos State Government",
        challenge: "Long-term urban planning under climate uncertainty",
        solution: "Multi-scenario planning workshop series",
        result: "Robust 20-year development strategy adopted"
      }
    },
    {
      icon: Users,
      title: "Transition Game Facilitation",
      description: "Expert facilitation of transition games and workshops to drive organizational and community change.",
      features: [
        "Pre-workshop preparation",
        "Expert game facilitation",
        "Real-time adaptation",
        "Insights synthesis",
        "Action planning support"
      ],
      priceRange: "$5K - $25K",
      timeline: "1-2 months",
      caseStudy: {
        client: "University of Cape Town",
        challenge: "Faculty alignment on sustainability curriculum",
        solution: "Multi-day transition game workshop",
        result: "Unified sustainability framework implemented"
      }
    },
    {
      icon: Lightbulb,
      title: "Public Policy Labs",
      description: "Co-design innovative policy solutions through participatory design and systems thinking approaches.",
      features: [
        "Stakeholder mapping",
        "Policy co-design sessions",
        "Impact modeling",
        "Implementation planning",
        "Monitoring frameworks"
      ],
      priceRange: "$20K - $100K",
      timeline: "4-8 months",
      caseStudy: {
        client: "Ministry of Environment, Ghana",
        challenge: "Developing circular economy policy framework",
        solution: "Multi-stakeholder policy lab process",
        result: "National circular economy strategy launched"
      }
    },
    {
      icon: BookOpen,
      title: "Narrative Transformation Labs",
      description: "Reshape organizational and community narratives to enable transformative change.",
      features: [
        "Current narrative analysis",
        "Story mapping workshops",
        "New narrative development",
        "Communication strategy",
        "Change management support"
      ],
      priceRange: "$8K - $40K",
      timeline: "2-3 months",
      caseStudy: {
        client: "Renewable Energy Cooperative",
        challenge: "Shifting from deficit to abundance mindset",
        solution: "Community narrative transformation process",
        result: "300% increase in member engagement"
      }
    },
    {
      icon: Award,
      title: "Facilitator Certification",
      description: "Train your team to become certified facilitators of transition design tools and methodologies.",
      features: [
        "Comprehensive training program",
        "Hands-on practice sessions",
        "Mentorship support",
        "Certification assessment",
        "Ongoing community access"
      ],
      priceRange: "$3K - $15K per person",
      timeline: "3-6 months",
      caseStudy: {
        client: "International NGO Network",
        challenge: "Building internal facilitation capacity",
        solution: "Train-the-trainer certification program",
        result: "50+ certified facilitators across 15 countries"
      }
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We start with a deep dive into your challenges, goals, and context to understand how we can best support your transformation journey."
    },
    {
      step: "02",
      title: "Proposal & Planning",
      description: "Based on our discovery, we craft a tailored proposal with clear deliverables, timelines, and success metrics."
    },
    {
      step: "03",
      title: "Co-Design Process",
      description: "We work collaboratively with your team to design and develop solutions that fit your unique needs and constraints."
    },
    {
      step: "04",
      title: "Implementation",
      description: "Together, we implement the solution with ongoing support, iteration, and refinement based on real-world feedback."
    },
    {
      step: "05",
      title: "Impact & Evolution",
      description: "We measure impact, capture learnings, and support the evolution of your solution for sustained transformation."
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
                Consulting & Strategic Services
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-display font-bold text-neutral-900 mb-8"
            >
              Transform Your
              <span className="text-accent-500"> Organization</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-serif"
            >
              Partner with us to design custom solutions, facilitate transformative workshops, 
              and build internal capacity for navigating complex challenges and creating regenerative futures.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-neutral-100"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 text-accent-500 rounded-full mb-6"
                >
                  <service.icon size={32} />
                </motion.div>

                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-neutral-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-2">
                        <CheckCircle className="text-accent-500 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm text-neutral-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-neutral-100 pt-6 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-neutral-500">Investment</span>
                    <span className="font-semibold text-accent-500">{service.priceRange}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-500">Timeline</span>
                    <span className="font-semibold text-neutral-700">{service.timeline}</span>
                  </div>
                </div>

                {/* Case Study Preview */}
                <div className="bg-neutral-50 rounded-lg p-4 mb-6">
                  <h5 className="font-semibold text-neutral-900 mb-2">Case Study</h5>
                  <p className="text-sm text-neutral-600 mb-2">
                    <strong>{service.caseStudy.client}:</strong> {service.caseStudy.result}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-accent-500 text-white py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors duration-200 flex items-center justify-center group"
                >
                  Learn More
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Collaborative
              <span className="text-accent-500"> Process</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-serif">
              We believe in co-creation and partnership. Here's how we work together 
              to design and implement transformative solutions.
            </p>
          </motion.div>

          <div className="relative">
            {/* Process Steps */}
            <div className="grid md:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-accent-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4"
                  >
                    {step.step}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Connector Line */}
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-accent-200 -translate-y-0.5 z-0" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent-500 to-primary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-xl text-white/90 mb-8 font-serif">
              Book a discovery call to explore how our consulting services can help 
              your organization navigate complexity and create regenerative impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-accent-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-neutral-100 transition-colors duration-200 flex items-center justify-center"
              >
                <Calendar className="mr-2" size={20} />
                Book Discovery Call
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors duration-200"
              >
                Download Service Guide
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Consulting;