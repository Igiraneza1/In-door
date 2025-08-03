"use client";
import React, { useState } from "react";
import { Grid, List, LayoutGrid, Rows } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import articles from "../../../jsondata/articles.json";

interface article {
  id: number;
  title: string;
  date: string;
  image: string;
  category: string;
  slug: string;
  featured?: boolean;
  excerpt?: string;
}

interface ViewModeButtonProps {
  mode: string;
  icon: React.ElementType;
  isActive: boolean;
}

export default function Blog() {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All Blog");
  const [sortOption, setSortOption] = useState("Latest");
  const [viewMode, setViewMode] = useState("grid");

  // Filter posts based on active filter
  const filteredPosts = articles.filter((post) =>
    activeFilter === "All Blog"
      ? true
      : activeFilter === "Featured"
      ? post.featured
      : false
  );

  // Sort posts based on sort option
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    if (sortOption === "Latest") return dateB - dateA;
    if (sortOption === "Oldest") return dateA - dateB;
    return 0;
  });

  // Show all or slice to first 6
  const displayedPosts = showAll ? sortedPosts : sortedPosts.slice(0, 6);

  // View mode toggle button
  const ViewModeButton = ({ mode, icon: Icon, isActive }: ViewModeButtonProps) => (
    <button
      className={`p-1 ${isActive ? "bg-gray-200" : ""}`}
      onClick={() => setViewMode(mode)}
      aria-label={`Switch to ${mode} view`}
      type="button"
    >
      <Icon className="w-4 h-4" />
    </button>
  );

  // CSS grid classes based on view mode
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

  // Single blog card component
  const BlogCard = ({ post }: { post: article }) => (
    <Link href={`/blog/${post.slug}`} className="group" passHref>
      <div
        className={`bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
          viewMode === "list" ? "flex gap-4" : ""
        }`}
      >
        <div className={`${viewMode === "list" ? "w-48 flex-shrink-0 relative" : "relative"}`} style={{ minHeight: viewMode === "list" ? 128 : 192 }}>
          <Image
            src={post.image}
            alt={post.title || "Blog image"}
            fill
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300`"
      
          />
        </div>
        <div className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-gray-500 uppercase tracking-wide">
              {post.category}
            </span>
            {post.featured && (
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                Featured
              </span>
            )}
          </div>
          <h3
            className={`font-medium text-gray-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors ${
              viewMode === "list" ? "text-lg" : "text-base"
            }`}
          >
            {post.title}
          </h3>
          <p className="text-sm text-gray-500 mb-2">{post.date}</p>
          {viewMode === "list" && (
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
              {post.excerpt || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."}
            </p>
          )}
          <div className="mt-4 text-sm text-blue-600 group-hover:underline">
            Read More →
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
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
              type="button"
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
            <ViewModeButton
              mode="grid"
              icon={LayoutGrid}
              isActive={viewMode === "grid"}
            />
            <ViewModeButton mode="two" icon={Grid} isActive={viewMode === "two"} />
            <ViewModeButton
              mode="single"
              icon={Rows}
              isActive={viewMode === "single"}
            />
            <ViewModeButton mode="list" icon={List} isActive={viewMode === "list"} />
          </div>
        </div>
      </div>

      <div
        className={`${
          viewMode === "list"
            ? "flex flex-col gap-6 mb-8"
            : `grid ${getGridClass()} gap-6 mb-8`
        }`}
      >
        {displayedPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
          type="button"
        >
          {showAll ? "Show less" : "Show more"}
        </button>
      </div>
    </section>
  );
}
