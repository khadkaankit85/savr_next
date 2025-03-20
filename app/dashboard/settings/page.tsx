import SettingsPageClient from "@/components/dashboard-settings-components/settings-page-components";

export default function SettingsPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Settings</h1>
      </div>
      <SettingsPageClient />
    </main>
  )
}
