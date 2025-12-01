import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle, Volume, VolumeX, Youtube } from "lucide-react";

type Video = {
  id: string | number;
  title: string;
  description?: string;
  youtubeUrl: string;
  duration?: string;
};

const getYouTubeId = (url: string) => {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/
  );
  return match ? match[1] : null;
};

/**
 * VideoCard (improved)
 *
 * Key behaviors:
 * - Hover plays (muted). Leaving stops (iframe unmounts) unless `unlocked`.
 * - Click on the card "unlocks" audio for that card (one reload to unmute).
 * - Only one card is active at a time: cards dispatch a `video-focus` event on hover/unlock;
 *   other cards respond by stopping their iframe (so only one plays).
 * - "Watch Full Demo" button opens YouTube in new tab reliably.
 */
export default function VideoCard({ video }: { video: Video }) {
  const idRef = useRef<string | number>(video.id);
  const videoId = getYouTubeId(video.youtubeUrl);
  const thumbnail = videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : "/images/placeholder.jpg";

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [hover, setHover] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [thumbLoaded, setThumbLoaded] = useState(false);

  
  const shouldMountIframe = inView && (hover || unlocked);

  // Create src for iframe based on mute state
  const makeSrc = (mute: boolean | number) =>
    videoId
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${
          mute ? 1 : 0
        }&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&playsinline=1`
      : "";

  // Lazy-load with IntersectionObserver
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Global focus mechanism:
  // - When this card starts hover or unlocks, dispatch a window event 'video-focus' with this card id.
  // - All cards subscribe and if they get a focus event for another id, they stop hover (and if they
  //   are not unlocked, their iframe will unmount).
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as { id: string | number };
      if (!detail) return;
      if (detail.id !== idRef.current) {
        // If another card focused, stop hovering here.
        setHover(false);
      }
    };
    window.addEventListener("video-focus", handler as EventListener);
    return () =>
      window.removeEventListener("video-focus", handler as EventListener);
  }, []);

  // When we begin hover, broadcast focus so other cards stop
  useEffect(() => {
    if (hover) {
      const ev = new CustomEvent("video-focus", {
        detail: { id: idRef.current },
      });
      window.dispatchEvent(ev);
    }
  }, [hover]);

  // When we unlock (user click), broadcast focus and keep iframe mounted (unmuted)
  const onCardClick = (e: React.MouseEvent) => {
    // Prevent accidental text selection or other defaults; we DO NOT prevent navigation on the explicit link
    // below — that link is a separate element with its own href.
    e.stopPropagation();

    if (!unlocked) {
      setUnlocked(true);
      // Broadcast focus so other cards stop playing
      const ev = new CustomEvent("video-focus", {
        detail: { id: idRef.current },
      });
      window.dispatchEvent(ev);
      // Note: this will cause the iframe to be re-mounted with mute=0 (reload once)
    }
  };

  // Accessibility: allow Enter/Space to unlock
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onCardClick(e as unknown as React.MouseEvent);
    }
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative rounded-3xl overflow-hidden bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 hover:border-[#084097] dark:hover:border-cyan-500 transition-all duration-500 hover:shadow-2xl"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onCardClick}
      onKeyDown={onKeyDown}
      role="group"
      tabIndex={0}
    >
      <div className="block">
        <div className="relative aspect-video bg-gray-100 dark:bg-slate-800">
          {/* Thumbnail (blur-up) */}
          <img
            src={thumbnail}
            alt={video.title}
            onLoad={() => setThumbLoaded(true)}
            className={`
              absolute inset-0 w-full h-full object-cover
              transition-all duration-500
              ${
                thumbLoaded
                  ? "opacity-100 blur-0 scale-100"
                  : "opacity-0 blur-sm scale-105"
              }
            `}
          />

          {/* Shimmer until thumbnail loads */}
          {!thumbLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 rounded-lg animate-pulse bg-gray-200 dark:bg-slate-700/60" />
            </div>
          )}

          {/* Iframe: mounted only when shouldMountIframe === true */}
          {shouldMountIframe && videoId && (
            <iframe
              key={`${videoId}-${unlocked ? "unmuted" : "muted"}`}
              src={makeSrc(unlocked ? 0 : 1)}
              title={video.title}
              allow="autoplay; encrypted-media"
              className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
                hover || unlocked
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
              loading="lazy"
            />
          )}

          {/* Center Play visual */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              className={`
                w-20 h-20 bg-white/90 dark:bg-black/80 rounded-full flex items-center justify-center shadow-2xl
                transition-transform duration-300
                ${hover ? "opacity-0 scale-75" : "opacity-100 scale-100"}
              `}
              aria-hidden
            >
              <PlayCircle className="w-12 h-12 text-[#084097] dark:text-cyan-400" />
            </motion.div>
          </div>

          {/* Mute / Unmute hint badge (non-interactive) */}
          <div className="absolute top-3 left-3">
            <div className="px-3 py-1 rounded-full bg-black/60 text-white text-sm font-semibold backdrop-blur-sm flex items-center gap-2 pointer-events-none">
              {unlocked ? (
                <>
                  <Volume className="w-4 h-4" />
                  <span>Audio On</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span>Muted — click to enable</span>
                </>
              )}
            </div>
          </div>

          {/* Duration badge */}
          {video.duration && (
            <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-bold">
              {video.duration}
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-[#084097] dark:group-hover:text-cyan-400 transition-colors">
            {video.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
            {video.description}
          </p>

          <div className="mt-6 flex items-center justify-between gap-3">
            {/* Left: small label */}
            <div className="flex items-center gap-3 text-[#084097] dark:text-cyan-400 font-bold">
              <Youtube className="w-5 h-5" />
              <span>Watch Preview</span>
            </div>

            {/* Right: explicit link to YouTube (opens in new tab) */}
            <a
              href={video.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-4 py-2 bg-[#084097] hover:bg-[#083a7a] text-white rounded-full font-semibold transition"
              onClick={(e) => {
                // Allow click to proceed — but stop propagation so it doesn't trigger unlock when user intentionally wants to open
                e.stopPropagation();
              }}
            >
              Open on YouTube
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
