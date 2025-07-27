// newArrival/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { FaHeart, FaStar, FaShippingFast } from "react-icons/fa";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { GrSecure } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import {toast } from "react-hot-toast";
import news from "../../../jsondata/news.json";

interface Product {
  id: number;
  title: string;
  description?: string; 
  price: number;
  originalPrice?: number;
  rating: number;
  discount?: string;
  isNew?: boolean;
  image: string;
}

export default function NewArrivals() {
  const [activeProductId, setActiveProductId] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const products: Product[] = news;
  const productsToShow = showAll ? products : products.slice(0, );

  const handleAddToCart = (product: Product) => {
  const cart: (Product & { quantity: number })[] = JSON.parse(localStorage.getItem("cart") || "[]");

  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  toast.success("Added to cart! Redirecting...", {
    duration: 1000,
    position: "top-center",
  });

  setTimeout(() => {
    window.location.href = `/product/${product.id}`; 
  }, 1000);
};

  return (
    
    <div className="bg-white max-w-7xl mx-auto p-4">

      <section className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            New<br />Arrivals
          </h2>
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="text-gray-600 hover:text-gray-900 flex items-center text-sm font-medium gap-1 transition-colors"
          >
            {showAll ? "Show Less" : "More Products"} <span className="ml-1">→</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <div className="flex gap-4 pr-10">
            {productsToShow.map((item, index) => (
              <div
                key={item.id}
                className={`group relative min-w-[180px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[240px] ${
                  index === productsToShow.length - 1 ? "mr-20" : ""
                }`}
                onClick={() => {
                  setActiveProductId(item.id);
                }}
              >
                <div className="relative mb-3 rounded-xl overflow-hidden bg-gray-100">
                  {item.isNew && (
                    <div className="absolute top-3 left-3 z-10 space-y-1">
                      <span className="block bg-white text-black text-[10px] font-semibold px-2 py-0.5 rounded shadow-sm">
                        NEW
                      </span>
                      {item.discount && (
                        <span className="block bg-green-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                          -{item.discount}
                        </span>
                      )}
                    </div>
                  )}

                  <div
                    className={`absolute top-3 right-3 z-10 transition-opacity duration-300 ${
                      item.id === 1 ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <FaHeart className="text-white hover:text-gray-400 text-lg cursor-pointer" />
                  </div>

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={350}
                    className="w-full h-32 sm:h-36 md:h-40 object-contain transition-transform duration-500 group-hover:scale-105"
                  />

                  {activeProductId === item.id && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(item);
                      }}
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-medium z-10"
                    >
                      Add to cart
                    </button>
                  )}
                </div>

                <div className="pb-10 mb-4">
                  <div className="text-yellow-500 text-sm mb-2 flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`${
                          i < item.rating ? "text-black" : "text-gray-300"
                        } text-sm`}
                      />
                    ))}
                  </div>

                  <h3 className="text-gray-900 font-semibold text-sm mb-1">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2">
                    <span className="text-gray-900 font-bold text-sm">{item.price}</span>
                    {item.originalPrice && (
                      <span className="text-gray-400 line-through text-xs">
                        {item.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="max-w-6xl mx-auto bg-white py-12 px-4 sm:px-6 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: <FaShippingFast className="text-2xl text-black" />,
              title: "Free Shipping",
              subtitle: "Order above $200",
            },
            {
              icon: <LiaMoneyBillSolid className="text-2xl text-black" />,
              title: "Money-back",
              subtitle: "30 days guarantee",
            },
            {
              icon: <GrSecure className="text-2xl text-black" />,
              title: "Secure Payments",
              subtitle: "Secured by Stripe",
            },
            {
              icon: <IoCallOutline className="text-2xl text-black" />,
              title: "24/7 Support",
              subtitle: "Phone and Email support",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-6 flex flex-col items-center text-center space-y-2"
            >
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="font-semibold text-black text-lg">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
