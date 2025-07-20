"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
// import { ChevronDown } from "lucide-react";
import ProfileDropdown from "@/components/ui/profile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
//   const [catOpen, setCatOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    setShowNavbar(auth === "true" && pathname !== "/");
    setIsAuthenticated(auth === "true");
  }, [pathname]);

  if (!showNavbar) return null;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          Elegant
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {/* ...your other nav links here */}

          {/* Conditionally show profile dropdown only if authenticated */}
          {isAuthenticated && <ProfileDropdown />}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {/* hamburger icon */}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-2 shadow">
          {/* ...mobile nav links */}
          {isAuthenticated && <ProfileDropdown />}
        </div>
      )}
    </nav>
  );
}
