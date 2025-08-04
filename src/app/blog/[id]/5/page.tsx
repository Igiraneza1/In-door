import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function BlogPage5() {
  return (
    <>
      <Head>
        <title>Minimalist Kitchen Design Ideas That Work </title>
        <meta
          name="description"
          content="Discover minimalist kitchen design ideas to create a sleek, functional, and stylish kitchen space."
        />
      </Head>

      <main className="max-w-6xl mx-auto px-4 py-10 text-gray-900">
        {/* Back link */}
        <Link
          href="/blogs"
          className="text-sm text-blue-600 hover:underline mb-6 block"
          aria-label="Back to all blogs"
        >
          ← Back to all blogs
        </Link>

        <article>
          <h1 className="text-4xl font-extrabold mb-4">Minimalist Kitchen Design Ideas That Work</h1>
          <p className="text-sm text-gray-500 mb-6">Published on April 28, 2025 · By HomeStyle Team</p>

          <Image
            src="/image/kitchen/kitchen19.jpeg"
            alt="Sleek minimalist kitchen design with clean lines and modern appliances"
            width={800}
            height={450}
            className="rounded-lg mb-8 object-cover w-full"
            priority
          />

          <p className="text-lg mb-8 leading-relaxed">
            Embracing minimalism in kitchen design is about creating a space that feels open, airy, and free of clutter. This post explores essential ideas to achieve a minimalist kitchen without sacrificing functionality or style.
          </p>

          <section className="space-y-6 text-base text-gray-700 leading-relaxed">
            <p>
              Focus on clean lines and neutral color palettes such as whites, grays, and natural wood tones. These colors create a calm and inviting atmosphere.
            </p>
            <p>
              Use smart storage solutions to hide away appliances and utensils. Minimalism isn’t about having fewer items, but about thoughtful placement and organization.
            </p>
            <p>
              Incorporate natural light and reflective surfaces to make your kitchen appear larger and more open.
            </p>
            <p>
              Add texture with natural materials like stone countertops or wooden cabinetry to keep the minimalist space from feeling cold or sterile.
            </p>
          </section>

          <aside className="mt-12">
            <h2 className="text-black text-2xl font-semibold mb-4">You may also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Image
                src="/image/kitchen/cabinet11.jpeg"
                alt="Minimalist kitchen cabinet with handle-less drawers"
                width={400}
                height={300}
                className="rounded-lg"
              />
              <Image
                src="/image/kitchen/cabinet12.jpeg"
                alt="Modern kitchen with open shelving and minimal decor"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </aside>

          <aside className="mt-12 p-6 bg-gray-100 rounded-lg max-w-sm shadow-md">
            <h2 className="text-xl font-semibold mb-3">Shop This Look</h2>
            <p>
              Minimalist Kitchen Organizer Set — <strong>$129.99</strong>
            </p>
            <a
              href="https://yourshop.com/minimalist-kitchen-set"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-5 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
              aria-label="Shop minimalist kitchen organizer set"
            >
              Shop Now
            </a>
          </aside>
        </article>
      </main>
    </>
  )
}
