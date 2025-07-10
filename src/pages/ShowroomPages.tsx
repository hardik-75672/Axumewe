import React from "react";
import { Eye, ArrowRight } from "lucide-react";

const ShowRoomPage: React.FC = () => {
  const ventures = [
    {
      id: "1",
      title: "Project KAIROS",
      description:
        "An AI-powered platform for simulating policy impacts on urban ecosystems.",
      sector: "AI for Governance",
      traction: "Tracking: PMV with 2 municipalities (Q1 from UNDP)",
      status: "Seed Round",
      statusColor: "bg-orange-500",
    },
    {
      id: "2",
      title: "AURA Wearables",
      description:
        "Bio-sensing jewelry that translates emotional states into ambient data art.",
      sector: "Regenerative Tech",
      traction: "Traction: 1,000+ pre-orders featured in Future of Fashion.",
      status: "Acquisition Target",
      statusColor: "bg-yellow-500",
    },
    {
      id: "3",
      title: "MyceliaNet",
      description:
        "A decentralized logistics network based on circular economy principles.",
      sector: "Circular Economy",
      traction: "Traction: Operational in 3 cities, 50% MoM growth in volume.",
      status: "Series A",
      statusColor: "bg-green-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white/70 backdrop-blur-lg pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Eye className="w-8 h-8 text-orange-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            The ShowRoom
          </h1>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto mb-8">
            Market-validated ventures, incubated in our studio and ready for
            spin-off, acquisition, or investment.
          </p>
        </div>

        {/* Ventures Grid */}
        <div className="space-y-8">
          {ventures.map((venture, index) => (
            <div
              key={venture.id}
              className="group relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-md border border-gray-200 hover:bg-white transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:shadow-orange-500/10 shadow"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <h2 className="text-2xl font-bold text-yellow-600 group-hover:text-yellow-500 transition-colors">
                        {venture.title}
                      </h2>
                      <span
                        className={`px-3 py-1 rounded-full text-white text-sm font-medium ${venture.statusColor}`}
                      >
                        {venture.status}
                      </span>
                    </div>

                    <p className="text-neutral-700 text-lg mb-6 leading-relaxed">
                      {venture.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start space-x-3">
                        <span className="text-orange-500 font-medium text-sm">
                          Sector:
                        </span>
                        <span className="text-neutral-700 text-sm">
                          {venture.sector}
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="text-orange-500 font-medium text-sm">
                          Traction:
                        </span>
                        <span className="text-neutral-700 text-sm">
                          {venture.traction}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button className="w-full max-w-md bg-orange-100 hover:bg-yellow-100 text-orange-700 hover:text-orange-900 px-6 py-4 rounded-xl font-medium transition-all duration-200 border border-orange-200 hover:border-orange-400 group/btn">
                    <span className="flex items-center justify-center space-x-2">
                      <span>Request Confidential Briefing</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-neutral-600 mb-6">
            Interested in partnering with us or investing in these ventures?
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowRoomPage;
