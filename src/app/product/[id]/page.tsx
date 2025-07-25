"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
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

export default function Produc({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(0); // ✅ Add this line

  useEffect(() => {
    const productId = parseInt(params.id);
    console.log("🟡 Param ID:", params.id);
    const found = news.find((item) => item.id === productId);
    console.log("🟢 Found Product:", found);
    setProduct(found || null);

    const related = news.filter((item) => item.id !== productId).slice(0, 4);
    setRelatedProducts(related);
  }, [params.id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-red-600">
        Loading
      </div>
    );
  }

  return (
    <div className="bg-white text-black">
      <div className="bg-white max-w-7xl mx-auto p-4 pt-22">
        {/* Main Product Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Images */}
          <div className="space-y-4">
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-64 object-contain rounded-lg"
            />
            {/* <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((_, index) => (
              <Image
                key={index}
                src={product.image}
                alt={`Preview ${index}`}
                width={100}
                height={100}
                className="w-full h-24 object-contain rounded-lg"
              />
            ))}
          </div> */}
          </div>

          <div>
            <h1 className="text-3xl font-semibold p-2 text-gray-900">
              {product.title}
            </h1>
            <div className="text-yellow-500 text-sm mb-2 p-2 flex">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < product.rating ? "text-black" : "text-gray-300"
                  }
                />
              ))}
            </div>
            <p className="text-gray-600 text-sm p-2 mb-2 ">
              {product.description}
            </p>
            <div className="flex items-center gap-2 p-2 mb-4">
              <span className="text-gray-900 font-bold  text-xl">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-gray-400   line-through text-sm">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <select className="mb-4 p-2 border rounded w-full">
              <option>17 x 20.5 x 17</option>
              <option>Black</option>
            </select>
            <div className="flex flex-row mr-4">
            <div className="mb-4 flex  w-1/4 bg-gray-300 flex-row items-center rounded-lg px-4 py-2 ">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="text-lg font-bold px-2"
              >
                -
              </button>
              <span className="text-lg font-medium px-4">{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="text-lg font-bold px-2"
              >
                +
              </button>
            </div>

            {/* Add to Wishlist Button */}
            <button
              className="mb-4 w-3/4 border border-black text-gray-800 py-2  rounded-lg hover:bg-gray-100"
              onClick={() => alert("Added to wishlist!")} // Replace with real logic if needed
            >
              ❤️ Add to Wishlist
            </button>
            </div>
            <button
              onClick={() => {
                if (!product) return;

                const existingCart = JSON.parse(
                  localStorage.getItem("cart") || "[]"
                );

                const updatedCart = Array.isArray(existingCart)
                  ? [...existingCart]
                  : [];

                const index = updatedCart.findIndex(
                  (item: any) => item.id === product.id
                );

                if (index !== -1) {
                  updatedCart[index].quantity += 1;
                } else {
                  updatedCart.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    quantity: 1,
                  });
                }

                localStorage.setItem("cart", JSON.stringify(updatedCart));

                window.location.href = "/cart";
              }}
              className="bg-black text-white px-6 py-3 rounded-lg w-full"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">You might also like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {relatedProducts.map((item) => (
              <div key={item.id} className="border rounded-xl p-2">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="w-full object-contain rounded-md"
                />
                <h3 className="mt-2 font-medium text-sm">{item.title}</h3>
                <p className="text-gray-700 text-sm">${item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
