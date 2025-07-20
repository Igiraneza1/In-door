export interface Category {
  id: number
  name: string
  slug: string
  category: string
  image: string
  description?: string
  createdAt?: string
}

export interface Product {
  id: string
  name: string
  price: number
  image: string
  description?: string
  category?: string // This is category ID as string
  quantity?: number
}
