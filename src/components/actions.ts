"use server";

import type { Product, Category } from "@/types/product";
import { revalidatePath } from "next/cache";
import allCategories from "../data/category"; // Adjust path as needed

// In-memory product storage
const mockProducts: Product[] = [];

// Use real categories from your data
const mockCategories: Category[] = allCategories;

// Get all categories
export async function getCategories(): Promise<Category[]> {
  return mockCategories;
}

// Get all products
export async function getProducts(): Promise<Product[]> {
  return mockProducts;
}

// Add a new product
export async function addProduct(formData: FormData) {
  const categoryId = parseInt(formData.get("categoryId") as string);
  const category = mockCategories.find(cat => cat.id === categoryId);
  if (!category) {
    return { success: false, message: "Invalid category ID." };
  }

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const quantity = parseInt(formData.get("quantity") as string);
  const size = formData.get("size") as string || "";
  const color = formData.get("color") as string || "";
  const imageUrl = formData.get("imageUrl") as string || "";

  if (!title || !description || isNaN(price) || isNaN(quantity)) {
    return { success: false, message: "Missing or invalid fields." };
  }

  const id = Date.now(); // unique enough for mock
  const newProduct: Product = {
    id,
    title,
    description,
    price,
    quantity,
    size,
    color,
    imageUrl,
    category,
  };

  mockProducts.push(newProduct);

  return { success: true, message: "Product added successfully!", product: newProduct };
}

// Update existing product
export async function updateProduct(formData: FormData) {
  const id = parseInt(formData.get("id") as string);
  const index = mockProducts.findIndex(p => p.id === id);
  if (index === -1) {
    return { success: false, message: "Product not found." };
  }

  const categoryId = parseInt(formData.get("categoryId") as string);
  const category = mockCategories.find(cat => cat.id === categoryId);
  if (!category) {
    return { success: false, message: "Invalid category ID." };
  }

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const quantity = parseInt(formData.get("quantity") as string);
  const size = formData.get("size") as string || "";
  const color = formData.get("color") as string || "";
  const imageUrl = formData.get("imageUrl") as string || "";

  if (!title || !description || isNaN(price) || isNaN(quantity)) {
    return { success: false, message: "Missing or invalid fields." };
  }

  mockProducts[index] = {
    ...mockProducts[index],
    title,
    description,
    price,
    quantity,
    size,
    color,
    imageUrl,
    category,
  };

  return { success: true, message: "Product updated successfully!", product: mockProducts[index] };
}

// Delete product
export async function deleteProduct(id: number) {
  const index = mockProducts.findIndex(p => p.id === id);
  if (index === -1) {
    return { success: false, message: "Product not found." };
  }

  mockProducts.splice(index, 1);
  revalidatePath("/dashboard");

  return { success: true, message: "Product deleted successfully." };
}
