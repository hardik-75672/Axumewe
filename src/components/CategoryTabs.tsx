import React from "react";
import { Leaf, Lightbulb, Zap, Crown } from "lucide-react";

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: "sustainable", label: "Sustainable Design", icon: Leaf },
  { id: "regenerative", label: "Regenerative Innovation", icon: Lightbulb },
  { id: "sentient", label: "Sentient Futures", icon: Zap },
  { id: "premium", label: "Premium Toolkits", icon: Crown },
];

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === category.id
                ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg"
                : "bg-white/60 text-gray-700 hover:bg-white/80 hover:text-orange-600 border border-orange-200/30"
            }`}
          >
            <Icon className="w-4 h-4" />
            <span>{category.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryTabs;
