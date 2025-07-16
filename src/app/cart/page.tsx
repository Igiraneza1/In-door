"use client";

import { useState } from "react";
import { Minus, Plus, X } from "lucide-react";
import news from "../../../jsondata/news.json";

export default function CartPage() {
  const [cart, setCart] = useState<
    { id: number; title: string; color: string; price: number; quantity: number }[]
  >([]);

  const [shippingOption, setShippingOption] = useState("free");

  const addToCart = (product: typeof news[0]) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart(cart.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)));
  };

  const removeItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const shippingCost =
    shippingOption === "free" ? 0 : shippingOption === "express" ? 15 : 21;

  const total = subtotal + shippingCost;

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>

      {/* Product list with Add to Cart buttons */}
      <div className="grid grid-cols-3 gap-6 mb-16">
        {news.map((news) => (
          <div key={new.id} className="border rounded p-4 flex flex-col items-center">
            <div className="w-20 h-20 bg-gray-200 mb-4 flex items-center justify-center">
              <img src={new.image} alt={new.title} className="max-h-full max-w-full" />
            </div>
            <h3 className="font-semibold">{new.title}</h3>
            <p className="text-sm mb-2">Color: {new.color}</p>
            <p className="font-medium mb-4">${new.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(new)}
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h1 className="text-3xl font-bold text-center mb-8">Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty. Add some products!</p>
      ) : (
        <>
          <div className="grid grid-cols-12 gap-4 pb-4 border-b text-sm font-medium text-gray-600 mb-4">
            <div className="col-span-6">Product</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-2 text-center">Subtotal</div>
          </div>

          {cart.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-12 gap-4 py-6 border-b items-center"
            >
              <div className="col-span-6 flex items-center gap-4">
                <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                  <img
                    src={news.find((p) => p.id === item.id)?.image}
                    alt={item.title}
                    className="max-h-full max-w-full"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-500">Color: {item.color}</p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-sm text-gray-400 hover:text-red-500 flex items-center gap-1 mt-1"
                  >
                    <X size={14} />
                    Remove
                  </button>
                </div>
              </div>

              <div className="col-span-2 flex items-center justify-center">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="px-4 py-2 min-w-[3rem] text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <div className="col-span-2 text-center">${item.price.toFixed(2)}</div>

              <div className="col-span-2 text-center font-medium">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}

          <div className="lg:col-span-1 mt-8 p-6 bg-gray-50 rounded-lg max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4">Cart summary</h2>

            <div className="space-y-3 mb-6">
              <label className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="shipping"
                    value="free"
                    checked={shippingOption === "free"}
                    onChange={(e) => setShippingOption(e.target.value)}
                    className="mr-3"
                  />
                  <span className="text-sm">Free shipping</span>
                </div>
                <span className="text-sm">$0.00</span>
              </label>

              <label className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="shipping"
                    value="express"
                    checked={shippingOption === "express"}
                    onChange={(e) => setShippingOption(e.target.value)}
                    className="mr-3"
                  />
                  <span className="text-sm">Express shipping</span>
                </div>
                <span className="text-sm">+$15.00</span>
              </label>

              <label className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="shipping"
                    value="pickup"
                    checked={shippingOption === "pickup"}
                    onChange={(e) => setShippingOption(e.target.value)}
                    className="mr-3"
                  />
                  <span className="text-sm">Pick Up</span>
                </div>
                <span className="text-sm">$21.00</span>
              </label>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold text-lg mb-4">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
