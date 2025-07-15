import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row h-auto mx-auto rounded-lg mt-16 m-4 bg-white overflow-hidden max-w-7xl">
      
      
      <div className="w-full md:w-1/2 relative h-64 md:h-auto ml-0 md:ml-5">

        <Image
          src="/image/Living-room/sofa3.jpg"
          alt="Elegant Living Room"
          fill
          className="object-cover rounded-lg"
        />
      </div>


      <div className="w-full md:w-1/2 bg-gray-50 p-8 flex flex-col justify-center items-start">
        <h1 className="text-3xl font-bold mb-4 text-black">About Us</h1>
        <p className="text-gray-600 mb-4 leading-relaxed">
          In-door Home is an online store based in Kigali, Rwanda.<br />
          Est since 2019. Our customer service is always prepared to support you 24/7.
        </p>
        <Link
          href="/shop"
          className="text-black hover:text-blue-800 underline mt-4"
        >
          Shop Now →
        </Link>
      </div>
    </div>
  );
}
