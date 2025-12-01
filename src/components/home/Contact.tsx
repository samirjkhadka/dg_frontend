import { iconMap } from "@/lib/icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            Let’s Build the Future <br />
            <span className="bg-clip-text text-transparent  bg-[#084097]">
              Together
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
            Ready to transform your brokerage, risk systems, or trading
            infrastructure?
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="px-8 py-5 gap-4 flex items-center text-lg font-bold bg-gradient-to-r from-[#084097] to-cyan-600 text-white rounded-full shadow-2xl hover:shadow-cyan-500/50 hover:scale-110 transition-all duration-500"
            >
              Start Your Project
              <iconMap.ArrowRight className="w-8 h-8" />
            </Link>
            <a
              href="tel:+97714433999"
              className="px-10 py-5 text-lg font-bold border-2 border-[#084097] dark:border-cyan-400 text-[#084097] dark:text-cyan-400 rounded-full hover:bg-[#084097] dark:hover:bg-cyan-400/10 hover:text-white transition-all hover:scale-105"
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
              +977 - 14547745
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
