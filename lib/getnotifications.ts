import { NotificationType } from "@/@types/notifications";

export async function getNotifications(): Promise<NotificationType[]> {
  // In a real app, this would fetch from an API
  // For now, we'll return mock data
  return [
    {
      id: 1,
      type: "price_drop",
      title: "Price Drop Alert",
      message: "Wireless Headphones dropped to $89.99 (15% off)",
      date: "2 hours ago",
      read: false,
      product: {
        id: 1,
        name: "Wireless Headphones",
        image: "/placeholder.svg",
      },
    },
    {
      id: 2,
      type: "target_price",
      title: "Target Price Reached",
      message: "Smart Watch Series 5 has reached your target price of $199.99",
      date: "1 day ago",
      read: false,
      product: {
        id: 2,
        name: "Smart Watch Series 5",
        image: "/placeholder.svg",
      },
    },
    {
      id: 3,
      type: "back_in_stock",
      title: "Back in Stock",
      message: "Bluetooth Speaker is back in stock at SoundShop",
      date: "3 days ago",
      read: true,
      product: {
        id: 3,
        name: "Bluetooth Speaker",
        image: "/placeholder.svg",
      },
    },
    {
      id: 4,
      type: "price_drop",
      title: "Price Drop Alert",
      message: "Wireless Earbuds dropped to $79.99 (20% off)",
      date: "5 days ago",
      read: true,
      product: {
        id: 4,
        name: "Wireless Earbuds",
        image: "/placeholder.svg",
      },
    },
    {
      id: 5,
      type: "system",
      title: "Welcome to Savr",
      message: "Thank you for joining Savr! Start tracking prices and save money on your purchases.",
      date: "2 weeks ago",
      read: true,
    },
  ]
}
