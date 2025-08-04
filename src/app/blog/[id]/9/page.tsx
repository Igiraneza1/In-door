import Image from "next/image";
import Link from "next/link";

export default function BlogPage9() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 text-gray-900">
      {/* Back link */}
      <Link
        href="/blog"
        className="text-sm text-gray-700 hover:underline mb-6 block"
        aria-label="Back to blog list"
      >
        ← Back to Blog
      </Link>

      <article>
        <h1 className="text-3xl font-bold mb-2">
          Smart Storage Solutions for Every Room
        </h1>
        <p className="text-sm text-gray-500 mb-6">Published on March 10, 2025</p>

        <Image
          src="/image/bedroom/cupboard11.jpg"
          alt="Organized bedroom cupboard with smart storage solutions"
          width={800}
          height={400}
          className="rounded-lg mb-6 object-cover w-full"
          priority
        />

        <p className="text-lg font-semibold mb-6">
          Explore innovative and practical storage ideas to keep every room neat and stylish.
        </p>

        <section className="space-y-6 text-base text-gray-700 leading-relaxed">
          <p>
            Making the most of your space requires smart storage solutions that blend function with style. From modular shelving to hidden compartments, these ideas help you organize without clutter.
          </p>
          <p>
            Use vertical space wisely by installing tall cabinets or wall-mounted racks. This frees up floor area and keeps your home feeling open.
          </p>
          <p>
            Incorporate multifunctional furniture like beds with drawers or ottomans with storage to maximize utility.
          </p>
          <p>
            Don’t forget small touches such as drawer dividers and hooks to keep smaller items tidy and accessible.
          </p>
        </section>

        <aside className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">You may also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Image
              src="/image/bedroom/cupboard12.jpg"
              alt="Modern cupboard with efficient storage"
              width={400}
              height={300}
              className="rounded-lg"
            />
            <Image
              src="/image/bedroom/cupboard16.jpg"
              alt="Compact bedroom storage unit"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        </aside>

        <aside className="mt-10 p-6 bg-gray-100 rounded-lg max-w-sm shadow-md">
          <h2 className="text-xl font-semibold mb-3">Shop This Look</h2>
          <p>
            Smart Storage Solutions Bundle — <strong>$79.99</strong>
          </p>
          <Link
            href="https://yourshop.com/smart-storage-bundle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-5 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
            aria-label="Shop smart storage solutions bundle"
          >
            Shop Now
          </Link>
        </aside>
      </article>
    </main>
  );
}
