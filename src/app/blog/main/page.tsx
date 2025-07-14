// app/blog/[id]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "7 ways to decor your home like a professional",
    date: "October 9, 2023",
    image: "/image/furniture/sofa2.jpg",
    content:
      "Learn how to elevate your home decor with 7 professional interior design techniques and transform any space into a stylish sanctuary.",
  },
  {
    id: 2,
    title: "Inside a beautiful kitchen organization",
    date: "October 9, 2023",
    image: "/image/furniture/kitchen.jpg",
    content:
      "Explore a stunningly organized kitchen with practical storage solutions and visual appeal, perfect for any modern home.",
  },
  {
    id: 3,
    title: "Decor your bedroom for your children",
    date: "October 16, 2023",
    image: "/image/furniture/bedroom1.jpg",
    content:
      "Creative ideas to make your child’s bedroom fun, safe, and inspiring with functional furniture and playful decor.",
  },
  {
    id: 4,
    title: "Modern Texas home is beautiful and completely kid-friendly",
    date: "October 16, 2023",
    image: "/image/furniture/sofa7.jpg",
    content:
      "Take a tour of this modern Texas home that blends clean design with comfort and kid-friendly features.",
  },
  {
    id: 5,
    title: "Comfort meets design in this stylish reading nook",
    date: "October 16, 2023",
    image: "/image/furniture/chair2.jpg",
    content:
      "Discover how to create the ultimate cozy reading corner with the perfect mix of form and function.",
  },
  {
    id: 6,
    title: "Family-friendly living room with luxury appeal",
    date: "October 16, 2023",
    image: "/image/furniture/sofa9.jpg",
    content:
      "This living room shows how to combine elegance and family practicality in one cohesive space.",
  },
  {
    id: 7,
    title: "Boho chic living room with earthy tones",
    date: "October 16, 2023",
    image: "/image/furniture/sofa8.jpg",
    content:
      "Warm earthy tones, layered textures, and a cozy layout define this beautifully decorated boho living room.",
  },
  {
    id: 8,
    title: "Stylish yet minimal cozy sitting area",
    date: "October 16, 2023",
    image: "/image/furniture/sofa6.jpg",
    content:
      "A perfect example of minimalism and comfort, this space offers great inspiration for small apartments or relaxing corners.",
  },
  {
    id: 9,
    title: "Relaxing children’s bedroom with soft tones",
    date: "October 16, 2023",
    image: "/image/furniture/bedroom3.jpg",
    content:
      "Soft colors and smart storage make this children's bedroom both calming and practical.",
  },
];

export default function BlogDetail({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === parseInt(params.id));

  if (!post) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{post.date}</p>

      <div className="relative w-full h-96 mb-6 rounded overflow-hidden shadow">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <p className="text-lg leading-7 text-gray-800">{post.content}</p>
    </div>
  );
}
