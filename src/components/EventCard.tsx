import React from "react";
import ReactDOM from "react-dom";
import { Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react";

interface Event {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  location: string;
  format: string;
  description: string;
  category: string;
  attendees?: number;
  featured?: boolean;
}

interface EventCardProps {
  event: Event;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl backdrop-blur-lg bg-white/80 border  border-orange-200/30 hover:bg-white/90 transition-all duration-500 hover:scale-[1.02] shadow-md shadow-black hover:shadow-orange-500/30 hover:shadow-3xl ${
        event.featured ? "ring-2 ring-orange-400/60" : ""
      }`}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center text-white font-bold shadow-lg">
              {event.date.split(" ")[0]}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-orange-600">
                {event.date}
              </span>
              <div className="flex items-center space-x-1 text-xs text-orange-500">
                <Clock className="w-3 h-3" />
                <span>{event.time}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="px-2 py-1 rounded-full bg-orange-500/20 text-orange-700 text-xs font-medium">
              {event.category}
            </span>
            {event.featured && (
              <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange- transition-colors">
          {event.title}
        </h3>

        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
          {event.title}
        </h3>

        <p className="text-orange-600 font-medium mb-3 text-sm">
          {event.subtitle}
        </p>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {event.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-xs text-orange-500">
            <div className="flex items-center space-x-1">
              <MapPin className="w-3 h-3" />
              <span>{event.location}</span>
            </div>
            {event.attendees && (
              <div className="flex items-center space-x-1">
                <Users className="w-3 h-3" />
                <span>{event.attendees}+ attending</span>
              </div>
            )}
          </div>

          <button
            className="flex items-center space-x-1 text-orange-500 hover:text-orange-700 transition-colors group/btn"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(true);
            }}
          >
            <span className="text-xs font-medium">Learn More</span>
            <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {open &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-12 border-4 border-orange-200 animate-fade-in">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-4 text-neutral-400 hover:text-orange-500 text-2xl font-bold"
                aria-label="Close"
              >
                ×
              </button>
              <h2 className="text-3xl font-bold text-orange-600 mb-2 text-center">
                {event.title}
              </h2>
              <div className="mb-2 text-center text-orange-700 font-semibold">
                {event.subtitle}
              </div>
              <div className="flex flex-wrap justify-center gap-6 mb-6 text-base">
                <div className="flex flex-col items-center">
                  <span className="text-xs text-gray-500">Date</span>
                  <span className="font-medium text-gray-800">
                    {event.date}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xs text-gray-500">Time</span>
                  <span className="font-medium text-gray-800">
                    {event.time}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xs text-gray-500">Location</span>
                  <span className="font-medium text-gray-800">
                    {event.location}
                  </span>
                </div>
                {event.attendees && (
                  <div className="flex flex-col items-center">
                    <span className="text-xs text-gray-500">Attending</span>
                    <span className="font-medium text-gray-800">
                      {event.attendees}+
                    </span>
                  </div>
                )}
              </div>
              <div className="mb-2 text-base">
                <span className="font-semibold text-orange-700">Theme:</span>{" "}
                {event.subtitle}
              </div>
              <div className="mb-2 text-base">
                <span className="font-semibold text-orange-700">Type:</span>{" "}
                {event.category}
              </div>
              <div className="mb-4 text-base">
                <span className="font-semibold text-orange-700">
                  Description:
                </span>
                <div className="text-neutral-700 mt-1 whitespace-pre-line">
                  {event.description}
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  className="px-6 py-3 rounded-full bg-orange-600 text-white text-base font-semibold hover:bg-orange-500 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default EventCard;
