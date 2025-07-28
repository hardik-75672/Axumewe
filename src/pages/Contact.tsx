import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Globe,
  Calendar,
  Download,
  MessageCircle,
  Headphones,
  Users,
  Building,
  Zap,
  Target,
  Heart,
} from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiry_type: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, organization, inquiry_type, subject, message } =
      formData;
    const mailtoLink = `mailto:towncryer@axumwe.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganization: ${organization}\nInquiry Type: ${inquiry_type}\n\n${message}`
    )}`;
    window.location.href = mailtoLink;
    setSent(true);
  };
  const inquiryTypes = [
    { value: "products", label: "Product Inquiry", icon: Building },
    { value: "consulting", label: "Consulting Services", icon: Users },
    { value: "licensing", label: "Licensing & Partnerships", icon: Globe },
    { value: "events", label: "Events & Workshops", icon: Calendar },
    { value: "media", label: "Press & Media", icon: MessageCircle },
    { value: "support", label: "Technical Support", icon: Headphones },
    { value: "other", label: "Other", icon: Mail },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "towncryer@axumwe.com",
      description: "Send us an email anytime",
    },
    // {
    //   icon: Phone,
    //   title: "Call Us",
    //   details: "+234 (0) 123 456 7890",
    //   description: "Mon-Fri from 9am to 5pm WAT",
    //   action: "Call Now",
    // },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "4D Unit, Karaoke Drive, Ruaka, Nairobi, Kenya",
      description: "330 Arrowhead Blvd, Unit 50 A, Jonesborrow, Georgia, 30236",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon - Fri: 9am - 6pm WAT",
      description: "Saturday: 10am - 3pm WAT",
    },
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: "Book Discovery Call",
      description: "Schedule a 30-minute consultation to discuss your needs",
      action: "Schedule Now",
      color: "from-primary-500 to-secondary-500",
    },
    {
      icon: Download,
      title: "Download Media Kit",
      description: "Get our press kit with logos, images, and company info",
      action: "Download Kit",
      color: "from-secondary-500 to-accent-500",
    },
    {
      icon: MessageCircle,
      title: "Join Community",
      description: "Connect with our global community of change agents",
      action: "Join Now",
      color: "from-accent-500 to-primary-500",
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const impactRef = useRef(null);

  const isImpactInView = useInView(impactRef, { once: true, margin: "-100px" });

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
  const impactMetrics = [
    {
      number: "2.5M",
      label: "Lives Impacted",
      description: "Through regenerative ventures and policies",
      icon: Heart,
    },
    {
      number: "150%",
      label: "Average ROI",
      description: "For organizations using sentient models",
      icon: Target,
    },
    {
      number: "85%",
      label: "Success Rate",
      description: "In achieving transformation goals",
      icon: Zap,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      {/* <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
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
                Contact & Booking
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl fony-african font-bold text-neutral-900 mb-8"
            >
              Let's Create
              <span className="text-primary-500"> Together</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-serif"
            >
              Ready to transform your organization or community? We'd love to
              hear about your vision and explore how our tools and services can
              help you achieve your goals.
            </motion.p>
          </motion.div>
        </div>
      </section> */}
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
              Join our growing list of organizations and partners adopting our
              model to create regenerative solutions that honor anthropocentric
              wisdom while building sentient futures for all life.
            </motion.p>
            {/* <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
            </div> */}
          </motion.div>
        </div>
      </section>
      {/* Quick Actions */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl fony-african font-bold text-neutral-900 mb-6"
            >
              Quick Actions
            </motion.h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${action.color} text-white rounded-full mb-6`}
                >
                  <action.icon size={40} />
                </motion.div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {action.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {action.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-gradient-to-r ${action.color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200`}
                >
                  {action.action}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Contact Form & Info */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
                  Send us a message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {sent && (
                    <div className="text-green-600 font-semibold mb-4">
                      Thank you! Your message has been sent.
                    </div>
                  )}
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        placeholder="John Doe"
                      />
                    </motion.div>

                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        placeholder="john@example.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your organization name"
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      name="inquiry_type"
                      value={formData.inquiry_type}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select inquiry type</option>
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="How can we help you?"
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your project, goals, and how we can help..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-primary-500 text-white py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-200 flex items-center justify-center group"
                  >
                    Send Message
                    <Send
                      className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                      size={18}
                    />
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
                  Get in Touch
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-8 font-serif">
                  We're here to help you navigate your transformation journey.
                  Reach out through any of these channels and we'll get back to
                  you promptly.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-500 rounded-lg flex items-center justify-center"
                  >
                    <info.icon size={24} />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-neutral-900 mb-1">
                      {info.title}
                    </h4>

                    <p className="text-primary-500 font-medium mb-1">
                      <span className="text-black">
                        {info.title == "Visit Us" ? ` Africa Addresses : ` : ""}
                      </span>
                      {info.details}
                    </p>
                    {info.title == "Visit Us" ? (
                      <p className="text-primary-500 font-medium mb-1">
                        <span className="text-black"> US Addresses : </span>
                        {info.description}
                      </p>
                    ) : (
                      ""
                    )}
                    <p className="text-neutral-600 text-sm mb-3">
                      {info.title != "Visit Us" ? info.description : ""}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-primary-500 font-medium text-sm hover:text-primary-600 transition-colors duration-200"
                    >
                      {/* {info.action} */}
                    </motion.button>
                  </div>
                </motion.div>
              ))}

              {/* Map Placeholder */}
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-xl h-64 flex items-center justify-center relative overflow-hidden shadow-lg"
              >
                <img
                  src="https://images.pexels.com/photos/3601094/pexels-photo-3601094.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Office location"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary-500/20 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-white p-4 rounded-full shadow-lg"
                  >
                    <Globe className="text-primary-500" size={32} />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        ref={impactRef}
        className="py-24 bg-gradient-to-r from-tribal-earth via-primary-500 to-tribal-copper relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-adinkra-pattern"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isImpactInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-african font-bold text-white mb-8"
            >
              Axumwe
              <span className="text-tribal-gold"> Impact</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-african"
            >
              Real results from African organizations and global partners
              transforming their approach to complex challenges through Ubuntu
              philosophy and regenerative design methodologies.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isImpactInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  rotateY: 10,
                }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-tribal p-8 border border-tribal-gold/30 hover:bg-tribal-gold/20 transition-all duration-300"
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-tribal-gold rounded-african mb-6 animate-drum-beat"
                >
                  <metric.icon className="text-white" size={32} />
                </motion.div>
                <motion.div
                  className="text-5xl font-bold text-white mb-4 font-african"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2, type: "spring" }}
                >
                  {metric.number}
                </motion.div>
                <h3 className="text-xl font-african font-semibold text-tribal-gold mb-2">
                  {metric.label}
                </h3>
                <p className="text-white/80 leading-relaxed font-african">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl fony-african font-bold text-neutral-900 mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can you respond to inquiries?",
                answer:
                  "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.",
              },
              {
                question: "Do you offer free consultations?",
                answer:
                  "Yes! We offer 30-minute discovery calls to understand your needs and explore how we can help. Book one using the quick action above.",
              },
              {
                question: "Can you work with organizations outside Africa?",
                answer:
                  "Absolutely! While we're based in Africa, we work with organizations worldwide. Many of our tools and services are delivered virtually.",
              },
              {
                question: "What's included in your media kit?",
                answer:
                  "Our media kit includes high-resolution logos, company photos, founder bios, fact sheets, and recent press coverage.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
