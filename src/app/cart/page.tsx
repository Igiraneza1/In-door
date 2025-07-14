'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

type Product = {
  id: number;
  title: string;
  price: string;
  image: string;
  quantity?: number;
};

export default function CartPage() {
  const [items, setItems] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/signup');
      return;
    }

    const stored = localStorage.getItem('cartItems');
    if (stored) {
      setItems(JSON.parse(stored));
    }
  }, [router]);

  const removeItem = (id: number) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
    localStorage.setItem('cartItems', JSON.stringify(updated));
  };

  const getTotal = () =>
    items.reduce(
      (sum, item) =>
        sum + parseFloat(item.price.replace('$', '')) * (item.quantity || 1),
      0
    );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white shadow p-4 rounded"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                  <div>
                    <h2 className="font-semibold">{item.title}</h2>
                    <p className="text-gray-500 text-sm">{item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-sm text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Free Shipping</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${getTotal().toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full mt-6 bg-black text-white py-2 rounded hover:bg-gray-800">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
