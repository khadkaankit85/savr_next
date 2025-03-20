"use client"

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Filter } from "lucide-react"

export function SearchForm() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log("Searching for:", searchQuery)
  }

  return (
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
      <Button
        variant="outline"
        size="icon"
        className="md:hidden"
        onClick={() => setShowFilters(!showFilters)}
      >
        <Filter className="h-4 w-4" />
        <span className="sr-only">Toggle filters</span>
      </Button>
    </div>
  )
}

