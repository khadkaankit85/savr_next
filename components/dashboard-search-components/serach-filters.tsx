"use client"

import { useState } from "react"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export function SearchFilters() {
  const [priceRange, setPriceRange] = useState([0, 1000])

  return (
    <Card className="md:block">
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
  )
}
