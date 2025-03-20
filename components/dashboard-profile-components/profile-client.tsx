"use client";

import { useState } from "react";
import { Camera, Pencil, Search, Settings, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ProfileData {
  name: string;
  email: string;
  phone: string;
  bio: string;
  location: string;
  joinDate: string;
  totalSaved: string;
  trackedItems: number;
  alerts: number;
}

interface ActivityItem {
  icon: string;
  title: string;
  description: string;
  timeAgo: string;
}

interface ProfileClientProps {
  initialProfileData: ProfileData;
  recentActivity: ActivityItem[];
}

export function ProfileClient({ initialProfileData, recentActivity }: ProfileClientProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>(initialProfileData);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // Here you would typically save the profile data to a backend
    console.log("Saving profile:", profileData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Function to render the appropriate icon based on the icon name
  const renderActivityIcon = (iconName: string) => {
    switch (iconName) {
      case "TrendingUp":
        return <TrendingUp className="h-4 w-4 text-primary" />;
      case "Search":
        return <Search className="h-4 w-4 text-primary" />;
      case "Settings":
        return <Settings className="h-4 w-4 text-primary" />;
      default:
        return <TrendingUp className="h-4 w-4 text-primary" />;
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">My Profile</h1>
        {!isEditing && (
          <Button
            onClick={() => setIsEditing(true)}
            variant="outline"
            size="sm"
          >
            <Pencil className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
        <div className="flex flex-col gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="h-24 w-24 overflow-hidden rounded-full bg-muted">
                    <img
                      src="/placeholder.svg"
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {isEditing && (
                    <Button
                      size="icon"
                      variant="outline"
                      className="absolute bottom-0 right-0 h-8 w-8 rounded-full"
                    >
                      <Camera className="h-4 w-4" />
                      <span className="sr-only">
                        Change profile picture
                      </span>
                    </Button>
                  )}
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-bold">{profileData.name}</h2>
                  <p className="text-sm text-muted-foreground">
                    {profileData.location}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Member since {profileData.joinDate}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Total Saved</span>
                  <span className="font-bold text-primary">
                    {profileData.totalSaved}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Tracked Items</span>
                  <span className="font-bold">
                    {profileData.trackedItems}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Active Alerts</span>
                  <span className="font-bold">{profileData.alerts}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                {isEditing
                  ? "Edit your personal information"
                  : "Your personal information"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <form onSubmit={handleSaveProfile} className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={profileData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={profileData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      name="location"
                      value={profileData.location}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      name="bio"
                      rows={4}
                      value={profileData.bio}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex gap-2 justify-end mt-4">
                    <Button
                      variant="outline"
                      type="button"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit">Save Changes</Button>
                  </div>
                </form>
              ) : (
                <div className="grid gap-4">
                  <div className="grid gap-1">
                    <h3 className="text-sm font-medium">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      {profileData.email}
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-sm font-medium">Phone</h3>
                    <p className="text-sm text-muted-foreground">
                      {profileData.phone}
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-sm font-medium">Location</h3>
                    <p className="text-sm text-muted-foreground">
                      {profileData.location}
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-sm font-medium">Bio</h3>
                    <p className="text-sm text-muted-foreground">
                      {profileData.bio}
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/20 p-2">
                      {renderActivityIcon(activity.icon)}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {activity.description}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {activity.timeAgo}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
