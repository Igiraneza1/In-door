import { notFound } from "next/navigation";
import Image from "next/image";
import articles, { Article } from "@/data/articles";

interface ArticleDetailProps {
  params: {
    slug: string;
  };
}

export default function ArticleDetailPage({ params }: ArticleDetailProps) {
  const article: Article | undefined = articles.find((a) => a.slug === params.slug);

  if (!article) return notFound();

  return (
    <main className="bg-white">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-black mb-4">{article.title}</h1>
        <div className="relative w-full h-96 mb-6">
          <Image
            src={article.Image}
            alt={article.title}
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <p className="text-lg text-gray-700 mb-4">{article.description}</p>
        <p className="text-xl font-semibold text-black">Price: {article.price}</p>
      </div>
    </main>
  );
}
