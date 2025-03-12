"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Bell, ChevronDown, Home, LogOut, Menu, Search, Settings, TrendingUp, User } from "lucide-react"

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"

export default function NotificationsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const notifications = [
    {
      id: 1,
      type: "price_drop",
      title: "Price Drop Alert",
      message: "Wireless Headphones dropped to $89.99 (15% off)",
      date: "2 hours ago",
      read: false,
      product: {
        id: 1,
        name: "Wireless Headphones",
        image: "/placeholder.svg",
      },
    },
    {
      id: 2,
      type: "target_price",
      title: "Target Price Reached",
      message: "Smart Watch Series 5 has reached your target price of $199.99",
      date: "1 day ago",
      read: false,
      product: {
        id: 2,
        name: "Smart Watch Series 5",
        image: "/placeholder.svg",
      },
    },
    {
      id: 3,
      type: "back_in_stock",
      title: "Back in Stock",
      message: "Bluetooth Speaker is back in stock at SoundShop",
      date: "3 days ago",
      read: true,
      product: {
        id: 3,
        name: "Bluetooth Speaker",
        image: "/placeholder.svg",
      },
    },
    {
      id: 4,
      type: "price_drop",
      title: "Price Drop Alert",
      message: "Wireless Earbuds dropped to $79.99 (20% off)",
      date: "5 days ago",
      read: true,
      product: {
        id: 4,
        name: "Wireless Earbuds",
        image: "/placeholder.svg",
      },
    },
    {
      id: 5,
      type: "system",
      title: "Welcome to Savr",
      message: "Thank you for joining Savr! Start tracking prices and save money on your purchases.",
      date: "2 weeks ago",
      read: true,
    },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "price_drop":
        return (
          <div className="rounded-full bg-primary/20 p-2">
            <TrendingUp className="h-4 w-4 text-primary" />
          </div>
        )
      case "target_price":
        return (
          <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-green-600 dark:text-green-400"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        )
      case "back_in_stock":
        return (
          <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-blue-600 dark:text-blue-400"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
          </div>
        )
      case "system":
        return (
          <div className="rounded-full bg-gray-100 dark:bg-gray-800 p-2">
            <Bell className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          </div>
        )
      default:
        return (
          <div className="rounded-full bg-primary/20 p-2">
            <Bell className="h-4 w-4 text-primary" />
          </div>
        )
    }
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
              <Link href="/dashboard/notifications" className="flex items-center gap-2 text-lg font-semibold">
                <Bell className="h-5 w-5" />
                Notifications
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
                  href="/dashboard/notifications"
                  className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all"
                >
                  <Bell className="h-4 w-4" />
                  Notifications
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
            <h1 className="text-lg font-semibold md:text-2xl">Notifications</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Mark All as Read
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">Unread</TabsTrigger>
              <TabsTrigger value="price_drops">Price Drops</TabsTrigger>
              <TabsTrigger value="target_price">Target Price</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <Card>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`flex items-start gap-4 p-4 ${!notification.read ? "bg-primary/5" : ""}`}
                      >
                        {getNotificationIcon(notification.type)}
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">{notification.title}</h3>
                            <span className="text-xs text-muted-foreground">{notification.date}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{notification.message}</p>
                          {notification.product && (
                            <div className="mt-2 flex items-center gap-2">
                              <div className="h-8 w-8 overflow-hidden rounded-md">
                                <img
                                  src={notification.product.image || "/placeholder.svg"}
                                  alt={notification.product.name}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <Link
                                href={`/product/${notification.product.id}`}
                                className="text-xs font-medium text-primary hover:underline"
                              >
                                View Product
                              </Link>
                            </div>
                          )}
                        </div>
                        {!notification.read && <div className="flex h-2 w-2 rounded-full bg-primary"></div>}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="unread" className="mt-4">
              <Card>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {notifications
                      .filter((notification) => !notification.read)
                      .map((notification) => (
                        <div key={notification.id} className="flex items-start gap-4 bg-primary/5 p-4">
                          {getNotificationIcon(notification.type)}
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">{notification.title}</h3>
                              <span className="text-xs text-muted-foreground">{notification.date}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{notification.message}</p>
                            {notification.product && (
                              <div className="mt-2 flex items-center gap-2">
                                <div className="h-8 w-8 overflow-hidden rounded-md">
                                  <img
                                    src={notification.product.image || "/placeholder.svg"}
                                    alt={notification.product.name}
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                                <Link
                                  href={`/product/${notification.product.id}`}
                                  className="text-xs font-medium text-primary hover:underline"
                                >
                                  View Product
                                </Link>
                              </div>
                            )}
                          </div>
                          <div className="flex h-2 w-2 rounded-full bg-primary"></div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="price_drops" className="mt-4">
              <Card>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {notifications
                      .filter((notification) => notification.type === "price_drop")
                      .map((notification) => (
                        <div
                          key={notification.id}
                          className={`flex items-start gap-4 p-4 ${!notification.read ? "bg-primary/5" : ""}`}
                        >
                          {getNotificationIcon(notification.type)}
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">{notification.title}</h3>
                              <span className="text-xs text-muted-foreground">{notification.date}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{notification.message}</p>
                            {notification.product && (
                              <div className="mt-2 flex items-center gap-2">
                                <div className="h-8 w-8 overflow-hidden rounded-md">
                                  <img
                                    src={notification.product.image || "/placeholder.svg"}
                                    alt={notification.product.name}
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                                <Link
                                  href={`/product/${notification.product.id}`}
                                  className="text-xs font-medium text-primary hover:underline"
                                >
                                  View Product
                                </Link>
                              </div>
                            )}
                          </div>
                          {!notification.read && <div className="flex h-2 w-2 rounded-full bg-primary"></div>}
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="target_price" className="mt-4">
              <Card>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {notifications
                      .filter((notification) => notification.type === "target_price")
                      .map((notification) => (
                        <div
                          key={notification.id}
                          className={`flex items-start gap-4 p-4 ${!notification.read ? "bg-primary/5" : ""}`}
                        >
                          {getNotificationIcon(notification.type)}
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">{notification.title}</h3>
                              <span className="text-xs text-muted-foreground">{notification.date}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{notification.message}</p>
                            {notification.product && (
                              <div className="mt-2 flex items-center gap-2">
                                <div className="h-8 w-8 overflow-hidden rounded-md">
                                  <img
                                    src={notification.product.image || "/placeholder.svg"}
                                    alt={notification.product.name}
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                                <Link
                                  href={`/product/${notification.product.id}`}
                                  className="text-xs font-medium text-primary hover:underline"
                                >
                                  View Product
                                </Link>
                              </div>
                            )}
                          </div>
                          {!notification.read && <div className="flex h-2 w-2 rounded-full bg-primary"></div>}
                        </div>
                      ))}
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

