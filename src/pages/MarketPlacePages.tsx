import React, { useState } from "react";
import CategoryTabs from "../components/CategoryTabs";
import ProductCard from "../components/ProductCard";
import TestimonialsSection from "../components/TestimonialsSection";
import { products } from "../data/product";
import MarketplaceHeader from "../components/MarketplaceHeader";
function MarketplacePage() {
  const [activeCategory, setActiveCategory] = useState("sustainable");

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 relative overflow-hidden px-2 py-8">
      {/* Glass Container with Border */}
      <div className="relative z-10 w-full max-w-7xl mx-auto bg-white/60 backdrop-blur-lg border border-orange-200 rounded-3xl shadow-2xl px-6 md:px-12 py-10">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(251,146,60,0.1)_1px,_transparent_1px)] bg-[length:30px_30px]" />
        </div>

        {/* Background Orbs */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-100/40 to-yellow-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="container mx-auto px-4 py-12">
            <MarketplaceHeader />

            <CategoryTabs
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-orange-600 text-lg">
                  No products found for the selected category.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketplacePage;
