
export type Product = {
  id: string;
  title: string;
  price: string; 
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