// src/lib/getIcon.ts
import { iconMap, type IconName } from "@/lib/icons";
import { LucideIcon } from "lucide-react";

export const getIcon = (name: string): LucideIcon => {
  return iconMap[name as IconName] || iconMap.Landmark; // fallback
};