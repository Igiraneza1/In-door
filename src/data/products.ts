export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  category?: string;
  quantity?: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Lennon Sofa',
    price: 199.0,
    image: '/products/sofa.jpg',
    description: 'A comfortable and stylish sofa for your living room.',
    category: 'Furniture',
    quantity: 10,
  },
  {
    id: '2',
    name: 'Table Lamp',
    price: 24.0,
    image: '/products/lamp1.jpg',
    description: 'Elegant table lamp to brighten your room.',
    category: 'Lighting',
    quantity: 15,
  },
  {
    id: '3',
    name: 'Beige Table Lamp',
    price: 24.0,
    image: '/products/lamp2.jpg',
    description: 'Classic beige lamp with warm lighting.',
    category: 'Lighting',
    quantity: 8,
  },
  {
    id: '4',
    name: 'Bamboo Basket',
    price: 24.0,
    image: '/products/basket.jpg',
    description: 'Eco-friendly bamboo basket for storage.',
    category: 'Decor',
    quantity: 20,
  },
  {
    id: '5',
    name: 'Toaster',
    price: 29.5,
    image: '/products/toaster.jpg',
    description: 'Compact toaster with multiple settings.',
    category: 'Kitchen',
    quantity: 12,
  },
  {
    id: '6',
    name: 'Chest Drawer',
    price: 120.0,
    image: '/products/chest.jpg',
    description: 'Spacious chest drawer for organizing your clothes.',
    category: 'Furniture',
    quantity: 5,
  },
];
