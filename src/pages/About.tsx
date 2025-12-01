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
        <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
          {/* Animated Background Gradient Orbs */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 -left-40 w-96 h-96 bg-[#084097]/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -100, 0],
                y: [0, 100, 0],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
            />
          </div>

          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* LEFT: Text — Slightly Improved */}
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-3 bg-[#084097]/10 dark:bg-[#084097]/20 px-6 py-3 rounded-full text-sm font-bold text-[#084097] dark:text-cyan-400 border border-[#084097]/30">
                  <FaRocket className="animate-pulse" /> Our Story
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                  Building the Future of
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#084097] to-cyan-500">
                    Nepal’s Capital Markets
                  </span>
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                  {mockAboutData.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="px-8 py-4 bg-gradient-to-r from-[#084097] to-cyan-600 text-white rounded-full font-bold shadow-xl">
                    Since 2020
                  </div>
                  <div className="px-8 py-4 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-full font-bold backdrop-blur-sm shadow-lg">
                    Trusted by 50+ Brokers
                  </div>
                </div>
              </motion.div>

              {/* RIGHT: EPIC FLOATING 3D VISUAL */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="relative h-[600px] lg:h-[700px]"
              >
                {/* Center Logo — Floating & Pulsing */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 flex items-center justify-center z-20"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#084097]/30 rounded-full blur-3xl animate-pulse" />
                    <img
                      src="/images/Dghub-svg-logo.svg"
                      alt="DigiHub"
                      className="relative z-10 w-64 h-64 drop-shadow-2xl"
                    />
                  </div>
                </motion.div>

                {/* Floating Cards — 3D Tilt + Parallax */}
                {/* Card 1 */}
                <motion.div
                  initial={{ opacity: 0, rotate: -15, x: -100 }}
                  whileInView={{ opacity: 1, rotate: -8, x: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="absolute top-10 left-10 w-72 h-48 bg-gradient-to-br from-[#084097] to-blue-800 rounded-3xl shadow-2xl p-8 text-white border border-white/20"
                  style={{ transform: "translateZ(50px)" }}
                >
                  <div className="text-5xl font-black">5+</div>
                  <div className="text-lg font-medium mt-2">
                    Years Leading Nepal
                  </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  initial={{ opacity: 0, rotate: 15, x: 100 }}
                  whileInView={{ opacity: 1, rotate: 8, x: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="absolute top-32 right-0 w-80 h-56 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-8 border border-gray-300 dark:border-white/20"
                >
                  <div className="text-6xl font-black text-[#084097] dark:text-cyan-400">
                    99.99%
                  </div>
                  <div className="text-xl font-bold text-gray-800 dark:text-white mt-3">
                    Uptime
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Under peak NEPSE load
                  </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute bottom-20 left-20 w-64 h-44 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl shadow-2xl p-8 text-white"
                >
                  <div className="text-4xl font-black">ISO 27001</div>
                  <div className="text-base font-medium mt-2">
                    Bank-Grade Security
                  </div>
                </motion.div>

                {/* Card 4 */}
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute -bottom-10 right-10 w-72 h-48 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl shadow-2xl p-8 text-white"
                >
                  <div className="text-5xl font-black">50+</div>
                  <div className="text-lg font-medium mt-2">
                    Projects Delivered
                  </div>
                </motion.div>

                {/* Subtle Orbit Lines */}
                <div className="absolute inset-0 pointer-events-none">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 60,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-full h-full border border-white/10 rounded-full"
                  />
                </div>
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
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
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
                  <div className="w-16 h-16 bg-[#084097] rounded-2xl flex items-center justify-center">
                    <FaEye className="text-white text-2xl" />
                  </div>
                  <h3 className="text-3xl font-bold">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
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
