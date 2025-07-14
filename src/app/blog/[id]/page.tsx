// app/blog/[id]/page.tsx
import { notFound } from "next/navigation";
import blogPosts from "@/data/blogPosts.json";
import Image from "next/image";
import Link from "next/link";

export default function BlogDetail({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === Number(params.id));
  if (!post) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-black bg-white">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {post.author} • {post.date} • {post.readTime}
      </p>

      <div className="relative w-full h-96 mb-8">
        <Image
          src={post.heroImage}
          alt={post.title}
          fill
          className="object-cover rounded"
        />
      </div>

      {post.sections.map((section, index) => (
        <div key={index} className="mb-10">
          {section.title && <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>}
          <p className="text-gray-700 mb-4">{section.text}</p>
          {section.image && (
            <div className="relative w-full h-80 mb-4">
              <Image
                src={section.image}
                alt={section.title || "Blog image"}
                fill
                className="object-cover rounded"
              />
            </div>
          )}
        </div>
      ))}

      <h3 className="text-2xl font-semibold mb-4">You might also like</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        {post.suggestions.map((s) => (
          <Link key={s.id} href={`/blog/${s.id}`} className="block">
            <div className="relative w-full h-48 mb-2">
              <Image src={s.image} alt={s.title} fill className="object-cover rounded" />
            </div>
            <p className="text-sm font-medium text-gray-800">{s.title}</p>
          </Link>
        ))}
      </div>

      <div className="bg-gray-100 p-6 rounded text-center">
        <h4 className="text-xl font-semibold mb-2">Join Our Newsletter</h4>
        <p className="text-gray-600 mb-4">Tips for your home, style inspiration, and more.</p>
        <input
          type="email"
          placeholder="Your email"
          className="border p-2 rounded w-full max-w-sm mb-2"
        />
        <br />
        <button className="bg-black text-white px-4 py-2 rounded">Subscribe</button>
      </div>
    </div>
  );
}