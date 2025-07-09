const approachData = [
  {
    number: "1.",
    title: "SENTIENT SYSTEMS THINKING",
    color: "text-primary-500",
    description:
      "We begin with a planetary lens and multi-intelligence perspective, integrating environmental, human, non-human, and machine agency.",
    meta: [
      {
        label: "Sources",
        value: "Transition Design, Systems Innovation, Futures Anthropology",
      },
      {
        label: "Tools",
        value: "Ecosystem mapping, biospheric diagnostics",
      },
    ],
  },
  {
    number: "2.",
    title: "DEEP FORESIGHT & SENSEMAKING",
    color: "text-primary-500",
    description:
      'Identify weak signals and horizon trends to cultivate "Futures Empathy" through immersive scenarios and storytelling.',
    meta: [
      {
        label: "Outputs",
        value: "Futures Canvas™, Worldbuilding Probes, Design Fiction",
      },
    ],
  },
];

const cardsData = [
  {
    number: "3.",
    title: "POST-HUMAN TRANSITION DESIGN",
    color: "text-primary-500",
    description:
      "Centering ancestral knowledge and indigenous cosmologies to deconstruct dominant paradigms and recenter relational intelligences.",
    meta: [
      {
        label: "Methodologies",
        value: "CMU Transition Design Steps",
      },
    ],
  },
  {
    number: "4.",
    title: "REGENERATIVE & SENTIENT DESIGN",
    color: "text-primary-500",
    description:
      "We design not for user experience, but for ecosystem experience, embedding living systems and adaptive intelligence.",
    meta: [
      {
        label: "Tools",
        value: "Regenerative blueprints, Ritual AI, Sentient digital twins",
      },
    ],
  },
  {
    number: "5.",
    title: "R&D-TO-MVP PIPELINE",
    color: "text-primary-500",
    description:
      "Our Labs incubate future-fit ventures from insight to impact using an adapted sprint methodology for regenerative cycles.",
    meta: [
      {
        label: "Model",
        value: "Showcase Licensing Model",
      },
    ],
  },
  {
    number: "6.",
    title: "POLICY & GOVERNANCE REDESIGN",
    color: "text-primary-500",
    description:
      "Where civic imagination meets speculative simulation. We design post-carbon governance and interspecies policy.",
    meta: [
      {
        label: "Outputs",
        value: "Policy Foresight Labs, Transition Toolkits",
      },
    ],
  },
  {
    number: "7.",
    title: "COMMUNITY CO-CREATION",
    color: "text-primary-500",
    description:
      "Design is not extractive. It’s a ritual of belonging. We use field-based co-creation with local and indigenous communities.",
    meta: [
      {
        label: "Tools",
        value: "Embodied co-design, anthropological probes",
      },
    ],
  },
  {
    number: "8.",
    title: "SENTIENT METRICS",
    color: "text-primary-500",
    description:
      "Measure what regenerates and awakens. We embed new metrics for ecosystem flourishing, cultural vitality, and relational equity.",
    meta: [
      {
        label: "Outputs",
        value: "AI-powered impact dashboards",
      },
    ],
  },
  {
    number: "9.",
    title: "LICENSING & MARKETPLACE",
    color: "text-primary-500",
    description:
      "The Marketplace as a Living System. Offering toolkits, advisory, and tiered MVP-as-a-Service.",
    meta: [
      {
        label: "Offerings",
        value: "Toolkits, Consulting, MVP-as-a-Service",
      },
    ],
  },
];

const Approach = () => (
  <section className="min-h-screen bg-white/60 backdrop-blur-lg py-16">
    <div className="max-w-6xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="flex justify-center mb-2">
          <span className="text-primary-500 text-2xl mr-2">🎛️</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">
          Our Approach:{" "}
          <span className="text-primary-500">
            Building the <span className="text-primary-500">Sentient Age</span>
          </span>
        </h1>
        <p className="italic text-lg text-neutral-600 mb-8">
          "We do not predict the future — we prototype it."
        </p>
      </div>

      {/* Top 2 Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {approachData.map((item, idx) => (
          <div
            key={item.title}
            className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-neutral-200 shadow-lg"
          >
            <div className={`font-bold mb-2 ${item.color}`}>
              {item.number} {item.title}
            </div>
            <div className="text-neutral-900 mb-4">{item.description}</div>
            {item.meta.map((meta, i) => (
              <div key={i} className="text-sm text-neutral-700">
                <span className="font-semibold">{meta.label}:</span>{" "}
                <span className="text-neutral-800">{meta.value}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Grid Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((item, idx) => (
          <div
            key={item.title}
            className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-neutral-200 shadow-lg"
          >
            <div className={`font-bold mb-2 ${item.color}`}>
              {item.number} {item.title}
            </div>
            <div className="text-neutral-900 mb-4">{item.description}</div>
            {item.meta.map((meta, i) => (
              <div key={i} className="text-sm text-neutral-700">
                <span className="font-semibold">{meta.label}:</span>{" "}
                <span className="text-neutral-800">{meta.value}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Approach;
