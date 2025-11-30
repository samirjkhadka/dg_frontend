// src/components/common/ClientMarquee.tsx
import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { mockClients } from "@/data/mockClientData";

const ClientMarquee = () => {
  const controls1 = useAnimationControls();
  const controls2 = useAnimationControls();
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate for seamless loop
  const row1 = [...mockClients, ...mockClients];
  const row2 = [
    ...mockClients.slice().reverse(),
    ...mockClients.slice().reverse(),
  ];

  useEffect(() => {
    if (!isPaused) {
      controls1.start({
        x: ["0%", "-50%"],
        transition: { duration: 60, repeat: Infinity, ease: "linear" },
      });

      controls2.start({
        x: ["-50%", "0%"],
        transition: { duration: 80, repeat: Infinity, ease: "linear" },
      });
    } else {
      controls1.stop();
      controls2.stop();
    }
  }, [isPaused, controls1, controls2]);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:to-black border-y border-gray-200 dark:border-white/10 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6">
            Trusted by Nepal’s Elite
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            Powering secure, real-time trading platforms for the country’s top
            financial institutions
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          ref={containerRef}
        >
          {/* ROW 1 — Left to Right */}
          {/* <motion.div animate={controls1} className="flex gap-24 items-center">
            {row1.map((client, i) => (
              <div key={`row1-${i}`} className="flex-shrink-0">
                <div className="bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl px-10 py-8 shadow-2xl border border-gray-200/70 dark:border-white/10 transition-all duration-500 hover:scale-110 hover:shadow-3xl hover:border-[#084097] dark:hover:border-cyan-500 flex flex-col items-center w-[220px]">
                
                  <div className="h-20 flex items-center justify-center mb-5">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>

                  <div className="text-center">
                    <p className="text-[11px] font-semibold tracking-widest text-gray-500 dark:text-gray-400 uppercase leading-none">
                      Trusted Partner
                    </p>
                    <p className="mt-2 text-base font-black text-gray-900 dark:text-white tracking-tight">
                      {client.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div> */}

          {/* ROW 2 — Right to Left */}
          <motion.div
            animate={controls2}
            className="flex gap-24 items-center mt-16"
          >
            {row2.map((client, i) => (
              <div key={`row2-${i}`} className="flex-shrink-0">
                <div className="bg-white/95 dark:bg-slate-900/70 backdrop-blur-xl rounded-3xl px-10 py-8 shadow-2xl border border-gray-200/70 dark:border-white/10 transition-all duration-500 hover:scale-110 hover:shadow-3xl hover:border-cyan-500 flex flex-col items-center w-[220px]">
                  <div className="h-20 flex items-center justify-center mb-5">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-700"
                    />
                  </div>

                  <div className="text-center">
                    {/* <p className="text-[11px] font-semibold tracking-widest text-gray-500 dark:text-gray-400 uppercase leading-none">
                      Trusted Partner
                    </p> */}
                    <p className="mt-2 text-base font-black text-blue-900 dark:text-white tracking-tight">
                      {client.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* ARROWS — Appear on hover */}
          {/* <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 dark:from-slate-950 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 dark:from-slate-950 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" /> */}

          <button
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-4 bg-white/90 dark:bg-black/70 backdrop-blur-md rounded-full shadow-2xl opacity-0 group-hover:opacity-100 hover:scale-110 transition-all"
          >
            <ChevronLeft className="w-8 h-8 text-[#084097] dark:text-cyan-400" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-4 bg-white/90 dark:bg-black/70 backdrop-blur-md rounded-full shadow-2xl opacity-0 group-hover:opacity-100 hover:scale-110 transition-all"
          >
            <ChevronRight className="w-8 h-8 text-[#084097] dark:text-cyan-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;
