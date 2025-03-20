
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BackButton() {
  "use client"
  return (
    <Button variant="ghost" size="sm" asChild>
      <Link href="/dashboard/search">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Search
      </Link>
    </Button>
  );
}

// components/product/product-images.tsx
import Image from "next/image"

type ProductImagesProps = {
  product: {
    name: string;
    image: string;
  };
}

export function ProductImages({ product }: ProductImagesProps) {
  "use client"
  return (
    <div className="sticky top-20 grid gap-4">
      <div className="aspect-square overflow-hidden rounded-lg border">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={400}
          height={400}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[...Array(4)].map((_, i) => (
          <button key={i} className="overflow-hidden rounded-md border hover:border-primary">
            <Image
              src={product.image || "/placeholder.svg"}
              alt="Product thumbnail"
              width={100}
              height={100}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

// components/product/product-details.tsx
type ProductDetailsProps = {
  product: {
    name: string;
    rating: number;
    reviews: number;
    description: string;
    features: string[];
  };
}

export function ProductDetails({ product }: ProductDetailsProps) {
  "use client"
  return (
    <div className="grid gap-4">
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">{product.name}</h1>
        <div className="mt-2 flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                stroke="currentColor"
                className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>
      </div>
      <div className="text-muted-foreground">{product.description}</div>
      <div className="grid gap-2">
        <div className="text-sm font-medium">Key Features:</div>
        <ul className="grid gap-1 text-sm">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-green-500"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// components/product/price-tabs.tsx

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs"

type Retailer = {
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  inStock: boolean;
  deliveryDays: string;
};

type PriceTabsProps = {
  retailers: Retailer[];
};

export function PriceTabs({ retailers }: PriceTabsProps) {
  "use client"
  return (
    <Tabs defaultValue="compare" className="mt-6">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="compare">Price Comparison</TabsTrigger>
        <TabsTrigger value="history">Price History</TabsTrigger>
      </TabsList>
      <TabsContent value="compare" className="border-none p-0 pt-4">
        <Card>
          <CardHeader className="p-4">
            <CardTitle className="text-base">Compare Prices</CardTitle>
            <CardDescription>Find the best deal across multiple retailers</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid divide-y">
              {retailers.map((retailer, index) => (
                <div key={index} className="grid grid-cols-[1fr_auto] gap-4 p-4">
                  <div>
                    <div className="font-medium">{retailer.name}</div>
                    <div className="flex items-center gap-2 text-sm">
                      <span
                        className={`${retailer.inStock ? "text-green-600" : "text-red-600"} font-medium`}
                      >
                        {retailer.inStock ? "In Stock" : "Out of Stock"}
                      </span>
                      {retailer.inStock && (
                        <span className="text-muted-foreground">
                          Delivery: {retailer.deliveryDays} days
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-center">
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-bold">${retailer.price}</span>
                      <span className="text-sm text-muted-foreground line-through">
                        ${retailer.originalPrice}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-green-600">-{retailer.discount}% Off</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="history" className="border-none p-0 pt-4">
        <Card>
          <CardHeader className="p-4">
            <CardTitle className="text-base">Price History</CardTitle>
            <CardDescription>Track how the price has changed over time</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="h-60 w-full">
              <div className="flex h-full flex-col">
                <div className="flex-1 border-b border-l">
                  <div className="relative h-full w-full">
                    <div className="absolute bottom-0 left-0 h-1/2 w-full border-t border-dashed border-muted-foreground/30"></div>
                    <div className="absolute bottom-0 left-0 h-full w-full">
                      <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path
                          d="M0,50 L16.6,45 L33.3,48 L50,40 L66.6,35 L83.3,30 L100,25"
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="2"
                        ></path>
                        <path
                          d="M0,50 L16.6,45 L33.3,48 L50,40 L66.6,35 L83.3,30 L100,25"
                          fill="url(#gradient)"
                          fillOpacity="0.2"
                          stroke="none"
                        ></path>
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-medium">Lowest Price</div>
                <div className="text-green-600">$85.99</div>
              </div>
              <div>
                <div className="font-medium">Highest Price</div>
                <div className="text-red-600">$109.99</div>
              </div>
              <div>
                <div className="font-medium">Average Price</div>
                <div>$95.99</div>
              </div>
              <div>
                <div className="font-medium">Current Price</div>
                <div>$89.99</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
