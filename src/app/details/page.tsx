"use client";
import React from "react";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  category: string;
  slug: string;
  featured?: boolean;
  excerpt?: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "7 ways to decor your home like a professional",
    date: "2023-10-16",
    image: "/images/blog/1.jpg",
    category: "Home Decor",
    slug: "decorate-home-professionally",
    featured: true,
    excerpt: "Transform your living space with these professional interior design tips.",
    content: `
      Want to give your home a designer's touch? Here are 7 ways to decorate like a pro:
      1. Start with a neutral base.
      2. Layer textures.
      3. Use thoughtful lighting.
      4. Incorporate plants.
      5. Balance the room.
      6. Add statement pieces.
      7. Edit and declutter.
    `
  },
  {
    id: 2,
    title: "Inside a beautiful kitchen organization",
    date: "2023-10-16",
    image: "/images/blog/2.jpg",
    category: "Kitchen",
    slug: "kitchen-organization",
    excerpt: "Discover smart storage solutions and organization tips.",
    content: `
      A well-organized kitchen is both beautiful and functional. Maximize cabinets, declutter counters, and use clear containers to streamline your workflow.
    `
  },
  {
    id: 3,
    title: "Decor your bedroom for your children",
    date: "2023-10-16",
    image: "/images/blog/3.jpg",
    category: "Bedroom",
    slug: "bedroom-for-children",
    excerpt: "Create a fun and functional bedroom space for your kids.",
    content: `
      Use playful colors, multi-use furniture, and built-in play zones. Make it safe, soft, and full of personality.
    `
  },
  {
    id: 4,
    title: "Modern texas home is kid-friendly",
    date: "2023-10-16",
    image: "/images/blog/4.jpg",
    category: "Home Decor",
    slug: "modern-texas-home",
    featured: true,
    excerpt: "Stylish and family-friendly design come together in this Texas home.",
    content: `
      This home blends modern architecture with kid-friendly features like soft furnishings, open layouts, and easy-clean surfaces.
    `
  },
  {
    id: 5,
    title: "Creating a cozy reading nook in your living room",
    date: "2023-10-15",
    image: "/images/blog/10.jpg",
    category: "Living Room",
    slug: "cozy-reading-nook",
    excerpt: "Design the perfect reading corner for comfort and relaxation.",
    content: `
      Add a comfy chair, soft lighting, and shelves of your favorite books. A quiet corner can become your sanctuary.
    `
  },
  {
    id: 6,
    title: "Minimalist bathroom design ideas that work",
    date: "2023-10-15",
    image: "/images/blog/11.jpg",
    category: "Bathroom",
    slug: "minimalist-bathroom-design",
    excerpt: "Clean lines and calm spaces for a peaceful bathroom.",
    content: `
      Stick to neutral tones, floating vanities, and quality over quantity. Simplicity is the key to timeless style.
    `
  },
  {
    id: 7,
    title: "Small space solutions for urban apartments",
    date: "2023-10-14",
    image: "/images/blog/12.jpg",
    category: "Home Decor",
    slug: "small-space-solutions",
    excerpt: "Maximize style and function in compact spaces.",
    content: `
      Use foldable furniture, vertical storage, and mirrored surfaces to make even the tiniest apartment feel roomy.
    `
  },
  {
    id: 8,
    title: "Seasonal decor transitions made easy",
    date: "2023-10-14",
    image: "/images/blog/13.jpg",
    category: "Home Decor",
    slug: "seasonal-decor-transitions",
    excerpt: "Switch your home vibe with the seasons effortlessly.",
    content: `
      Update pillows, florals, and scents with each season. Keep your base neutral for easy swaps.
    `
  },
  {
    id: 9,
    title: "Smart storage solutions for every room",
    date: "2023-10-13",
    image: "/images/blog/14.jpg",
    category: "Organization",
    slug: "smart-storage-solutions",
    excerpt: "Innovative ideas for clutter-free living.",
    content: `
      From the kitchen to the bathroom, use hidden drawers, vertical racks, and multi-use furniture to store smarter.
    `
  },
];

export default function BlogFullList() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-10 text-center">Our Blog Articles</h1>
      <div className="space-y-16">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                <span className="uppercase tracking-wide">{post.category}</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                {post.title}
              </h2>
              <p className="text-gray-600 whitespace-pre-line">{post.content.trim()}</p>
              <div className="mt-4">
                <a
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
