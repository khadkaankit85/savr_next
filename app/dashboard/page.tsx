import Link from "next/link";
import { TrendingUp, Home, Search, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ClientHeader } from "@/components/dashboard-components/dashboard-header";
import { ClientTabs } from "@/components/dashboard-components/dashboard-products";
import { JSX } from "react";

export interface Product {
  id: number;
  name: string;
  currentPrice: number;
  originalPrice: number;
  discount: number;
  retailer: string;
  image: string;
}

async function getTrackedProducts(): Promise<Product[]> {
  // In a real implementation, this would fetch from a database or API
  return [
    {
      id: 1,
      name: "Wireless Headphones",
      currentPrice: 89.99,
      originalPrice: 105.99,
      discount: 15,
      retailer: "TechStore",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Smart Watch Series 5",
      currentPrice: 199.99,
      originalPrice: 219.99,
      discount: 10,
      retailer: "GadgetWorld",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      currentPrice: 49.99,
      originalPrice: 59.99,
      discount: 20,
      retailer: "SoundShop",
      image: "/placeholder.svg",
    },
  ];
}

export default async function DashboardPage(): Promise<JSX.Element> {
  const trackedProducts = await getTrackedProducts();

  return (
    <div className="flex min-h-screen flex-col">
      {/* The Header component is client-side */}
      <ClientHeader />

      <div className="flex flex-1">
        {/* The Sidebar component is mostly static */}
        <aside className="hidden w-64 border-r bg-muted/40 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-4 text-sm font-medium">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all"
                >
                  <Home className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/search"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <Search className="h-4 w-4" />
                  Search
                </Link>
                <Link
                  href="/dashboard/tracker"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <TrendingUp className="h-4 w-4" />
                  Price Tracker
                </Link>
                <Link
                  href="/dashboard/settings"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <Settings className="h-4 w-4" />
                  Settings
                </Link>
              </nav>
            </div>
          </div>
        </aside>

        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Tracked Products
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">
                  +2 from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Price Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">
                  +1 from last week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Savings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45.99</div>
                <p className="text-xs text-muted-foreground">
                  +$12.50 from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Discounts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-muted-foreground">
                  +2 from last week
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Tabs Component - Client-side behavior */}
          <ClientTabs trackedProducts={trackedProducts} />
        </main>
      </div>
    </div>
  );
}


