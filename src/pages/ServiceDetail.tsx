// src/pages/ServiceDetail.tsx
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { iconMap } from "@/lib/icons";
import { mockService } from "@/data/mockServicesData";
import { mockCategories } from "@/data/mockServicesData"; // assuming you have this
import React from "react";

const { ArrowRight, CheckCircle, Phone, Mail } = iconMap;

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  // Find the service by ID or slug
  const service = mockService.find((s) => s.id === Number(serviceId));

  if (!service) {
    return (
      <>
        <Helmet>
          <title>Service Not Found | DigiHub</title>
        </Helmet>
        <section className="pt-32 pb-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white mb-6">
                404
              </h1>
              <p className="text-2xl text-gray-600 dark:text-gray-400 mb-8">
                Oops! This service doesn't exist.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#084097] text-white font-bold text-lg rounded-full hover:bg-[#06307a] transition-all hover:scale-105 shadow-xl"
              >
                Back to Services
                <ArrowRight className="w-6 h-6" />
              </Link>
            </motion.div>
          </div>
        </section>
      </>
    );
  }

  const category = mockCategories.find((c) => c.id === service.categoryId);

  return (
    <>
      <Helmet>
        <title>
          {service.title} | Digi Hub - {category?.title || "Services"}
        </title>
        <meta name="description" content={service.description} />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#084097] via-[#084097]/95 to-cyan-600/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-5xl mx-auto"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition"
            >
              ← All Services
            </Link>

            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl border border-white/30">
              {service.icon && (
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                  {iconMap[service.icon as keyof typeof iconMap] &&
                    React.createElement(
                      iconMap[service.icon as keyof typeof iconMap],
                      {
                        className: "w-10 h-10 text-[#084097]",
                      }
                    )}
                </div>
              )}
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white dark:bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Key Features */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-12 text-gray-900 dark:text-white">
                What You'll Get
              </h2>
              <div className="space-y-6">
                {service.features?.map((feature: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-5 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#084097] to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <CheckCircle className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed pt-2 group-hover:text-[#084097] dark:group-hover:text-cyan-400 transition">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Why Choose This Service */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#084097] to-cyan-600 rounded-3xl p-12 text-white shadow-2xl"
            >
              <h3 className="text-3xl font-black mb-8">
                Why Brokers Choose This Solution
              </h3>
              <div className="space-y-8">
                {[
                  {
                    title: "Proven in Production",
                    desc: "Already powering 20+ brokerages across Nepal",
                  },
                  {
                    title: "Built for NEPSE",
                    desc: "Deep integration with local exchange rules & workflows",
                  },
                  {
                    title: "Scales With You",
                    desc: "From 100 to 100,000 daily orders — no re-architecture needed",
                  },
                  {
                    title: "Local Support Team",
                    desc: "Nepali-speaking engineers available 24/7 during trading hours",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-white/80">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-gray-50 dark:bg-slate-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              How We Deliver
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A battle-tested process refined over 200+ successful deployments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                desc: "We study your current systems and design the optimal migration path",
              },
              {
                step: "02",
                title: "Development",
                desc: "Custom-built with your branding, workflows, and compliance needs",
              },
              {
                step: "03",
                title: "Testing & Training",
                desc: "Full UAT with your team + comprehensive training for staff",
              },
              {
                step: "04",
                title: "Go Live & Support",
                desc: "Seamless launch with 24/7 monitoring and dedicated support",
              },
            ].map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#084097] to-cyan-600 rounded-3xl flex items-center justify-center text-3xl font-black text-white shadow-xl group-hover:scale-110 transition">
                  {phase.step}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#084097] dark:group-hover:text-cyan-400 transition">
                  {phase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-br from-[#084097] via-[#084097]/95 to-cyan-600/50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
              Ready to Transform Your Brokerage?
            </h2>
            <p className="text-2xl text-white/90 mb-12">
              Join 50+ leading institutions already using {service.title}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-4 px-16 py-7 bg-white text-[#084097] font-black text-2xl rounded-full shadow-2xl hover:scale-105 transition-all hover:shadow-3xl"
              >
                Start Your Project
                <ArrowRight className="w-8 h-8" />
              </Link>
              <a
                href="tel:+97714433999"
                className="inline-flex items-center gap-4 px-12 py-7 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full text-white font-bold text-xl hover:bg-white/20 transition"
              >
                <Phone className="w-7 h-7" />
                Schedule a Call
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-white/80 text-lg">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6" />
                hello@digihub.com.np
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6" />
                +977 1 4433 999
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
