// src/components/home/Carousel.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection({ heroData }: any) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-slate-950">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10">
        {/* Light Mode: Clean gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:hidden" />
        {/* Dark Mode: Deep, elegant gradient */}
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-slate-950 via-[#084097]/20 to-slate-900" />

        {/* Optional Hero Image with proper opacity */}
        <img
          src="/images/hero-1.webp"
          alt="DigiHub Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-30"
        />

        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent dark:from-black/60" />
      </div>

      <div className="container relative z-10 text-center px-6">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight"
        >
          <span className="block text-[#084097] dark:text-white drop-shadow-2xl">
            Innovation at
          </span>
          <span className="block bg-gradient-to-r from-[#084097] to-cyan-500 bg-clip-text text-transparent drop-shadow-2xl">
            Its Finest
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-8 text-xl md:text-2xl lg:text-3xl font-light text-gray-700 dark:text-gray-200 max-w-5xl mx-auto leading-relaxed"
        >
          Transforming Capital Markets with Secure, Scalable, and Cutting-Edge
          Technology
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link
            to="/services"
            className="px-10 py-5 text-lg font-bold bg-[#084097] hover:bg-[#06307a] text-white rounded-full transition-all hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Explore Our Solutions
          </Link>
          <Link
            to="/contact"
            className="px-10 py-5 text-lg font-bold border-2 border-[#084097] dark:border-cyan-400 text-[#084097] dark:text-cyan-400 rounded-full hover:bg-[#084097] dark:hover:bg-cyan-400/10 hover:text-white transition-all hover:scale-105"
          >
            Start a Project
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <svg
          className="w-8 h-8 text-[#084097] dark:text-cyan-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
