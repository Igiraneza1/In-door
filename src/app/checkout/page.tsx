"use client";

import { useEffect, useState } from "react";

export default function CheckoutPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return sum + price * item.quantity;
  }, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckout = () => {
    if (!form.name || !form.email || !form.address) {
      alert("Please fill in all fields.");
      return;
    }

    // In a real app, send form + cart to backend
    console.log("Order submitted:", { form, cart });

    // Clear cart
    localStorage.removeItem("cart");
    alert("Order placed successfully!");
    window.location.href = "/";
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 📋 Shipping Form */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Shipping Details</h2>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="address"
              placeholder="Shipping Address"
              value={form.address}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
            />
          </div>
        </div>

        {/* 🛒 Order Summary */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>
                  {item.title} x {item.quantity}
                </span>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
          <div className="border-t mt-4 pt-4 flex justify-between font-bold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button
            onClick={handleCheckout}
            className="mt-6 w-full bg-black text-white py-2 rounded-lg"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
}
