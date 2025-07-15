export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  description?: string;
}



export interface Product {
  id: number
  title: string
  description: string
  price: number
  quantity: number
  size?: string
  color?: string
  imageUrl?: string
  category?: Category;
}

