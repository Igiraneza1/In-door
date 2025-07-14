import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gray-300 py-20 overflow-hidden">
      {/* Diagonal Stripes Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255, 255, 255, 0.8) 10px,
            rgba(255, 255, 255, 0.8) 20px
          )`
        }}
      />
      
      {/* Alternative CSS-only diagonal stripes */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transform rotate-45 scale-150"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transform rotate-45 scale-150 translate-x-8"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transform rotate-45 scale-150 translate-x-16"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transform rotate-45 scale-150 translate-x-24"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transform rotate-45 scale-150 translate-x-32"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 mb-8 text-sm text-gray-600">
          <span className="hover:text-gray-800 cursor-pointer">Home</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800 font-medium">Blog</span>
        </nav>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
          Our Blog
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-700 font-medium">
          Home ideas and design inspiration
        </p>
      </div>
    </section>
  );
}