export type TileTeam = "All" | "Platform" | "Support" | "Revenue";

export interface DashboardTile {
  id: string;
  title: string;
  team: Exclude<TileTeam, "All">;
  metric: string;
  context: string;
  saved: boolean;
}

export interface DashboardPreferences {
  query: string;
  team: TileTeam;
  showSavedOnly: boolean;
  compactMode: boolean;
}
