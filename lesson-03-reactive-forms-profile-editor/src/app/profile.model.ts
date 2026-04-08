export type NotificationChannel = "email" | "slack" | "none";

// This interface represents the shape we want to save after validation passes.
// Keeping it separate from the form definition helps beginners distinguish
// between domain data and Angular's form control types.
export interface TeamProfile {
  fullName: string;
  email: string;
  role: string;
  timeZone: string;
  bio: string;
  notificationChannel: NotificationChannel;
  slackHandle: string;
  weeklyFocusHours: number;
  receiveDigest: boolean;
}
