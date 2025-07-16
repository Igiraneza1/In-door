// File: components/Cart.tsx
"use client";

import { useState, useEffect } from "react";
import { Minus, Plus, X, Search, User, ShoppingCart } from "lucide-react";
import news from "../../jsondata/news.json";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
  color?: string;
}

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [shippingOption, setShippingOption] = useState("free");
  const [couponCode, setCouponCode] = useState("");

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (newsItem: typeof news[0]) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === newsItem.id);
      if (existing) {
        return prev.map((item) =>
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
          price: Number(newsItem.price),
          image: newsItem.image,
          quantity: 1,
          color: "Black", // Default color
        },
      ];
    });
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shippingCost = shippingOption === "free" ? 0 : 
                      shippingOption === "express" ? 15 : 21;
  
  const total = subtotal + shippingCost;

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
  };

  const applyCoupon = () => {
    if (couponCode.trim()) {
      alert(`Coupon "${couponCode}" applied!`);
      setCouponCode("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">3legant.</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-black">Home</a>
              <a href="#" className="text-gray-700 hover:text-black">Shop</a>
              <a href="#" className="text-gray-700 hover:text-black">Product</a>
              <a href="#" className="text-gray-700 hover:text-black">Contact Us</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Search size={20} className="text-gray-600" />
              <User size={20} className="text-gray-600" />
              <div className="relative">
                <ShoppingCart size={20} className="text-gray-600" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {news.map((item) => (
            <div key={item.id} className="bg-white border rounded-lg p-4 shadow-sm">
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

        {/* Cart Section */}
        <div className="bg-white rounded-lg shadow-sm">
          {/* Cart Header */}
          <div className="p-6 border-b">
            <h1 className="text-3xl font-bold text-center mb-8">Cart</h1>
            
            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium">
                  1
                </div>
                <span className="ml-2 text-sm font-medium">Shopping cart</span>
              </div>
              <div className="w-16 h-px bg-gray-300 mx-4"></div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm font-medium">
                  2
                </div>
                <span className="ml-2 text-sm text-gray-500">Checkout details</span>
              </div>
              <div className="w-16 h-px bg-gray-300 mx-4"></div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm font-medium">
                  3
                </div>
                <span className="ml-2 text-sm text-gray-500">Order complete</span>
              </div>
            </div>
          </div>

          {cart.length === 0 ? (
            <div className="p-8 text-center text-gray-500">Your cart is empty</div>
          ) : (
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                  {/* Table Header */}
                  <div className="grid grid-cols-12 gap-4 pb-4 border-b text-sm font-medium text-gray-600">
                    <div className="col-span-6">Product</div>
                    <div className="col-span-2 text-center">Quantity</div>
                    <div className="col-span-2 text-center">Price</div>
                    <div className="col-span-2 text-center">Subtotal</div>
                  </div>

                  {/* Cart Items */}
                  {cart.map((item) => (
                    <div key={item.id} className="grid grid-cols-12 gap-4 py-6 border-b items-center">
                      {/* Product */}
                      <div className="col-span-6 flex items-center gap-4">
                        <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-sm text-gray-500">Color: {item.color || 'Black'}</p>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-sm text-gray-400 hover:text-red-500 flex items-center gap-1 mt-1"
                          >
                            <X size={14} />
                            Remove
                          </button>
                        </div>
                      </div>

                      {/* Quantity */}
                      <div className="col-span-2 flex items-center justify-center">
                        <div className="flex items-center border rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-gray-100"
                            disabled={item.quantity <= 1}
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

                      {/* Price */}
                      <div className="col-span-2 text-center">
                        ${item.price.toFixed(2)}
                      </div>

                      {/* Subtotal */}
                      <div className="col-span-2 text-center font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cart Summary */}
                <div className="lg:col-span-1">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Cart summary</h2>
                    
                    {/* Shipping Options */}
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
                        <span className="text-sm">%21.00</span>
                      </label>
                    </div>

                    {/* Summary */}
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

                  {/* Coupon Section */}
                  <div className="mt-6">
                    <h3 className="font-medium mb-2">Have a coupon?</h3>
                    <p className="text-sm text-gray-600 mb-4">Add your code for an instant cart discount</p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Coupon Code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                      />
                      <button 
                        onClick={applyCoupon}
                        className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">3legant.</h3>
              <p className="text-gray-400">Gift & Decoration Store</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Home</h4>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Blog</h4>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400">
              <span>Copyright © 2023 3legant. All rights reserved</span>
              <span className="mx-4">Privacy Policy</span>
              <span>Terms of Use</span>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {/* Social media icons would go here */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}