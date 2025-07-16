"use client";

import Image from "next/image";
import Link from "next/link";
import categories from "../../../data/category";

export default function CategoryPage() {
 
  const [primary, ...secondary] = categories;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div>
        <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-md hover:shadow-lg">
          <Image
            src={primary.image}
            alt={primary.name}
            fill
            className="object-cover transition-transform duration-300"
            priority
          />
        </div>
        <div className="mt-4 flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-gray-900">{primary.name}</h2>
          <Link
            href={`/category/${primary.slug}`}
            className="mt-2 inline-block text-sm text-blue-600 hover:underline transition"
          >
            Shop Now →
          </Link>
        </div>
      </div>

      
      <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {secondary.map((category) => (
          <div key={category.id}>
            <div className="relative h-[200px] w-full rounded-xl overflow-hidden shadow-md hover:shadow-lg">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-300"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="mt-3 flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold text-gray-900">
                {category.name}
              </h3>
              <Link
                href={`/category/${category.slug}`}
                className="mt-1 inline-block text-sm text-blue-600 hover:underline transition"
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
