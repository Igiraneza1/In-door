"use client";

import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
  color?: string;
}

export default function Complete() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderDate, setOrderDate] = useState("");
  const [orderCode, setOrderCode] = useState("");
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);

    const today = new Date();
    setOrderDate(
      today.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );

    setOrderCode("ORD-" + Math.floor(100000 + Math.random() * 900000));

    const totalAmount = savedCart.reduce(
      (sum: number, item: CartItem) => sum + item.price * item.quantity,
      0
    );
    setTotal(totalAmount);

    const savedPayment = localStorage.getItem("paymentMethod") || "Credit Card";
    setPaymentMethod(savedPayment);

    // Don't remove cart here if you want to display it
    // localStorage.removeItem("cart");
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="p-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold">Complete!</h1>
        </div>
      </header>

      {/* Steps */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-center items-start space-x-8">
          {[
            { label: "Shopping cart", href: "/cart" },
            { label: "Checkout details", href: "/checkout" },
            { label: "Order complete" },
          ].map((step, index) => (
            <div key={step.label} className="flex flex-col items-center">
              <div className="flex items-center">
                {step.href ? (
                  <Link href={step.href}>
                    <span className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-full">
                      <FaCheck />
                    </span>
                    <span className="ml-2 text-green-500">{step.label}</span>
                  </Link>
                ) : (
                  <>
                    <span className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full">
                      {index + 1}
                    </span>
                    <span className="ml-2 text-black">{step.label}</span>
                  </>
                )}
              </div>
              <div
                className={`w-full h-0.5 mt-2 ${
                  step.href ? "bg-green-500" : "bg-black"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Main */}
      <main className="max-w-3xl mx-auto px-4 pb-16">
        <div className="bg-white p-6 rounded-lg text-center shadow-lg mb-6">
          <h2 className="text-2xl text-gray-400 font-bold mb-2">Thank you!</h2>
          <p className="text-3xl mb-6">Your order has been received</p>

          {/* Images with quantity bubble */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {cart.map((item) => (
              <div key={item.id} className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={90}
                  height={90}
                  className="rounded bg-gray-100 object-contain"
                />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {item.quantity}
                </span>
              </div>
            ))}
          </div>

          {/* Order Info */}
          <div className="space-y-2 text-sm text-gray-700 text-center">
            <p>
              <span className="font-semibold">Order Code:</span> {orderCode}
            </p>
            <p>
              <span className="font-semibold">Order Date:</span> {orderDate}
            </p>
            <p>
              <span className="font-semibold">Payment Method:</span>{" "}
              {paymentMethod}
            </p>
            <p>
              <span className="font-semibold">Total:</span> ${total.toFixed(2)}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
