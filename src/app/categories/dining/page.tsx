"use client";

import Image from "next/image";
import { useState } from "react";
import { DiningProducts } from "../../../data/dinning";

export default function DiningRoom() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleAddToCart = (product: (typeof DiningProducts)[number]) => {
    alert(`Added "${product.name}" to cart!`);
  };

  return (
    <div className="bg-white">
      <div className="text-black">
        <h1 className="text-3xl font-bold text-center m-10">
          Dining Room Products
        </h1>
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {DiningProducts.map((product) => (
            <div key={product.id} className="group text-center relative">
              <div
                className="relative h-64 w-full rounded-xl overflow-hidden shadow-md"
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={500}
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

              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {product.name}
              </h3>
              <p className="text-sm text-amber-800">{product.price}</p>
              <p className="text-sm text-gray-700">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
