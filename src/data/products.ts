import mouse1 from "@/assets/mouse-1.jpg";
import mouse2 from "@/assets/mouse-2.jpg";
import mouse3 from "@/assets/mouse-3.jpg";
import mouse4 from "@/assets/mouse-4.jpg";
import mouse5 from "@/assets/mouse-5.jpg";
import mouse6 from "@/assets/mouse-6.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  dpi: string;
  weight: string;
  connectivity: string;
  badge?: string;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Venom Strike Pro",
    price: 79.99,
    originalPrice: 99.99,
    image: mouse1,
    category: "Wired",
    dpi: "26,000",
    weight: "63g",
    connectivity: "USB-C",
    badge: "Best Seller",
    rating: 4.8,
    reviews: 1243,
  },
  {
    id: "2",
    name: "HexaLite Ultra",
    price: 109.99,
    image: mouse2,
    category: "Wireless",
    dpi: "30,000",
    weight: "58g",
    connectivity: "2.4GHz / BT",
    badge: "New",
    rating: 4.9,
    reviews: 876,
  },
  {
    id: "3",
    name: "ShadowClaw X",
    price: 59.99,
    image: mouse3,
    category: "Wired",
    dpi: "20,000",
    weight: "72g",
    connectivity: "USB-A",
    rating: 4.6,
    reviews: 2105,
  },
  {
    id: "4",
    name: "Prism Fury RGB",
    price: 129.99,
    originalPrice: 149.99,
    image: mouse4,
    category: "Wireless",
    dpi: "32,000",
    weight: "55g",
    connectivity: "2.4GHz / USB-C",
    badge: "Editor's Pick",
    rating: 4.9,
    reviews: 543,
  },
  {
    id: "5",
    name: "NeonEdge Compact",
    price: 49.99,
    image: mouse5,
    category: "Wired",
    dpi: "16,000",
    weight: "68g",
    connectivity: "USB-A",
    rating: 4.5,
    reviews: 1876,
  },
  {
    id: "6",
    name: "TitanGrip Esports",
    price: 89.99,
    image: mouse6,
    category: "Wired",
    dpi: "25,000",
    weight: "66g",
    connectivity: "USB-C",
    badge: "Pro Choice",
    rating: 4.7,
    reviews: 967,
  },
];
