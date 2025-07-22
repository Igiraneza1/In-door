"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaHeart, FaStar, FaMinus, FaPlus } from "react-icons/fa";
import toast from "react-hot-toast";
import news from "../../../jsondata/news.json";

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
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [wishlist, setWishlist] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (!id) return;

    const actualId = Array.isArray(id) ? id[0] : id;
    const productId = parseInt(actualId as string);
    const found = news.find((p) => p.id === productId);

    if (found) {
      setProduct(found);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existing = cart.find((item: any) => item.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ ...product, quantity, color: selectedColor });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Product added to cart");
    router.push("/cart");
  };

  const colors = ["Black", "White", "Brown", "Red"];
  const productImages = product ? [product.image, product.image, product.image, product.image] : [];

  if (!product) return null;
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image Gallery */}
        <div>
          <div className="relative w-full aspect-square bg-white rounded-lg overflow-hidden mb-4">
            <Image
              src={productImages[activeImageIndex]}
              alt={product.title}
              fill
              className="object-contain p-6"
            />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {productImages.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImageIndex(i)}
                className={`relative aspect-square bg-white border-2 rounded-lg overflow-hidden cursor-pointer ${
                  activeImageIndex === i ? "border-black" : "border-gray-200"
                }`}
              >
                <Image src={img} alt={`Thumb ${i}`} fill className="object-contain p-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-sm ${
                    i < product.rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-sm text-gray-600">(11 reviews)</span>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            {product.description ||
              "Buy one or buy a few and make every space where you sit more convenient."}
          </p>

          <div className="flex items-center space-x-3">
            <span className="text-3xl font-bold">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xl line-through text-gray-400">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-2">
              Choose Color: <span className="text-gray-500">{selectedColor}</span>
            </p>
            <div className="flex gap-3">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  } ${
                    color === "Black"
                      ? "bg-black"
                      : color === "White"
                      ? "bg-white"
                      : color === "Brown"
                      ? "bg-amber-800"
                      : "bg-red-500"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex border border-gray-300 rounded">
              <button
                onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                className="px-3 py-1 hover:bg-gray-100"
              >
                <FaMinus />
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1 hover:bg-gray-100"
              >
                <FaPlus />
              </button>
            </div>
            <button
              onClick={() => setWishlist((w) => !w)}
              className={`p-2 border rounded-full ${
                wishlist ? "text-red-500" : "text-gray-400"
              }`}
            >
              <FaHeart />
            </button>
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <button
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
