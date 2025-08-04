import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function BlogPage8() {
  return (
    <>
      <Head>
        <title>Small Space Solutions for Urban Apartments | HomeStyle Blog</title>
        <meta
          name="description"
          content="Discover smart and stylish solutions to maximize space and comfort in your urban apartment."
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
          <h1 className="text-3xl font-bold mb-2">Small Space Solutions for Urban Apartments</h1>
          <p className="text-sm text-gray-500 mb-6">Published on April 10, 2025 · By HomeStyle Team</p>

          <Image
            src="/image/Living-room/sofa6.jpg"
            alt="Modern small urban apartment living room with clever space-saving furniture"
            width={800}
            height={450}
            className="rounded-lg mb-6 object-cover w-full"
            priority
          />

          <p className="text-lg font-semibold mb-6">
            Explore smart design ideas to transform your urban apartment into a functional, cozy, and stylish space.
          </p>

          <section className="space-y-6 text-base text-gray-700 leading-relaxed">
            <p>
              When living in a small urban apartment, every inch counts. Opt for multifunctional furniture like sofa beds, foldable tables, and ottomans with storage to maximize usability without sacrificing style.
            </p>
            <p>
              Use vertical space creatively by installing shelves and hanging organizers. This keeps the floor clear and adds personality to your home.
            </p>
            <p>
              Incorporate light colors and mirrors to create an illusion of space, making rooms feel larger and more open.
            </p>
            <p>
              Keep clutter to a minimum by adopting smart storage solutions and regularly decluttering to maintain a clean, airy atmosphere.
            </p>
          </section>

          <aside className="mt-10">
            <h2 className="text-black text-2xl font-semibold mb-4">You may also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Image
                src="/image/Living-room/chair18.jpg"
                alt="Compact urban apartment with stylish chairs"
                width={400}
                height={300}
                className="rounded-lg"
              />
              <Image
                src="/image/Living-room/chair20.jpg"
                alt="Small apartment corner with efficient seating"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </aside>

          <aside className="mt-10 p-6 bg-gray-100 rounded-lg max-w-sm shadow-md">
            <h2 className="text-xl font-semibold mb-3">Shop This Look</h2>
            <p>
              Urban Space Saver Bundle — <strong>$99.99</strong>
            </p>
            <a
              href="https://yourshop.com/urban-space-saver-bundle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-5 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
              aria-label="Shop urban space saver bundle"
            >
              Shop Now
            </a>
          </aside>
        </article>
      </main>
    </>
  )
}
