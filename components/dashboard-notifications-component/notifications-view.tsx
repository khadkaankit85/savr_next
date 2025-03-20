"use client"

import { useState } from "react"
import { Bell, TrendingUp } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NotificationType } from "@/@types/notifications"

interface NotificationsClientProps {
  initialNotifications: NotificationType[]
}

export default function NotificationsClient({ initialNotifications }: NotificationsClientProps) {
  const [notifications, setNotifications] = useState(initialNotifications)

  const markAllAsRead = () => {
    setNotifications(
      notifications.map(notification => ({
        ...notification,
        read: true
      }))
    )
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
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Notifications</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={markAllAsRead}>
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
          <NotificationsList
            notifications={notifications}
            getNotificationIcon={getNotificationIcon}
          />
        </TabsContent>
        <TabsContent value="unread" className="mt-4">
          <NotificationsList
            notifications={notifications.filter(notification => !notification.read)}
            getNotificationIcon={getNotificationIcon}
          />
        </TabsContent>
        <TabsContent value="price_drops" className="mt-4">
          <NotificationsList
            notifications={notifications.filter(notification => notification.type === "price_drop")}
            getNotificationIcon={getNotificationIcon}
          />
        </TabsContent>
        <TabsContent value="target_price" className="mt-4">
          <NotificationsList
            notifications={notifications.filter(notification => notification.type === "target_price")}
            getNotificationIcon={getNotificationIcon}
          />
        </TabsContent>
      </Tabs>
    </>
  )
}

interface NotificationsListProps {
  notifications: NotificationType[]
  getNotificationIcon: (type: string) => React.ReactNode
}

function NotificationsList({ notifications, getNotificationIcon }: NotificationsListProps) {
  return (
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
  )
}
