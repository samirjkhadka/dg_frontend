// src/components/home/WhyChoose.tsx
import { motion } from "framer-motion";

const benefits = [
  {
    number: "01",
    title: "Reduce Operational Costs",
    desc: "Automate manual processes and reduce errors — saving up to 60% on operational expenses.",
  },
  {
    number: "02",
    title: "Increase Trading Volume",
    desc: "Handle 10x more orders with our scalable infrastructure built for high-volume growth.",
  },
  {
    number: "03",
    title: "Ensure Full Compliance",
    desc: "Stay 100% compliant with SEBON & NRB regulations through automated reporting and audit trails.",
  },
  {
    number: "04",
    title: "Delight Your Clients",
    desc: "Faster execution, transparent pricing, and mobile access — improve retention and attract new investors.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-slate-900/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            Why Choose <span className="text-[#084097]">Digi Hub</span>?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Join Nepal’s fastest-growing brokers who trust us to power their
            trading operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group flex gap-6 p-8 rounded-3xl bg-gradient-to-r from-[#084097]/5 to-cyan-500/5 dark:from-white/5 dark:to-cyan-500/5 border border-gray-200 dark:border-white/10 hover:border-[#084097] dark:hover:border-cyan-500 transition-all hover:shadow-2xl"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#084097] to-cyan-600 flex items-center justify-center text-white text-2xl font-black shadow-xl">
                  {benefit.number}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-[#084097] dark:group-hover:text-cyan-400 transition">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
