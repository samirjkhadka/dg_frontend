import { iconMap } from "@/lib/icons";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Hero Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8">
            Built for Nepal’s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#084097] to-cyan-600">
              Capital Markets
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed">
            We don’t just build software — we power the systems that move
            billions in daily trading volume. From real-time NEPSE terminals to
            enterprise brokerage platforms, we are the silent engine behind
            Nepal’s financial future.
          </p>
        </motion.div>

        {/* Three Pillars — Clean, Powerful, Animated */}
        <div className="grid lg:grid-cols-3 gap-10 mb-24">
          {[
            {
              title: "Domain Mastery",
              desc: "5+ years exclusively in capital markets. We speak NEPSE, SEBON, and broker workflows fluently.",
              icon: "Trophy",
              gradient: "from-[#084097] to-blue-700",
            },
            {
              title: "Engineering Excellence",
              desc: "Sub-50ms latency, 99.99% uptime, and systems that scale from 100 to 100,000 concurrent traders.",
              icon: "Zap",
              gradient: "from-[#084097] to-blue-700",
            },
            {
              title: "Unbreakable Trust",
              desc: "Bank-grade security, regular pentests, and full regulatory compliance — your reputation is safe with us.",
              icon: "Shield",
              gradient: "from-[#084097] to-blue-700",
            },
          ].map((pillar, i) => {
            const Icon = iconMap[pillar.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.2,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 80,
                }}
                className="group relative"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-3xl blur-2xl"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, ${
                      pillar.gradient.split(" ")[1]
                    }, ${pillar.gradient.split(" ")[3]})`,
                  }}
                />
                <div className="relative bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-10 border border-gray-200/50 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                  <div
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${pillar.gradient} p-5 shadow-lg mb-8`}
                  >
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900 dark:text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Bar — Stats + CTA */}
        <div className="bg-gradient-to-r from-[#084097] to-cyan-700 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 grid md:grid-cols-4 gap-10 text-center">
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "5+", label: "Years Leading" },
              { number: "30+", label: "Expert Team Members" },
              { number: "100K+", label: "Active Traders" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="text-5xl md:text-6xl font-black mb-3">
                  {stat.number}
                </div>
                <div className="text-xl font-medium opacity-90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="relative z-10 text-center mt-16"
          >
            <h3 className="text-3xl md:text-4xl font-black mb-6">
              Ready to Transform Your Trading Platform?
            </h3>
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 px-12 py-6 bg-white text-[#084097] font-black text-xl rounded-full hover:scale-110 transition-all shadow-2xl hover:shadow-cyan-400/50"
            >
              Start Your Project Today
              <span className="text-2xl">
                <MoveRight />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
