import { ProfileClient } from "@/components/dashboard-profile-components/profile-client";

// This would typically come from a database
const getProfileData = async () => {
  // In a real app, you'd fetch this from an API or database
  return {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    bio: "I'm always looking for the best deals on tech products. Love to track prices and save money on my purchases.",
    location: "New York, USA",
    joinDate: "January 2023",
    totalSaved: "$145.75",
    trackedItems: 12,
    alerts: 5,
  };
};

// Recent activity would typically come from a database
const getRecentActivity = async () => {
  return [
    {
      icon: "TrendingUp",
      title: "Price Drop Alert",
      description: "Wireless Headphones dropped to $89.99",
      timeAgo: "2 days ago",
    },
    {
      icon: "Search",
      title: "Added New Item",
      description: "Started tracking Smart Watch Series 5",
      timeAgo: "5 days ago",
    },
    {
      icon: "Settings",
      title: "Updated Settings",
      description: "Changed notification preferences",
      timeAgo: "1 week ago",
    },
  ];
};

export default async function ProfilePage() {
  const profileData = await getProfileData();
  const recentActivity = await getRecentActivity();

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <ProfileClient
        initialProfileData={profileData}
        recentActivity={recentActivity}
      />
    </main>
  );
}
