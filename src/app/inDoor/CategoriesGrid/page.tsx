"use client";

import Image from "next/image";
import Link from "next/link";
import categories from "../../../data/category";

export default function CategoryPage() {
  if (!categories.length) {
    return <div className="text-center py-12">No categories available</div>;
  }

  const [primary, ...secondary] = categories;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Primary category on the left, with centered content */}
      <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-md hover:shadow-lg flex justify-center items-center">
        <Image
          src={primary.image}
          alt={primary.name}
          fill
          className="object-cover transition-transform duration-300"
          priority
        />
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 text-center bg-white/70 px-4 py-2 rounded-md shadow-md">
          <h2 className="text-2xl font-bold text-black">{primary.name}</h2>
          <Link
            href={`/category/${primary.slug}`}
            className="mt-2 inline-flex items-center justify-center text-sm text-black hover:text-blue-600 transition"
          >
            Shop Now →
          </Link>
        </div>
      </div>

      {/* Secondary categories in 2x2 grid on right */}
      <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {secondary.map((category) => (
          <div
            key={category.id}
            className="relative h-[240px] w-full rounded-xl overflow-hidden shadow-md hover:shadow-lg"
          >
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute top-4 left-4 z-10">
              <h3 className="text-xl font-semibold text-black">{category.name}</h3>
              <Link
                href={`/category/${category.slug}`}
                className="mt-1 inline-flex items-center text-sm text-black hover:text-blue-600 transition"
              >
                Shop Now →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
