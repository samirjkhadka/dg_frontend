// src/components/layout/FloatingDemoButton.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

export default function FloatingDemoButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8, type: "spring", stiffness: 100 }}
      className="fixed bottom-28 right-8 z-50"
    >
      <Link
        to="/contact"
        className="group flex items-center gap-4 px-8 py-5 bg-gradient-to-r from-[#084097] to-cyan-600 text-white font-black text-lg rounded-full shadow-2xl hover:shadow-cyan-500/50 hover:scale-110 transition-all duration-500"
      >
        <Phone className="w-6 h-6 group-hover:rotate-12 transition" />
        Book a Demo
        <span className="ml-2 text-cyan-200">→</span>
      </Link>
    </motion.div>
  );
}
