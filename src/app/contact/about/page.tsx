import Image from "next/image";


export default function About() {
  return (
    <div className="flex flex-col md:flex-row h-86  mx-auto rounded-lg mt-15 bg-white">
      
      <div className="w-full md:w-1/2 relative ml-30 rounded-lg">
        <Image
          src="/image/Living-room/sofa3.jpg"
          alt="Elegant Living Room"
          layout="fill"
          objectFit="cover"
          className="object-cover rounded-lg"
        />
      </div>

      
      <div className="w-full md:w-1/2 bg-gray-50 p-8 flex flex-col justify-center mr-38 items-start rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-black">About Us</h1>
        <p className="text-gray-600 mb-4">
          3legant is a gift & decorations store based in HCMC,<br/>
           Vietnam. Est since
          2019. Our customer service is always prepared to support you <br/>
           24/7.
        </p>
        <a
          href="#"
          className="text-black hover:text-blue-800 underline mt-4"
        >
          Shop Now →
        </a>
      </div>
    </div>
  );
};
