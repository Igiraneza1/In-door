"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";



interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/inDoor" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/contact" },
  {name: "Dashboard", href: "/user-dashboard"},
];

const categories = [
  { name: "All Rooms", href: "/categories/All Rooms" },
  { name: "Living Room", href: "/categorie/Living Room" },
  { name: "Bedroom", href: "/categories/Bedroom" },
  { name: "Kitchen", href: "/categories/Kitchen" },
  { name: "Bathroom", href: "/categories/Bathroom" },
  { name: "Dinning", href: "/categories/Dinning" },

];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 mb-10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl pl-5 font-bold text-gray-800">
          Elegant
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-gray-700 hover:text-blue-600 transition ${
                pathname === link.href ? "font-semibold text-blue-600" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition">
              Categories
              <ChevronDown size={16} />
            </button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md w-40">
              {categories.map((cat, index) => (
                <Link
                  key={`${cat.name}-${cat.href}-${index}`}
                  href={cat.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-2 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-gray-700 hover:text-blue-600 transition ${
                pathname === link.href ? "font-semibold text-blue-600" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Categories Toggle */}
          <button
            onClick={() => setCatOpen(!catOpen)}
            className="flex justify-between w-full text-left text-gray-700 hover:text-blue-600"
          >
            <span>Categories</span>
            <ChevronDown
              size={18}
              className={`transform transition-transform ${
                catOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {catOpen && (
            <div className="ml-4 space-y-1">
              {categories.map((cat, index) => (
                <Link
                  key={`${cat.name}-${cat.href}-${index}`}
                  href={cat.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-gray-600 hover:text-blue-600"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
