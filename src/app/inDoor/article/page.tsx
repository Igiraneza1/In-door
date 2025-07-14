import Image from "next/image";
import Link from "next/link";
import articles from "@/data/articles";

export default function Articles() {
  const featured = articles.slice(0, 3);

  return (
    <main className="bg-white">
      <div className="container max-w-5xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-black">Articles</h2>
          <Link href="/blog " className="text-black text-lg underline">
            More Articles →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((article) => (
            <div key={article.id} className="text-center">
              <div className="relative w-full h-64">
                <Image
                  src={article.Image}
                  alt={article.title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-black">{article.title}</h3>
              <Link
                href={`/articles/${article.slug}`}
                className="mt-2 inline-block text-lg underline text-black"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
