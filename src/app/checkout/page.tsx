"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";


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
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [billingAddress, setBillingAddress] = useState(false);
  const router = useRouter();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; // Free shipping
  const total = subtotal - discount + shipping;

  const handleApplyCoupon = () => {
    if (coupon === "JenkateMW") {
      setDiscount(25);
    }
  };

  const handlePlaceOrder = () => {
       router.push("/complete"); 
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-black pt-12">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Check Out</h1>
        
        {/* Progress Steps */}
        <div className="flex justify-center items-center mb-12">
          <div className="flex items-center space-x-8">
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <Link href="/cart">
                <span className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-full text-sm">
                  ✓
                </span>
              <span className="ml-3 text-green-500 font-medium">Shopping cart</span></Link>  
              </div>
              <div className="border-b-2 border-green-500 w-32 mt-2"></div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <span className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full text-sm font-medium">2</span>
                <span className="ml-3 text-black font-medium">Checkout details</span>
              </div>
              <div className="border-b-2 border-black w-36 mt-2"></div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <span className="w-8 h-8 bg-gray-400 text-white flex items-center justify-center rounded-full text-sm">3</span>
                <span className="ml-3 text-gray-400">Order complete</span>
              </div>
              <div className="border-b-2 border-transparent w-32 mt-2"></div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
        
          <div className="lg:col-span-2 space-y-8 ">
        
            <div className="bg-white p-6 rounded-lg border ">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">Contact Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <input 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                  placeholder="First name" 
                />
                <input 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                  placeholder="Last name" 
                />
              </div>
              <input 
                className="w-full p-3 border border-gray-300 rounded-md mt-4 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                placeholder="Phone number" 
              />
              <input 
                className="w-full p-3 border border-gray-300 rounded-md mt-4 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                placeholder="Your Email" 
              />
            </div>

            {/* Shipping Address */}
            <div className="bg-white p-6 rounded-lg border">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">Shipping Address</h2>
              <input 
                className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                placeholder="Street Address" 
              />
              <select className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-gray-500">
                <option>Country</option>
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
              </select>
              <input 
                className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                placeholder="Town / City" 
              />
              <div className="grid grid-cols-2 gap-4">
                <input 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                  placeholder="State" 
                />
                <input 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                  placeholder="Zip Code" 
                />
              </div>
              <div className="flex items-center mt-4">
                <input 
                  type="checkbox" 
                  id="billing-address" 
                  className="mr-2 h-4 w-4 text-black border-gray-300 rounded focus:ring-black"
                  checked={billingAddress}
                  onChange={(e) => setBillingAddress(e.target.checked)}
                />
                <label htmlFor="billing-address" className="text-sm text-gray-600">
                  Use a different billing address (optional)
                </label>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white p-6 rounded-lg border">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">Payment method</h2>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 border rounded-lg">
                  <input 
                    type="radio" 
                    id="credit-card" 
                    name="payment" 
                    value="credit"
                    checked={paymentMethod === "credit"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3 h-4 w-4 text-black border-gray-300 focus:ring-black"
                  />
                  <label htmlFor="credit-card" className="flex-1 font-medium">Pay by Card Credit</label>
                  <div className="flex space-x-2">
                    <Image src="/api/placeholder/30/20" alt="Visa" width={30} height={20} />
                    <Image src="/api/placeholder/30/20" alt="Mastercard" width={30} height={20} />

                  </div>
                </div>
                
                <div className="flex items-center p-4 border rounded-lg">
                  <input 
                    type="radio" 
                    id="paypal" 
                    name="payment" 
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3 h-4 w-4 text-black border-gray-300 focus:ring-black"
                  />
                  <label htmlFor="paypal" className="flex-1 font-medium">Paypal</label>
                </div>
              </div>

              {paymentMethod === "credit" && (
                <div className="mt-6 space-y-4">
                  <input 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                    placeholder="Card number" 
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                      placeholder="MM/YY" 
                    />
                    <input 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                      placeholder="CVC code" 
                    />
                  </div>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={handlePlaceOrder}
              className="w-full py-4 bg-black text-white rounded-lg hover:bg-gray-800 font-medium text-lg transition-colors"
            >
              Place Order
            </button>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg border sticky top-6 p-6">
              <h2 className="text-lg font-semibold mb-6 text-gray-900">Order summary</h2>
              
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between mb-6 pb-4 border-b last:border-b-0">
                  <div className="flex items-center space-x-3">
                    <Image src={item.image} className="w-12 h-12 object-contain bg-gray-100 rounded" alt={item.title} />
                    <div>
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}

              <div className="flex gap-2 mb-6">
                <input
                  type="text"
                  className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Input"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <button
                  type="button"
                  className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
                  onClick={handleApplyCoupon}
                >
                  Apply
                </button>
              </div>

              {discount > 0 && (
                <div className="flex justify-between items-center mb-2 text-green-600">
                  <span>JenkateMW</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}

              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold pt-2 border-t">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}