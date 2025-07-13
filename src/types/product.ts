export interface Category {
  id: number
  categoryName: string
  description: string
  createdAt: string
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
  category?: {
    categoryName: string
  }
}

