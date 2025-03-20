"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Shield } from "lucide-react"

export default function PrivacyTab() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Privacy & Security</CardTitle>
          <CardDescription>Manage your privacy and security settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Password</h3>
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input id="confirm-password" type="password" />
            </div>
            <Button>Update Password</Button>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Two-Factor Authentication</h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Two-factor authentication</p>
                <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
              </div>
              <Switch id="2fa" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Data Privacy</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="data-collection" defaultChecked />
                <Label htmlFor="data-collection">
                  Allow data collection to improve product recommendations
                </Label>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="third-party" defaultChecked />
                <Label htmlFor="third-party">Allow sharing data with trusted third parties</Label>
              </div>
            </div>
            <Button variant="outline">
              <Shield className="mr-2 h-4 w-4" />
              Download My Data
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sessions</CardTitle>
          <CardDescription>Manage your active sessions and devices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Chrome on Windows</p>
                  <p className="text-sm text-muted-foreground">New York, USA (Current)</p>
                  <p className="text-xs text-muted-foreground">Last active: Just now</p>
                </div>
                <Button variant="outline" size="sm" disabled>
                  Current
                </Button>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Safari on iPhone</p>
                  <p className="text-sm text-muted-foreground">New York, USA</p>
                  <p className="text-xs text-muted-foreground">Last active: 2 hours ago</p>
                </div>
                <Button variant="outline" size="sm">
                  Sign Out
                </Button>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              Sign Out All Other Devices
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
