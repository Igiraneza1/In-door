"use client";

import Image from "next/image";
import { useState } from "react";
import { BathroomProducts } from "../../../data/bathroom";

export default function Bathroom() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleAddToCart = (product: (typeof BathroomProducts)[number]) => {
    alert(`Added "${product.name}" to cart!`);
  };

  return (
    <div className="py-12 bg-white text-black">
      <h1 className="text-3xl font-bold text-center m-10">Bathroom Products</h1>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {BathroomProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-white shadow-lg rounded-2xl overflow-hidden transition hover:shadow-2xl"
          >
            <div
              className="relative h-64 w-full overflow-hidden"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
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

            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {product.name}
              </h3>
              <p className="text-base text-amber-800 font-medium mb-1">
                {product.price}
              </p>
              <p className="text-sm text-gray-600">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
