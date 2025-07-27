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
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    // Check authentication status
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

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []); 

  if (!isHydrated) return <div className="h-16" />;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
      </div>
    </nav>
  );
}