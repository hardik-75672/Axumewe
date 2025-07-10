import React from "react";
import { Quote, Star } from "lucide-react";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      text: "The Regenerative Venture Blueprint completely transformed how we approach sustainable business development. It's comprehensive yet practical.",
      author: "Sarah Chen",
      role: "Impact Investor",
      company: "Green Future Capital",
      rating: 5,
    },
    {
      id: 2,
      text: "These toolkits have saved us months of research and development. The quality and depth of content is exceptional.",
      author: "Marcus Rodriguez",
      role: "Policy Director",
      company: "Urban Innovation Lab",
      rating: 5,
    },
    {
      id: 3,
      text: "The Sentient Futures Card Deck sparked incredible conversations in our design workshops. Highly recommended for any forward-thinking team.",
      author: "Dr. Amara Okafor",
      role: "Design Researcher",
      company: "Future Systems Institute",
      rating: 5,
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-3xl mb-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Client Testimonials
          </span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          See what our clients are saying about our innovative toolkits and
          resources.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-orange-200/30 hover:bg-white/90 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-center mb-4">
              <Quote className="w-6 h-6 text-orange-400 mr-2" />
              <div className="flex space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>

            <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>

            <div className="border-t border-orange-200/30 pt-4">
              <p className="font-semibold text-gray-800">
                {testimonial.author}
              </p>
              <p className="text-sm text-orange-600">{testimonial.role}</p>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
