// src/components/common/AnnouncementTicker.tsx
import { X, Info } from "lucide-react";
import { announcements } from "@/data/announcements";
import { useState, useEffect } from "react";
import AnnouncementModal from "./AnnouncementModal";

export default function AnnouncementTicker() {
  const activeAnnouncements = announcements.filter((a) => a.isActive);
  const [dismissedIds, setDismissedIds] = useState<string[]>(() => {
    const saved = localStorage.getItem("dismissed-announcements");
    return saved ? JSON.parse(saved) : [];
  });
  const [sessionShown, setSessionShown] = useState<string[]>([]);

  const visibleAnnouncements = activeAnnouncements.filter(
    (a) => !dismissedIds.includes(a.id)
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<any>(null);

  // AUTO-OPEN CRITICAL ANNOUNCEMENT ON PAGE LOAD
  useEffect(() => {
    const critical = visibleAnnouncements.find((a) => a.isCritical);

    if (critical) {
      const shouldShow =
        critical.showOncePerSession === false ||
        !sessionShown.includes(critical.id);

      if (shouldShow) {
        setModalContent(critical);
        setIsModalOpen(true);

        if (critical.showOncePerSession !== false) {
          setSessionShown((prev) => [...prev, critical.id]);
        }
      }
    }
  }, []);

  // Rotate ticker (only non-critical)
  useEffect(() => {
    const tickerItems = visibleAnnouncements.filter((a) => !a.isCritical);
    if (tickerItems.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tickerItems.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [visibleAnnouncements]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    const currentId =
      visibleAnnouncements[currentIndex]?.id ||
      visibleAnnouncements.find((a) => a.isCritical)?.id;
    if (currentId) {
      const newDismissed = [...dismissedIds, currentId];
      setDismissedIds(newDismissed);
      localStorage.setItem(
        "dismissed-announcements",
        JSON.stringify(newDismissed)
      );
    }
  };

  const openModal = (ann: any) => {
    setModalContent(ann);
    setIsModalOpen(true);
  };

  const currentTickerItem = visibleAnnouncements.find((a) => !a.isCritical)
    ? visibleAnnouncements.filter((a) => !a.isCritical)[
        currentIndex % visibleAnnouncements.filter((a) => !a.isCritical).length
      ]
    : visibleAnnouncements[0];

  if (visibleAnnouncements.length === 0) return null;

  return (
    <>
      {/* TICKER — only shows non-critical */}
      {visibleAnnouncements.some((a) => !a.isCritical) && (
        <div
          className="bg-gradient-to-r from-[#084097] to-cyan-600 text-white relative overflow-hidden cursor-pointer select-none"
          onClick={() => currentTickerItem && openModal(currentTickerItem)}
        >
          <div className="flex items-center justify-center py-3 px-6">
            <span className="text-sm md:text-base font-bold tracking-wider inline-flex items-center gap-3">
              <Info className="w-5 h-5 animate-pulse" />
              {currentTickerItem?.message}
            </span>
          </div>
          <button
            onClick={handleDismiss}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition z-10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* MODAL */}
      <AnnouncementModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalContent?.modalTitle || modalContent?.message}
        content={
          modalContent?.modalContent || "Important update from Digi Hub."
        }
        media={modalContent?.modalMedia}
        mediaType={modalContent?.modalMediaType || "image"}
      />
    </>
  );
}
