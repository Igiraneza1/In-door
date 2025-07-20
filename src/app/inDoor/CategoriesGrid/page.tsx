"use client";

import Image from "next/image";
import Link from "next/link";
import categories from "../../../data/category";

export default function CategoryPage() {
  const [primary, ...secondary] = categories;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Primary category */}
      <div>
        <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
          <Link href={primary.link}>
            <Image
              src={primary.image}
              alt={primary.name}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>
        </div>
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900">{primary.name}</h2>
          <Link
            href={primary.link}
            className="mt-2 inline-block text-sm text-blue-600 hover:underline transition"
          >
            Shop Now →
          </Link>
        </div>
      </div>

      {/* Secondary categories */}
      <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {secondary.map((category) => (
          <div key={category.id}>
            <div className="relative h-[250px] w-full rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
              <Link href={category.link}>
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>
            <div className="mt-3 text-center">
              <h3 className="text-xl font-semibold text-gray-900">
                {category.name}
              </h3>
              <Link
                href={category.link}
                className="mt-1 inline-block text-sm text-blue-600 hover:underline transition"
              >
                Collection →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
