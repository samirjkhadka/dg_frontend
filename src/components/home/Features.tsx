// src/components/home/Features.tsx
import { motion } from "framer-motion";
import { iconMap } from "@/lib/icons";

const features = [
  {
    icon: "Zap",
    title: "Lightning Fast Execution",
    desc: "Sub-millisecond order routing optimized for NEPSE peak hours",
  },
  {
    icon: "Shield",
    title: "Bank-Grade Security",
    desc: "End-to-end encryption, 2FA, and continuous penetration testing",
  },
  {
    icon: "BarChart3",
    title: "Real-Time Analytics",
    desc: "Live P&L, risk exposure, and performance dashboards",
  },
  {
    icon: "Users",
    title: "Multi-User Management",
    desc: "Role-based permissions with full audit trail for compliance",
  },
  {
    icon: "Plug",
    title: "Seamless Integration",
    desc: "Connect with existing platforms and APIs for a unified trading experience",
  },
  {
    icon: "Radio",
    title: "Live Market Data",
    desc: "Real-time NEPSE feed with depth and order book",
  },
];

const Features = () => {
  return (
    <section className="py-24 md:py-32 bg-gray-50 dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            Built for <span className="text-[#084097]">Modern Trading</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Enterprise-grade features trusted by Nepal’s top brokerages
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, i) => {
            const Icon =
              iconMap[feature.icon as keyof typeof iconMap] || iconMap.Zap;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-gray-200 dark:border-white/10 hover:border-[#084097] transition-all hover:shadow-2xl"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#084097] to-cyan-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition shadow-xl">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#084097] dark:group-hover:text-cyan-400 transition">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
