import { products } from '@/data/products';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function NewArrival() {
  const router = useRouter();
  return (
    <section className="px-4 py-10">
      <h2 className="text-2xl font-bold mb-4">New Arrivals</h2>
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
            <button
              onClick={() => router.push(`/cart?productId=${product.id}`)}
              className="mt-2 bg-black text-white px-4 py-2 rounded"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
