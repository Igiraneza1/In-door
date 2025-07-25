"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import products from "../../../../src/jsondata/home.json";

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="w-full ">
      <div className="flex flex-col md:flex-row h-[500px] w-full">
        {/* 2/3 Image Slider */}
        <div className="relative w-full md:w-2/3 h-full overflow-hidden">
          <Image
            src={products[currentIndex].imageUrl}
            alt={products[currentIndex].title}
            fill
            className="object-cover transition-all duration-500"
          />

          <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center py-2">
            <h2 className="text-2xl font-semibold">
              {products[currentIndex].title}
            </h2>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow hover:bg-opacity-100 z-10"
            aria-label="Previous Slide"
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow hover:bg-opacity-100 z-10"
            aria-label="Next Slide"
          >
            →
          </button>
        </div>

  
        <div className="w-full md:w-1/3 h-full bg-white shadow-lg p-6 flex items-center justify-center text-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Welcome to Elegant.</h2>
            <p className="text-gray-600">
              Discover beautifully designed furniture for every room. Shop our
              newest collections and make your space truly yours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}