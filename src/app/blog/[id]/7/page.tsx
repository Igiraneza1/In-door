import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function BlogPage7() {
  return (
    <>
      <Head>
        <title>Seasonal Decor Transitions Made Easy | HomeStyle Blog</title>
        <meta
          name="description"
          content="Learn simple and stylish ways to transition your home decor with the seasons for a fresh look all year round."
        />
      </Head>

      <main className="max-w-6xl mx-auto px-4 py-10 text-gray-900">
        {/* Back to blog list */}
        <Link
          href="/blog"
          className="text-sm text-gray-700 hover:underline mb-6 block"
          aria-label="Back to blog list"
        >
          ← Back to Blog
        </Link>

        <article>
          <h1 className="text-4xl font-extrabold mb-4">Seasonal Decor Transitions Made Easy</h1>
          <p className="text-sm text-gray-500 mb-6">Published on March 30, 2025 · By HomeStyle Team</p>

          <Image
            src="/image/bedroom/bedroom3.jpg"
            alt="Cozy bedroom with seasonal decor for easy transitions"
            width={800}
            height={450}
            className="rounded-lg mb-8 object-cover w-full"
            priority
          />

          <p className="text-lg font-semibold mb-8 leading-relaxed">
            Changing your home decor to match the seasons can be simple and rewarding. Discover tips and tricks to refresh your space with minimal effort.
          </p>

          <section className="space-y-6 text-base text-gray-700 leading-relaxed">
            <p>
              Start with neutral basics that stay year-round, like furniture and large rugs, then layer seasonal accents such as throw pillows, blankets, and artwork.
            </p>
            <p>
              Use natural elements like dried flowers, pinecones, or fresh greenery to bring texture and life to your rooms depending on the season.
            </p>
            <p>
              Swap out smaller decor items rather than making big changes, so your space feels updated but stays budget-friendly.
            </p>
            <p>
              Don’t forget lighting—warmer tones and candles can make winter cozy, while lighter fixtures brighten your summer interiors.
            </p>
          </section>

          <aside className="mt-12">
            <h2 className="text-black text-2xl font-semibold mb-4">You may also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Image
                src="/image/bedroom/bed15.jpeg"
                alt="Elegant bedroom with layered seasonal decor"
                width={400}
                height={300}
                className="rounded-lg"
              />
              <Image
                src="/image/bedroom/bed17.jpeg"
                alt="Bedroom styled for a seasonal decor refresh"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </aside>

          <aside className="mt-12 p-6 bg-gray-100 rounded-lg max-w-sm shadow-md">
            <h2 className="text-xl font-semibold mb-3">Shop This Look</h2>
            <p>
              Seasonal Decor Bundle — <strong>$59.99</strong>
            </p>
            <a
              href="/shop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-5 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
              aria-label="Shop seasonal decor bundle"
            >
              Shop Now
            </a>
          </aside>
        </article>
      </main>
    </>
  )
}
