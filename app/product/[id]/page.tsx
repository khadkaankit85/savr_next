"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Bell, ChevronDown, Heart, LogOut, Menu, Search, Settings, TrendingUp, User } from "lucide-react"

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

export default function ProductPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const product = {
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
  }

  const retailers = [
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
                <TrendingUp className="h-5 w-5" />
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
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard/search">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Search
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr_1fr]">
            <div className="order-1 md:order-1">
              <div className="sticky top-20 grid gap-4">
                <div className="aspect-square overflow-hidden rounded-lg border">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <button className="overflow-hidden rounded-md border hover:border-primary">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt="Product thumbnail"
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </button>
                  <button className="overflow-hidden rounded-md border hover:border-primary">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt="Product thumbnail"
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </button>
                  <button className="overflow-hidden rounded-md border hover:border-primary">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt="Product thumbnail"
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </button>
                  <button className="overflow-hidden rounded-md border hover:border-primary">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt="Product thumbnail"
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="order-3 md:order-2">
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
                <Tabs defaultValue="compare">
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
              </div>
            </div>
            <div className="order-2 md:order-3">
              <div className="sticky top-20 grid gap-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid gap-4">
                      <div>
                        <div className="text-2xl font-bold">${product.currentPrice}</div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                          <span className="text-sm font-medium text-green-600">-{product.discount}% Off</span>
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Button className="w-full">Track Price</Button>
                        <Button variant="outline" className="w-full">
                          <Heart className="mr-2 h-4 w-4" />
                          Add to Wishlist
                        </Button>
                      </div>
                      <div className="text-sm">
                        <div className="font-medium">Best Price:</div>
                        <div className="mt-1 flex items-center justify-between">
                          <span>{retailers[0].name}</span>
                          <span className="font-medium">${retailers[0].price}</span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-primary/10 dark:bg-primary/20 p-3 text-sm">
                        <div className="font-medium">Price Alert</div>
                        <p className="mt-1 text-muted-foreground">
                          Get notified when the price drops below your target price.
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <Input type="number" placeholder="Target price" className="h-8" />
                          <Button size="sm">Set</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-base">Similar Products</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="grid divide-y">
                      <div className="flex items-center gap-3 p-4">
                        <div className="h-16 w-16 overflow-hidden rounded-md">
                          <img
                            src="/placeholder.svg"
                            alt="Similar product"
                            width={64}
                            height={64}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="grid gap-1">
                          <div className="font-medium">Premium Headphones Pro</div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-sm font-bold">$129.99</span>
                            <span className="text-xs text-muted-foreground line-through">$149.99</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4">
                        <div className="h-16 w-16 overflow-hidden rounded-md">
                          <img
                            src="/placeholder.svg"
                            alt="Similar product"
                            width={64}
                            height={64}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="grid gap-1">
                          <div className="font-medium">Wireless Earbuds Plus</div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-sm font-bold">$79.99</span>
                            <span className="text-xs text-muted-foreground line-through">$99.99</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4">
                        <div className="h-16 w-16 overflow-hidden rounded-md">
                          <img
                            src="/placeholder.svg"
                            alt="Similar product"
                            width={64}
                            height={64}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="grid gap-1">
                          <div className="font-medium">Studio Headphones</div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-sm font-bold">$149.99</span>
                            <span className="text-xs text-muted-foreground line-through">$179.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

