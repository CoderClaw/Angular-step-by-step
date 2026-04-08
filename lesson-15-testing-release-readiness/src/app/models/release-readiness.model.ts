export interface ReleaseCheck {
  id: string;
  title: string;
  owner: string;
  status: "Ready" | "Needs attention" | "Blocked";
}

export interface ReleaseReadinessSummary {
  totalChecks: number;
  readyChecks: number;
  needsAttentionChecks: number;
  blockedChecks: number;
  launchState: "On track" | "At risk" | "Blocked";
  nextAction: string;
}
