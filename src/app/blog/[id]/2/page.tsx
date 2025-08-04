import Image from 'next/image'
import Link from 'next/link'

export default function BlogPage2() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 text-black font-sans leading-relaxed">
        <Link href="/blog" className="text-sm text-black hover:underline mb-6 block">
        ← 
      </Link>
      <h1 className="text-4xl font-bold mb-4 text-gray-900">
        Creating a Cozy Reading Nook in Your Living Room
      </h1>

      <p className="text-sm text-gray-500 mb-6">Published on May 12, 2025</p>

      <Image
        src="/image/Living-room/chair2.jpg"
        alt="Reading nook in living room"
        width={1200}
        height={600}
        className="rounded-lg mb-8 object-cover w-full shadow-sm"
      />

      <p className="text-lg text-gray-700 mb-8">
        Transforming a small corner of your living room into a cozy reading nook is one of the most
        rewarding upgrades you can make to your home.
      </p>

      <div className="space-y-5 text-gray-700 text-base">
        <p>
          Start with a comfortable chair or chaise lounge, ideally near a window for natural light.
          A plush throw blanket and a few soft pillows can add warmth and texture.
        </p>
        <p>
          Lighting is key. Consider a floor lamp or wall sconce with a soft bulb for evening
          reading. Avoid harsh white light — warm tones are more relaxing and easier on the eyes.
        </p>
        <p>
          Add a small side table to hold books, tea, or your favorite candle. You can even include a
          slim bookshelf or basket to keep your current reads within reach.
        </p>
        <p>
          To complete the nook, decorate with a plant or framed artwork. These little personal
          touches make the space feel inviting and uniquely yours.
        </p>
      </div>

      {/* Recommended Section */}
      <h2 className="text-2xl font-semibold text-gray-900 mt-14 mb-4">
        You May Also Use
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <Image
          src="/image/Living-room/chair6.png"
          alt="Reading chair 1"
          width={600}
          height={400}
          className="rounded-lg w-full h-auto object-cover shadow"
        />
        <Image
          src="/image/Living-room/chair14.png"
          alt="Reading chair 2"
          width={600}
          height={400}
          className="rounded-lg w-full h-auto object-cover shadow"
        />
      </div>

      {/* CTA Section */}
      <div className="mt-12 p-6 bg-gray-100 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">Shop This Look</h2>
        <p className="text-gray-700">
          Creating a Cozy Reading Nook in Your Living Room —{' '}
          <strong className="text-black text-lg">$129.99</strong>
        </p>
        <button className="mt-4 px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
          Shop Now
        </button>
      </div>
    </main>
  )
}
