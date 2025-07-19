"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import ProfileDropdown from "@/components/ui/profile";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/inDoor" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/contact" },
  // { name: "Dashboard", href: "/user-dashboard" },
];

const categories = [
  { name: "All Rooms", href: "/categories" },
  { name: "Living Room", href: "/categories/living-room" },
  { name: "Bedroom", href: "/categories/bedroom" },
  { name: "Kitchen", href: "/categories/kitchen" },
  { name: "Bathroom", href: "/categories/bathroom" },
  { name: "Dining", href: "/categories/dining" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check if user is logged in
    const auth = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(auth === "true");
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          Elegant
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition hover:text-blue-600 ${
                pathname === link.href ? "text-blue-600 font-semibold" : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Categories Dropdown */}
          <div className="relative group">
            <button className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition">
              Categories <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 top-full mt-2 w-44 bg-white shadow-lg rounded-md hidden group-hover:block z-10">
              {categories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Show profile dropdown only if authenticated */}
          {isAuthenticated && <ProfileDropdown />}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <svg
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 shadow">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium py-1 transition ${
                  pathname === link.href ? "text-blue-600 font-semibold" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <button
              onClick={() => setCatOpen(!catOpen)}
              className="flex justify-between items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition"
            >
              <span>Categories</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${catOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Categories submenu */}
            {catOpen && (
              <div className="pl-4 mt-2 space-y-1">
                {categories.map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-sm text-gray-600 hover:text-blue-600"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}

            {isAuthenticated && <ProfileDropdown />}
          </div>
        </div>
      )}
    </nav>
  );
}
