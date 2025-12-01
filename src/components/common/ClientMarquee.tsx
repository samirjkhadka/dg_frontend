
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { mockClients } from "@/data/mockClientData";

const ClientMarquee = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);


  const clients = [...mockClients, ...mockClients];

  // Auto-scroll effect
  useEffect(() => {
    if (!scrollRef.current || isHovered) return;

    const scrollContainer = scrollRef.current;
    const scrollWidth = scrollContainer.scrollWidth / 2; 
    let animationFrame: number;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered]);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:to-black border-y border-gray-200 dark:border-white/10">
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

        {/* Scrollable Marquee */}
        <div
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={scrollRef}
            className="flex gap-24 items-center overflow-x-hidden py-8"
          >
            {clients.map((client, i) => (
              <div key={`client-${i}`} className="flex-shrink-0 relative">
                {/* NEW Badge */}
                {client.isNew && (
                  <div className="absolute -top-4 -right-4 z-20 animate-pulse">
                    <span className="bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-2xl border border-white/30">
                      NEW
                    </span>
                  </div>
                )}

                <div className="bg-white/95 dark:bg-slate-900/70 backdrop-blur-xl rounded-3xl px-10 py-8 shadow-2xl border border-gray-200/70 dark:border-white/10 transition-all duration-500 hover:scale-110 hover:shadow-3xl hover:border-cyan-500 flex flex-col items-center w-[220px]">
                  <div className="h-20 flex items-center justify-center mb-5">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-700"
                    />
                  </div>
                  <div className="text-center">
                    <p className="mt-2 text-base font-black text-blue-900 dark:text-white tracking-tight">
                      {client.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows — Show on hover */}
          <button
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-4 bg-white dark:bg-black/80 backdrop-blur-md rounded-full shadow-2xl opacity-0 group-hover:opacity-100 hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft className="w-8 h-8 text-[#084097] dark:text-cyan-400" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-4 bg-white dark:bg-black/80 backdrop-blur-md rounded-full shadow-2xl opacity-0 group-hover:opacity-100 hover:scale-110 transition-all duration-300"
          >
            <ChevronRight className="w-8 h-8 text-[#084097] dark:text-cyan-400" />
          </button>

          {/* Gradient Fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 dark:from-slate-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 dark:from-slate-950 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;
