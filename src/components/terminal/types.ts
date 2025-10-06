import type { ReactNode } from "react";

export type CommandId = "help" | "about" | "experience" | "projects" | "toolkit" | "contact";

export interface Command {
  id: CommandId;
  label: string;
  description: string;
  response: () => ReactNode;
}

export interface LogEntry {
  id: number;
  role: "user" | "system";
  content: ReactNode;
}

export interface ExperienceSummary {
  title: string;
  timeframe: string;
  bullets: string[];
  moreCount: number;
  url?: string;
}

export interface FeaturedProject {
  name: string;
  description: string;
  url?: string;
  github?: string;
  tags: string[];
}

export interface CommandSummary {
  id: CommandId;
  description: string;
}
