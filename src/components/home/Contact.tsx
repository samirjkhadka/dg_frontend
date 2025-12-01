import { iconMap } from "@/lib/icons";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-gradient-to-br from-[#084097] via-[#084097]/90 to-cyan-600/50 text-white"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            Let’s Build the Future <br />
            <span className="">Together</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
            Ready to transform your brokerage, risk systems, or trading
            infrastructure?
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 px-16 py-7 bg-white text-[#084097] font-black text-2xl rounded-full shadow-2xl hover:scale-105 transition-all hover:shadow-3xl"
            >
              Start Your Project
              <iconMap.ArrowRight className="w-8 h-8" />
            </Link>
            <a
              href="tel:+97714433999"
              className="inline-flex items-center gap-3 px-10 py-7 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full font-bold text-xl hover:bg-white/20 transition"
            >
              Call Us Now
            </a>
          </div>

          <div className="mt-16 flex items-center justify-center gap-12 text-lg opacity-80">
            <div className="flex items-center gap-3">
              <iconMap.Mail className="w-6 h-6" />
              support@digihub.io
            </div>
            <div className="flex items-center gap-3">
              <iconMap.Phone className="w-6 h-6" />
              +977 1 4547745
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
