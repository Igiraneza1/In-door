"use client"

import type React from "react"

import { useActionState, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DialogFooter } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Product, Category } from "@/types/product"
import { addProduct, updateProduct, getCategories } from "./actions" // Corrected import path
import { useToast } from "@/hooks/use-toast"

interface ProductFormProps {
  product?: Product // Optional product for editing
  onSuccess?: () => void
}

export function ProductForm({ product, onSuccess }: ProductFormProps) {
  const isEditing = !!product
  const action = isEditing ? updateProduct : addProduct
  const [state, formAction, isPending] = useActionState(action, null)
  const { toast } = useToast()

  const [formData, setFormData] = useState<Product>(
    product || {
      id: 0,
      title: "",
      description: "",
      price: 0,
      quantity: 0,
      imageUrl: "/placeholder.svg?height=64&width=64",
      category: { id: 0, categoryName: "", description: "", createdAt: "" }, // Default empty category
    },
  )
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(product?.category.id.toString() || "")

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories = await getCategories()
      setCategories(fetchedCategories)
      if (!product && fetchedCategories.length > 0) {
        // Set default category for new product if none selected
        setSelectedCategoryId(fetchedCategories[0].id.toString())
      }
    }
    fetchCategories()
  }, [product])

  useEffect(() => {
    if (state?.success) {
      toast({
        title: "Success!",
        description: state.message,
      })
      onSuccess?.()
    } else if (state && !state.success) {
      toast({
        title: "Error",
        description: state.message || "An unexpected error occurred.",
        variant: "destructive",
      })
    }
  }, [state, toast, onSuccess])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "price" ? Number.parseFloat(value) || 0 : name === "quantity" ? Number.parseInt(value) || 0 : value,
    }))
  }

  const handleCategoryChange = (value: string) => {
    setSelectedCategoryId(value)
    const categoryId = Number.parseInt(value)
    const selectedCat = categories.find((cat) => cat.id === categoryId)
    if (selectedCat) {
      setFormData((prev) => ({
        ...prev,
        category: selectedCat,
      }))
    }
  }

  return (
    <form action={formAction} className="grid gap-4 py-4">
      {isEditing && <input type="hidden" name="id" value={formData.id} />}
      <input type="hidden" name="imageUrl" value={formData.imageUrl} />
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="title" className="text-right">
          Title
        </Label>
        <Input id="title" name="title" value={formData.title} onChange={handleChange} className="col-span-3" required />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="description" className="text-right">
          Description
        </Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="col-span-3"
          required
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="price" className="text-right">
          Price
        </Label>
        <Input
          id="price"
          name="price"
          type="number"
          step="0.01"
          value={formData.price}
          onChange={handleChange}
          className="col-span-3"
          required
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="quantity" className="text-right">
          Quantity
        </Label>
        <Input
          id="quantity"
          name="quantity"
          type="number"
          value={formData.quantity}
          onChange={handleChange}
          className="col-span-3"
          required
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="size" className="text-right">
          Size
        </Label>
        <Input id="size" name="size" value={formData.size || ""} onChange={handleChange} className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="color" className="text-right">
          Color
        </Label>
        <Input id="color" name="color" value={formData.color || ""} onChange={handleChange} className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="category" className="text-right">
          Category
        </Label>
        <Select onValueChange={handleCategoryChange} value={selectedCategoryId} name="categoryId" required>
          <SelectTrigger className="col-span-3">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id.toString()}>
                {category.categoryName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <DialogFooter>
        <Button type="submit" disabled={isPending}>
          {isPending ? (isEditing ? "Updating..." : "Adding...") : isEditing ? "Update Product" : "Add Product"}
        </Button>
      </DialogFooter>
    </form>
  )
}
