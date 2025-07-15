// src/types/product.d.ts
export type Product = {
  id: string;
  title: string;
  price: string; // Consider using number if you'll do calculations
  category: string;
  imageUrl: string;
  description: string;
};

export type ProductCategory = {
  id: string;
  name: string;
  slug: string;
  products: Product[];
};