import WishlistClient from "@/components/dashboard-wishlist-components/wishlist-component"
import { getWishlistItems } from "@/lib/getWishlistItems"

export default async function WishlistPage() {
  // Fetch data on the server
  const wishlistItems = await getWishlistItems()

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <WishlistClient initialWishlistItems={wishlistItems} />
    </main>
  )
}
