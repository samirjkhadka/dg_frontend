// src/components/common/AnnouncementTicker.tsx
import { X } from "lucide-react";
import { announcements } from "@/data/announcements";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function AnnouncementTicker() {
  const activeAnnouncement = announcements.find((a) => a.isActive);
  const [isDismissed, setIsDismissed] = useState(false);

  if (!activeAnnouncement || isDismissed) return null;

  return (
    <div className="bg-gradient-to-r from-[#084097] to-cyan-600 text-white relative overflow-hidden">
      <div className="flex items-center justify-center py-3 px-6 animate-marquee whitespace-nowrap">
        <span className="mx-4 text-sm md:text-base font-bold tracking-wider">
          {activeAnnouncement.link ? (
            <Link
              to={activeAnnouncement.link}
              className="hover:underline inline-flex items-center gap-3"
            >
              <span className="animate-pulse">LIVE</span>{" "}
              {activeAnnouncement.message}
            </Link>
          ) : (
            <span className="inline-flex items-center gap-3">
              <span className="animate-pulse">LIVE</span>{" "}
              {activeAnnouncement.message}
            </span>
          )}
        </span>
        {/* Duplicate for seamless loop */}
        <span className="mx-4 text-sm md:text-base font-bold tracking-wider">
          {activeAnnouncement.link ? (
            <Link
              to={activeAnnouncement.link}
              className="hover:underline inline-flex items-center gap-3"
            >
              <span className="animate-pulse">LIVE</span>{" "}
              {activeAnnouncement.message}
            </Link>
          ) : (
            <span className="inline-flex items-center gap-3">
              <span className="animate-pulse">LIVE</span>{" "}
              {activeAnnouncement.message}
            </span>
          )}
        </span>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setIsDismissed(true)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}
