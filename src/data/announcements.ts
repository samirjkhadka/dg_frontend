// src/data/announcements.ts
export interface Announcement {
  id: string;
  message: string;
  isActive: boolean; // ← Only active ones show
  link?: string; // Optional link
}

export const announcements: Announcement[] = [
  {
    id: "1",
    message:
      "Digi Hub powers new real-time trading platform for Broker No. 46 — Launching this week!",
    isActive: true,
    link: "/portfolio/broker-46",
  },
];
