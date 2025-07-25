"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import categories from "../../../data/category";

export default function CategoryPage() {
  const [primary, ...secondary] = categories;
  const [pageIndex, setPageIndex] = useState(0);

  const ITEMS_PER_PAGE = 2; // Show 2 items (one top, one bottom) per page
  const totalPages = Math.ceil(secondary.length / ITEMS_PER_PAGE);

  const paginatedSecondary = secondary.slice(
    pageIndex * ITEMS_PER_PAGE,
    pageIndex * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">

        <div className="flex flex-col">
          <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-50">
            <Link href={primary.link} className="block h-full">
              <Image
                src={primary.image}
                alt={primary.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </Link>
          </div>
          <div className="mt-6 text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{primary.name}</h2>
            <Link
              href={primary.link}
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
                          Shop Now →

              
            </Link>
          </div>
        </div>

        <div className="flex flex-col w-86">
          <div className="grid grid-cols-1 gap-6 flex-1">
            {paginatedSecondary.map((category) => (
              <div key={category.id} className="flex flex-col">
                <div className="relative h-[280px] w-full rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-gray-50">
                  <Link href={category.link} className="block h-full">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                </div>
                <div className="mt-4 text-left">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {category.name}
                  </h3>
                  <Link
                    href={category.link}
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                               Shop Now →

                  </Link>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-8 flex justify-center space-x-3">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPageIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    i === pageIndex 
                      ? "bg-blue-600 shadow-md" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}