import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Heart, 
  Globe, 
  Award, 
  Users, 
  Target, 
  Lightbulb, 
  Zap, 
  Shield,
  Brain,
  Leaf,
  Eye,
  Sparkles
} from 'lucide-react';

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

  const designDomains = [
    {
      icon: Brain,
      title: "Sentient Business & Economic Governance",
      description: "Design regenerative, circular, AI-integrated business models that incorporate planetary wellbeing and multi-intelligence metrics for future symbiosis."
    },
    {
      icon: Sparkles,
      title: "Sentient Products & Services Design",
      description: "Develop emotionally intelligent, adaptive, and ecologically entangled products with AI, bio-sensing, and spiritual-aesthetic systems."
    },
    {
      icon: Zap,
      title: "R&D to MVP Pipeline",
      description: "Translate foresight insights and speculative design into rapid MVPs. Incubate and spin out ventures driving post-regenerative sentient futures."
    },
    {
      icon: Target,
      title: "Sentient Design Consulting",
      description: "Advise institutions on transition design, scenario planning, and regenerative innovation strategies to lead the future."
    }
  ];

  const customerSegments = [
    "United Nations agencies & IGOs",
    "Governments & think tanks",
    "Global cities & municipalities", 
    "Corporate institutions & start-ups",
    "Innovation labs & design research institutions",
    "Impact investors & ethical venture funds"
  ];

  const impactMetrics = [
    {
      icon: Leaf,
      title: "Regenerative Ventures",
      description: "Number of regenerative/sentient ventures launched",
      value: "50+"
    },
    {
      icon: Globe,
      title: "Ecosystem Health",
      description: "Ecosystem health metrics embedded in outputs",
      value: "100%"
    },
    {
      icon: Eye,
      title: "Cultural Reach",
      description: "Global reach via storytelling and exhibitions",
      value: "25M+"
    },
    {
      icon: Shield,
      title: "Policy Innovations",
      description: "Policy innovations influenced or adopted",
      value: "15+"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-tribal-gold font-african font-semibold text-sm uppercase tracking-wider">
                About AxumWe
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-african font-bold text-neutral-900 mb-8"
            >
              Planetary Design Innovation
              <span className="text-tribal-gold"> Studio</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed font-african"
            >
              Leading the world in building sentient ventures, systems, and policies. We translate 
              speculative foresight and ancestral wisdom into the building blocks of a thriving, 
              post-regenerative civilization rooted in African innovation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-2 gap-16"
          >
            {/* Vision */}
            <motion.div variants={itemVariants} className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-tribal-gold/20 text-tribal-gold rounded-african mb-6 animate-drum-beat">
                <Eye size={32} />
              </div>
              <h2 className="text-3xl font-african font-bold text-neutral-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed font-african">
                Evolving the Future with Anthropocentric Wisdom and Sentient Emergence for Humans, 
                Non-Humans and the Planetary Ecosystem, rooted in African innovation and ancestral knowledge.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div variants={itemVariants} className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-tribal-copper/20 text-tribal-copper rounded-african mb-6 animate-drum-beat">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-african font-bold text-neutral-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed font-african">
                To research, prototype, and scale sentient-aligned business models, products, systems 
                that empower post-regenerative conscious economies, rooted in planetary intelligence, 
                anthropocentric wisdoms, and futures innovation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Design Domains */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-african font-bold text-neutral-900 mb-8">
              Strategic Design
              <span className="text-tribal-gold"> Domains</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-african">
              Four core domains where we pioneer the transition from sustainable to regenerative 
              to sentient futures through design innovation.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {designDomains.map((domain, index) => (
              <motion.div
                key={domain.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-8 rounded-tribal hover:shadow-lg transition-all duration-300 bg-white border border-tribal-gold/20"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-tribal-gold/20 text-tribal-gold rounded-african mb-6 animate-drum-beat"
                >
                  <domain.icon size={32} />
                </motion.div>
                <h3 className="text-xl font-african font-semibold text-neutral-900 mb-4">
                  {domain.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed font-african">
                  {domain.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
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
                  Pioneer global transition from sustainable to regenerative to sentient futures through design innovation
                </p>
              </div>
              <div>
                <Target className="mx-auto mb-4" size={40} />
                <p className="font-african leading-relaxed">
                  Deliver future-fit models, tools, and ventures that solve today's systemic crises
                </p>
              </div>
              <div>
                <Brain className="mx-auto mb-4" size={40} />
                <p className="font-african leading-relaxed">
                  Offer post-anthropocentric design perspectives grounded in emerging science
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Customer Segments */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-african font-bold text-neutral-900 mb-8">
              Who We
              <span className="text-tribal-gold"> We Serve</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-african">
              We partner with forward-thinking organizations ready to lead the transition to sentient futures.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {customerSegments.map((segment, index) => (
              <motion.div
                key={segment}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-african bg-neutral-50 hover:bg-tribal-gold/10 transition-all duration-300 text-center"
              >
                <Users className="mx-auto mb-4 text-tribal-gold animate-drum-beat" size={32} />
                <p className="font-african font-medium text-neutral-900">{segment}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-african font-bold text-neutral-900 mb-8">
              Measuring Our
              <span className="text-tribal-gold"> Metrics</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-african hover:shadow-lg transition-all duration-300 bg-white border border-tribal-gold/20"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-tribal-gold/20 text-tribal-gold rounded-african mb-4 animate-drum-beat"
                >
                  <metric.icon size={32} />
                </motion.div>
                <div className="text-3xl font-bold text-tribal-gold mb-2 font-african">{metric.value}</div>
                <h3 className="text-lg font-african font-semibold text-neutral-900 mb-2">
                  {metric.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed font-african">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Next Steps 2025-2026 */}
      <section className="py-16 bg-gradient-to-r from-tribal-kente to-tribal-sunset bg-kente-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-african font-bold text-white mb-8">
              Next Steps (2025–2026)
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-white/90 text-left">
              <div>
                <h3 className="font-african font-semibold text-white mb-3">Launch Initiatives</h3>
                <ul className="space-y-2 font-african">
                  <li>• AxumWe Sentient Ventures Studio pilot</li>
                  <li>• MVP Showcase Program with 3–5 products</li>
                  <li>• Sentient Business Models Vol. 1 Playbook</li>
                </ul>
              </div>
              <div>
                <h3 className="font-african font-semibold text-white mb-3">Global Expansion</h3>
                <ul className="space-y-2 font-african">
                  <li>• Regional foresight exhibitions (Africa, Asia, Latin America)</li>
                  <li>• Strategic partnerships with UNDP, Future Earth</li>
                  <li>• AU Agenda 2063 platform collaborations</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;