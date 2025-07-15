"use client";

import { useState } from "react";
import Image from "next/image";
import { FaHeart, FaStar, FaShippingFast } from "react-icons/fa";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { GrSecure } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";

export default function NewArrivals() {
  const [activeProductId, setActiveProductId] = useState(1);
  const products = [
    {
      id: 1,
      image: "/image/furniture/Loveseat sofa.png",
      title: "Loveseat",
      price: "$71.00",
      rating: 5,
      originalPrice: "$99.00",
      isNew: true,
      discount: "50%",
    },
    {
      id: 2,
      image: "/image/furniture/Table lamp.png",
      title: "Table Lamp",
      price: "$24.00",
      rating: 4,
      isNew: true,
      discount: "50%",
    },
    {
      id: 3,
      image: "/image/furniture/Beige table lamp.png",
      title: "Beige Table Lamp",
      price: "$30.00",
      rating: 4,
      isNew: true,
      discount: "50%",
    },
    {
      id: 4,
      image: "/image/furniture/basket.png",
      title: "Bamboo Basket",
      price: "$12.00",
      rating: 5,
      originalPrice: "$24.00",
      isNew: true,
      discount: "50%",
    },
    {
      id: 5,
      image: "/image/furniture/toaster.png",
      title: "Toaster",
      price: "$35.00",
      rating: 4,
      isNew: true,
      discount: "50%",
    },
  ];
  const handleAddToCart = (product) => {
    const isLoggedIn = localStorage.getItem("user");

    localStorage.setItem("pendingProduct", JSON.stringify(product));

    if (!isLoggedIn) {
      window.location.href = "/signup";
    } else {
      window.location.href = "/cart";
    }
  };

  return (
    <>
      <div className="bg-white">
        <section className="w-full px-4 sm:px-6 py-16  mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              New
              <br />
              Arrivals
            </h2>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 flex items-center text-sm font-medium gap-1 transition-colors mr-40"
            >
              More Products <span className="ml-1">→</span>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 ml-30 sm:gap-6">
            {products.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer"
                onClick={() => setActiveProductId(item.id)}
              >
                <div className="relative mb-3 rounded-xl overflow-hidden bg-gray-100">
                  {item.isNew && (
                    <div className="absolute top-3 left-3 z-10 space-y-1">
                      <span className="block bg-white text-black text-[10px] font-semibold px-2 py-0.5 rounded shadow-sm">
                        NEW
                      </span>
                      <span className="block bg-green-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                        -{item.discount}
                      </span>
                    </div>
                  )}

                  <div
                    className={`absolute top-3 right-3 z-10 transition-opacity duration-300 ${
                      item.id === 1
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <FaHeart className="text-white text-border-black hover:text-gray-500 text-lg cursor-pointer" />
                  </div>

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={2000}
                    height={400}
                    className="w-full h-40 sm:h-48 md:h-52 object-contain transition-transform duration-500 group-hover:scale-105"
                  />

                  {activeProductId === item.id && (
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-medium z-10 transition-opacity duration-300"
                    >
                      Add to cart
                    </button>
                  )}
                </div>

                <div className="text-yellow-500 text-sm mb-1 flex">
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
                  <span className="text-gray-900 font-bold text-sm">
                    {item.price}
                  </span>
                  {item.originalPrice && (
                    <span className="text-gray-400 line-through text-xs">
                      {item.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full flex justify-center my-10">
          <div className="flex w-full max-w-4xl">
            <div className="w-3/4 h-px bg-black"></div>
            <div className="w-1/4 h-px bg-gray-300"></div>
          </div>
        </div>

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
                <h3 className="font-semibold text-black text-lg">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm">{feature.subtitle}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
