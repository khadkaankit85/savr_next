"use client"

import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Product {
  id: number;
  name: string;
  description: string;
  currentPrice: number;
  originalPrice: number;
  discount: number;
  retailer: string;
  image: string;
  rating: number;
}

interface SearchResultsProps {
  results: Product[];
}

export function SearchResults({ results }: SearchResultsProps) {
  return (
    <div className="grid gap-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Showing {results.length} results</p>
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="sort" className="text-sm">
            Sort by:
          </Label>
          <Select defaultValue="relevance">
            <SelectTrigger id="sort" className="h-8 w-[150px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevance</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="discount">Discount</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((product) => (
          <Card
            key={product.id}
            className="overflow-hidden transition-all hover:shadow-md hover:border-primary/50"
          >
            <CardHeader className="p-0">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={225}
                  className="h-full w-full object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="line-clamp-1 text-base">{product.name}</CardTitle>
              <CardDescription className="line-clamp-2 h-10">{product.description}</CardDescription>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-bold">${product.currentPrice}</span>
                  <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                </div>
                <span className="text-sm font-medium text-discount-500 price-drop-animation">
                  -{product.discount}% Off
                </span>
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{product.retailer}</div>
              <div className="mt-4 flex gap-2">
                <Button variant="outline" size="sm" className="w-full">
                  View Details
                </Button>
                <Button size="sm" className="w-full">
                  Track Price
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
