import Hero from "./hero/page";
import Newsletter from "./newsletter/page";
import Blog from "./main/page";

export default function BlogPage() {
  return (
    <div className="bg-white">
      <Hero />
      <Blog />
      <Newsletter />
    </div>
  );
}