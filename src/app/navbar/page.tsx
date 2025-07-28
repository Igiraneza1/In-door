"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/inDoor" },
  { name: "Shop", href: "/shop" },
  { name: "Contact Us", href: "/contact" },
];

const Product = [
  { name: "All Rooms", href: "/categories" },
  { name: "Living Room", href: "/categories/living-room" },
  { name: "Bedroom", href: "/categories/bedroom" },
  { name: "Kitchen", href: "/categories/kitchen" },
  { name: "Bathroom", href: "/categories/bathroom" },
  { name: "Dining", href: "/categories/dining" },
];

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const pathname = usePathname();
  const [isHydrated, setIsHydrated] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const checkAuth = () => {
      try {
        const auth = localStorage.getItem("isAuthenticated");
        setIsAuthenticated(auth === "true");
      } catch (error) {
        console.error("Error accessing localStorage:", error);
      }
    };
    checkAuth();
    setIsHydrated(true);
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  if (!isHydrated) return <div className="h-16" />;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-bold text-black">
            3legant.
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 relative">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-gray-700 hover:text-black transition-colors duration-200 font-medium ${
                pathname === link.href ? "text-black" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Product Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-gray-700 hover:text-black font-medium transition">
              Product <ChevronDown size={16} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-50">
                {Product.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
