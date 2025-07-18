// app/inDoor/newsletter/page.tsx or components/Newsletter.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Newsletter() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center bg-gray-100 mt-8 overflow-hidden h-[300px]">
      
      {/* Left Image */}
      <div className="relative w-full md:w-1/3 h-full mr-60">
        <Image
          src="/image/bedroom/bedroom.png"
          alt="dresser"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Center Newsletter Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-md px-4 py-10 md:py-8 bg-gray-100">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
          Join Our Newsletter
        </h2>
        <p className="text-gray-700 mb-6 text-sm sm:text-base md:text-lg">
          Sign up for deals, new products and promotions
        </p>
  
        <div className="flex items-center border-b border-gray-800 w-full max-w-md px-2">
        
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-600 text-sm py-2"
          />
          <Link
            href="/sign-up"
            className="ml-4 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap"
          >
            Signup
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-full md:w-1/3  ml-50 h-full">
        <Image
          src="/image/Living-room/chair1.png"
          alt="chair"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
