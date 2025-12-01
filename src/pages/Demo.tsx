// src/pages/Demo.tsx
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { PlayCircle, Youtube } from "lucide-react";
import { mockDemoVideos } from "@/data/mockDemoData";

const getYouTubeId = (url: string) => {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/
  );
  return match ? match[1] : null;
};

export default function Demo() {
  return (
    <>
      <Helmet>
        <title>Live Demos | Digi Hub — Watch Our Platforms in Action</title>
        <meta
          name="description"
          content="Watch full demonstrations of our trading platforms, mobile apps, and broker tools. Trusted by Nepal's top financial institutions."
        />
      </Helmet>

      <div className="pt-24 md:pt-28 lg:pt-32 min-h-screen bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-gray-100">
        {/* HERO — Identical to About.tsx */}
        <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <motion.div
              animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
              transition={{ duration: 20, repeat: Infinity }}
              className="absolute top-0 -left-40 w-96 h-96 bg-[#084097]/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
              transition={{ duration: 25, repeat: Infinity }}
              className="absolute bottom-0 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
            />
          </div>

          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-5xl mx-auto space-y-8"
            >
              <div className="inline-flex items-center gap-3 bg-[#084097]/10 dark:bg-[#084097]/20 px-8 py-4 rounded-full text-sm font-bold text-[#084097] dark:text-cyan-400 border border-[#084097]/30">
                <PlayCircle className="w-5 h-5 animate-pulse" />
                Product Demonstrations
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                Watch Our Platforms
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#084097] to-cyan-500">
                  In Action
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Hover over any video to watch with sound. Click to open full
                demo on YouTube.
              </p>
            </motion.div>
          </div>
        </section>

        {/* VIDEO GRID — PLAY ON HOVER + SOUND */}
        <section className="py-24 bg-white dark:bg-slate-900/50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
              {mockDemoVideos.map((video, i) => {
                const videoId = getYouTubeId(video.youtubeUrl);
                const thumbnail = videoId
                  ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
                  : "/images/placeholder.jpg";

                return (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative rounded-3xl overflow-hidden bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 hover:border-[#084097] dark:hover:border-cyan-500 transition-all duration-500 hover:shadow-2xl"
                  >
                    <a
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="relative aspect-video">
                        {/* Thumbnail */}
                        <img
                          src={thumbnail}
                          alt={video.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500"
                        />

                        {/* YouTube iframe — plays on hover with sound */}
                        <iframe
                          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&enablejsapi=1&playsinline=1`}
                          title={video.title}
                          allow="autoplay; encrypted-media"
                          className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          loading="lazy"
                        />

                        {/* Play Icon — disappears on hover */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <motion.div
                            initial={{ scale: 1, opacity: 1 }}
                            whileHover={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-20 h-20 bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl"
                          >
                            <PlayCircle className="w-12 h-12 text-[#084097] dark:text-cyan-400" />
                          </motion.div>
                        </div>

                        {/* Duration Badge */}
                        <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-bold">
                          {video.duration}
                        </div>
                      </div>

                      <div className="p-8">
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-[#084097] dark:group-hover:text-cyan-400 transition-colors">
                          {video.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                          {video.description}
                        </p>
                        <div className="mt-6 flex items-center gap-3 text-[#084097] dark:text-cyan-400 font-bold">
                          <Youtube className="w-5 h-5" />
                          Watch Full Demo
                        </div>
                      </div>
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gray-100 dark:bg-slate-900">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                Ready for a Private Demo?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                See how our platform performs under real market load — just for
                your team.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-[#084097] to-cyan-600 text-white text-xl font-black rounded-full hover:scale-105 transition-all shadow-2xl"
              >
                Book Live Demo
                <PlayCircle className="w-8 h-8" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
