"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"

export default function NotificationsTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
        <CardDescription>Manage how and when you receive notifications</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Price Alerts</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="price-drop">Price drop alerts</Label>
              <Switch id="price-drop" defaultChecked />
            </div>
            <p className="text-sm text-muted-foreground">
              Get notified when prices drop on your tracked items
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="target-price">Target price alerts</Label>
              <Switch id="target-price" defaultChecked />
            </div>
            <p className="text-sm text-muted-foreground">Get notified when items reach your target price</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="back-in-stock">Back in stock alerts</Label>
              <Switch id="back-in-stock" defaultChecked />
            </div>
            <p className="text-sm text-muted-foreground">
              Get notified when out-of-stock items become available
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Notification Methods</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="email-notifications" defaultChecked />
              <Label htmlFor="email-notifications">Email</Label>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="push-notifications" defaultChecked />
              <Label htmlFor="push-notifications">Push notifications</Label>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="sms-notifications" />
              <Label htmlFor="sms-notifications">SMS</Label>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Notification Frequency</h3>
          <RadioGroup defaultValue="immediate">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="immediate" id="immediate" />
              <Label htmlFor="immediate">Immediate</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="daily" id="daily" />
              <Label htmlFor="daily">Daily digest</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="weekly" id="weekly" />
              <Label htmlFor="weekly">Weekly digest</Label>
            </div>
          </RadioGroup>
        </div>

        <Button>Save Preferences</Button>
      </CardContent>
    </Card>
  )
}
