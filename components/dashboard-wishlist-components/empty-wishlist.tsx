"use client"

import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EmptyWishlist() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed p-8 text-center">
      <Heart className="h-12 w-12 text-muted-foreground" />
      <h2 className="text-xl font-semibold">Your wishlist is empty</h2>
      <p className="text-sm text-muted-foreground">
        Start adding items to your wishlist to track prices and get notified about discounts.
      </p>
      <Button asChild>
        <Link href="/dashboard/search">Browse Products</Link>
      </Button>
    </div>
  )
}


