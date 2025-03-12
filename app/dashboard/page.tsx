"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
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

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const trackedProducts = [
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
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Tracked Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+2 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Price Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">+1 from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45.99</div>
                <p className="text-xs text-muted-foreground">+$12.50 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Discounts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-muted-foreground">+2 from last week</p>
              </CardContent>
            </Card>
          </div>
          <Tabs defaultValue="tracked">
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
                      <CardTitle className="line-clamp-1 text-base">{product.name}</CardTitle>
                      <CardDescription className="line-clamp-1">{product.retailer}</CardDescription>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg font-bold">${product.currentPrice}</span>
                          <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
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
                      <div className="text-sm text-muted-foreground">Price dropped by 15%</div>
                    </div>
                    <Button size="sm">View</Button>
                  </div>
                </div>
                <div className="border-t p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Smart Watch Series 5</div>
                      <div className="text-sm text-muted-foreground">Price dropped by 10%</div>
                    </div>
                    <Button size="sm">View</Button>
                  </div>
                </div>
                <div className="border-t p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Bluetooth Speaker</div>
                      <div className="text-sm text-muted-foreground">Price dropped by 20%</div>
                    </div>
                    <Button size="sm">View</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

