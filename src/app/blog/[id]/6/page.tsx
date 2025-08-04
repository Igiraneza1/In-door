import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function BlogPage6() {
  return (
    <>
      <Head>
        <title>Modern Texas Home is Kid-Friendly </title>
        <meta
          name="description"
          content="Explore how modern Texas homes can be stylish and kid-friendly with smart design ideas for families."
        />
      </Head>

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
          <h1 className="text-4xl font-extrabold mb-4">Modern Texas Home is Kid-Friendly</h1>
          <p className="text-sm text-gray-500 mb-6">Published on May 20, 2025 · By HomeStyle Team</p>

          <Image
            src="/image/Living-room/sofa7.jpg"
            alt="Cozy modern living room in Texas home designed to be kid-friendly"
            width={800}
            height={450}
            className="rounded-lg mb-8 object-cover w-full"
            priority
          />

          <p className="text-lg mb-8 leading-relaxed">
            Designing a kid-friendly home doesn’t mean sacrificing style. This modern Texas home strikes the perfect balance between practical family living and sleek, contemporary design.
          </p>

          <section className="space-y-6 text-base text-gray-700 leading-relaxed">
            <p>
              Durable materials and furniture are essential for families with children. Think stain-resistant fabrics, rounded edges, and washable surfaces.
            </p>
            <p>
              Create plenty of storage options for toys, books, and art supplies. Clever built-ins and multi-functional furniture help keep clutter out of sight.
            </p>
            <p>
              Open floor plans allow parents to keep an eye on kids while cooking or working. Large windows bring in natural light, creating a cheerful and inviting atmosphere.
            </p>
            <p>
              Lastly, add pops of color and fun elements like play areas or chalkboard walls to keep the space lively and engaging for little ones.
            </p>
          </section>

          <aside className="mt-12">
            <h2 className="text-black text-2xl font-semibold mb-4">You may also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Image
                src="/image/Living-room/sofa21.jpeg"
                alt="Modern family living room with soft sofa and colorful pillows"
                width={400}
                height={300}
                className="rounded-lg"
              />
              <Image
                src="/image/Living-room/sofa22.jpeg"
                alt="Bright, airy living room perfect for kids and adults"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </aside>

          <aside className="mt-12 p-6 bg-gray-100 rounded-lg max-w-sm shadow-md">
            <h2 className="text-xl font-semibold mb-3">Shop This Look</h2>
            <p>
              Durable Modern Sofa — <strong>$179.99</strong>
            </p>
            <a
              href="https://yourshop.com/durable-modern-sofa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-5 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
              aria-label="Shop durable modern sofa"
            >
              Shop Now
            </a>
          </aside>
        </article>
      </main>
    </>
  )
}
