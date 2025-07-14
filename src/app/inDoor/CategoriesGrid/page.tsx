// app/category/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import  categories from "../../../data/category"; // Import directly from your data file

export default function CategoryPage() {
  // No props needed - using directly imported data
  if (!categories.length) {
    return <div className="text-center py-12">No categories available</div>;
  }

  const [primary, ...secondary] = categories;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Primary Category */}
      <div className="relative h-96 w-full mb-8 rounded-xl overflow-hidden">
        <Image
          src={primary.image}
          alt={primary.name}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 80vw"
        />
        <div className="absolute bottom-6 left-6 bg-white/90 px-6 py-4 rounded-lg shadow-sm backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-gray-900">{primary.name}</h2>
          <Link
            href={`/category/${primary.slug}`}
            className="mt-2 inline-flex items-center text-lg font-medium text-indigo-600 hover:text-indigo-500"
          >
            Shop Collection →
          </Link>
        </div>
      </div>

      {/* Secondary Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {secondary.map((category) => (
          <div key={category.id} className="group relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-lg">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-xl font-bold text-white">{category.name}</h3>
              <Link
                href={`/category/${category.slug}`}
                className="mt-1 inline-flex items-center text-sm font-medium text-white hover:text-indigo-200"
              >
                Shop Now
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}