"use client";
import React, { useState } from "react";
import { Grid, List, LayoutGrid, Rows } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  category: string;
  slug: string;
  featured?: boolean;
}

export default function Blog() {
  const [viewMode, setViewMode] = useState("grid");
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All Blog");
  const [sortOption, setSortOption] = useState("Latest");

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "7 ways to decor your home like a professional",
      date: "2023-10-16",
      image: "/images/blog/1.jpg",
      category: "Home Decor",
      slug: "decorate-home-professionally",
      featured: true,
    },
    {
      id: 2,
      title: "Inside a beautiful kitchen organization",
      date: "2023-10-16",
      image: "/images/blog/2.jpg",
      category: "Kitchen",
      slug: "kitchen-organization",
    },
    {
      id: 3,
      title: "Decor your bedroom for your children",
      date: "2023-10-16",
      image: "/images/blog/3.jpg",
      category: "Bedroom",
      slug: "bedroom-for-children",
    },
    {
      id: 4,
      title: "Modern texas home is kid-friendly",
      date: "2023-10-16",
      image: "/images/blog/4.jpg",
      category: "Home Decor",
      slug: "modern-texas-home",
      featured: true,
    },
    {
      id: 5,
      title: "Creating a cozy reading nook in your living room",
      date: "2023-10-15",
      image: "/images/blog/10.jpg",
      category: "Living Room",
      slug: "cozy-reading-nook",
    },
    {
      id: 6,
      title: "Minimalist bathroom design ideas that work",
      date: "2023-10-15",
      image: "/images/blog/11.jpg",
      category: "Bathroom",
      slug: "minimalist-bathroom-design",
    },
    {
      id: 7,
      title: "Small space solutions for urban apartments",
      date: "2023-10-14",
      image: "/images/blog/12.jpg",
      category: "Home Decor",
      slug: "small-space-solutions",
    },
    {
      id: 8,
      title: "Seasonal decor transitions made easy",
      date: "2023-10-14",
      image: "/images/blog/13.jpg",
      category: "Home Decor",
      slug: "seasonal-decor-transitions",
    },
    {
      id: 9,
      title: "Smart storage solutions for every room",
      date: "2023-10-13",
      image: "/images/blog/14.jpg",
      category: "Organization",
      slug: "smart-storage-solutions",
    },
  ];

  
  const filteredPosts = blogPosts.filter((post) =>
    activeFilter === "All Blog"
      ? true
      : activeFilter === "Featured"
      ? post.featured
      : false
  );

  // Sorting
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    if (sortOption === "Latest") return dateB - dateA;
    if (sortOption === "Oldest") return dateA - dateB;
    return 0;
  });

  const displayedPosts = showAll ? sortedPosts : sortedPosts.slice(0, 9);

  const ViewModeButton = ({ mode, icon: Icon, isActive }: any) => (
    <button
      onClick={() => setViewMode(mode)}
      className={`p-2 rounded ${isActive ? "bg-gray-200" : "hover:bg-gray-100"}`}
    >
      <Icon className="w-4 h-4" />
    </button>
  );

  const getGridClass = () => {
    switch (viewMode) {
      case "single":
        return "grid-cols-1";
      case "two":
        return "grid-cols-1 md:grid-cols-2";
      case "list":
        return "grid-cols-1";
      default:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    }
  };

  const BlogCard = ({ post }: { post: BlogPost }) => (
    <Link
      href={`/blog/${post.slug}`}
      className={`bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
        viewMode === "list" ? "flex gap-4" : ""
      }`}
    >
      <div className={`${viewMode === "list" ? "w-48 flex-shrink-0" : ""}`}>
        <img
          src={post.image}
          alt={post.title || "Blog image"}
          className={`w-full object-cover ${
            viewMode === "list" ? "h-32" : "h-48"
          }`}
        />
      </div>
      <div className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
        <h3
          className={`font-medium text-gray-900 mb-2 leading-tight ${
            viewMode === "list" ? "text-lg" : "text-base"
          }`}
        >
          {post.title}
        </h3>
        <p className="text-sm text-gray-500">{post.date}</p>
        {viewMode === "list" && (
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
          </p>
        )}
      </div>
    </Link>
  );

  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
      {/* Header with filters and view options */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex items-center gap-6">
          {["All Blog", "Featured"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-sm font-medium ${
                activeFilter === filter
                  ? "text-black border-b-2 border-black pb-1"
                  : "text-gray-500 hover:text-gray-700"
              } transition-all duration-200`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="text-sm border border-gray-300 rounded px-2 py-1"
            >
              <option value="Latest">Latest</option>
              <option value="Oldest">Oldest</option>
            </select>
          </div>

          <div className="flex items-center gap-1 border border-gray-300 rounded p-1">
            <ViewModeButton mode="grid" icon={LayoutGrid} isActive={viewMode === "grid"} />
            <ViewModeButton mode="two" icon={Grid} isActive={viewMode === "two"} />
            <ViewModeButton mode="single" icon={Rows} isActive={viewMode === "single"} />
            <ViewModeButton mode="list" icon={List} isActive={viewMode === "list"} />
          </div>
        </div>
      </div>

      {/* Blog posts grid */}
      <div className={`grid ${getGridClass()} gap-6 mb-8`}>
        {displayedPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Show more / less toggle */}
      <div className="text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          {showAll ? "Show less" : "Show more"}
        </button>
      </div>
    </section>
  );
}
