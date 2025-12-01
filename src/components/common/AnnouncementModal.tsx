// src/components/common/AnnouncementModal.tsx
import { X } from "lucide-react";
import { motion } from "framer-motion";

interface AnnouncementModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  media?: string; // YouTube URL or image URL
  mediaType?: "video" | "image";
}

export default function AnnouncementModal({
  isOpen,
  onClose,
  title,
  content,
  media,
  mediaType = "image",
}: AnnouncementModalProps) {
  if (!isOpen) return null;

  const isVideo = mediaType === "video";
  const videoId = media?.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/)?.[1];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="relative max-w-5xl w-full mx-6 bg-white dark:bg-slate-900 rounded-3xl shadow-3xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-3 bg-white/20 dark:bg-black/40 backdrop-blur-sm rounded-full hover:bg-white/40 dark:hover:bg-black/60 transition"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="grid lg:grid-cols-2">
          {/* Media Side */}
          <div className="relative aspect-video lg:aspect-auto lg:h-full bg-black">
            {isVideo && videoId ? (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            ) : media ? (
              <img
                src={media}
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full bg-gradient-to-br from-[#084097] to-cyan-600">
                <div className="text-white text-4xl font-black">Digi Hub</div>
              </div>
            )}
          </div>

          {/* Content Side */}
          <div className="p-10 lg:p-16 space-y-8">
            <div>
              <div className="inline-flex items-center gap-3 bg-[#084097]/10 dark:bg-[#084097]/20 px-6 py-3 rounded-full text-sm font-bold text-[#084097] dark:text-cyan-400 mb-6">
                Announcement
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
                {title}
              </h2>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
              {content.split("\n").map((line, i) => (
                <p key={i} className="mb-4">
                  {line}
                </p>
              ))}
            </div>

            <div className="pt-8 flex gap-6">
              <button
                onClick={onClose}
                className="px-10 py-4 border-2 border-gray-300 dark:border-white/30 text-gray-700 dark:text-white font-bold rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
