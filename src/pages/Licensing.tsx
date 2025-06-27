import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building,
  GraduationCap,
  Globe,
  Users,
  CheckCircle,
  ArrowRight,
  Download,
  Mail,
  Zap,
  Shield,
  Headphones,
} from "lucide-react";

const Licensing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const licenses = [
    {
      icon: Building,
      title: "Axumewe License",
      subtitle: "Complete Platform Access",
      description:
        "Full access to our entire suite of tools, simulations, and frameworks for organizational transformation.",
      features: [
        "All current and future tools",
        "White-label customization",
        "Multi-user access (up to 500 users)",
        "Priority support & training",
        "Custom branding options",
        "Analytics and reporting",
        "API access for integrations",
      ],
      pricing: {
        setup: "$25,000",
        annual: "$15,000/year",
        users: "Up to 500 users included",
      },
      ideal: [
        "Large corporations",
        "Government agencies",
        "International NGOs",
      ],
      institutions: [
        "African Development Bank",
        "UN Environment Programme",
        "Mastercard Foundation",
      ],
    },
    {
      icon: GraduationCap,
      title: "Curriculum Licensing",
      subtitle: "Educational Institution Package",
      description:
        "Comprehensive educational package designed for universities and training institutions.",
      features: [
        "Course materials & curricula",
        "Student access (unlimited)",
        "Instructor training & certification",
        "Assessment tools",
        "Learning management integration",
        "Research collaboration opportunities",
        "Academic support network",
      ],
      pricing: {
        setup: "$10,000",
        annual: "$5,000/year",
        users: "Unlimited students & faculty",
      },
      ideal: ["Universities", "Business schools", "Training institutes"],
      institutions: [
        "University of Cape Town",
        "Lagos Business School",
        "Strathmore University",
      ],
    },
    {
      icon: Globe,
      title: "Global Game Network",
      subtitle: "Multi-City Implementation",
      description:
        "Coordinated deployment across multiple cities or regions with centralized management and local adaptation.",
      features: [
        "Multi-location deployment",
        "Centralized administration",
        "Local customization support",
        "Cross-city collaboration tools",
        "Shared learning network",
        "Regional coordinator training",
        "Impact measurement framework",
      ],
      pricing: {
        setup: "$50,000",
        annual: "$25,000/year",
        users: "Up to 10 cities/regions",
      },
      ideal: ["City networks", "Regional organizations", "Global initiatives"],
      institutions: [
        "C40 Cities Network",
        "African Union",
        "Commonwealth Secretariat",
      ],
    },
    {
      icon: Users,
      title: "Fellowship Co-Hosting",
      subtitle: "Partnership Program",
      description:
        "Co-host fellowship programs that build capacity and create lasting networks of change agents.",
      features: [
        "Co-branded fellowship program",
        "Curriculum co-development",
        "Mentor network access",
        "Alumni community platform",
        "Joint marketing & recruitment",
        "Impact documentation",
        "Ongoing program evolution",
      ],
      pricing: {
        setup: "$15,000",
        annual: "$10,000/year",
        users: "Up to 50 fellows per cohort",
      },
      ideal: ["Foundations", "Development organizations", "Innovation hubs"],
      institutions: [
        "Tony Elumelu Foundation",
        "Acumen Academy",
        "Ashoka Africa",
      ],
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Rapid Deployment",
      description:
        "Get up and running quickly with our proven implementation methodology and dedicated support team.",
    },
    {
      icon: Shield,
      title: "Proven Impact",
      description:
        "Join organizations that have achieved measurable transformation using our tools and methodologies.",
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      description:
        "Continuous support, updates, and evolution of tools based on latest research and user feedback.",
    },
    {
      icon: Users,
      title: "Community Access",
      description:
        "Connect with a global network of practitioners, researchers, and change agents using our tools.",
    },
  ];

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
              <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
                Licensing & Institutional Packages
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-display font-bold text-neutral-900 mb-8"
            >
              Scale Your
              <span className="text-primary-500"> Impact</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-serif"
            >
              Partner with us to bring transformative tools and methodologies to
              your organization, institution, or network. Our licensing packages
              are designed to maximize impact while providing the flexibility
              you need.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Licensing Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-2 gap-12"
          >
            {licenses.map((license, index) => (
              <motion.div
                key={license.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-neutral-100"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0 w-16 h-16 bg-primary-100 text-primary-500 rounded-full flex items-center justify-center"
                  >
                    <license.icon size={32} />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
                      {license.title}
                    </h3>
                    <p className="text-primary-500 font-medium">
                      {license.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-neutral-600 leading-relaxed mb-6">
                  {license.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-900 mb-3">
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {license.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-2">
                        <CheckCircle
                          className="text-primary-500 mt-0.5 flex-shrink-0"
                          size={16}
                        />
                        <span className="text-sm text-neutral-600">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="bg-neutral-50 rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-neutral-500">Setup Fee</span>
                      <div className="font-semibold text-primary-500">
                        {license.pricing.setup}
                      </div>
                    </div>
                    <div>
                      <span className="text-neutral-500">Annual License</span>
                      <div className="font-semibold text-primary-500">
                        {license.pricing.annual}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-neutral-200">
                    <span className="text-neutral-500 text-sm">
                      {license.pricing.users}
                    </span>
                  </div>
                </div>

                {/* Ideal For */}
                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-900 mb-2">
                    Ideal For:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {license.ideal.map((type) => (
                      <span
                        key={type}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sample Institutions */}
                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-900 mb-2">
                    Current Partners:
                  </h4>
                  <div className="space-y-1">
                    {license.institutions.map((institution) => (
                      <div
                        key={institution}
                        className="text-sm text-neutral-600"
                      >
                        • {institution}
                      </div>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-primary-500 text-white py-3 rounded-full font-semibold hover:bg-primary-600 transition-colors duration-200 flex items-center justify-center group"
                >
                  Request Proposal
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                    size={16}
                  />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose Our
              <span className="text-primary-500"> Licensing Program</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-serif">
              Our licensing partners benefit from proven methodologies, ongoing
              support, and access to a global community of practice.
            </p>
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
                  className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-500 rounded-full mb-4"
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

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold text-neutral-900 mb-8">
              Simple Licensing
              <span className="text-primary-500"> Process</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description:
                  "We discuss your needs, goals, and context to recommend the best licensing option.",
              },
              {
                step: "02",
                title: "Proposal & Agreement",
                description:
                  "Receive a detailed proposal with pricing, timeline, and deliverables tailored to your requirements.",
              },
              {
                step: "03",
                title: "Implementation Planning",
                description:
                  "Work together to plan deployment, training, and integration with your existing systems.",
              },
              {
                step: "04",
                title: "Launch & Support",
                description:
                  "Go live with full support, training, and ongoing assistance to ensure success.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Scale Your Impact?
            </h2>
            <p className="text-xl text-white/90 mb-8 font-serif">
              Let's discuss how our licensing programs can help your
              organization create transformative change at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-neutral-100 transition-colors duration-200 flex items-center justify-center"
              >
                <Mail className="mr-2" size={20} />
                Request Information
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors duration-200 flex items-center justify-center"
              >
                <Download className="mr-2" size={20} />
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Licensing;
