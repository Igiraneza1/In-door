"use client"

import { Product, Category } from "../types/product"

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch("/dashboard/api/products")
    if (!res.ok) throw new Error("Failed to fetch products.")
    return await res.json()
  } catch (error) {
    console.error("getProducts error:", error)
    return []
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const res = await fetch("/dashboard/api/categories")
    if (!res.ok) throw new Error("Failed to fetch categories.")
    return await res.json()
  } catch (error) {
    console.error("getCategories error:", error)
    return []
  }
}

export async function addProduct(formData: FormData): Promise<{
  success: boolean
  message: string
  product?: Product
}> {
  try {
    const res = await fetch("/dashboard/api/products", {
      method: "POST",
      body: formData,
    })

    return await res.json()
  } catch (error) {
    console.error("addProduct error:", error)
    return { success: false, message: "An unexpected error occurred." }
  }
}

export async function updateProduct(formData: FormData): Promise<{
  success: boolean
  message: string
  product?: Product
}> {
  try {
    const res = await fetch("/dashboard/api/products", {
      method: "PUT",
      body: formData,
    })

    return await res.json()
  } catch (error) {
    console.error("updateProduct error:", error)
    return { success: false, message: "An unexpected error occurred." }
  }
}

export async function deleteProduct(id: number): Promise<{
  success: boolean
  message: string
}> {
  try {
    const res = await fetch(`/dashboard/api/products?id=${id}`, {
      method: "DELETE",
    })

    return await res.json()
  } catch (error) {
    console.error("deleteProduct error:", error)
    return { success: false, message: "An unexpected error occurred." }
  }
}
