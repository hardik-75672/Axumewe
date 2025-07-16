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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Eye className="w-10 h-10 text-orange-400 drop-shadow-lg" />
            <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-4 drop-shadow">
            The ShowRoom
          </h1>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto mb-8">
            Market-validated ventures, incubated in our studio and ready for
            spin-off, acquisition, or investment.
          </p>
        </div>

        {/* Ventures Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ventures.map((venture, index) => (
            <div
              key={venture.id}
              className="group relative overflow-hidden rounded-3xl bg-white/90 backdrop-blur-lg border border-orange-200 shadow-2xl hover:shadow-orange-400/30 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.025]"
            >
              {/* Animated border ring on hover */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl border-2 border-gradient-to-br from-orange-400 via-yellow-400 to-amber-400 animate-pulse" />
              </div>
              <div className="relative p-7">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-orange-600 group-hover:text-orange-500 transition-colors">
                    {venture.title}
                  </h2>
                  <span
                    className={`px-3 py-1 rounded-full text-white text-xs font-semibold shadow-md ${venture.statusColor}`}
                  >
                    {venture.status}
                  </span>
                </div>
                <p className="text-neutral-700 text-base mb-4 leading-relaxed min-h-[64px]">
                  {venture.description}
                </p>
                <div className="flex flex-col gap-1 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="text-orange-500 font-medium text-xs">
                      Sector:
                    </span>
                    <span className="text-neutral-700 text-xs">
                      {venture.sector}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-500 font-medium text-xs">
                      Traction:
                    </span>
                    <span className="text-neutral-700 text-xs">
                      {venture.traction}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <a
                    href={`mailto:towncryer@axumwe.com?subject=Confidential%20Briefing%20Request%20for%20${encodeURIComponent(
                      venture.title
                    )}`}
                    className="w-full flex justify-center"
                  >
                    <button className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white font-semibold text-sm shadow-md transition-all duration-200 border border-orange-200 hover:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300">
                      <span>Briefing</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-neutral-700 mb-6 text-lg">
            Interested in partnering with us or investing in these ventures?
          </p>
          <a href="mailto:towncryer@axumwe.com?subject=Venture%20Partnership%20Inquiry">
            <button className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold text-base shadow-lg transition-all duration-200">
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShowRoomPage;
