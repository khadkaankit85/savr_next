"use client";

import { Product } from "@/@types/tracker";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCard } from "./product-card";
import { PriceAlerts } from "./price-alerts";

interface TrackerContentProps {
  trackedProducts: Product[];
}

export function TrackerContent({ trackedProducts }: TrackerContentProps) {
  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="all">All Products</TabsTrigger>
          <TabsTrigger value="discounted">Discounted</TabsTrigger>
          <TabsTrigger value="alerts">Price Alerts</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="all" className="border-none p-0 pt-4">
        <div className="grid gap-6">
          {trackedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="discounted" className="border-none p-0 pt-4">
        <div className="grid gap-6">
          {trackedProducts
            .filter((product) => product.discount > 0)
            .map((product) => (
              <ProductCard key={product.id} product={product} showDiscount={true} />
            ))}
        </div>
      </TabsContent>
      <TabsContent value="alerts" className="border-none p-0 pt-4">
        <PriceAlerts trackedProducts={trackedProducts} />
      </TabsContent>
    </Tabs>
  );
}
