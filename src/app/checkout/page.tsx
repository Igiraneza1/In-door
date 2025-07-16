// File: components/Checkout.tsx
"use client";

import { useState, useEffect } from "react";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export default function Checkout() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal - discount;

  const handleApplyCoupon = () => {
    if (coupon === "JenkateMW") {
      setDiscount(25);
    }
  };

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <form className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold">Contact Information</h2>
            <input className="w-full p-2 border rounded mt-2" placeholder="First Name" />
            <input className="w-full p-2 border rounded mt-2" placeholder="Last Name" />
            <input className="w-full p-2 border rounded mt-2" placeholder="Phone Number" />
            <input className="w-full p-2 border rounded mt-2" placeholder="Email Address" />
          </div>

          <div>
            <h2 className="text-lg font-semibold">Shipping Address</h2>
            <input className="w-full p-2 border rounded mt-2" placeholder="Street Address" />
            <input className="w-full p-2 border rounded mt-2" placeholder="Country" />
            <input className="w-full p-2 border rounded mt-2" placeholder="City" />
            <input className="w-full p-2 border rounded mt-2" placeholder="State" />
            <input className="w-full p-2 border rounded mt-2" placeholder="Zip Code" />
          </div>

          <div>
            <h2 className="text-lg font-semibold">Payment Method</h2>
            <div className="flex gap-2 items-center">
              <input type="radio" name="payment" defaultChecked />
              <label>Card Credit</label>
            </div>
            <input className="w-full p-2 border rounded mt-2" placeholder="Card Number" />
            <input className="w-full p-2 border rounded mt-2" placeholder="MM/YY" />
            <input className="w-full p-2 border rounded mt-2" placeholder="CVC" />
            <div className="flex gap-2 items-center mt-2">
              <input type="radio" name="payment" />
              <label>Paypal</label>
            </div>
          </div>

          <button
            type="button"
            onClick={handlePlaceOrder}
            className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            Place Order
          </button>
        </form>

        <div className="bg-white p-6 border rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div className="flex gap-3 items-center">
                <img src={item.image} className="w-16 h-16 object-contain" alt={item.title} />
                <div>
                  <h4 className="font-medium">{item.title}</h4>
                  <p>Qty: {item.quantity}</p>
                </div>
              </div>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}

          <div className="flex gap-2 mb-4">
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Coupon Code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
            <button
              type="button"
              className="bg-black text-white px-4 py-2 rounded"
              onClick={handleApplyCoupon}
            >
              Apply
            </button>
          </div>

          {discount > 0 && (
            <div className="text-green-600 mb-2">Coupon Applied: -${discount.toFixed(2)}</div>
          )}

          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
