"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Bell, ChevronDown, Home, LogOut, Menu, Search, Settings, TrendingUp, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"

export default function TrackerPage() {
  const [searchQuery, setSearchQuery] = useState("")

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
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <nav className="grid gap-6 text-lg font-medium">
              <Link href="/dashboard" className="flex items-center gap-2 text-lg font-semibold">
                <TrendingUp className="h-6 w-6 text-primary" />
                <span className="sr-only">Savr</span>
              </Link>
              <Link href="/dashboard" className="flex items-center gap-2 text-lg font-semibold">
                <Home className="h-5 w-5" />
                Dashboard
              </Link>
              <Link href="/dashboard/search" className="flex items-center gap-2 text-lg font-semibold">
                <Search className="h-5 w-5" />
                Search
              </Link>
              <Link href="/dashboard/tracker" className="flex items-center gap-2 text-lg font-semibold">
                <TrendingUp className="h-5 w-5" />
                Price Tracker
              </Link>
              <Link href="/dashboard/settings" className="flex items-center gap-2 text-lg font-semibold">
                <Settings className="h-5 w-5" />
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/dashboard" className="flex items-center gap-2 md:ml-0">
          <TrendingUp className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Savr</span>
        </Link>
        <div className="flex-1">
          <form onSubmit={handleSearch} className="hidden md:block">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
            <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-primary"></span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1">
                <User className="h-4 w-4" />
                <span className="hidden md:inline-flex">John Doe</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r bg-muted/40 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-4 text-sm font-medium">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
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
                  className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all"
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
            <h1 className="text-lg font-semibold md:text-2xl">Price Tracker</h1>
          </div>
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
                  <Card key={product.id}>
                    <CardContent className="p-6">
                      <div className="grid gap-4 md:grid-cols-[1fr_2fr]">
                        <div className="flex flex-col gap-4">
                          <div className="aspect-square overflow-hidden rounded-md">
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              width={300}
                              height={300}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="grid gap-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Current Price</span>
                              <span className="text-lg font-bold">${product.currentPrice}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Original Price</span>
                              <span className="text-sm text-muted-foreground line-through">
                                ${product.originalPrice}
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Lowest Price</span>
                              <span className="text-sm text-green-600">${product.lowestPrice}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Highest Price</span>
                              <span className="text-sm text-red-600">${product.highestPrice}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-4">
                          <div>
                            <CardTitle className="line-clamp-1 text-xl">{product.name}</CardTitle>
                            <CardDescription className="line-clamp-1">{product.retailer}</CardDescription>
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium">Price History</div>
                            <div className="mt-2 h-40 w-full">
                              <div className="flex h-full items-end gap-2">
                                {product.priceHistory.map((point, index) => (
                                  <div key={index} className="flex flex-1 flex-col items-center gap-1">
                                    <div
                                      className={`w-full ${
                                        point.price === product.lowestPrice
                                          ? "bg-savings-500"
                                          : point.price === product.highestPrice
                                            ? "bg-discount-500"
                                            : "bg-primary"
                                      } rounded-t-sm transition-all hover:opacity-80`}
                                      style={{
                                        height: `${
                                          ((point.price - product.lowestPrice) /
                                            (product.highestPrice - product.lowestPrice)) *
                                          100
                                        }%`,
                                      }}
                                    ></div>
                                    <div className="text-xs">{point.date}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" className="flex-1">
                              Compare Prices
                            </Button>
                            <Button className="flex-1">Set Alert</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="discounted" className="border-none p-0 pt-4">
              <div className="grid gap-6">
                {trackedProducts
                  .filter((product) => product.discount > 0)
                  .map((product) => (
                    <Card key={product.id}>
                      <CardContent className="p-6">
                        <div className="grid gap-4 md:grid-cols-[1fr_2fr]">
                          <div className="flex flex-col gap-4">
                            <div className="aspect-square overflow-hidden rounded-md">
                              <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                width={300}
                                height={300}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="grid gap-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Current Price</span>
                                <span className="text-lg font-bold">${product.currentPrice}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Original Price</span>
                                <span className="text-sm text-muted-foreground line-through">
                                  ${product.originalPrice}
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Discount</span>
                                <span className="text-sm font-medium text-green-600">-{product.discount}% Off</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4">
                            <div>
                              <CardTitle className="line-clamp-1 text-xl">{product.name}</CardTitle>
                              <CardDescription className="line-clamp-1">{product.retailer}</CardDescription>
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium">Price History</div>
                              <div className="mt-2 h-40 w-full">
                                <div className="flex h-full items-end gap-2">
                                  {product.priceHistory.map((point, index) => (
                                    <div key={index} className="flex flex-1 flex-col items-center gap-1">
                                      <div
                                        className={`w-full ${
                                          point.price === product.lowestPrice
                                            ? "bg-savings-500"
                                            : point.price === product.highestPrice
                                              ? "bg-discount-500"
                                              : "bg-primary"
                                        } rounded-t-sm transition-all hover:opacity-80`}
                                        style={{
                                          height: `${
                                            ((point.price - product.lowestPrice) /
                                              (product.highestPrice - product.lowestPrice)) *
                                            100
                                          }%`,
                                        }}
                                      ></div>
                                      <div className="text-xs">{point.date}</div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" className="flex-1">
                                Compare Prices
                              </Button>
                              <Button className="flex-1">Buy Now</Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="alerts" className="border-none p-0 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Price Alerts</CardTitle>
                  <CardDescription>Get notified when prices drop below your target</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Wireless Headphones</div>
                          <div className="text-sm text-muted-foreground">Alert when price drops below $80.00</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-sm">
                            Current: <span className="font-medium">${trackedProducts[0].currentPrice}</span>
                          </div>
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Smart Watch Series 5</div>
                          <div className="text-sm text-muted-foreground">Alert when price drops below $180.00</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-sm">
                            Current: <span className="font-medium">${trackedProducts[1].currentPrice}</span>
                          </div>
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Bluetooth Speaker</div>
                          <div className="text-sm text-muted-foreground">Alert when price drops below $45.00</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-sm">
                            Current: <span className="font-medium">${trackedProducts[2].currentPrice}</span>
                          </div>
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

