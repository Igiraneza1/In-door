import Image from 'next/image'
import Link from 'next/link'

export default function BlogPage1() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 text-black font-sans leading-relaxed">
        <Link href="/blog" className="text-sm text-blue-600 hover:underline mb-6 block">
        ← 
      </Link>
      <h1 className="text-4xl font-bold mb-6 text-gray-900 m-15">
        Decor Your Bedroom for Your Children
      </h1>

      <p className="text-sm text-gray-500 mb-6">Published on August 4, 2025</p>

      <div className="mb-10">
        <Image
          src="/image/bedroom/bedroom22.jpeg"
          alt="Decor Your Bedroom"
          width={1200}
          height={600}
          className="w-full h-auto rounded-lg object-cover shadow-sm"
        />
      </div>

      <p className="text-lg text-gray-700 mb-6">
        Designing a cozy and functional bedroom for your children is more than aesthetics — it's
        about creating a safe, inspiring space where they can sleep, play, and grow.
      </p>

      <div className="space-y-5 text-gray-700 text-base">
        <p>
          Start with soft, calming color tones. Neutral walls with playful accents like animal
          prints or whimsical wallpapers make a big impact. Incorporate plenty of natural light to
          create a welcoming environment.
        </p>
        <p>
          Storage is essential. Choose beds with built-in drawers, vertical shelving, or compact
          organizers to minimize clutter. Keep things accessible to encourage your child’s
          independence.
        </p>
        <p>
          Consider adding creative elements like a chalkboard wall or a mini reading nook. This
          makes the space fun and functional at the same time.
        </p>
        <p>
          Lastly, invest in quality furniture that grows with your child — adjustable desks,
          extendable beds, and modular wardrobes are all great choices.
        </p>
      </div>

      {/* Recommendation Section */}
      <h2 className="text-2xl font-semibold text-gray-900 mt-14 mb-4">
        You May Also Use
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <Image
          src="/image/bedroom/cupboard19.jpeg"
          alt="Cupboard Option 1"
          width={600}
          height={400}
          className="rounded-lg w-full h-auto object-cover shadow"
        />
        <Image
          src="/image/bedroom/cupboard22.png"
          alt="Cupboard Option 2"
          width={600}
          height={400}
          className="rounded-lg w-full h-auto object-cover shadow"
        />
      </div>

      {/* CTA Section */}
      <div className="mt-12 p-6 bg-gray-100 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">Shop This Look</h2>
        <p className="text-gray-700">
          Decor Your Bedroom for Your Children —{' '}
          <strong className="text-black text-lg">$199.99</strong>
        </p>
        <button className="mt-4 px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
          Shop Now
        </button>
      </div>
    </main>
  )
}
