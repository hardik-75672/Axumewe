import React from "react";
import { ShoppingBag, Download, Sparkles } from "lucide-react";

const MarketplaceHeader: React.FC = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center space-x-2 mb-4">
        <ShoppingBag className="w-8 h-8 text-orange-400" />
        <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
        <Download className="w-6 h-6 text-yellow-400" />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Marketplace: Downloadable Toolkits & IP
        </span>
      </h1>

      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
        Acquire powerful, ready-to-use tools to accelerate your own innovation
        and design processes.
      </p>
    </div>
  );
};

export default MarketplaceHeader;
