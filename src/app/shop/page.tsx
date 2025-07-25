"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { BathroomProducts } from "../../data/bathroom";
import { BedroomProducts } from "../../data/bedroom";
import { DiningProducts } from "../../data/dinning";
import { KitchenProducts } from "../../data/kitchen";
import { LivingRoomProducts } from "../../data/living-room";

interface Products {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  isNew?: boolean;
  discount?: string;
}

export default function Shop() {
  const params = useParams();
  const categorySlug = decodeURIComponent(params.category as string);

  const categoryMap: Record<string, { name: string; products: any[] }> = {
    "living-room": { name: "Living Room", products: LivingRoomProducts },
    bedroom: { name: "Bedroom", products: BedroomProducts },
    kitchen: { name: "Kitchen", products: KitchenProducts },
    bathroom: { name: "Bathroom", products: BathroomProducts },
    dining: { name: "Dining", products: DiningProducts },
    "all-rooms": {
      name: "All Rooms",
      products: [
        ...LivingRoomProducts,
        ...BedroomProducts,
        ...KitchenProducts,
        ...BathroomProducts,
        ...DiningProducts,
      ],
    },
  };

  const selectedCategory =
    categoryMap[categorySlug] ?? categoryMap["all-rooms"];
  const products = selectedCategory.products;

  // ✅ Cart state
  const [cart, setCart] = useState<Products[]>([]);

  // ✅ Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ Add to Cart handler
  const handleAddToCart = (product: Products) => {
    const exists = cart.find((item) => item.id === product.id);
    if (!exists) {
      setCart([...cart, product]);
    }
    console.log("Cart:", [...cart, product]);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <div className="relative h-86 bg-gray-300 mb-6">
        <Image
          src="/image/Living-room/sofa4.jpg"
          alt="Shop Hero"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-gray-900 gap-6">
          <div className="flex flex-row space-x-5 items-center">
            <p className="text-sm">Home</p>
            <p>/</p>
            <p>Shop</p>
          </div>
          <p className="text-5xl font-bold">Shop Page</p>
          <h2 className="text-2xl mt-2 text-gray-700">
            Let's design the place you always imagined
          </h2>
        </div>
      </div>

      <div className="mx-auto p-4 pt-6 flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-white p-4">
          <h2 className="text-lg font-semibold mb-4 text-gray-900">Filter</h2>
          <div className="space-y-6">
            <div>
              <p className="text-gray-900 mb-4 font-bold">CATEGORIES</p>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="/shop/all-rooms">All Rooms</Link>
                </li>
                <li>
                  <Link href="/shop/living-room">Living Room</Link>
                </li>
                <li>
                  <Link href="/shop/bedroom">Bedroom</Link>
                </li>
                <li>
                  <Link href="/shop/kitchen">Kitchen</Link>
                </li>
                <li>
                  <Link href="/shop/bathroom">Bathroom</Link>
                </li>
                <li>
                  <Link href="/shop/dining">Dining</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-1 bg-gradient-to-t from-brown-700 to-black mx-4 h-86"></div>

        {/* Product Grid */}
        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              {selectedCategory.name}
            </h2>
            <div className="flex space-x-2">
              <span className="text-gray-600">Sort by</span>
              <select className="border rounded p-1 text-gray-600">
                <option>Default</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
              <button className="text-gray-600">▢</button>
              <button className="text-gray-600">▧</button>
              <button className="text-gray-600">▤</button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="p-4 relative">
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={300}
                    className="w-full h-64 object-cover mb-2"
                  />
                  {product.isNew && (
                    <span className="absolute top-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      NEW
                    </span>
                  )}
                  {product.discount && (
                    <span className="absolute top-10 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      {product.discount}
                    </span>
                  )}

                  {/* ✅ Show Add to Cart on all products */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded w-3/4"
                  >
                    Add to Cart
                  </button>
                </div>

                <h3 className="text-md font-semibold text-gray-900 mt-2">
                  {product.name}
                </h3>
                <p className="text-gray-600">
                  ${Number(product.price).toFixed(2)}{" "}
                  {product.originalPrice && (
                    <span className="line-through text-gray-500">
                      ${Number(product.originalPrice).toFixed(2)}
                    </span>
                  )}
                </p>
                {/* <div className="flex items-center gap-1 mt-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={
                        i < Math.floor(product.rating)
                          ? "text-gray-900"
                          : "text-gray-400"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div> */}
                <div className="flex items-center gap-1 mt-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={`${product.id}-star-${i}`}
                      className={
                        i < Math.floor(product.rating)
                          ? "text-gray-900"
                          : "text-gray-400"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded text-gray-900 hover:bg-gray-100">
              Show more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
