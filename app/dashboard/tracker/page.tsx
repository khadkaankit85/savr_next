import { TrackerContent } from "@/components/dashboard-tracker-components/tracker-content";

export default function TrackerPage() {
  // Sample data that would typically come from a database or API
  const trackedProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      currentPrice: 89.99,
      originalPrice: 105.99,
      lowestPrice: 85.99,
      highestPrice: 109.99,
      discount: 15,
      retailer: "TechStore",
      image: "/placeholder.svg",
      priceHistory: [
        { date: "Jan", price: 105.99 },
        { date: "Feb", price: 99.99 },
        { date: "Mar", price: 95.99 },
        { date: "Apr", price: 89.99 },
        { date: "May", price: 89.99 },
        { date: "Jun", price: 89.99 },
      ],
    },
    {
      id: 2,
      name: "Smart Watch Series 5",
      currentPrice: 199.99,
      originalPrice: 219.99,
      lowestPrice: 189.99,
      highestPrice: 229.99,
      discount: 10,
      retailer: "GadgetWorld",
      image: "/placeholder.svg",
      priceHistory: [
        { date: "Jan", price: 219.99 },
        { date: "Feb", price: 219.99 },
        { date: "Mar", price: 209.99 },
        { date: "Apr", price: 209.99 },
        { date: "May", price: 199.99 },
        { date: "Jun", price: 199.99 },
      ],
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      currentPrice: 49.99,
      originalPrice: 59.99,
      lowestPrice: 45.99,
      highestPrice: 64.99,
      discount: 20,
      retailer: "SoundShop",
      image: "/placeholder.svg",
      priceHistory: [
        { date: "Jan", price: 59.99 },
        { date: "Feb", price: 59.99 },
        { date: "Mar", price: 54.99 },
        { date: "Apr", price: 54.99 },
        { date: "May", price: 49.99 },
        { date: "Jun", price: 49.99 },
      ],
    },
  ];

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Price Tracker</h1>
      </div>
      <TrackerContent trackedProducts={trackedProducts} />
    </main>
  );
}
