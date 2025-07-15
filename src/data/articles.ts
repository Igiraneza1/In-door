// lib/article.ts

export interface Article {
  id: number;
  Image: string;
  title: string;
  slug: string;
  description: string;
  price: string;
}

const articles: Article[] = [
  {
    id: 1,
    Image: "/image/furniture/sofa2.jpg",
    title: "7 ways to decor your home",
    slug: "7-ways-to-decor-your-home",
    description: "Discover 7 unique and affordable ways to upgrade your home's interior.",
    price: "$149.99",
  },
  {
    id: 2,
    Image: "/image/furniture/kitchen.jpg",
    title: "Kitchen organisation",
    slug: "kitchen-organisation",
    description: "Maximize your kitchen space with these simple organization hacks.",
    price: "$89.99",
  },
  {
    id: 3,
    Image: "/image/furniture/bedroom1.jpg",
    title: "Decor your bedroom",
    slug: "decor-your-bedroom",
    description: "Transform your bedroom into a cozy retreat with these decor tips.",
    price: "$199.99",
  },
  {
    id: 4,
    Image: "/image/furniture/livingroom.jpg",
    title: "Living Room Makeover Ideas",
    slug: "living-room-makeover-ideas",
    description: "Simple ideas to refresh your living room style.",
    price: "$179.99",
  },
  {
    id: 5,
    Image: "/image/furniture/bathroom.jpg",
    title: "Modern Bathroom Design",
    slug: "modern-bathroom-design",
    description: "Inspiration for a sleek and stylish bathroom upgrade.",
    price: "$129.99",
  },
  {
    id: 6,
    Image: "/image/furniture/office.jpg",
    title: "Small Office Setup Tips",
    slug: "small-office-setup-tips",
    description: "Maximize productivity in small office spaces.",
    price: "$109.99",
  },
  {
    id: 7,
    Image: "/image/furniture/balcony.jpg",
    title: "Balcony Garden Ideas",
    slug: "balcony-garden-ideas",
    description: "Create a mini oasis on your balcony with these ideas.",
    price: "$59.99",
  },
  {
    id: 8,
    Image: "/image/furniture/closet.jpg",
    title: "Closet Storage Hacks",
    slug: "closet-storage-hacks",
    description: "Organize your closet space efficiently with smart storage.",
    price: "$39.99",
  },
  {
    id: 9,
    Image: "/image/furniture/dining.jpg",
    title: "Elegant Dining Room Setups",
    slug: "elegant-dining-room-setups",
    description: "Ideas for making your dining space both elegant and functional.",
    price: "$249.99",
  },
];

export default articles;
