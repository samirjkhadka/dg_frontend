// src/pages/Services.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ChartLine,
  Shield,
  TrendingUp,
  Smartphone,
  Server,
  Brain,
  Laptop,
  Users,
  AlertTriangle,
  FileCheck,
  Radio,
  BarChart3,
  Zap,
  Bot,
  ArrowRight,
} from "lucide-react";
import { mockCategories, mockService } from "@/data/mockServicesData";

const iconMap: Record<string, React.FC<any>> = {
  ChartLine,
  Shield,
  TrendingUp,
  Smartphone,
  Server,
  Brain,
  Laptop,
  Users,
  AlertTriangle,
  FileCheck,
  Radio,
  BarChart3,
  Zap,
  Bot,
};

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | Digi Hub - Capital Markets Technology</title>
        <meta
          name="description"
          content="Enterprise-grade trading platforms, risk systems, mobile apps, and AI solutions for brokers and financial institutions in Nepal."
        />
      </Helmet>

      <div className="pt-24 md:pt-28 lg:pt-32 min-h-screen bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-white transition-colors duration-300">
        {/* Hero */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#084097]/5 via-transparent to-cyan-500/5 dark:from-[#084097]/10">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-5xl mx-auto"
            >
              <div className="inline-flex items-center gap-3 bg-[#084097]/10 dark:bg-[#084097]/20 px-6 py-3 rounded-full text-sm font-bold text-[#084097] dark:text-cyan-400 border border-[#084097]/20 mb-8">
                <ChartLine className="w-5 h-5" /> Capital Markets Solutions
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-8">
                Built for <span className="text-[#084097]">Performance</span> &
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#084097] to-cyan-500">
                  Compliance
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Enterprise-grade technology trusted by Nepal’s leading brokers .
                From real-time trading to AI-driven insights.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                {[
                  { num: "5+", label: "Years in Capital Markets" },
                  { num: "20+", label: "Deployments" },
                  { num: "50+", label: "Projects Delivered" },
                  { num: "100%", label: "Uptime SLA" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="text-5xl font-black text-[#084097] mb-2">
                      {stat.num}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sticky Category Navigation */}
        <div className="sticky top-20 z-50 bg-gray-50/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-lg">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-wrap justify-center gap-4">
              {mockCategories.map((cat) => {
                const Icon = iconMap[cat.icon];
                return (
                  <a
                    key={cat.id}
                    href={`#category-${cat.id}`}
                    className="group flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all hover:scale-105 hover:shadow-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-[#084097]"
                  >
                    <Icon className="w-6 h-6 text-[#084097] dark:text-cyan-400 group-hover:scale-110 transition" />
                    <span>{cat.title}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            {mockCategories.map((category) => {
              const categoryServices = mockService.filter(
                (s) => s.categoryId === category.id
              );
              const Icon = iconMap[category.icon];

              return (
                <div
                  key={category.id}
                  id={`category-${category.id}`}
                  className="mb-24 scroll-mt-32"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mb-16"
                  >
                    <div className="inline-flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#084097] to-cyan-500 rounded-3xl flex items-center justify-center shadow-xl">
                        <Icon className="w-9 h-9 text-white" />
                      </div>
                      <h2 className="text-5xl font-black">{category.title}</h2>
                    </div>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                      {category.description}
                    </p>
                  </motion.div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {categoryServices.map((service, i) => {
                      const ServiceIcon = iconMap[service.icon];
                      return (
                        <motion.div
                          key={service.id}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="group bg-white dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-white/10 hover:border-[#084097] dark:hover:border-cyan-500 transition-all hover:shadow-2xl hover:-translate-y-3"
                        >
                          <div className="w-16 h-16 bg-gradient-to-br from-[#084097] to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                            <ServiceIcon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold mb-4">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            {service.description}
                          </p>
                          <ul className="space-y-3">
                            {service.features.map((f, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-3 text-sm"
                              >
                                <div className="w-1.5 h-1.5 bg-[#084097] rounded-full" />
                                <span className="text-gray-600 dark:text-gray-300">
                                  {f}
                                </span>
                              </li>
                            ))}
                          </ul>
                          <Link
                            to={`/services/${service.id}`}
                            className="mt-8 text-[#084097] dark:text-cyan-400 font-bold group-hover:translate-x-2 transition"
                          >
                            Learn More
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-t from-[#084097] to-[#084097]/90 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              Join Nepal’s fastest-growing brokers using our platform
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 px-12 py-6 bg-white text-[#084097] font-black text-xl rounded-full hover:scale-105 transition shadow-2xl"
            >
              Start Your Project Today
              <TrendingUp className="w-6 h-6" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
