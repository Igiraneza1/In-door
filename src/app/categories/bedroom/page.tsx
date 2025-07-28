"use client";

import Image from "next/image";
import { useState } from "react";
import { BedroomProducts } from "../../../data/bedroom";

export default function Bedroom() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleAddToCart = (product: typeof BedroomProducts[number]) => {
    alert(`Added "${product.name}" to cart!`);
  };

  return (
    <div className="py-12 text-black">
      <h1 className="text-3xl font-bold text-center m-10">Bedroom Products</h1>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {BedroomProducts.map((product) => (
          <div key={product.id} className="group text-center relative">
            <div
              className="relative h-64 w-full rounded-xl overflow-hidden shadow-md"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {hoveredId === product.id && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="px-5 py-2 text-sm font-semibold text-white bg-amber-700 rounded-md hover:bg-amber-500 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              )}
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-700">{product.description}</p>
              <p className="text-base font-medium text-amber-800 mt-1">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
