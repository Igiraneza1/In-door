"use client";

import Image from "next/image";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

const ProductCard = ({ product }: { product: CartItem }) => {
  const handleAddToCart = (product: CartItem) => {
    const existingCart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingItem = existingCart.find((item) => item.id === product.id);

    let updatedCart: CartItem[];
    if (existingItem) {
      updatedCart = existingCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...existingCart, { ...product, quantity: 1 }];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="relative p-4 border rounded shadow hover:shadow-lg transition">
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="object-cover mx-auto"
      />
      <h3 className="mt-2 font-semibold text-center">{product.title}</h3>
      <p className="text-center text-gray-700">${product.price.toFixed(2)}</p>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => handleAddToCart(product)}
          className="px-5 py-2 text-sm font-semibold text-white bg-amber-700 rounded-md hover:bg-amber-500 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
