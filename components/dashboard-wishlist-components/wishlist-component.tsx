"use client"


import { useState } from "react"
import WishlistHeader from "./wishlist-header"
import WishlistItem from "./wishlist-item"
import EmptyWishlist from "./empty-wishlist"

export type WishlistItemType = {
  id: number
  name: string
  currentPrice: number
  originalPrice: number
  discount: number
  retailer: string
  image: string
  targetPrice: number
  dateAdded: string
}

interface WishlistClientProps {
  initialWishlistItems: WishlistItemType[]
}

export default function WishlistClient({ initialWishlistItems }: WishlistClientProps) {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Filter items based on search query
    console.log("Searching for:", searchQuery)
  }

  const handleRemoveItem = (itemId: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== itemId))
  }

  return (
    <>
      <WishlistHeader
        itemCount={wishlistItems.length}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />

      <div className="grid gap-6">
        {wishlistItems.length > 0 ? (
          wishlistItems.map((item) => (
            <WishlistItem
              key={item.id}
              item={item}
              onRemove={() => handleRemoveItem(item.id)}
            />
          ))
        ) : (
          <EmptyWishlist />
        )}
      </div>
    </>
  )
}
