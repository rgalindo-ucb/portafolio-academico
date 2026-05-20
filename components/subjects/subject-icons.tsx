import {
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Sparkles,
  SquareTerminal,
  UsersRound,
} from "lucide-react";

export const subjectIcons = {
  "briefcase-business": BriefcaseBusiness,
  "users-round": UsersRound,
  sparkles: Sparkles,
  "chart-no-axes-combined": ChartNoAxesCombined,
  "terminal-square": SquareTerminal,
};

export type SubjectIconName = keyof typeof subjectIcons;
