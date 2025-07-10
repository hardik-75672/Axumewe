import React from "react";
import { Download, Star, Users, FileText } from "lucide-react";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  rating?: number;
  downloads?: number;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl backdrop-blur-lg bg-white/80 border border-orange-200/30 hover:bg-white/90 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/20"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
              {product.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {product.description}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {product.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            {product.rating && (
              <div className="flex items-center space-x-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span>{product.rating}</span>
              </div>
            )}
            {product.downloads && (
              <div className="flex items-center space-x-1">
                <Download className="w-3 h-3" />
                <span>{product.downloads}+ downloads</span>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-orange-600">
              ${product.price}
            </span>
            <button className="flex items-center space-x-1 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
              <Download className="w-3 h-3" />
              <span>Buy Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
