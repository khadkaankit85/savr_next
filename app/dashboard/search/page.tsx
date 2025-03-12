"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Bell, ChevronDown, Filter, Home, LogOut, Menu, Search, Settings, TrendingUp, User } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 1000])

  const searchResults = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "Premium noise-cancelling wireless headphones with 30-hour battery life",
      currentPrice: 89.99,
      originalPrice: 105.99,
      discount: 15,
      retailer: "TechStore",
      image: "/placeholder.svg",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Smart Watch Series 5",
      description: "Advanced fitness tracking, heart rate monitoring, and smartphone notifications",
      currentPrice: 199.99,
      originalPrice: 219.99,
      discount: 10,
      retailer: "GadgetWorld",
      image: "/placeholder.svg",
      rating: 4.2,
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      description: "Waterproof portable speaker with 360° sound and 12-hour battery life",
      currentPrice: 49.99,
      originalPrice: 59.99,
      discount: 20,
      retailer: "SoundShop",
      image: "/placeholder.svg",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Wireless Earbuds",
      description: "True wireless earbuds with active noise cancellation and touch controls",
      currentPrice: 79.99,
      originalPrice: 99.99,
      discount: 20,
      retailer: "AudioMart",
      image: "/placeholder.svg",
      rating: 4.3,
    },
    {
      id: 5,
      name: "Smart Home Hub",
      description: "Control all your smart home devices from one central hub with voice commands",
      currentPrice: 129.99,
      originalPrice: 149.99,
      discount: 15,
      retailer: "SmartHome",
      image: "/placeholder.svg",
      rating: 4.0,
    },
    {
      id: 6,
      name: "4K Action Camera",
      description: "Waterproof action camera with 4K video recording and image stabilization",
      currentPrice: 149.99,
      originalPrice: 179.99,
      discount: 17,
      retailer: "CameraWorld",
      image: "/placeholder.svg",
      rating: 4.6,
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
                  className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all"
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
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-lg font-semibold md:text-2xl">Product Search</h1>
              <p className="text-sm text-muted-foreground">Find and compare products across multiple retailers</p>
            </div>
            <div className="flex items-center gap-2">
              <form onSubmit={handleSearch} className="flex w-full gap-2 md:w-auto">
                <div className="relative flex-1 md:w-80">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="w-full appearance-none bg-background pl-8 shadow-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button type="submit">Search</Button>
              </form>
              <Button variant="outline" size="icon" className="md:hidden" onClick={() => setShowFilters(!showFilters)}>
                <Filter className="h-4 w-4" />
                <span className="sr-only">Toggle filters</span>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-[240px_1fr]">
            <Card className={`${showFilters ? "block" : "hidden"} md:block`}>
              <CardHeader>
                <CardTitle>Filters</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select defaultValue="all">
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="audio">Audio</SelectItem>
                      <SelectItem value="wearables">Wearables</SelectItem>
                      <SelectItem value="cameras">Cameras</SelectItem>
                      <SelectItem value="smart-home">Smart Home</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label>Price Range</Label>
                  <div className="grid gap-4">
                    <Slider
                      defaultValue={[0, 1000]}
                      max={1000}
                      step={10}
                      value={priceRange}
                      onValueChange={setPriceRange}
                    />
                    <div className="flex items-center justify-between">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label>Discount</Label>
                  <RadioGroup defaultValue="any">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="any" id="discount-any" />
                      <Label htmlFor="discount-any">Any</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="10" id="discount-10" />
                      <Label htmlFor="discount-10">10% or more</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="20" id="discount-20" />
                      <Label htmlFor="discount-20">20% or more</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="30" id="discount-30" />
                      <Label htmlFor="discount-30">30% or more</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="grid gap-2">
                  <Label>Retailers</Label>
                  <div className="grid gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="retailer-techstore" />
                      <Label htmlFor="retailer-techstore">TechStore</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="retailer-gadgetworld" />
                      <Label htmlFor="retailer-gadgetworld">GadgetWorld</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="retailer-soundshop" />
                      <Label htmlFor="retailer-soundshop">SoundShop</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="retailer-audiomart" />
                      <Label htmlFor="retailer-audiomart">AudioMart</Label>
                    </div>
                  </div>
                </div>
                <Button>Apply Filters</Button>
              </CardContent>
            </Card>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Showing {searchResults.length} results</p>
                </div>
                <div className="flex items-center gap-2">
                  <Label htmlFor="sort" className="text-sm">
                    Sort by:
                  </Label>
                  <Select defaultValue="relevance">
                    <SelectTrigger id="sort" className="h-8 w-[150px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevance</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="discount">Discount</SelectItem>
                      <SelectItem value="rating">Rating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {searchResults.map((product) => (
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
                      <CardDescription className="line-clamp-2 h-10">{product.description}</CardDescription>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg font-bold">${product.currentPrice}</span>
                          <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                        </div>
                        <span className="text-sm font-medium text-discount-500 price-drop-animation">
                          -{product.discount}% Off
                        </span>
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">{product.retailer}</div>
                      <div className="mt-4 flex gap-2">
                        <Button variant="outline" size="sm" className="w-full">
                          View Details
                        </Button>
                        <Button size="sm" className="w-full">
                          Track Price
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

