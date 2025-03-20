import { SearchForm } from "@/components/dashboard-search-components/search-form"
import { SearchResults } from "@/components/dashboard-search-components/search-results"
import { SearchFilters } from "@/components/dashboard-search-components/serach-filters"

export default function SearchPage() {
  const searchResults = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "Premium noise-cancelling wireless headphones with 30-hour battery life",
      currentPrice: 89.99,
      originalPrice: 105.99,
      discount: 15,
      retailer: "TechStore",
      image: "/placeholder.svg",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Smart Watch Series 5",
      description: "Advanced fitness tracking, heart rate monitoring, and smartphone notifications",
      currentPrice: 199.99,
      originalPrice: 219.99,
      discount: 10,
      retailer: "GadgetWorld",
      image: "/placeholder.svg",
      rating: 4.2,
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      description: "Waterproof portable speaker with 360° sound and 12-hour battery life",
      currentPrice: 49.99,
      originalPrice: 59.99,
      discount: 20,
      retailer: "SoundShop",
      image: "/placeholder.svg",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Wireless Earbuds",
      description: "True wireless earbuds with active noise cancellation and touch controls",
      currentPrice: 79.99,
      originalPrice: 99.99,
      discount: 20,
      retailer: "AudioMart",
      image: "/placeholder.svg",
      rating: 4.3,
    },
    {
      id: 5,
      name: "Smart Home Hub",
      description: "Control all your smart home devices from one central hub with voice commands",
      currentPrice: 129.99,
      originalPrice: 149.99,
      discount: 15,
      retailer: "SmartHome",
      image: "/placeholder.svg",
      rating: 4.0,
    },
    {
      id: 6,
      name: "4K Action Camera",
      description: "Waterproof action camera with 4K video recording and image stabilization",
      currentPrice: 149.99,
      originalPrice: 179.99,
      discount: 17,
      retailer: "CameraWorld",
      image: "/placeholder.svg",
      rating: 4.6,
    },
  ]

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-lg font-semibold md:text-2xl">Product Search</h1>
          <p className="text-sm text-muted-foreground">Find and compare products across multiple retailers</p>
        </div>
        <SearchForm />
      </div>
      <div className="grid gap-4 md:grid-cols-[240px_1fr]">
        <SearchFilters />
        <SearchResults results={searchResults} />
      </div>
    </main>
  )
}
