"use server"
import { db } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import type { Product, Category } from "@/types/product"

// Simulated database
const mockProducts: Product[] = []
const mockCategories: Category[] = [
  { id: 1, categoryName: "Electronics", description: "Tech stuff", createdAt: "2024-01-01" },
  { id: 2, categoryName: "Clothing", description: "Wearables", createdAt: "2024-01-01" },
]

export async function getCategories(): Promise<Category[]> {
  return mockCategories
}

export async function addProduct(_: unknown, formData: FormData) {
  const newProduct: Product = {
    id: Math.floor(Math.random() * 10000),
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    price: parseFloat(formData.get("price") as string),
    quantity: parseInt(formData.get("quantity") as string),
    size: formData.get("size") as string,
    color: formData.get("color") as string,
    imageUrl: formData.get("imageUrl") as string,
    category: mockCategories.find(cat => cat.id === parseInt(formData.get("categoryId") as string))!,
  }

  mockProducts.push(newProduct)

  return { success: true, message: "Product added successfully!" }
}

export async function updateProduct(_: unknown, formData: FormData) {
  const id = parseInt(formData.get("id") as string)
  const index = mockProducts.findIndex((p) => p.id === id)

  if (index === -1) {
    return { success: false, message: "Product not found." }
  }

  mockProducts[index] = {
    ...mockProducts[index],
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    price: parseFloat(formData.get("price") as string),
    quantity: parseInt(formData.get("quantity") as string),
    size: formData.get("size") as string,
    color: formData.get("color") as string,
    category: mockCategories.find(cat => cat.id === parseInt(formData.get("categoryId") as string))!,
  }

  return { success: true, message: "Product updated successfully!" }
}

// Get all products
export async function getProducts(): Promise<Product[]> {
  try {
    const products = await db.product.findMany({
      include: { category: true }
    })
    return products
  } catch (error) {
    console.error("Fetch Products Error:", error)
    return []
  }
}

// Delete a product by ID
export async function deleteProduct(id: number) {
  try {
    await db.product.delete({ where: { id } })
    revalidatePath("/dashboard")
    return { success: true, message: "Product deleted successfully." }
  } catch (error) {
    console.error("Delete Product Error:", error)
    return { success: false, message: "Failed to delete product." }
  }
}
