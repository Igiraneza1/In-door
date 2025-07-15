"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    function checkAuth() {
      const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
      setShowFooter(isAuthenticated);
    }

    checkAuth(); // initial check on mount

    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  if (!showFooter) return null; // Hide footer if not authenticated

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-10">

        {/* Brand + Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">
              Elegant.
              <span className="text-gray-400 text-sm font-normal block md:inline">
                {" "} | In-Door & Online Store
              </span>
            </h2>
          </div>

          <nav>
            <ul className="flex flex-wrap justify-center md:justify-end gap-5 text-sm font-medium text-gray-400">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/shop" className="hover:text-white transition">Shop</Link></li>
              <li><Link href="/product" className="hover:text-white transition">Product</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Copyright + Social */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-gray-400">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <p>&copy; {new Date().getFullYear()} Elegant. All rights reserved.</p>
            <Link href="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms of Use
            </Link>
          </div>

          <ul className="flex gap-4 text-xl">
            <li>
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-transform hover:scale-110"
              >
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-transform hover:scale-110"
              >
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-transform hover:scale-110"
              >
                <FaTwitter />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
