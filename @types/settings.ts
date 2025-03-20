export interface AccountSettings {
  username: string;
  email: string;
  language: string;
  timezone: string;
  marketingEmails: boolean;
}

export interface NotificationPreferences {
  priceDropAlerts: boolean;
  targetPriceAlerts: boolean;
  backInStockAlerts: boolean;
  emailNotifications: boolean;
  pushNotifications: boolean;
  smsNotifications: boolean;
  frequency: 'immediate' | 'daily' | 'weekly';
}

export interface PaymentMethod {
  id: string;
  type: string;
  lastFour: string;
  expiry: string;
}

export interface BillingAddress {
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface BillingHistory {
  id: string;
  description: string;
  date: string;
  amount: number;
  status: 'paid' | 'pending' | 'failed';
}

export interface SecuritySettings {
  twoFactorEnabled: boolean;
  dataCollection: boolean;
  thirdPartySharing: boolean;
}

export interface Session {
  id: string;
  device: string;
  location: string;
  lastActive: string;
  isCurrent: boolean;
}
