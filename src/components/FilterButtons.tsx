import React from "react";
import { Filter } from "lucide-react";

interface FilterButtonsProps {
  categories: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  categories,
  activeFilter,
  onFilterChange,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-8">
      <div className="flex items-center space-x-2 text-orange-600">
        <Filter className="w-4 h-4" />
        <span className="text-sm font-medium">Filter by:</span>
      </div>

      <button
        onClick={() => onFilterChange("all")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
          activeFilter === "all"
            ? "bg-orange-500 text-white shadow-lg"
            : "bg-white/60 text-orange-600 hover:bg-white/80 hover:text-orange-700"
        }`}
      >
        All Events
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeFilter === category
              ? "bg-orange-500 text-white shadow-lg"
              : "bg-white/10 text-orange-200 hover:bg-white/20 hover:text-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
