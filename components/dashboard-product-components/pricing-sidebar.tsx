"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type PricingSidebarProps = {
  product: {
    currentPrice: number;
    originalPrice: number;
    discount: number;
  };
  retailers: {
    name: string;
    price: number;
  }[];
}

export function PricingSidebar({ product, retailers }: PricingSidebarProps) {
  const [targetPrice, setTargetPrice] = useState<string>("");

  const handleSetPriceAlert = () => {
    // Implement price alert functionality
    console.log("Setting price alert for", targetPrice);
  };

  return (
    <div className="sticky top-20 grid gap-4">
      <Card>
        <CardContent className="p-6">
          <div className="grid gap-4">
            <div>
              <div className="text-2xl font-bold">${product.currentPrice}</div>
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                <span className="text-sm font-medium text-green-600">-{product.discount}% Off</span>
              </div>
            </div>
            <div className="grid gap-2">
              <Button className="w-full">Track Price</Button>
              <Button variant="outline" className="w-full">
                <Heart className="mr-2 h-4 w-4" />
                Add to Wishlist
              </Button>
            </div>
            <div className="text-sm">
              <div className="font-medium">Best Price:</div>
              <div className="mt-1 flex items-center justify-between">
                <span>{retailers[0].name}</span>
                <span className="font-medium">${retailers[0].price}</span>
              </div>
            </div>
            <div className="rounded-lg bg-primary/10 dark:bg-primary/20 p-3 text-sm">
              <div className="font-medium">Price Alert</div>
              <p className="mt-1 text-muted-foreground">
                Get notified when the price drops below your target price.
              </p>
              <div className="mt-2 flex items-center gap-2">
                <Input
                  type="number"
                  placeholder="Target price"
                  className="h-8"
                  value={targetPrice}
                  onChange={(e) => setTargetPrice(e.target.value)}
                />
                <Button size="sm" onClick={handleSetPriceAlert}>Set</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <SimilarProducts />
    </div>
  );
}

function SimilarProducts() {
  const similarProducts = [
    {
      name: "Premium Headphones Pro",
      price: 129.99,
      originalPrice: 149.99,
      image: "/placeholder.svg"
    },
    {
      name: "Wireless Earbuds Plus",
      price: 79.99,
      originalPrice: 99.99,
      image: "/placeholder.svg"
    },
    {
      name: "Studio Headphones",
      price: 149.99,
      originalPrice: 179.99,
      image: "/placeholder.svg"
    }
  ];

  return (
    <Card>
      <CardHeader className="p-4">
        <CardTitle className="text-base">Similar Products</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid divide-y">
          {similarProducts.map((product, index) => (
            <div key={index} className="flex items-center gap-3 p-4">
              <div className="h-16 w-16 overflow-hidden rounded-md">
                <img
                  src={product.image}
                  alt={product.name}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid gap-1">
                <div className="font-medium">{product.name}</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-bold">${product.price}</span>
                  <span className="text-xs text-muted-foreground line-through">${product.originalPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
