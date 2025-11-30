// src/components/home/StatsSection.tsx
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 40, suffix: "+", label: "Broker Houses" },
  { value: 100, suffix: "K+", label: "Active Traders" },
  { value: 15, suffix: "+", label: "Years of Trust" },
  { value: 99.9, suffix: "%", label: "Uptime" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const animation = animate(count, value, {
        duration: 2.5,
        ease: "easeOut",
      });
      return animation.stop;
    }
  }, [inView, count, value]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {rounded}
      {suffix}
    </motion.span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6">
            Trusted by Nepal's Best
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real results from real institutions across the country
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="text-center"
            >
              <div className="text-6xl md:text-8xl font-black text-[#084097] dark:text-cyan-400 mb-4">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
