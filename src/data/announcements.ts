// src/data/announcements.ts

export interface Announcement {
  id: string;
  message: string;
  isActive: boolean;
  isCritical?: boolean; // NEW: forces modal on load
  showOncePerSession?: boolean; // true = once per tab/session, false = every reload
  modalTitle?: string;
  modalContent?: string;
  modalMedia?: string;
  modalMediaType?: "video" | "image";
}

export const announcements: Announcement[] = [
  {
    id: "1",
    isActive: false,
    message: "NEW: Mobile App v3.0 Launched!",
    modalTitle: "Mobile App v3.0 is Here!",
    modalContent: "Biometric login, real-time alerts, dark mode...",
    modalMedia: "https://www.youtube.com/watch?v=abc123",
    modalMediaType: "video",
  },
  {
    id: "2",
    isActive: false,
    isCritical: true, // This one will AUTO-OPEN
    showOncePerSession: true, // false = every reload 
    message: "URGENT: System Maintenance Tonight 11PM–2AM",
    modalTitle: "Scheduled Maintenance Tonight",
    modalContent:
      "Trading will be unavailable from 11:00 PM to 2:00 AM...\n\nWe’re upgrading our core systems for better performance.",
    modalMedia: "/images/maintenance-banner.jpg",
    modalMediaType: "image",
  },
];
