"use client";

import { useState, useEffect } from "react";
import { Minus, Plus, X, Search, User, ShoppingCart } from "lucide-react";
import Image from "next/image";

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

  // Load and sanitize cart data from localStorage on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const sanitizedCart = savedCart.map((item: any) => ({
      ...item,
      price: typeof item.price === "number" ? item.price : 0,
      quantity: typeof item.quantity === "number" && item.quantity > 0 ? item.quantity : 1,
      image: item.image || "", // fallback empty string if missing
      title: item.title || "Unknown product",
    }));
    setCart(sanitizedCart);
  }, []);

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
    (sum, item) => sum + (typeof item.price === "number" ? item.price : 0) * item.quantity,
    0
  );

  const shippingCost =
    shippingOption === "free"
      ? 0
      : shippingOption === "express"
      ? 15
      : 21;

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
    <div className="min-h-screen bg-gray-50 text-black">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">3legant.</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-black">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-black">
                Shop
              </a>
              <a href="#" className="text-gray-700 hover:text-black">
                Product
              </a>
              <a href="#" className="text-gray-700 hover:text-black">
                Contact Us
              </a>
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

      {/* Cart Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm">
          {/* Cart Header */}
          <div className="p-6 border-b">
            <h1 className="text-3xl font-bold text-center mb-8">Cart</h1>
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
                    <div
                      key={item.id}
                      className="grid grid-cols-12 gap-4 py-6 border-b items-center"
                    >
                      {/* Product */}
                      <div className="col-span-6 flex items-center gap-4">
                        <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                          {item.image ? (
                            <Image
                              src={item.image}
                              alt={item.title}
                              width={80}
                              height={80}
                              className="object-contain"
                            />
                          ) : (
                            <div className="w-12 h-12 bg-gray-300 rounded"></div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium">{item.title}</h3>
                          {item.color && (
                            <p className="text-sm text-gray-500">Color: {item.color}</p>
                          )}
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
                          <span className="px-4 py-2 min-w-[3rem] text-center">
                            {item.quantity}
                          </span>
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
                        $
                        {typeof item.price === "number"
                          ? item.price.toFixed(2)
                          : "0.00"}
                      </div>

                      {/* Subtotal */}
                      <div className="col-span-2 text-center font-medium">
                        $
                        {typeof item.price === "number"
                          ? (item.price * item.quantity).toFixed(2)
                          : "0.00"}
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
                          <span className="text-sm">+$15.00</span>
                        </div>
                        <span className="text-sm">Express shipping</span>
                      </label>

                      <label className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="shipping"
                            value="priority"
                            checked={shippingOption === "priority"}
                            onChange={(e) => setShippingOption(e.target.value)}
                            className="mr-3"
                          />
                          <span className="text-sm">+$21.00</span>
                        </div>
                        <span className="text-sm">Priority shipping</span>
                      </label>
                    </div>

                    {/* Coupon */}
                    <div className="mb-6">
                      <input
                        type="text"
                        placeholder="Coupon code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                      />
                      <button
                        onClick={applyCoupon}
                        className="mt-2 w-full bg-black text-white py-2 rounded hover:bg-gray-900"
                      >
                        Apply Coupon
                      </button>
                    </div>

                    {/* Totals */}
                    <div className="border-t border-gray-300 pt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Shipping</span>
                        <span>${shippingCost.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>

                    <button
                      onClick={handleCheckout}
                      className="mt-6 w-full bg-black text-white py-3 rounded hover:bg-gray-900"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
