"use client";

import { Product } from "@/@types/tracker";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  showDiscount?: boolean;
}

export function ProductCard({ product, showDiscount = false }: ProductCardProps) {
  const [isComparing, setIsComparing] = useState(false);

  const handleCompare = () => {
    setIsComparing(true);
    // Logic for comparing prices would go here
    setTimeout(() => setIsComparing(false), 1500);
  };

  const handleSetAlert = () => {
    // Logic for setting price alert would go here
    console.log(`Setting alert for ${product.name}`);
  };

  return (
    <Card key={product.id}>
      <CardContent className="p-6">
        <div className="grid gap-4 md:grid-cols-[1fr_2fr]">
          <div className="flex flex-col gap-4">
            <div className="aspect-square overflow-hidden rounded-md">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Current Price</span>
                <span className="text-lg font-bold">${product.currentPrice}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Original Price</span>
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              </div>
              {showDiscount ? (
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Discount</span>
                  <span className="text-sm font-medium text-green-600">-{product.discount}% Off</span>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Lowest Price</span>
                    <span className="text-sm text-green-600">${product.lowestPrice}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Highest Price</span>
                    <span className="text-sm text-red-600">${product.highestPrice}</span>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <CardTitle className="line-clamp-1 text-xl">{product.name}</CardTitle>
              <CardDescription className="line-clamp-1">{product.retailer}</CardDescription>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">Price History</div>
              <div className="mt-2 h-40 w-full">
                <div className="flex h-full items-end gap-2">
                  {product.priceHistory.map((point, index) => (
                    <div key={index} className="flex flex-1 flex-col items-center gap-1">
                      <div
                        className={`w-full ${point.price === product.lowestPrice
                          ? "bg-savings-500"
                          : point.price === product.highestPrice
                            ? "bg-discount-500"
                            : "bg-primary"
                          } rounded-t-sm transition-all hover:opacity-80`}
                        style={{
                          height: `${((point.price - product.lowestPrice) /
                            (product.highestPrice - product.lowestPrice)) *
                            100
                            }%`,
                        }}
                      ></div>
                      <div className="text-xs">{point.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1"
                onClick={handleCompare}
                disabled={isComparing}
              >
                {isComparing ? 'Comparing...' : 'Compare Prices'}
              </Button>
              <Button
                className="flex-1"
                onClick={handleSetAlert}
              >
                {showDiscount ? 'Buy Now' : 'Set Alert'}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
