import { products } from '@/data/products';
import Image from 'next/image';
import { notFound } from 'next/navigation'; 
import Link from 'next/link';

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);
  if (!product) return notFound();

  const similar = products.filter(p => p.id !== params.id);

  return (
    <main className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="w-full md:w-[400px] rounded"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-700 text-lg mb-4">${product.price}</p>
          <Link
            href={`/cart?productId=${product.id}`}
            className="inline-block bg-black text-white px-6 py-2 rounded"
          >
            Add to Cart
          </Link>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">You may also like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {similar.map(item => (
          <div key={item.id} className="border p-4 rounded">
            <Image
              src={item.image}
              alt={item.name}
              width={300}
              height={200}
              className="w-full h-40 object-cover"
            />
            <h3 className="text-lg font-medium mt-2">{item.name}</h3>
            <p className="text-gray-600">${item.price}</p>
            <Link
              href={`/shop/${item.id}`}
              className="mt-2 inline-block bg-gray-800 text-white px-4 py-2 rounded"
            >
              View
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
