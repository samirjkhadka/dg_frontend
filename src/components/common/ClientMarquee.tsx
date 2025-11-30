// src/components/common/ClientMarquee.tsx
import { motion } from "framer-motion";

import { mockClients } from "@/data/mockClientData";

const ClientMarquee = () => {
  const duplicatedClients = [...mockClients, ...mockClients]; // for seamless loop

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-slate-950 border-y border-gray-200 dark:border-white/10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Trusted by Nepal’s Leading Financial Institutions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Powering secure, compliant, and high-performance trading for banks
            and brokers nationwide
          </p>
        </div>

        {/* First Row - Left to Right */}
        <div className="relative">
          <motion.div
            className="flex gap-16 items-center py-8"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 80,
              ease: "linear",
              repeat: Infinity,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.animationPlayState = "paused")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.animationPlayState = "running")
            }
            style={{ animationPlayState: "running" }}
          >
            {duplicatedClients.map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="flex-shrink-0 group relative"
              >
                <div className="relative bg-white dark:bg-white/5 rounded-2xl shadow-lg border border-gray-200 dark:border-white/10 p-6 transition-all group-hover:scale-110 group-hover:shadow-2xl group-hover:border-[#084097]/50">
                  <img
                    src={client.logo}
                    alt={client.name}
                    width={client.width || 140}
                    height={80}
                    className="h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="absolute -inset-2 bg-[#084097]/5 blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Right to Left (slower, reverse) */}
        <div className="relative mt-12">
          <motion.div
            className="flex gap-16 items-center py-8"
            initial={{ x: "-50%" }}
            animate={{ x: 0 }}
            transition={{
              duration: 100,
              ease: "linear",
              repeat: Infinity,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.animationPlayState = "paused")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.animationPlayState = "running")
            }
            style={{ animationPlayState: "running" }}
          >
            {duplicatedClients.slice(5).map((client, i) => (
              <div
                key={`${client.name}-reverse-${i}`}
                className="flex-shrink-0 group relative"
              >
                <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-white/10 transition-all group-hover:scale-105">
                  <img
                    src={client.logo}
                    alt={client.name}
                    width={client.width || 130}
                    height={70}
                    className="h-14 w-auto object-contain opacity-70 group-hover:opacity-100 transition-all"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;
