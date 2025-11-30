// src/pages/About.tsx
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaRocket,
  FaEye,
  FaLightbulb,
  FaUsers,
  FaCode,
  FaHeart,
} from "react-icons/fa";
import {
  mockAboutData,
  mockAboutStats,
  mockAboutValues,
} from "@/data/mockAboutData";
import { JSX } from "react";

const iconMap: Record<string, JSX.Element> = {
  Lightbulb: <FaLightbulb className="text-3xl" />,
  Users: <FaUsers className="text-3xl" />,
  Heart: <FaHeart className="text-3xl" />,
  Rocket: <FaRocket className="text-3xl" />,
  Code: <FaCode className="text-3xl" />,
  Eye: <FaEye className="text-3xl" />,
};

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Digi Hub - Our Mission, Vision & Values</title>
        <meta
          name="description"
          content="Discover Digi Hub — a leading technology partner transforming capital markets with secure, innovative, and scalable digital solutions."
        />
      </Helmet>

      <div className="pt-24 md:pt-28 lg:pt-32 min-h-screen bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#084097]/5 via-transparent to-cyan-500/5 dark:from-[#084097]/10" />
          </div>

          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Text */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-3 bg-[#084097]/10 dark:bg-[#084097]/20 px-6 py-3 rounded-full text-sm font-medium text-[#084097] dark:text-cyan-400 border border-[#084097]/20 mb-8">
                  <FaRocket /> Our Story
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
                  Building the Future of
                  <span className="block text-[#084097]">Capital Markets</span>
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                  {mockAboutData.description}
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <div className="px-8 py-4 bg-[#084097] text-white rounded-full font-bold shadow-lg">
                    Since 2020
                  </div>
                  <div className="px-8 py-4 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-full font-medium backdrop-blur-sm">
                    Trusted by Institutions Worldwide
                  </div>
                </div>
              </motion.div>

              {/* Right: Visual */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="relative bg-gradient-to-br from-[#084097]/10 to-cyan-500/10 dark:from-[#084097]/20 dark:to-cyan-600/20 backdrop-blur-xl rounded-3xl p-12 border border-[#084097]/20 dark:border-cyan-500/30 shadow-2xl">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 rounded-3xl border-2 border-dashed border-[#084097]/30 dark:border-cyan-500/30"
                  />
                  <div className="text-9xl font-black text-center text-[#084097] dark:text-cyan-400">
                    DH
                  </div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute -top-6 -left-6 bg-white dark:bg-slate-900 shadow-xl rounded-2xl p-5 border border-gray-200 dark:border-white/20"
                >
                  <div className="text-[#084097] dark:text-cyan-400 font-bold">
                    Innovation
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    First
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                  className="absolute -bottom-6 -right-6 bg-[#084097] text-white rounded-2xl p-5 shadow-xl"
                >
                  <div className="font-bold">Excellence</div>
                  <div className="text-sm opacity-90">Always</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-white dark:bg-slate-900/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Our Mission & Vision
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-[#084097]/5 to-transparent dark:from-[#084097]/10 rounded-3xl p-10 border border-[#084097]/20 dark:border-cyan-500/30"
              >
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-16 h-16 bg-[#084097] rounded-2xl flex items-center justify-center">
                    <FaRocket className="text-white text-2xl" />
                  </div>
                  <h3 className="text-3xl font-bold">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {mockAboutData.mission}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-cyan-500/5 to-transparent dark:from-cyan-500/10 rounded-3xl p-10 border border-cyan-500/30"
              >
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center">
                    <FaEye className="text-white text-2xl" />
                  </div>
                  <h3 className="text-3xl font-bold">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {mockAboutData.vision}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-24 bg-gray-100 dark:bg-slate-900">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-16">
              Our Achievements
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {mockAboutStats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-white/10"
                >
                  <div className="text-5xl font-black text-[#084097] mb-3">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.title}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                The principles that define who we are and how we work
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
              {mockAboutValues.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 text-center border border-gray-200 dark:border-white/10 hover:border-[#084097] dark:hover:border-cyan-500 transition-all group"
                  whileHover={{ y: -8 }}
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#084097] to-cyan-500 rounded-3xl flex items-center justify-center text-white group-hover:scale-110 transition">
                    {iconMap[value.icon]}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
