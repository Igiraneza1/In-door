// app/shop/page.tsx
'use client';
import { products } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';

export default function ShopPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Shop All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="w-full h-40 object-cover"
            />
            <h3 className="text-lg font-medium mt-2">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <Link
              href={`/shop/${product.id}`}
              className="mt-2 inline-block bg-black text-white px-4 py-2 rounded"
            >
              View Product
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
