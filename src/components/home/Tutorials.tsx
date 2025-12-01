import { mockDemoVideos } from "@/data/mockDemoData";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Tutorials = () => {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-[#084097]/10 dark:bg-[#084097]/20 px-8 py-4 rounded-full text-sm font-bold text-[#084097] dark:text-cyan-400 border border-[#084097]/30 mb-6">
            <PlayCircle className="w-5 h-5 animate-pulse" />
            Live Product Demos
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            See It
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#084097] to-cyan-500">
              {" "}
              In Action
            </span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Watch real demonstrations of our platforms used by Nepal’s top
            brokerages
          </p>
        </motion.div>

        {/* Video Grid — Small, Elegant, Premium */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {mockDemoVideos.slice(0, 6).map((video, i) => {
            const videoId = video.youtubeUrl.match(
              /(?:v=|\/)([0-9A-Za-z_-]{11})/
            )?.[1];
            const thumbnail = videoId
              ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
              : "/images/placeholder.jpg";

            return (
              <motion.a
                key={video.id}
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group block rounded-3xl overflow-hidden bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 hover:border-[#084097] dark:hover:border-cyan-500 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3"
                whileHover={{ y: -12 }}
              >
                <div className="relative aspect-video">
                  <img
                    src={thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl scale-90 group-hover:scale-110 transition-all duration-300">
                      <PlayCircle className="w-12 h-12 text-[#084097] dark:text-cyan-400 ml-1" />
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-bold">
                    {video.duration}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#084097] dark:group-hover:text-cyan-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Link
            to="/demo"
            className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-[#084097] to-cyan-600 text-white text-xl font-black rounded-full hover:scale-105 transition-all shadow-2xl hover:shadow-cyan-500/50"
          >
            Watch All Demos
            <PlayCircle className="w-8 h-8" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Tutorials;
