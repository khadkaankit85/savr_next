"use client";

import { JSX, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Product } from "@/app/dashboard/page";

interface ClientTabsProps {
  trackedProducts: Product[];
}

export function ClientTabs({ trackedProducts }: ClientTabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>("tracked");

  return (
    <Tabs defaultValue="tracked" value={activeTab} onValueChange={setActiveTab}>
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="tracked">Tracked Products</TabsTrigger>
          <TabsTrigger value="alerts">Price Alerts</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="tracked" className="border-none p-0">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {trackedProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden transition-all hover:shadow-md hover:border-primary/50"
            >
              <CardHeader className="p-0">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={225}
                    className="h-full w-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="line-clamp-1 text-base">
                  {product.name}
                </CardTitle>
                <CardDescription className="line-clamp-1">
                  {product.retailer}
                </CardDescription>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold">
                      ${product.currentPrice}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-discount-500 price-drop-animation">
                    -{product.discount}% Off
                  </span>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                  <Button size="sm" className="w-full">
                    Compare
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="alerts" className="border-none p-0">
        <div className="rounded-lg border">
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Wireless Headphones</div>
                <div className="text-sm text-muted-foreground">
                  Price dropped by 15%
                </div>
              </div>
              <Button size="sm">View</Button>
            </div>
          </div>
          <div className="border-t p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Smart Watch Series 5</div>
                <div className="text-sm text-muted-foreground">
                  Price dropped by 10%
                </div>
              </div>
              <Button size="sm">View</Button>
            </div>
          </div>
          <div className="border-t p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Bluetooth Speaker</div>
                <div className="text-sm text-muted-foreground">
                  Price dropped by 20%
                </div>
              </div>
              <Button size="sm">View</Button>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
