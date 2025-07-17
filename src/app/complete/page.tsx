import React from "react";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Complete() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="p-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl text-black font-bold">Complete!</h1>
        </div>
      </header>

      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-center items-start space-x-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center">
                    <Link href="/cart">
              <span className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-full">
                <FaCheck />
            
              </span>
              <span className="ml-2 text-green-500">Shopping cart</span>
              </Link>
            </div>
            <div className="w-full h-0.5 bg-green-500 mt-2"></div>
          </div>

    
          <div className="flex flex-col items-center">
            <div className="flex items-center">
                <Link href="/checkout">
              <span className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-full">
                <FaCheck />
              </span>
              <span className="ml-2 text-green-500">Checkout details</span>
              </Link>
            </div>
            <div className="w-full h-0.5 bg-green-500 mt-2"></div>
          </div>

          
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <span className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full">
                3
              </span>
              <span className="ml-2 text-black">Order complete</span>
            </div>
            
            <div className="w-full h-0.5 bg-black mt-2"></div>
          </div>
        </div>
      </div>
      <main className="max-w-md mx-auto p-2 ">
        <div className="bg-white p-6 rounded-lg text-center bg-white shadow-lg ">
          <div className="mb-6">
            <h2 className="text-2xl  text-gray-400 font-bold mb-2">Thank you! </h2>
            <p className="text-3xl">
              Your order has been
              <br />
              received
            </p>
              </div>
              </div>
      </main>
    </div>
  );
}
