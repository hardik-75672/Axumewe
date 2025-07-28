import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  Lightbulb,
  Zap,
  Target,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Users,
  Sparkles,
} from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeService, setActiveService] = useState(0);
  const [openEmpathizeModal, setOpenEmpathizeModal] = useState(false);
  const [selectedTier, setSelectedTier] = useState<
    (typeof mvpTiers)[number] | null
  >(null);
  const [selectedMilestone, setSelectedMilestone] = useState("");

  const serviceAreas = [
    {
      icon: Brain,
      title: "Sentient Business & Venture Design Labs",
      description:
        "Templates and blueprints for post-capitalist business models with circular and biospheric economic architectures.",
      features: [
        "Post-capitalist business model templates",
        "Circular economic architectures",
        "Biospheric value creation frameworks",
        "Regenerative transformation roadmaps",
        "Scenario planning frameworks",
      ],
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Sparkles,
      title: "Product, Service & Systems Innovation",
      description:
        "AI-augmented foresight tools, smart regenerative wearables, and emotionally intelligent design prototypes.",
      features: [
        "AI-augmented foresight tools",
        "Smart regenerative wearables",
        "Rituals-based interfaces",
        "Emotionally intelligent prototypes",
        "Sentient digital twins for ecosystems",
        "Participatory governance toolkits",
      ],
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Target,
      title: "Policy Foresight & Simulation Advisory",
      description:
        "Narrative-driven simulations, civic planning foresight games, and strategic foresight labs for deep-future policy design.",
      features: [
        "Narrative-driven simulations",
        "Civic planning foresight games",
        "Strategic foresight labs",
        "Deep-future policy design",
        "Design residencies & co-creation sprints",
        "Public sector prototyping support",
      ],
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      hourlyRate: "$75/hour",
    },
  ];

  const mvpTiers = [
    {
      name: "AI Tier",
      description:
        "80% AI-driven rapid analysis, 20% human synthesis. Ideal for rapid R&D, small budgets.",
      aiRatio: "80% AI / 20% Human",
      timeframe: "1–3 months",
      price: "$25,000",
      features: [
        "Rapid AI-driven analysis",
        "Human synthesis & validation",
        "MVP ready for scale",
        "Basic stakeholder engagement",
        "Standard documentation",
      ],
      color: "from-primary-500 to-secondary-500",
    },
    {
      name: "Hybrid Tier",
      description:
        "Balanced AI-human deep dive. Ideal for iterative, participatory MVPs with robust storytelling.",
      aiRatio: "50% AI / 50% Human",
      timeframe: "2–4 months",
      price: "$35,000",
      features: [
        "Balanced AI-human approach",
        "Participatory design process",
        "Rich storytelling integration",
        "Iterative development cycles",
        "Comprehensive documentation",
      ],
      color: "from-primary-500 to-secondary-500",
      popular: true,
    },
    {
      name: "Advanced Tier",
      description:
        "Deep field R&D and human-led analysis with stakeholder workshops, rich ethnography, ecosystem immersion.",
      aiRatio: "20% AI / 80% Human",
      timeframe: "3–6 months",
      price: "$50,000",
      features: [
        "Deep field research & ethnography",
        "Extensive stakeholder workshops",
        "Ecosystem immersion process",
        "Premium human-led analysis",
        "Full IP documentation & licensing",
      ],
      color: "from-primary-500 to-secondary-500",
    },
  ];

  const sprintMilestones = [
    {
      name: "Empathize",
      price: "$10,500",
      description: "Data collection, discovery, user need analysis",
    },
    {
      name: "Define",
      price: "$10,500",
      description: "Design challenge framing, hypothesis design",
    },
    {
      name: "Ideate",
      price: "$10,500",
      description: "Brainstorming, speculative design generation",
    },
    {
      name: "Prototype",
      price: "$20,000",
      description: "MVP prototyping, service model sketching, UX design",
    },
    {
      name: "Test & Validate",
      price: "$10,500",
      description: "Stakeholder validation, iteration loops, experimentation",
    },
    {
      name: "Launch & License",
      price: "$10,500",
      description: "MVP documentation, IP assets, licensing terms",
    },
  ];

  // Add milestone details for modal rendering
  const milestoneDetails: Record<
    string,
    {
      scope: string;
      purpose: string;
      activities: string[];
      deliverables: string[];
    }
  > = {
    Empathize: {
      scope: "Data collection, discovery, user need analysis",
      purpose:
        "To deeply understand the people, systems, and environments you’re designing for",
      activities: [
        "Stakeholder interviews (1-on-1 and/or group)",
        "Contextual inquiry and ethnographic observation",
        "User personas and behavior mapping",
        "Pain point and aspirations discovery",
        "Cultural or ecological immersion (if relevant)",
      ],
      deliverables: [
        "Empathy Map (visual + written)",
        "Stakeholder Map (power, influence, interest)",
        "Discovery Report (key insights, quotes, themes)",
        "Preliminary User Journey Map",
      ],
    },
    Define: {
      scope: "Design challenge framing, hypothesis design",
      purpose:
        "To clearly articulate the problem and define actionable hypotheses",
      activities: [
        "Problem statement development",
        "Hypothesis formulation",
        "Stakeholder alignment sessions",
        "Success criteria definition",
      ],
      deliverables: [
        "Problem Statement",
        "Hypothesis Document",
        "Stakeholder Alignment Summary",
        "Success Criteria Checklist",
      ],
    },
    Ideate: {
      scope: "Brainstorming, speculative design generation",
      purpose: "To generate a wide range of creative solutions and concepts",
      activities: [
        "Ideation workshops",
        "Speculative design sessions",
        "Concept sketching",
        "Solution prioritization",
      ],
      deliverables: [
        "Idea Portfolio",
        "Concept Sketches",
        "Prioritized Solution List",
      ],
    },
    Prototype: {
      scope: "MVP prototyping, service model sketching, UX design",
      purpose: "To create tangible prototypes for testing and feedback",
      activities: [
        "MVP prototyping",
        "Service model sketching",
        "UX/UI design",
        "Interactive mockups",
      ],
      deliverables: [
        "MVP Prototype",
        "Service Model Blueprint",
        "UX/UI Mockups",
      ],
    },
    "Test & Validate": {
      scope: "Stakeholder validation, iteration loops, experimentation",
      purpose: "To validate solutions and iterate based on feedback",
      activities: [
        "Stakeholder validation sessions",
        "User testing",
        "Iteration loops",
        "Experimentation",
      ],
      deliverables: ["Validation Report", "Test Results", "Iteration Log"],
    },
    "Launch & License": {
      scope: "MVP documentation, IP assets, licensing terms",
      purpose: "To prepare for launch and secure intellectual property",
      activities: [
        "MVP documentation",
        "IP asset creation",
        "Licensing terms drafting",
        "Launch planning",
      ],
      deliverables: [
        "MVP Documentation",
        "IP Assets",
        "Licensing Terms",
        "Launch Plan",
      ],
    },
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
  // const [selectedTier, setSelectedTier] = useState(null);

  type TierName = "AI Tier" | "Hybrid Tier" | "Advanced Tier";
  type TableTier = {
    name: string;
    duration: string;
    ratio: string;
    ideal: string;
    concept: string;
    features: string[];
    sprints: string[][];
    output: string;
  };
  const table: Record<TierName, TableTier> = {
    "AI Tier": {
      name: "AI-Led, Market-Tested",
      duration: "1–3 months",
      ratio: "80% AI / 20% Human",
      ideal:
        "Early-stage innovators, solopreneurs, impact fellows with lean budgets",
      concept:
        "I have a bold idea… I want to validate, prototype, and test a future-facing startup using smart AI tools and go-to-market assets.",
      features: [
        "AI-driven futures scan",
        "Automated empathy + personas",
        "Low-fidelity MVP & standard launch docs",
        "AI-led branding",
      ],
      sprints: [
        [
          "AI uploaded brief + AI generated Design Brief & Tuning Plan",
          "Implementation",
        ],
        [
          "Empathy/stakeholder mapping",
          "Wireframes/mockups",
          "Scenario testing",
          "Refined MVP",
        ],
        [
          "AI financials + pitch assets",
          "Shopify/landing page",
          "Optional soft launch",
        ],
      ],
      output:
        "Market-validated MVP with prototype, light brand & basic launch kit",
    },
    "Hybrid Tier": {
      name: "Co-Created Startup: Participatory Design Meets Systems Thinking",
      duration: "2–4 months",
      ratio: "50% AI / 50% Human",
      ideal:
        "NGOs, Foundations, youth incubators, consortiums building systemic impact startups",
      concept:
        "We’re designing a mission-driven venture… Our MVP isn’t just a product—it’s a systemic solution.",
      features: [
        "Hybrid research approach",
        "Stakeholder workshops",
        "Narrative framing work",
        "Mid-fidelity MVP",
        "Governance + ops testing",
      ],
      sprints: [
        [
          "Co-creation with stakeholders",
          "Story-framed MVP Brief",
          "Collaborative roadmap",
        ],
        [
          "Empathy workshops",
          "Ideation labs",
          "Storytelling + business model",
          "Community testing",
        ],
        [
          "Operational setup",
          "Legal + branding",
          "Launch strategy",
          "Platform + CRM/API",
          "Investor deck",
        ],
      ],
      output:
        "Validated systemic MVP with story, governance, and go-to-market readiness",
    },
    "Advanced Tier": {
      name: "Deep Earth Startup: Human-Led, Culturally Rooted, Future-Ready",
      duration: "3–6 months",
      ratio: "20% AI / 80% Human",
      ideal:
        "Multilaterals, governments, city labs, or systemic ventures needing immersive development",
      concept:
        "Our startup is meant to transform complex systems… We want deep ethnography, high-trust partnerships, and a regenerative model.",
      features: [
        "Ethnographic fieldwork",
        "Cultural storytelling",
        "Stakeholder mapping",
        "Full launch studio",
        "Risk/behavioral systems design",
      ],
      sprints: [
        ["Field immersion", "Stakeholder ethnographies", "Co-created roadmap"],
        [
          "Deep user narrative analysis",
          "Systems modeling & pathways",
          "Final MVP prototyping",
        ],
        [
          "Legal/IP setup",
          "Full branding & platform suite",
          "Go-to-market activation plan",
          "5-year roadmap & compliance",
        ],
      ],
      output:
        "Turnkey future startup ready for scale, investment, and systemic deployment",
    },
  };

  const tierModalContent = (tier: { name: TierName } | null) => {
    if (!tier) return null;

    const t = table[tier.name];

    return (
      <div>
        <h2 className="text-3xl font-bold text-orange-600 mb-4 text-center">
          {tier.name}
        </h2>
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="font-semibold text-orange-700">Tier Name:</div>
            <div className="mb-2 text-neutral-700">{t.name}</div>
            <div className="font-semibold text-orange-700">Duration:</div>
            <div className="mb-2 text-neutral-700">{t.duration}</div>
            <div className="font-semibold text-orange-700">AI/Human Ratio:</div>
            <div className="mb-2 text-neutral-700">{t.ratio}</div>
            <div className="font-semibold text-orange-700">Ideal For:</div>
            <div className="mb-2 text-neutral-700">{t.ideal}</div>
          </div>
          <div>
            <div className="font-semibold text-orange-700">
              Narrative Concept:
            </div>
            <div className="mb-2 text-neutral-700">{t.concept}</div>
            <div className="font-semibold text-orange-700">Key Features:</div>
            <ul className="list-disc list-inside text-neutral-700 mb-2">
              {t.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="font-semibold text-orange-700 mb-2">
          Strategic Journey Sprints:
        </div>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {t.sprints.map((sprint, i) => (
            <div key={i} className="bg-orange-50 rounded-lg p-3">
              <div className="font-semibold text-orange-600 mb-1">
                Sprint {i + 1}
              </div>
              <ul className="list-disc list-inside text-neutral-700 text-sm">
                {sprint.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="font-semibold text-orange-700">Final Output:</div>
        <div className="text-neutral-700 mb-2">{t.output}</div>
      </div>
    );
  };

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
                Core Strategic Services
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl fony-african font-bold text-neutral-900 mb-8"
            >
              Sentient Design
              <span className="text-primary-500"> Solutions</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-serif"
            >
              From business model innovation to policy foresight, we offer
              comprehensive services that bridge speculative design with
              practical implementation.
            </motion.p>
          </motion.div>
        </div>
      </section> */}

      {/* Service Areas */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-3 gap-8"
          >
            {serviceAreas.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-neutral-100"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-500 rounded-full mb-6"
                >
                  <service.icon size={32} />
                </motion.div>

                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-neutral-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-900 mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
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

                {service.hourlyRate && (
                  <div className="mb-6 p-4 bg-primary-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="text-primary-500" size={20} />
                      <span className="font-semibold text-primary-600">
                        {service.hourlyRate}
                      </span>
                    </div>
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-primary-500 text-white py-3 rounded-full font-semibold hover:bg-primary-600 transition-colors duration-200 flex items-center justify-center group"
                >
                  Learn More
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                    size={16}
                  />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* MVP-as-a-Service Tiers */}
      <section className=" pb-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-700 bg-clip-text text-transparent mb-5">
              Our Services
            </h1>
            <h2 className="text-4xl fony-african font-bold text-neutral-900 mb-8">
              MVP-as-a-Service
              <span className="text-primary-500"> Tiers</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-serif">
              Choose the right balance of AI and human expertise for your
              project needs and timeline.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {mvpTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-neutral-100"
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {tier.description}
                  </p>

                  <div className="text-4xl font-bold text-neutral-900 mb-2">
                    {tier.price}
                  </div>

                  <div className="space-y-2 text-sm text-neutral-600">
                    <div className="flex items-center justify-center space-x-2">
                      <Brain size={16} />
                      <span>{tier.aiRatio}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Clock size={16} />
                      <span>{tier.timeframe}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
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

                <div className="flex flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`mt-6 w-full bg-gradient-to-r ${tier.color} text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center`}
                    onClick={() => setSelectedTier(tier)}
                  >
                    Details
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                      size={16}
                    />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`mt-6 w-full bg-gradient-to-r ${tier.color} text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center`}
                    // onClick={() => setSelectedTier(tier)}
                  >
                    To Cart
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                      size={16}
                    />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* A La Carte Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl fony-african font-bold text-neutral-900 mb-8">
              A La Carte
              <span className="text-primary-500"> Pricing</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-serif">
              Purchase individual sprint milestones independently with all
              activities and deliverables included.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {sprintMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.name}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl shadow-md shadow-black bg-neutral-50 hover:bg-white hover:shadow-lg transition-all duration-300 border border-neutral-100 cursor-pointer"
                onClick={() => setSelectedMilestone(milestone.name)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {milestone.name}
                  </h3>
                  <span className="text-xl font-bold text-primary-500">
                    {milestone.price}
                  </span>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {milestone.description}
                </p>
                <button
                  className="mt-2 w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold py-2 rounded-full shadow transition-all duration-200"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent modal from opening
                    alert(`Added "${milestone.name}" to cart!`);
                  }}
                >
                  Add to Cart
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Strategic Consulting Services Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900 text-white">
          <div className="px-8 pt-10 pb-6 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Strategic Consulting Services
            </h2>
            <p className="text-lg text-primary-100 mb-6">
              Leverage our deep expertise in foresight, sentient design, and
              regenerative economics to guide your organization's transition.
            </p>
          </div>
          <div className="px-8 pb-8">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary-400 mt-1" size={22} />
                <span>Strategic Foresight &amp; Futures Thinking</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary-400 mt-1" size={22} />
                <span>Sentient Design &amp; Innovation Strategy</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary-400 mt-1" size={22} />
                <span>Policy &amp; Governance Innovation</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary-400 mt-1" size={22} />
                <span>Business Model Design &amp; Economic Architecture</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary-400 mt-1" size={22} />
                <span>R&amp;D to MVP Innovation Pipeline Support</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary-400 mt-1" size={22} />
                <span>Institutional Capacity Building</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary-400 mt-1" size={22} />
                <span>Speculative Design &amp; Storytelling for Futures</span>
              </div>
            </div>
            <div className="text-center text-primary-200 mb-6">
              Available for projects and advisory retainers.
            </div>
            <div className="flex justify-center">
              <a
                href="https://calendar.app.google/xRZETVre389BcR4b8"
                className="w-full max-w-xl"
              >
                <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg transition-all duration-200">
                  Book a Consultation – $150/hour
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl fony-african font-bold text-white mb-6">
              Ready to Build Sentient Futures?
            </h2>
            <p className="text-xl text-white/90 mb-8 font-serif">
              Let's discuss how our services can help you transition from
              sustainable to regenerative to sentient business models and
              systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-neutral-100 transition-colors duration-200"
                onClick={() =>
                  (window.location.href =
                    "mailto:towncryer@axumwe.com?subject=Consultation%20Request")
                }
              >
                Book Consultation
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
      </section> */}

      {openEmpathizeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 border-4 border-orange-200 animate-fade-in">
            <button
              onClick={() => setOpenEmpathizeModal(false)}
              className="absolute top-3 right-4 text-neutral-400 hover:text-orange-500 text-2xl font-bold"
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
              Empathize Milestone
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex font-semibold text-orange-700">
                  <span className="w-32">Scope:</span>
                  <span className="text-neutral-700">
                    Data collection, discovery, user need analysis
                  </span>
                </div>
                <div className="flex font-semibold text-orange-700 mt-2">
                  <span className="w-32">Purpose:</span>
                  <span className="text-neutral-700">
                    To deeply understand the people, systems, and environments
                    you’re designing for
                  </span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="font-semibold text-orange-700 mb-2">
                    Activities
                  </div>
                  <ul className="list-disc list-inside text-neutral-700 space-y-1">
                    <li>Stakeholder interviews (1-on-1 and/or group)</li>
                    <li>Contextual inquiry and ethnographic observation</li>
                    <li>User personas and behavior mapping</li>
                    <li>Pain point and aspirations discovery</li>
                    <li>Cultural or ecological immersion (if relevant)</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-orange-700 mb-2">
                    Deliverables
                  </div>
                  <ul className="list-disc list-inside text-neutral-700 space-y-1">
                    <li>Empathy Map (visual + written)</li>
                    <li>Stakeholder Map (power, influence, interest)</li>
                    <li>Discovery Report (key insights, quotes, themes)</li>
                    <li>Preliminary User Journey Map</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedTier && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-8 border-4 border-orange-200 animate-fade-in">
            <button
              onClick={() => setSelectedTier(null)}
              className="absolute top-3 right-4 text-neutral-400 hover:text-orange-500 text-2xl font-bold"
              aria-label="Close"
            >
              ×
            </button>
            {tierModalContent(selectedTier)}
          </div>
        </div>
      )}

      {selectedMilestone && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 border-4 border-orange-200 animate-fade-in">
            <button
              onClick={() => setSelectedMilestone("")}
              className="absolute top-3 right-4 text-neutral-400 hover:text-orange-500 text-2xl font-bold"
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
              {selectedMilestone}
            </h2>
            <div className="mb-4">
              <div className="flex font-semibold text-orange-700 mb-2">
                <span className="w-32">Scope:</span>
                <span className="text-neutral-700">
                  {milestoneDetails[selectedMilestone].scope}
                </span>
              </div>
              <div className="flex font-semibold text-orange-700 mb-2">
                <span className="w-32">Purpose:</span>
                <span className="text-neutral-700">
                  {milestoneDetails[selectedMilestone].purpose}
                </span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="font-semibold text-orange-700 mb-2">
                  Activities
                </div>
                <ul className="list-disc list-inside text-neutral-700 space-y-1">
                  {milestoneDetails[selectedMilestone].activities.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-semibold text-orange-700 mb-2">
                  Deliverables
                </div>
                <ul className="list-disc list-inside text-neutral-700 space-y-1">
                  {milestoneDetails[selectedMilestone].deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
