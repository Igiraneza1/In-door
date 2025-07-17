
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { useState, useEffect } from "react";
import { Minus, Plus, X } from "lucide-react";


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
  const router = useRouter();


  useEffect(() => {
    const loadCart = () => {
      try {
        const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        if (Array.isArray(savedCart)) {
          const validItems = savedCart.filter(
            (item) => item.id && item.title && !isNaN(item.price) && item.image
          );
          setCart(validItems);
        }
      } catch (error) {
        console.error("Failed to load cart:", error);
        setCart([]);
      }
    };

    loadCart();
    window.addEventListener("storage", loadCart);
    return () => window.removeEventListener("storage", loadCart);
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
    shippingOption === "free" ? 0 : shippingOption === "express" ? 15 : 21;

  const total = subtotal + shippingCost;

  const handleCheckout = () => {
  router.push("/checkout"); // Replace with your actual checkout route
};

  const applyCoupon = () => {
    if (couponCode.trim()) {
      alert(`Coupon "${couponCode}" applied!`);
      setCouponCode("");
    }
  };

  return (
    <div className="min-h-screen bg-white text-black pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-8">

        <h1 className="text-4xl font-bold text-center mb-8">Cart</h1>

        <div className="flex justify-center items-center mb-12">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium">1</span>
              <span className="ml-3 text-black font-medium">Shopping cart</span>
              
              <div className="border-b-2 border-black w-32 mt-2"></div>
            </div>
            <div className="w-16 border-t border-gray-300"></div>
            <div className="flex items-center">
              <span className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm">2</span>
              <span className="ml-3 text-gray-500">Checkout details</span>
            </div>
            <div className="w-16 border-t border-gray-300"></div>
            <div className="flex items-center">
              <span className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm">3</span>
              <span className="ml-3 text-gray-500">Order complete</span>
            </div>
          </div>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">Your cart is empty</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items - Left Side */}
            <div className="lg:col-span-2">
              {/* Table Header */}
              <div className="hidden md:grid grid-cols-12 gap-2 pb-4 border-b text-sm font-medium text-gray-600">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-right">Subtotal</div>
              </div>

              {/* Cart Items */}
              <div className="space-y-6 pt-6">
                {cart.map((item) => (
                  <div key={item.id} className="grid md:grid-cols-12 gap-2 items-center pb-6 border-b">
                    {/* Product Info */}
                    <div className="md:col-span-6 flex items-center space-x-2">
                      <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden relative">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-contain"
                          />
                        ) : (
                          <div className="w-12 h-12 bg-gray-300 rounded"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        {item.color && (
                          <p className="text-sm text-gray-500">Color: {item.color}</p>
                        )}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 text-sm flex items-center mt-2"
                        >
                          <X size={16} className="mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="md:col-span-2 flex justify-center">
                      <div className="flex items-center border rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-gray-100 disabled:opacity-50"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 py-2 min-w-[3rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-gray-100"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="md:col-span-2 text-center font-medium">
                      ${item.price.toFixed(2)}
                    </div>

                    {/* Subtotal */}
                    <div className="md:col-span-2 text-right font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Coupon Section */}
              <div className="mt-8 max-w-md">
                <h3 className="text-lg font-semibold mb-2">Have a coupon?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Add your code for an instant cart discount
                </p>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                  <button
                    onClick={applyCoupon}
                    className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/* Cart Summary - Right Side */}
            <div className="lg:col-span-1">
              <div className="bg-white border rounded-lg p-6 sticky top-6">
                <h2 className="text-xl font-semibold mb-6">Cart summary</h2>

                {/* Shipping Options */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="free-shipping"
                        name="shipping"
                        value="free"
                        checked={shippingOption === "free"}
                        onChange={(e) => setShippingOption(e.target.value)}
                        className="mr-3"
                      />
                      <label htmlFor="free-shipping" className="text-sm">Free shipping</label>
                    </div>
                    <span className="text-sm font-medium">$0.00</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="express-shipping"
                        name="shipping"
                        value="express"
                        checked={shippingOption === "express"}
                        onChange={(e) => setShippingOption(e.target.value)}
                        className="mr-3"
                      />
                      <label htmlFor="express-shipping" className="text-sm">Express shipping</label>
                    </div>
                    <span className="text-sm font-medium">+$15.00</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="pickup"
                        name="shipping"
                        value="pickup"
                        checked={shippingOption === "pickup"}
                        onChange={(e) => setShippingOption(e.target.value)}
                        className="mr-3"
                      />
                      <label htmlFor="pickup" className="text-sm">Pick Up</label>
                    </div>
                    <span className="text-sm font-medium">%21.00</span>
                  </div>
                </div>

                {/* Totals */}
                <div className="border-t pt-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Subtotal</span>
                    <span className="text-sm font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition-colors mt-6 font-medium"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}