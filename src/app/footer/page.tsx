
import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-white">
      <div className="w-full py-10 px-6 bg-black">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-xl font-bold text-white">
                Elegant.
                <span className="text-gray-400 text-sm font-light">
                  {" "} | In-Door & Online Store
                </span>
              </p>
            </div>

            <nav>
              <ul className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-medium text-gray-400">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/shop">Shop</Link></li>
                <li><Link href="/product">Product</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </nav>
          </div>

          <div className="border-t border-gray-700"></div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
              <p>&copy; 2023 Elegant. All rights reserved.</p>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms of Use</Link>
            </div>


            <ul className="flex gap-4 text-xl">
              <li>
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="hover:text-blue-500 transition"
                >
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="hover:text-pink-500 transition"
                >
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.twitter.com/"
                  target="_blank"
                  className="hover:text-blue-400 transition"
                >
                  <FaTwitter />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
