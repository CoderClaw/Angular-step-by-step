export interface SupportTicket {
  id: string;
  customerName: string;
  subject: string;
  priority: "low" | "medium" | "high";
  status: "new" | "waiting" | "resolved";
  owner: string;
  updatedAt: string;
}
