"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { CreditCard } from "lucide-react"

export default function PaymentTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>
        <CardDescription>Manage your payment methods for premium features</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <CreditCard className="h-8 w-8 text-primary" />
              <div>
                <p className="font-medium">Visa ending in 4242</p>
                <p className="text-sm text-muted-foreground">Expires 12/2025</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Edit
              </Button>
              <Button variant="outline" size="sm">
                Remove
              </Button>
            </div>
          </div>
        </div>

        <Button className="w-full">
          <CreditCard className="mr-2 h-4 w-4" />
          Add Payment Method
        </Button>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Billing Address</h3>
          <div className="rounded-lg border p-4">
            <p className="font-medium">John Doe</p>
            <p className="text-sm text-muted-foreground">123 Main St</p>
            <p className="text-sm text-muted-foreground">New York, NY 10001</p>
            <p className="text-sm text-muted-foreground">United States</p>
            <div className="mt-2 flex gap-2">
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Billing History</h3>
          <div className="rounded-lg border">
            <div className="flex items-center justify-between p-4">
              <div>
                <p className="font-medium">Premium Plan - Monthly</p>
                <p className="text-sm text-muted-foreground">June 1, 2023</p>
              </div>
              <div className="text-right">
                <p className="font-medium">$9.99</p>
                <p className="text-xs text-green-600">Paid</p>
              </div>
            </div>
            <div className="border-t flex items-center justify-between p-4">
              <div>
                <p className="font-medium">Premium Plan - Monthly</p>
                <p className="text-sm text-muted-foreground">May 1, 2023</p>
              </div>
              <div className="text-right">
                <p className="font-medium">$9.99</p>
                <p className="text-xs text-green-600">Paid</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
