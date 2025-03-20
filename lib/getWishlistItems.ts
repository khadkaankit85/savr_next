
export async function getWishlistItems() {
  // In a real application, this would fetch from a database or API
  // For now we'll return the mock data

  return [
    {
      id: 1,
      name: "Wireless Headphones",
      currentPrice: 89.99,
      originalPrice: 105.99,
      discount: 15,
      retailer: "TechStore",
      image: "/placeholder.svg",
      targetPrice: 79.99,
      dateAdded: "June 15, 2023",
    },
    {
      id: 2,
      name: "Smart Watch Series 5",
      currentPrice: 199.99,
      originalPrice: 219.99,
      discount: 10,
      retailer: "GadgetWorld",
      image: "/placeholder.svg",
      targetPrice: 180.0,
      dateAdded: "June 10, 2023",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      currentPrice: 49.99,
      originalPrice: 59.99,
      discount: 20,
      retailer: "SoundShop",
      image: "/placeholder.svg",
      targetPrice: 45.0,
      dateAdded: "June 5, 2023",
    },
    {
      id: 4,
      name: "Wireless Earbuds",
      currentPrice: 79.99,
      originalPrice: 99.99,
      discount: 20,
      retailer: "AudioMart",
      image: "/placeholder.svg",
      targetPrice: 70.0,
      dateAdded: "May 28, 2023",
    },
  ]
}
