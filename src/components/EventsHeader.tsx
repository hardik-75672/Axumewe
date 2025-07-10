import React from "react";
import { CalendarDays, Sparkles, ArrowRight } from "lucide-react";

const EventsHeader: React.FC = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center space-x-2 mb-4">
        <CalendarDays className="w-8 h-8 text-orange-400" />
        <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
        <Sparkles className="w-6 h-6 text-yellow-400" />
      </div>

      <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
        <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Upcoming Events
        </span>
      </h1>

      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
        Join us for innovative workshops, conferences, and networking events
        that shape the future of design and technology.
      </p>

      <div className="flex items-center justify-center space-x-4">
        <button className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
          <span>View All Events</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button className="flex items-center space-x-2 bg-white/60 hover:bg-white/80 text-gray-700 px-6 py-3 rounded-full font-medium transition-all duration-200 backdrop-blur-sm border border-orange-200/30">
          <span>Subscribe to Updates</span>
        </button>
      </div>
    </div>
  );
};

export default EventsHeader;
