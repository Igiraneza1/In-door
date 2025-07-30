"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(savedWishlist);
  }, []);

  const removeFromWishlist = (id: number) => {
    const updated = wishlist.filter((item) => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={200}
                height={200}
                className="h-40 object-contain"
              />
              <h2 className="mt-3 font-medium text-sm">{item.title}</h2>
              <p className="text-gray-800 font-semibold">${item.price.toFixed(2)}</p>
              <div className="mt-3 flex flex-col gap-2 w-full">
                <Link
                  href={`/product/${item.id}`}
                  className="bg-black text-white text-sm py-2 rounded"
                >
                  View Product
                </Link>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-red-500 text-sm underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
