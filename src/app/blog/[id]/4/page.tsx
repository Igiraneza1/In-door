import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function BlogPage4() {
  return (
    <>
      <Head>
        <title>Inside a Beautiful Kitchen Organization | HomeStyle Blog</title>
        <meta name="description" content="Discover expert tips and ideas for organizing your kitchen beautifully and efficiently." />
      </Head>

      <main className="max-w-6xl mx-auto px-4 py-10 text-gray-900">
        {/* Back link */}
        <Link href="/blog" className="text-sm text-gray-700 hover:underline mb-6 block" aria-label="Back to blog list">
          ← Back to Blog
        </Link>

        <article>
          <h1 className="text-4xl font-extrabold mb-4">Inside a Beautiful Kitchen Organization</h1>
          <p className="text-sm text-gray-500 mb-6">Published on June 28, 2025 · By HomeStyle Team</p>

          <Image
            src="/image/kitchen/kitchen.jpg"
            alt="Modern kitchen with neatly organized shelves and cabinets"
            width={800}
            height={450}
            className="rounded-lg mb-8 object-cover w-full"
            priority
          />

          <p className="text-lg mb-8 leading-relaxed">
            A well-organized kitchen not only looks beautiful but also makes cooking and cleaning much more enjoyable. In this post, we dive into practical tips for decluttering, organizing cabinets, and maximizing storage without sacrificing style.
          </p>

          <section className="space-y-6 text-base text-gray-700 leading-relaxed">
            <p>
              Start by decluttering your countertops and cabinets. Keep only essentials out and store the rest in designated containers or organizers. Labeling can also help keep things neat and easy to find.
            </p>
            <p>
              Use vertical space by installing shelves or hooks for pots, pans, and utensils. This frees up drawer space and creates a visually appealing display.
            </p>
            <p>
              Invest in quality storage containers to keep pantry items fresh and uniform. Clear containers also help you spot when you’re running low.
            </p>
            <p>
              Lastly, maintain your organization system by dedicating a few minutes daily to tidy up. Over time, this habit will save you hours of frustration.
            </p>
          </section>
           
           <h2 className="text-2xl font-semibold text-gray-900 mt-14 mb-4">
              You May Also Like
           </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Image
              src="/image/kitchen/cabinet9.jpeg"
              alt="Organized kitchen cabinet with labeled containers"
              width={400}
              height={300}
              className="rounded-lg"
            />
            <Image
              src="/image/kitchen/cabinet10.jpeg"
              alt="Open kitchen drawer with neatly arranged cutlery and utensils"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>

          <aside className="mt-12 p-6 bg-gray-100 rounded-lg shadow-md max-w-sm">
            <h2 className="text-2xl font-semibold mb-3">Shop This Look</h2>
            <p className="mb-2">
              High-quality kitchen organizer set — <strong>$89.99</strong>
            </p>
            <a 
              href="https://yourshop.com/kitchen-organizer-set" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-3 px-5 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
              aria-label="Shop kitchen organizer set"
            >
              Shop Now
            </a>
          </aside>
        </article>
      </main>
    </>
  )
}
