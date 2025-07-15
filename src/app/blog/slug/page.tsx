import { notFound } from "next/navigation";
import Image from "next/image";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  category: string;
  slug: string;
  content: string;
  featured?: boolean;
}


const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "7 ways to decor your home like a professional",
    date: "2023-10-16",
    image: "/images/blog/1.jpg",
    category: "Home Decor",
    slug: "decorate-home-professionally",
    content: "This is the full content of the professional decor blog post...",
    featured: true,
  },
  {
    id: 2,
    title: "Inside a beautiful kitchen organization",
    date: "2023-10-16",
    image: "/images/blog/2.jpg",
    category: "Kitchen",
    slug: "kitchen-organization",
    content: "Explore how to perfectly organize your kitchen space with these tips...",
  },
  // Add more blog posts as needed
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function Blog({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-2">{post.date} • {post.category}</p>
      <div className="relative w-full h-72 mb-6 rounded overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover rounded"
          priority
        />
      </div>
      <article className="prose max-w-none">
        <p>{post.content}</p>
        {/* Replace with rich content (markdown or CMS data) if needed */}
      </article>
    </div>
  );
}
