import Image from 'next/image'
import Link from 'next/link'

export default function BlogPage3() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 text-black font-sans leading-relaxed">
        <Link href="/blog" className="text-sm text-black hover:underline mb-6 block">
        ← 
      </Link>
      <h1 className="text-4xl font-bold mb-4 text-gray-900">
        7 Ways to Decor Your Home Like a Professional
      </h1>

      <p className="text-sm text-gray-500 mb-6">Published on July 1, 2025</p>

      <Image
        src="/image/Living-room/sofa2.jpg"
        alt="Stylish living room"
        width={1200}
        height={600}
        className="rounded-lg mb-8 object-cover w-full shadow-sm"
      />

      <p className="text-lg text-gray-700 mb-8">
        Discover seven expert-approved techniques to transform your home into a stylish,
        magazine-worthy space — no interior designer required.
      </p>

      <div className="space-y-5 text-base text-gray-700">
        <p>
          <strong>1. Start with a Neutral Base:</strong> Neutral walls and furniture create a
          timeless canvas. Think whites, beiges, and soft greys.
        </p>
        <p>
          <strong>2. Layer with Textures:</strong> Incorporate rugs, throws, and natural materials
          like wood or linen to add warmth and depth.
        </p>
        <p>
          <strong>3. Use Statement Pieces:</strong> Choose one standout item, such as a bold sofa or
          art piece, to anchor each room.
        </p>
        <p>
          <strong>4. Add Greenery:</strong> Indoor plants breathe life into a space and work with
          any style.
        </p>
        <p>
          <strong>5. Optimize Lighting:</strong> Mix ambient, task, and accent lighting. Natural
          light is always best, so keep windows open.
        </p>
        <p>
          <strong>6. Create Symmetry:</strong> Balance furniture and decor on both sides of a focal
          point like a fireplace or TV.
        </p>
        <p>
          <strong>7. Personalize It:</strong> Include framed photos, books, or travel souvenirs that
          reflect your personality.
        </p>
      </div>

      {/* Related Section */}
      <h2 className="text-2xl font-semibold text-gray-900 mt-14 mb-4">
        You May Also Like
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <Image
          src="/image/Living-room/chair21.jpg"
          alt="Decor chair 1"
          width={600}
          height={400}
          className="rounded-lg w-full h-auto object-cover shadow"
        />
        <Image
          src="/image/Living-room/chair18.jpg"
          alt="Decor chair 2"
          width={600}
          height={400}
          className="rounded-lg w-full h-auto object-cover shadow"
        />
      </div>

      {/* CTA / Buy Section */}
      <div className="mt-12 p-6 bg-gray-100 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">Shop This Look</h2>
        <p className="text-gray-700">
          7 Ways to Decor Your Home Like a Professional —{' '}
          <strong className="text-black text-lg">$149.99</strong>
        </p>
        <button className="mt-4 px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
          Shop Now
        </button>
      </div>
    </main>
  )
}
