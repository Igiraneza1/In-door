"use client";

import { useState, useEffect } from "react";
import { Minus, Plus, X, Search, User, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";


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
  const [shippingOption] = useState("free");
  const [couponCode, setCouponCode] = useState("");
  const [isLoading, setIsLoading] = useState(true); 
  const router = useRouter();

  const shippingOptions = [
    { label: "Free shipping", cost: 0 },
    { label: "Express shipping", cost: 15 },
    { label: "Pick Up", cost: 0},
  ];
  
  useEffect(() => {
    const loadCart = () => {
      try {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
          const parsedCart = JSON.parse(savedCart);
          
          // Validate and sanitize cart items
          const validCart = parsedCart.filter((item: any) => 
            item.id && 
            item.title && 
            !isNaN(item.price) && 
            !isNaN(item.quantity) && 
            item.image
          );
          
          setCart(validCart);
        }
      } catch (error) {
        console.error("Error loading cart:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCart();
    
    // Listen for storage events from other tabs
    window.addEventListener('storage', loadCart);
    return () => window.removeEventListener('storage', loadCart);
  }, []);

  // Rest of your component remains the same...
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p>Loading cart...</p>
      </div>
    );
  }
  useEffect(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      const sanitizedCart = savedCart.map((item: any) => ({
        ...item,
        price: typeof item.price === "number" ? item.price : 0,
        quantity: typeof item.quantity === "number" && item.quantity > 0 ? item.quantity : 1,
        image: item.image || "",
        title: item.title || "Unknown product",
      }));
      setCart(sanitizedCart);
    } catch (error) {
      console.error("Failed to load cart:", error);
      setCart([]);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)));
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = shippingOption === "free" ? 0 : shippingOption === "express" ? 15 : 21;
  const total = subtotal + shippingCost;

  const handleCheckout = () => {
    router.push("/checkout");
  };

  const applyCoupon = () => {
    if (couponCode.trim()) {
      alert(`Coupon "${couponCode}" applied!`);
      setCouponCode("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b">
            <h1 className="text-3xl font-bold text-center mb-8">Cart</h1>
            <div className="flex justify-center items-center space-x-8 text-gray-500 mb-8">
              {["Shopping cart", "Checkout details", "Order complete"].map((step, index) => (
                <div key={index} className="flex items-center">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center ${index === 0 ? "bg-black text-white" : "bg-gray-200 text-gray-500"}`}>{index + 1}</span>
                  <span className="ml-2">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {cart.length === 0 ? (
            <div className="p-8 text-center text-gray-500">Your cart is empty</div>
          ) : (
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                  <div className="hidden lg:flex justify-between font-medium text-gray-600 mb-4">
                    <span className="w-1/5">Product</span>
                    <span className="w-1/5text-center">Quantity</span>
                    <span className="w-1/5 text-center">Price</span>
                    <span className="w-1/5 text-center">Total</span>
                    <span className="w-1/5 text-right">Subtotal</span>
                  </div>

                  {cart.map((item) => (
                    <div key={item.id} className="grid md:grid-cols-12 gap-2 items-center pb-6 border-b">
                      <div className="md:col-span-6 flex items-center space-x-2">
                        <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden relative">
                          <Image src={item.image} alt={item.title} fill className="object-contain" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{item.title}</h3>
                          {item.color && <p className="text-sm text-gray-500">Color: {item.color}</p>}
                          <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 text-sm flex items-center mt-2">
                            <X size={16} className="mr-1" /> Remove
                          </button>
                        </div>
                      </div>
                      <div className="md:col-span-2 flex justify-center">
                        <div className="flex items-center border rounded-lg">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-gray-100 disabled:opacity-50" disabled={item.quantity <= 1}>
                            <Minus size={16} />
                          </button>
                          <span className="px-4 py-2 min-w-[3rem] text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-gray-100">
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                      <div className="md:col-span-2 text-center font-medium">${item.price.toFixed(2)}</div>
                      <div className="md:col-span-2 text-right font-bold">${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                  ))}
                </div>

                <div className="lg:w-1/3">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Cart summary</h2>

                    <div className="space-y-3 mb-6">
                      {shippingOptions.map((option, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span>{option.label}</span>
                          <span>${option.cost.toFixed(2)}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-300 pt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-semibold text-lg mt-4">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>

                    <button onClick={handleCheckout} className="mt-6 w-full bg-black text-white py-3 rounded hover:bg-gray-900">
                      Checkout
                    </button>
                  </div>

                </div>
                 
              </div>
              <div className="mb-8 mt-4 f">
                    <h3 className="text-sm font-medium mb-2">Have a coupon?</h3>
                    <p className="text-xs text-gray-500 mb-3">Add your code for an instant cart discount.</p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Coupon Code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
                      />
                      <button onClick={applyCoupon} className="bg-black text-white px-4 py-2 rounded text-sm">
                        Apply
                      </button>
                    </div>
                  </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
