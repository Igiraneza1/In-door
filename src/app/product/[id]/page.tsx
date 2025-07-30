"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import news from "../../../jsondata/news.json";
import { Link } from "lucide-react";



interface Product {
  id: number;
  title: string;
  description?: string;
  price: number;
  originalPrice?: number;
  rating: number;
  discount?: string;
  isNew?: boolean;
  image: string;
}

export default function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1); // Changed initial value to 1

  useEffect(() => {
    // Handle case where id might be an array or undefined
    const idParam = (params as { id?: string | string[] }).id;
    if (!idParam) {
      setProduct(null);
      setRelatedProducts([]);
      return;
    }
    const productId = parseInt(Array.isArray(idParam) ? idParam[0] : idParam);
    
    const found = news.find((item) => item.id === productId);
    setProduct(found || null);

    const related = news
      .filter((item) => item.id !== productId)
      .slice(0, 4);
    setRelatedProducts(related);
  }, [params]);

  const addToCart = () => {
    if (!product) return;

    const existingCart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    const updatedCart = Array.isArray(existingCart)
      ? [...existingCart]
      : [];

    const existingItemIndex = updatedCart.findIndex(
      (item: any) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += quantity;
    } else {
      updatedCart.push({
        ...product,
        quantity: quantity,
      });
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.location.href = "/cart";
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-lg">Loading product...</div>
      </div>
    );
  }

  return (
    <div className="bg-white text-black">
      <div className="max-w-7xl mx-auto p-4 pt-22">
        {/* Main Product Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div>
            <Image
              src={product.image}
              alt={product.title}
              width={600}
              height={600}
              className="w-full h-auto object-contain rounded-lg"
              priority
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-semibold p-2 text-gray-900">
              {product.title}
            </h1>
            
            <div className="flex items-center gap-1 p-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={i < product.rating ? "text-black" : "text-gray-300"}
                />
              ))}
              <span className="text-sm text-gray-500 ml-1">
                ({product.rating}/5)
              </span>
            </div>

            <p className="text-gray-600 text-sm p-2 mb-4">
              {product.description}
            </p>

            <div className="flex items-center gap-2 p-2 mb-4">
              <span className="text-gray-900 font-bold text-xl">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-gray-400 line-through text-sm">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Size</label>
              <select className="p-2 border rounded w-full">
                <option>17 x 20.5 x 17</option>
                <option>Black</option>
              </select>
            </div>

            <div className="flex flex-row gap-4 mb-4">
              <div className="flex items-center bg-gray-100 rounded-lg w-1/4">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="px-3 py-2 text-lg"
                >
                  -
                </button>
                <span className="px-2 text-center flex-1">{quantity}</span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-3 py-2 text-lg"
                >
                  +
                </button>
              </div>

              <Link
              href="/wishlist"
                className="flex-1 border border-black text-gray-800 py-2 rounded-lg hover:bg-gray-50"
                onClick={() => alert("Added to wishlist!")}
              >
                ❤️ Add to Wishlist
              </Link>
            </div>

            <button
              onClick={addToCart}
              className="bg-black text-white px-6 py-3 rounded-lg w-full hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-xl font-semibold mb-6">You might also like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {relatedProducts.map((item) => (
              <div key={item.id} className="border rounded-xl p-4 hover:shadow-md transition">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="w-full h-40 object-contain"
                />
                <h3 className="mt-3 font-medium text-sm line-clamp-1">{item.title}</h3>
                <p className="text-gray-700 font-semibold mt-1">${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}