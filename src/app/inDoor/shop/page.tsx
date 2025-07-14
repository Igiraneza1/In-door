import Image from "next/image";

export default function Shop() {
  return (
    <div className=" max-w-5xl bg-white mx-auto p-4 ">
      <main className="flex flex-wrap md:flex-nowrap max-w-6xl w-full gap-6">
        <div className="w-full md:w-1/2 flex flex-col bg-gray-100 rounded-lg shadow overflow-hidden">
          <div className="p-6 bg-gray-100 text-left">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Living Room
            </h3>
            <a href="#" className="text-sm text-gray-900 underline">
              Shop Now →
            </a>
          </div>
          <div className="relative w-full h-[400px]">
            <Image
              src="/image/furniture/chair2.png"
              alt="Living Room Chair"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="relative w-full h-[250px] rounded-lg  bg-gray-100 ">
            <Image
              src="/image/furniture/bedroom.png"
              alt="Bedroom Dresser"
              fill
              className="object-contain"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6 b">
              <h3 className="text-xl text-black font-semibold">
                Bedroom
              </h3>
              <a href="#" className="text-sm text-gray-600 underline">
                Shop Now →
              </a>
            </div>
          </div>

          <div className="relative w-full h-[250px] rounded-lg overflow-hidden bg-gray-100 shadow">
            <Image
              src="/image/furniture/toaster.png"
              alt="Kitchen Toaster"
              fill
              className="object-contain"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6 ">
              <h3 className="text-xl text-black font-semibold">
                Kitchen
              </h3>
              <a href="#" className="text-sm text-gray-600 underline">
                Shop Now →
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
