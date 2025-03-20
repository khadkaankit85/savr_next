"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AccountTab from "./account-tab"
import NotificationsTab from "./notifications-tab"
import PaymentTab from "./payment-methods-tab"
import PrivacyTab from "./privacy-tab"

export default function SettingsPageClient() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
        <TabsTrigger value="payment">Payment Methods</TabsTrigger>
        <TabsTrigger value="privacy">Privacy & Security</TabsTrigger>
      </TabsList>

      <TabsContent value="account" className="space-y-4 pt-4">
        <AccountTab />
      </TabsContent>

      <TabsContent value="notifications" className="space-y-4 pt-4">
        <NotificationsTab />
      </TabsContent>

      <TabsContent value="payment" className="space-y-4 pt-4">
        <PaymentTab />
      </TabsContent>

      <TabsContent value="privacy" className="space-y-4 pt-4">
        <PrivacyTab />
      </TabsContent>
    </Tabs>
  )
}
