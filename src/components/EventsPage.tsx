import React, { useState } from "react";
import EventsHeader from "./EventsHeader";
import FilterButtons from "./FilterButtons";
import EventCard from "./EventCard";
import { events, categories } from "../data/events"; // Adjust the import path as necessary
import { Brain, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";

const EventsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredEvents =
    activeFilter === "all"
      ? events
      : events.filter((event) => event.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 pt-20">
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
                  Pioneer global transition from sustainable to regenerative to
                  sentient futures through design innovation
                </p>
              </div>
              <div>
                <Target className="mx-auto mb-4" size={40} />
                <p className="font-african leading-relaxed">
                  Deliver future-fit models, tools, and ventures that solve
                  today's systemic crises
                </p>
              </div>
              <div>
                <Brain className="mx-auto mb-4" size={40} />
                <p className="font-african leading-relaxed">
                  Offer post-anthropocentric design perspectives grounded in
                  emerging science
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <EventsHeader />

        <FilterButtons
          categories={categories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
