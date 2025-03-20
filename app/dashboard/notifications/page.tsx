import NotificationsClient from "@/components/dashboard-notifications-component/notifications-view"
import { getNotifications } from "@/lib/getnotifications"

export default async function NotificationsPage() {
  // Fetch notifications on the server
  const notifications = await getNotifications()

  return <NotificationsClient initialNotifications={notifications} />
}
