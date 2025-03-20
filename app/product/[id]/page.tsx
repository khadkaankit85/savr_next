import { PricingSidebar } from "@/components/dashboard-product-components/pricing-sidebar";
import { BackButton, ProductImages, ProductDetails, PriceTabs } from "@/components/dashboard-product-components/product-subcomponets";

export default async function ProductPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch this data server-side
  const product = await getProduct(params.id);
  const retailers = await getRetailers(params.id);

  return (
    <main className="flex-1 p-4 md:p-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <BackButton />
        </div>
        <div className="grid gap-6 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr_1fr]">
          <div className="order-1 md:order-1">
            <ProductImages product={product} />
          </div>
          <div className="order-3 md:order-2">
            <ProductDetails product={product} />
            <PriceTabs retailers={retailers} />
          </div>
          <div className="order-2 md:order-3">
            <PricingSidebar product={product} retailers={retailers} />
          </div>
        </div>
      </div>
    </main>
  );
}

// This function would fetch product data from your database or API
async function getProduct(id: string) {
  // In a real app, this would be an API or database call
  return {
    id: 1,
    name: "Wireless Headphones",
    description:
      "Premium noise-cancelling wireless headphones with 30-hour battery life. Features include active noise cancellation, transparency mode, and high-quality audio drivers for an immersive listening experience.",
    currentPrice: 89.99,
    originalPrice: 105.99,
    discount: 15,
    retailer: "TechStore",
    image: "/placeholder.svg",
    rating: 4.5,
    reviews: 128,
    features: [
      "Active Noise Cancellation",
      "30-hour Battery Life",
      "Bluetooth 5.0",
      "Built-in Microphone",
      "Foldable Design",
      "Carrying Case Included",
    ],
  };
}

// This function would fetch retailer data from your database or API
async function getRetailers(id: string) {
  // In a real app, this would be an API or database call
  return [
    {
      name: "TechStore",
      price: 89.99,
      originalPrice: 105.99,
      discount: 15,
      inStock: true,
      deliveryDays: "1-2",
    },
    {
      name: "ElectronicsHub",
      price: 92.99,
      originalPrice: 105.99,
      discount: 12,
      inStock: true,
      deliveryDays: "2-3",
    },
    {
      name: "GadgetWorld",
      price: 94.99,
      originalPrice: 105.99,
      discount: 10,
      inStock: true,
      deliveryDays: "1-3",
    },
    {
      name: "AudioMart",
      price: 99.99,
      originalPrice: 105.99,
      discount: 6,
      inStock: false,
      deliveryDays: "3-5",
    },
  ];
}
