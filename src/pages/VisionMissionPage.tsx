import React from "react";
import { Eye, Target } from "lucide-react";

const VisionMissionPage = () => (
  <section className="min-h-128 bg-white flex items-center justify-center ">
    <div className="max-w-6xl w-full mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Vision */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-8">
            <span className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-yellow-100">
              <Eye className="w-10 h-10 text-yellow-500" />
            </span>
          </div>
          <h2 className="text-4xl font-bold text-neutral-900 mb-6">
            Our Vision
          </h2>
          <p className="text-xl text-neutral-800 leading-relaxed">
            Evolving the Future with Anthropocentric Wisdom and Sentient
            Emergence for Humans, Non-Humans and the Planetary Ecosystem, rooted
            in African innovation and ancestral knowledge.
          </p>
        </div>
        {/* Mission */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-8">
            <span className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-orange-100">
              <Target className="w-10 h-10 text-orange-500" />
            </span>
          </div>
          <h2 className="text-4xl font-bold text-neutral-900 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-neutral-800 leading-relaxed">
            To research, prototype, and scale sentient-aligned business models,
            products, systems that empower post-regenerative conscious
            economies, rooted in planetary intelligence, anthropocentric
            wisdoms, and futures innovation.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default VisionMissionPage;
