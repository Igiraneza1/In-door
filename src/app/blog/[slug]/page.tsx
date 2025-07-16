
import articles from "../../../jsondata/articles.json";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

interface BlogPost {
  id: number;
  title: string;
  image: string;
  slug: string;
  description: string;
  price: string;
  content: string;
  featured: boolean;
  date: string;
}


export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = articles.find((article) => article.slug === params.slug) as BlogPost;

  if (!post) {
    return <div className="max-w-4xl mx-auto px-4 py-12">Post not found</div>;
  }

  // Format the date
  const formattedDate = format(new Date(post.date), "MMMM d, yyyy");
  const contentSections = post.content.split('\n\n').map((section, index) => (
    <div key={index} className={`mb-8 ${index > 0 ? 'border-t border-gray-200 pt-8' : ''}`}>
      <p className="text-gray-700">{section}</p>
    </div>
  ));

  const relatedArticles = articles
    .filter(article => article.slug !== post.slug)
    .sort(() => 0.5 - Math.random()) 
    .slice(0, 3);

  return (
    <div className="bg-white p-5">
    <div className="max-w-6xl mx-auto px-4 py-12 ">
      <article className="mb-50">
        <div className="mb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {post.title}
              </h1>
              <p className="text-xl text-gray-600">{post.description}</p>
            </div>
            
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span>Published: {formattedDate}</span>
            {post.featured && (
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                Featured
              </span>
            )}
          </div>
        </div>

        <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded text-sm">
            Photo by: {post.featured ? 'James LivingSpaces' : 'Alex HomeDesign'}
          </div>
        </div>

        <div className="h-18">
          {contentSections}
          {(post.slug.includes('kitchen') || post.slug.includes('organization')) && (
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 mt-6">
              <p className="text-sm italic text-gray-600">
                This method has helped hundreds of clients maximize their kitchen space efficiently.
              </p>
              <p className="text-sm font-medium text-gray-500 mt-2">
                — Maria K., Professional Organizer
              </p>
            </div>
          )}
          {(post.slug.includes('living-room')) && (
  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500 mt-6">
    <p className="text-sm italic text-gray-600">
      Transforming cluttered living rooms into calming spaces is what we do best.
    </p>
    <p className="text-sm font-medium text-gray-500 mt-2">
      — Daniel R., Interior Stylist
    </p>
  </div>
)}

{(post.slug.includes('bedroom')) && (
  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-500 mt-6">
    <p className="text-sm italic text-gray-600">
      Clients often tell us their redesigned bedrooms feel like a peaceful retreat.
    </p>
    <p className="text-sm font-medium text-gray-500 mt-2">
      — Alina S., Home Consultant
    </p>
  </div>
)}

        </div>
      </article>

      <div className="border-t border-gray-200 pt-4 mt-4">
        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* <div className="flex-shrink-0">
            <Image
              src={post.featured ? "/expert-author.jpg" : "/author-avatar.jpg"}
              alt={post.featured ? "Expert Author" : "Contributing Author"}
              width={120}
              height={120}
              className="rounded-full"
            />
          </div> */}
          <div>
            <h3 className="text-xl font-medium text-gray-900">
              {post.featured ? "About Our Expert" : "About The Author"}
            </h3>
            <p className="text-gray-600 mt-2">
              {post.featured ?"Our expert writers draw from hands-on experience in home improvement, décor, and spatial planning to bring you insightful, actionable ideas. Each contributor offers a unique perspective shaped by years of working in the design industry, allowing us to cover a broad spectrum of styles and solutions. Whether you're refreshing a single room or redesigning your entire home, their guidance is grounded, practical, and tailored to help you create spaces that reflect your lifestyle and personality."
                : "Our contributing authors bring a wealth of practical, real-world experience to help you transform your living spaces into functional, stylish, and comfortable environments. From seasoned interior designers and home renovation experts to professional organizers and DIY enthusiasts, each writer shares actionable tips, creative ideas, and expert insights drawn from years of hands-on work. Whether you're looking to refresh a single room or undertake a full home makeover, our contributors provide inspiration and guidance tailored to your needs and lifestyle, making beautiful living more accessible to everyone."}
            </p>
            
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          {post.slug.includes('decor') ? "More Decor Ideas" : 
           "You Might Also Like"}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map(article => (
            <Link 
              key={article.id} 
              href={`/blog/${article.slug}`}
              className="group block border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-square">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                {article.featured && (
                  <div className="absolute top-2 right-2 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-4">
                <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h4>
                <p className="text-sm text-gray-500 mt-1">{article.description}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-sm text-gray-400">
                    {format(new Date(article.date), "MMM d, yyyy")}
                  </span>
                  <span className="text-blue-600 text-sm font-medium">
                    {article.price}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}