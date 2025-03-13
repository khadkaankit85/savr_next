import Link from "next/link";
import { ArrowRight, Search, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Savr</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 gradient-bg">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-lg bg-savings-100 dark:bg-savings-900/30 px-3 py-1 text-sm text-savings-800 dark:text-savings-300">
                  <span className="mr-2">💰</span> Save up to 30% on your
                  purchases
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Track Prices. Compare Products.{" "}
                    <span className="text-primary">Save Money.</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Savr helps you track price changes, compare products, and
                    get notified about discounts across multiple retailers.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg" className="w-full min-[400px]:w-auto">
                      Start Saving Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#how-it-works">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full min-[400px]:w-auto"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px] overflow-hidden rounded-xl border bg-background p-4 shadow-xl">
                  <div className="absolute -right-4 -top-4 h-24 w-24 rotate-12 rounded-lg bg-savings-500/20 blur-2xl"></div>
                  <div className="absolute -left-4 -bottom-4 h-24 w-24 rotate-12 rounded-lg bg-primary/20 blur-2xl"></div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="relative flex-1">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="search"
                          placeholder="Search for products..."
                          className="w-full appearance-none bg-background pl-8 shadow-none"
                        />
                      </div>
                      <Button size="sm">Search</Button>
                    </div>
                    <div className="space-y-2">
                      <div className="rounded-lg border p-3 transition-all hover:border-primary hover:shadow-sm">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Wireless Headphones</div>
                          <div className="text-sm font-medium text-discount-500 price-drop-animation">
                            -15% Off
                          </div>
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">
                          $89.99 at TechStore
                        </div>
                      </div>
                      <div className="rounded-lg border p-3 transition-all hover:border-primary hover:shadow-sm">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">
                            Smart Watch Series 5
                          </div>
                          <div className="text-sm font-medium text-discount-500 price-drop-animation">
                            -10% Off
                          </div>
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">
                          $199.99 at GadgetWorld
                        </div>
                      </div>
                      <div className="rounded-lg border p-3 transition-all hover:border-primary hover:shadow-sm">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Bluetooth Speaker</div>
                          <div className="text-sm font-medium text-discount-500 price-drop-animation">
                            -20% Off
                          </div>
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">
                          $49.99 at SoundShop
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 dark:bg-muted/10"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                <span className="mr-2">✨</span> Powerful Features
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Save Smarter, Shop Better
                </h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to save money on your favorite products.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50">
                <div className="rounded-full bg-primary/10 p-3">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Smart Search</h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Find exactly what you're looking for with powerful filters for
                  categories, price ranges, and discounts.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50">
                <div className="rounded-full bg-primary/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Price Comparison</h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Compare prices across multiple retailers in real-time to find
                  the absolute best deals.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50">
                <div className="rounded-full bg-primary/10 p-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Price Tracking</h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Track price changes over time and get instant notifications
                  when prices drop to your target.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  How It Works
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start saving money in just a few simple steps.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">Sign Up</h3>
                <p className="text-center text-sm text-gray-500">
                  Create an account to start tracking products and saving money.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">Add Products</h3>
                <p className="text-center text-sm text-gray-500">
                  Search for products and add them to your tracking list.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">Save Money</h3>
                <p className="text-center text-sm text-gray-500">
                  Get notified when prices drop and save money on your
                  purchases.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6" />
              <span className="text-xl font-bold">Savr</span>
            </div>
            <p className="text-sm text-gray-500">
              Track prices, compare products, and save money on your purchases.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <h3 className="text-sm font-medium">Company</h3>
            <nav className="flex flex-col gap-2">
              <Link href="#" className="text-sm hover:underline">
                About
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Careers
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <h3 className="text-sm font-medium">Legal</h3>
            <nav className="flex flex-col gap-2">
              <Link href="#" className="text-sm hover:underline">
                Terms
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Privacy
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Cookies
              </Link>
            </nav>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-gray-500 md:text-left">
              © {new Date().getFullYear()} Savr. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-gray-500 hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
