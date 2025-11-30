// src/components/common/Testimonials.tsx
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { mockTestimonials } from "@/data/mockTestimonialsData";

const Testimonials = () => {
  const duplicated = [...mockTestimonials, ...mockTestimonials];

  return (
    <section className="py-24 md:py-32 bg-gray-50 dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            Loved by <span className="text-[#084097]">Nepal’s Best</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Don’t just take our word for it — hear from the leaders who trust us
            every trading day
          </p>
        </motion.div>

        {/* Infinite Marquee - Row 1 */}
        <div className="relative">
          <motion.div
            className="flex gap-8 py-8"
            animate={{ x: [0, -100 + "%"] }}
            transition={{
              duration: 60,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{ animationPlayState: "running" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.animationPlayState = "paused")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.animationPlayState = "running")
            }
          >
            {duplicated.map((t, i) => (
              <div key={`${t.id}-${i}`} className="flex-shrink-0 w-96 group">
                <div className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all hover:border-[#084097]">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[#084097] text-[#084097]"
                      />
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                    "{t.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#084097] to-cyan-600 rounded-full flex items-center justify-center text-white font-black text-xl">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        {t.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {t.role}, {t.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Infinite Marquee - Row 2 (Reverse Direction) */}
        <div className="relative mt-12">
          <motion.div
            className="flex gap-8 py-8"
            animate={{ x: [-100 + "%", 0] }}
            transition={{
              duration: 70,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{ animationPlayState: "running" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.animationPlayState = "paused")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.animationPlayState = "running")
            }
          >
            {duplicated.slice(3).map((t, i) => (
              <div
                key={`rev-${t.id}-${i}`}
                className="flex-shrink-0 w-96 group"
              >
                <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all hover:border-cyan-500">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-cyan-500 text-cyan-500"
                      />
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                    "{t.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-black text-xl">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        {t.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {t.role}, {t.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Optional: Static Grid for SEO */}
        <div className="hidden">
          {mockTestimonials.map((t) => (
            <div key={t.id}>
              <h3>
                {t.name} - {t.company}
              </h3>
              <p>{t.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
