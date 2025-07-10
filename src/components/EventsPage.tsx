import React, { useState } from "react";
import EventsHeader from "./EventsHeader";
import FilterButtons from "./FilterButtons";
import EventCard from "./EventCard";
import { events, categories } from "../data/events"; // Adjust the import path as necessary

const EventsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredEvents =
    activeFilter === "all"
      ? events
      : events.filter((event) => event.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 pt-20">
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
