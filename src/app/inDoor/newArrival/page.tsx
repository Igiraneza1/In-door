"use client";

import { useState } from "react";
import Image from "next/image";
import { FaHeart, FaStar, FaShippingFast } from "react-icons/fa";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { GrSecure } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";


export default function NewArrivals() {
  const [activeProductId, setActiveProductId] = useState(1);
  const [showAll, setShowAll] = useState(false);

  const allProducts = [
    {
      id: 1,
      image: "/image/Living-room/loveseat.png",
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
    {
      id: 6,
      image: "/image/furniture/chair.png",
      title: "Cozy Chair",
      price: "$55.00",
      rating: 5,
      isNew: true,
      discount: "30%",
    },
    {
      id: 7,
      image: "/image/furniture/wooden-shelf.png",
      title: "Wooden Shelf",
      price: "$48.00",
      rating: 4,
      isNew: true,
      discount: "20%",
    },
    {
    id: 8,
    image: "/image/furniture/wooden-chair.png",
    title: "Wooden Chair",
    price: "$50.00",
    rating: 5,
    isNew: true,
    discount: "15%",
  },
  {
    id: 9,
    image: "/image/furniture/curtains.png",
    title: "Curtains",
    price: "$20.00",
    rating: 4,
    isNew: true,
    discount: "40%",
  },
  {
    id: 10,
    image: "/image/furniture/rug.png",
    title: "Modern Rug",
    price: "$60.00",
    rating: 5,
    isNew: true,
    discount: "35%",
  },
  {
    id: 11,
    image: "/image/furniture/shelf.png",
    title: "Wall Shelf",
    price: "$28.00",
    rating: 4,
    isNew: true,
    discount: "10%",
  },
  {
    id: 12,
    image: "/image/furniture/pillow.png",
    title: "Pillow",
    price: "$15.00",
    rating: 4,
    isNew: true,
    discount: "20%",
  },

  ];

  const productsToShow = showAll ? allProducts : allProducts.slice(0, 5);

  const handleAddToCart = (product: any) => {
    const isLoggedIn = localStorage.getItem("user");
    localStorage.setItem("pendingProduct", JSON.stringify(product));

    // if (!isLoggedIn) {
    //   window.location.href = "/signup";
    // } else {
    //   window.location.href = "/cart";
    // }
    if(!isLoggedIn){
      window.location.href = "/cart";
    }else{
      console.error("unable to add to cart");
    }
  };

  return (
    <div className="bg-white  ">
      
      <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="flex justify-between items-center mb-6"> 

          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            New<br />Arrivals
          </h2>
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="text-gray-600 hover:text-gray-900 flex items-center text-sm font-medium gap-1 transition-colors "
          >
            {showAll ? "Show Less" : "More Products"} <span className="ml-1">→</span>
          </button>
        </div>

       
        <div className="overflow-x-auto  ">
          <div className="flex gap-4 pr-10 ">
            {productsToShow.map((item, index) => (
              <div
                key={item.id}
                className={`group relative min-w-[180px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[240px] ${
                  index === productsToShow.length - 1 ? "mr-20" : ""
                }`}
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
                      item.id === 1 ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <FaHeart className="text-white hover:text-gray-400 text-lg cursor-pointer" />
                  </div>

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="w-full h-40 sm:h-48 md:h-52 object-contain transition-transform duration-500 group-hover:scale-105"
                  />

                  {activeProductId === item.id && (
                    <button
                      onClick={() => handleAddToCart(item)}
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
                      className={`${i < item.rating ? "text-black" : "text-gray-300"} text-sm`}
                    />
                  ))}
                </div>

                <h3 className="text-gray-900 font-semibold text-sm mb-1">{item.title}</h3>

                <div className="flex items-center gap-2">
                  <span className="text-gray-900 font-bold text-sm">{item.price}</span>
                  {item.originalPrice && (
                    <span className="text-gray-400 line-through text-xs">{item.originalPrice}</span>
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
