import articles from "@/jsondata/articles.json";
import Image from "next/image";
import { format } from "date-fns";
import { notFound } from "next/navigation";

// interface BlogPost {
//   id: number;
//   title: string;
//   image: string;
//   slug: string;
//   description: string;
//   price: string;
//   content: string;
//   featured: boolean;
//   date: string;
// }

// ✅ Generate Static Paths
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// ✅ BlogPostPage component
export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = articles.find((a) => a.slug === params.slug);

  if (!post) return notFound();

  const formattedDate = format(new Date(post.date), "MMMM d, yyyy");

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-600 mb-4">{post.description}</p>
      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={400}
        className="rounded mb-6"
      />
      <p className="text-sm text-gray-500">Published: {formattedDate}</p>

      <div className="mt-8 space-y-4">
        {post.content.split("\n\n").map((para, i) => (
          <p key={i} className="text-gray-700">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}
