import Image from "next/image";

export default function BlogPage9() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 text-black">
      <h1 className="text-3xl font-bold mb-2">
        Smart Storage Solutions for Every Room
      </h1>
      <p className="text-sm text-gray-500 mb-4">Published on 2025-03-10</p>
      <div >
      <Image
        src="/image/bedroom/cupboard11.jpg"
        alt="Smart Storage Solutions for Every Room"
        width={500}
        height={350}
        className="rounded-lg mb-6 object-cover w-full"
      />
      </div>
      <p className="text-lg mb-6">
        Explore more about Smart Storage Solutions for Every Room
      </p>
      <div className="space-y-4 text-base leading-relaxed">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
        <p>
          Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
          ipsum. Praesent mauris.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4">
        <Image
          src="/image/bedroom/cupboard12.jpg"
          alt="Supporting image 1"
          width={400}
          height={300}
          className="rounded-lg"
        />
        <Image
          src="/image/bedroom/cupboard16.jpg"
          alt="Supporting image 2"
          width={400}
          height={300}
          className="rounded-lg"
        />
      </div>
      <div className="mt-10 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Shop This Look</h2>
        <p>
          Smart Storage Solutions for Every Room — <strong>$79.99</strong>
        </p>
        <button className="mt-2 px-4 py-2 bg-black text-white rounded-md">
          Shop Now
        </button>
      </div>
    </main>
  );
}
