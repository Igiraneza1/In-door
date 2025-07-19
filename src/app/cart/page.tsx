"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="mb-4 flex items-center space-x-4">
              <Image src={item.image} alt={item.title} width={80} height={80} />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p>
                  ${item.price.toFixed(2)} x {item.quantity} = $
                  {(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
