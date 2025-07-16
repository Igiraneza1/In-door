"use client";

import { useState, useEffect } from "react";
import { Minus, Plus, X } from "lucide-react";
import news from "../../jsondata/news.json";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [shippingOption, setShippingOption] = useState("free");
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);

  // ✅ Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // ✅ Save cart to localStorage on change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (newsItem: typeof news[0]) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === newsItem.id);
      if (existing) {
        return prev.map(item =>
          item.id === newsItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          id: newsItem.id,
          title: newsItem.title,
          price: Number(newsItem.price), // ensure it's a number
          image: newsItem.image,
          quantity: 1,
        },
      ];
    });
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost =
    shippingOption === "free" ? 0 : shippingOption === "express" ? 15 : 21;
  const total = subtotal + shippingCost;

  const handleCheckout = () => {
    setIsCheckoutLoading(true);
    setTimeout(() => {
      alert("Order placed successfully!");
      setCart([]);
      setIsCheckoutLoading(false);
      localStorage.removeItem("cart"); // ✅ Clear persisted cart
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {news.map((item) => (
          <div key={item.id} className="border rounded-lg p-4">
            <div className="h-48 bg-gray-100 mb-4 rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/default-image.jpg";
                }}
              />
            </div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-600 my-2">
              ${Number(item.price).toFixed(2)}
            </p>
            <button
              onClick={() => addToCart(item)}
              className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg border">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold">Your Cart ({cart.length})</h2>
        </div>

        {cart.length === 0 ? (
          <div className="p-8 text-center">
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="divide-y">
              {cart.map((item) => (
                <div key={item.id} className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-contain"
                    />
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p>${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <Plus size={16} />
                    </button>
                    <button onClick={() => removeItem(item.id)}>
                      <X size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t">
              <div className="max-w-md ml-auto space-y-4">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  disabled={isCheckoutLoading}
                  className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800"
                >
                  {isCheckoutLoading ? "Processing..." : "Checkout"}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
