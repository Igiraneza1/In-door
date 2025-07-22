// app/inDoor/newsletter/page.tsx or components/Newsletter.tsx
"use client";

import Image from "next/image";


export default function Newsletter() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center bg-white overflow-hidden h-[280px] md:h-[360px]">
      <div className="relative w-full md:w-1/4 h-full">
        <Image
          src="/image/bedroom/bedroom.png"
          alt="dresser"
          fill
          className="object-cover object-left"
          priority
        />
      </div>


      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full md:w-2/4 px-8 py-8 bg-gray-100 h-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-3 leading-tight">
          Join Our Newsletter
        </h2>
        <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed max-w-sm">
          Sign up for deals, new products and promotions
        </p>

        <div className="flex items-center border-b border-gray-400 w-full max-w-sm">
    
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-500 text-sm py-3 font-light"
          />
          <button className="ml-6 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap uppercase tracking-wider">
            Signup
          </button>
        </div>
      </div>
      <div className="relative w-full md:w-1/4 h-full">
        <Image
          src="/image/Living-room/chair1.png"
          alt="chair with blanket"
          fill
          className="object-cover object-right ml-10 "
          priority
        />
      </div>
    </section>
  );
}