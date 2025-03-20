"use client"

import Link from "next/link"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { WishlistItemType } from "./wishlist-component"

interface WishlistItemProps {
  item: WishlistItemType
  onRemove: () => void
}

export default function WishlistItem({ item, onRemove }: WishlistItemProps) {
  return (
    <Card key={item.id} className="overflow-hidden">
      <CardContent className="p-0">
        <div className="grid gap-4 md:grid-cols-[200px_1fr_auto]">
          <div className="aspect-square overflow-hidden md:aspect-[1/1]">
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              width={200}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-2 p-4 md:p-6">
            <div>
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-sm text-muted-foreground">{item.retailer}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold">${item.currentPrice}</span>
                <span className="text-sm text-muted-foreground line-through">${item.originalPrice}</span>
              </div>
              <span className="rounded-full bg-primary/20 px-2 py-1 text-xs font-medium text-primary">
                {item.discount}% Off
              </span>
            </div>
            <div className="mt-2 grid gap-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Target Price:</span>
                <span className="text-sm font-bold text-primary">${item.targetPrice}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Date Added:</span>
                <span className="text-sm text-muted-foreground">{item.dateAdded}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Price Difference:</span>
                <span
                  className={`text-sm font-medium ${item.currentPrice <= item.targetPrice ? "text-green-600" : "text-amber-600"}`}
                >
                  {item.currentPrice <= item.targetPrice
                    ? `$${(item.targetPrice - item.currentPrice).toFixed(2)} below target`
                    : `$${(item.currentPrice - item.targetPrice).toFixed(2)} above target`}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4 p-4 md:p-6">
            <Button variant="outline" size="sm" asChild>
              <Link href={`/product/${item.id}`}>View Details</Link>
            </Button>
            <Button size="sm">Track Price</Button>
            <Button
              variant="outline"
              size="sm"
              className="text-red-500 hover:text-red-600"
              onClick={onRemove}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Remove
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
