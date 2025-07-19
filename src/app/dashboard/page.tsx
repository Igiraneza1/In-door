"use client";

import {
  Bell,
  Home,
  LineChart,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
  PlusCircle,
  Edit,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProductForm } from "@/components/product-form";
import { getProducts, deleteProduct } from "@/components/actions";
import { useEffect, useState, useCallback } from "react";
import type { Product } from "@/types/product";
import { useToast } from "@/hooks/use-toast";

export default function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const router = useRouter();

  
  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      router.push("/");
    }
  }, [router]);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    } catch {
      toast({
        title: "Error",
        description: "Failed to fetch products.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleDelete = async (id: string | number) => {
    try {
      const result = await deleteProduct(Number(id));
      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
        });
        fetchProducts();
      } else {
        toast({
          title: "Error",
          description: result.message || "Failed to delete product.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Error",
        description: "An unexpected error occurred during deletion.",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      {/* Sidebar */}
      <aside className="hidden border-r bg-muted/40 lg:block">
        <div className="flex h-full flex-col gap-2">
          <header className="flex items-center justify-between h-[60px] border-b px-6">
            <Link href="#" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span>Admin</span>
            </Link>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <Bell className="h-4 w-4" />
            </Button>
          </header>

          <nav className="flex-1 py-2 px-4 text-sm font-medium space-y-1">
            <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-primary">
              <Home className="h-4 w-4" /> Dashboard
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-muted text-primary">
              <Package className="h-4 w-4" /> Products
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-primary">
              <ShoppingCart className="h-4 w-4" /> Orders
              <Badge className="ml-auto h-6 w-6 rounded-full">6</Badge>
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-primary">
              <Users className="h-4 w-4" /> Customers
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-primary">
              <LineChart className="h-4 w-4" /> Analytics
            </Link>
          </nav>

          <footer className="p-4 mt-auto">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>Unlock all features and support</CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="sm" className="w-full">Upgrade</Button>
              </CardContent>
            </Card>
          </footer>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex flex-col">
        <header className="flex items-center h-[60px] border-b bg-muted/40 px-6 gap-4">
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search products..." className="pl-8 md:w-2/3 lg:w-1/3" />
              </div>
            </form>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full border w-8 h-8">
                <Image src="/placeholder-user.jpg" width={32} height={32} className="rounded-full" alt="Avatar" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => {
                localStorage.clear();
                router.push("/signin");
              }}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Product Table */}
        <section className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Products</h1>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm"><PlusCircle className="h-4 w-4 mr-2" /> Add Product</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Add New Product</DialogTitle>
                  <DialogDescription>Fill out the details below.</DialogDescription>
                </DialogHeader>
                <ProductForm onSuccess={fetchProducts} />
              </DialogContent>
            </Dialog>
          </div>

          <div className="border rounded-md shadow-sm overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <Image
                        src={product.image || "/placeholder.svg"}
                        width={64}
                        height={64}
                        alt={product.name}
                        className="rounded-md object-cover"
                      />
                    </TableCell>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell className="text-muted-foreground">{product.description?.slice(0, 50)}</TableCell>
                    <TableCell>${product.price.toFixed(2)}</TableCell>
                    <TableCell>{product.quantity}</TableCell>
                    <TableCell>{product.category ?? "N/A"}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <Dialog>
                            <DialogTrigger asChild>
                              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                <Edit className="h-4 w-4 mr-2" /> Edit
                              </DropdownMenuItem>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[600px]">
                              <DialogHeader>
                                <DialogTitle>Edit Product</DialogTitle>
                                <DialogDescription>Update the product info.</DialogDescription>
                              </DialogHeader>
                              <ProductForm product={product} onSuccess={fetchProducts} />
                            </DialogContent>
                          </Dialog>
                          <DropdownMenuItem onClick={() => handleDelete(product.id)}>
                            <Trash2 className="h-4 w-4 mr-2" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      </main>
    </div>
  );
}
