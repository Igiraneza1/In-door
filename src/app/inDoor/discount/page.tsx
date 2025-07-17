import Image from "next/image";

export default function Discount() {
  return (
    <main className="flex flex-col md:flex-row w-full h-auto">
      <div className="w-full md:w-1/2 relative h-64 md:h-[350px]">
        <Image
          src="/image/furniture/sofa3.jpg"
          alt="Living Room Setup"
          fill
          className="object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 bg-gray-200 px-6 py-10 md:p-12 flex flex-col justify-center">
        <h2 className="text-blue-600 text-lg md:text-xl font-semibold mb-2">
          SALE UP TO 35% OFF
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black leading-tight">
          HUNDREDS of <br className="hidden md:block" />
          New lower prices!
        </h1>
        <p className="text-gray-700 mb-6 text-sm md:text-base">
          It’s more affordable than ever to give every <br className="hidden md:block" />
          room in your home a stylish makeover
        </p>
        <a
          href="#"
          className="text-black underline hover:text-gray-800 font-medium text-sm md:text-base"
        >
          Shop Now →
        </a>
      </div>
    </main>
  );
}
