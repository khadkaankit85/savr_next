"use client"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WishlistHeaderProps {
  itemCount: number
  searchQuery: string
  setSearchQuery: (query: string) => void
  handleSearch: (e: React.FormEvent) => void
}

export default function WishlistHeader({
  itemCount,
}: WishlistHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-lg font-semibold md:text-2xl">My Wishlist</h1>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm">
          <Heart className="mr-2 h-4 w-4 text-primary" />
          <span className="hidden sm:inline">Saved Items:</span> {itemCount}
        </Button>
      </div>
    </div>
  )
}
