"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Bell, ChevronDown, Heart, Home, LogOut, Menu, Search, Settings, TrendingUp, Trash2, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
import { ThemeToggle } from "@/components/theme-toggle"

export default function WishlistPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const wishlistItems = [
    {
      id: 1,
      name: "Wireless Headphones",
      currentPrice: 89.99,
      originalPrice: 105.99,
      discount: 15,
      retailer: "TechStore",
      image: "/placeholder.svg",
      targetPrice: 79.99,
      dateAdded: "June 15, 2023",
    },
    {
      id: 2,
      name: "Smart Watch Series 5",
      currentPrice: 199.99,
      originalPrice: 219.99,
      discount: 10,
      retailer: "GadgetWorld",
      image: "/placeholder.svg",
      targetPrice: 180.0,
      dateAdded: "June 10, 2023",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      currentPrice: 49.99,
      originalPrice: 59.99,
      discount: 20,
      retailer: "SoundShop",
      image: "/placeholder.svg",
      targetPrice: 45.0,
      dateAdded: "June 5, 2023",
    },
    {
      id: 4,
      name: "Wireless Earbuds",
      currentPrice: 79.99,
      originalPrice: 99.99,
      discount: 20,
      retailer: "AudioMart",
      image: "/placeholder.svg",
      targetPrice: 70.0,
      dateAdded: "May 28, 2023",
    },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
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
              <Link href="/dashboard/wishlist" className="flex items-center gap-2 text-lg font-semibold">
                <Heart className="h-5 w-5" />
                Wishlist
              </Link>
              <Link href="/dashboard/profile" className="flex items-center gap-2 text-lg font-semibold">
                <User className="h-5 w-5" />
                Profile
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
              <DropdownMenuItem asChild>
                <Link href="/dashboard/profile">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Link>
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
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <TrendingUp className="h-4 w-4" />
                  Price Tracker
                </Link>
                <Link
                  href="/dashboard/wishlist"
                  className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all"
                >
                  <Heart className="h-4 w-4" />
                  Wishlist
                </Link>
                <Link
                  href="/dashboard/profile"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <User className="h-4 w-4" />
                  Profile
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
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold md:text-2xl">My Wishlist</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Heart className="mr-2 h-4 w-4 text-primary" />
                <span className="hidden sm:inline">Saved Items:</span> {wishlistItems.length}
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            {wishlistItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid gap-4 md:grid-cols-[200px_1fr_auto]">
                    <div className="aspect-square overflow-hidden md:aspect-[1/1]">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={200}
                        height={200}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center gap-2 p-4 md:p-6">
                      <div>
                        <h3 className="text-xl font-bold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.retailer}</p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-bold">${item.currentPrice}</span>
                          <span className="text-sm text-muted-foreground line-through">${item.originalPrice}</span>
                        </div>
                        <span className="rounded-full bg-primary/20 px-2 py-1 text-xs font-medium text-primary">
                          {item.discount}% Off
                        </span>
                      </div>
                      <div className="mt-2 grid gap-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Target Price:</span>
                          <span className="text-sm font-bold text-primary">${item.targetPrice}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Date Added:</span>
                          <span className="text-sm text-muted-foreground">{item.dateAdded}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Price Difference:</span>
                          <span
                            className={`text-sm font-medium ${item.currentPrice <= item.targetPrice ? "text-green-600" : "text-amber-600"}`}
                          >
                            {item.currentPrice <= item.targetPrice
                              ? `$${(item.targetPrice - item.currentPrice).toFixed(2)} below target`
                              : `$${(item.currentPrice - item.targetPrice).toFixed(2)} above target`}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-4 p-4 md:p-6">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/product/${item.id}`}>View Details</Link>
                      </Button>
                      <Button size="sm">Track Price</Button>
                      <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {wishlistItems.length === 0 && (
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed p-8 text-center">
              <Heart className="h-12 w-12 text-muted-foreground" />
              <h2 className="text-xl font-semibold">Your wishlist is empty</h2>
              <p className="text-sm text-muted-foreground">
                Start adding items to your wishlist to track prices and get notified about discounts.
              </p>
              <Button asChild>
                <Link href="/dashboard/search">Browse Products</Link>
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

