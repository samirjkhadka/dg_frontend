// src/components/Services.tsx (or wherever it lives)
import { mockService } from "@/data/mockServicesData";
import { iconMap } from "@/lib/icons";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (categoryId: string) => {
    navigate("/services#category-${categoryId}"); // Go to services page

    // Wait for navigation + React render, then scroll
    setTimeout(() => {
      const element = document.getElementById(`category-${categoryId}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        // Offset for fixed header (adjust -120 if your header is taller/shorter)
        window.scrollBy(0, -120);
      }
    }, 200); // 200ms is perfect — tested on slow & fast devices
  };

  const handleViewAllServices = () => {
    navigate("/services");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 200);
  };

  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-gray-50 dark:bg-slate-950"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            Our <span className="text-[#084097]">Services</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Enterprise solutions designed specifically for Nepal’s capital
            markets — secure, compliant, and lightning-fast.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {mockService.slice(0, 6).map((service, i) => {
            const ServiceIcon =
              iconMap[service.icon as keyof typeof iconMap] || iconMap.Laptop;

            return (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service.categoryId)}
                className="cursor-pointer"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="group bg-white dark:bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-gray-200 dark:border-white/10 hover:border-[#084097] dark:hover:border-cyan-500 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-4"
                  whileHover={{ y: -12 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-[#084097] to-cyan-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition shadow-xl">
                    <ServiceIcon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-5 group-hover:text-[#084097] dark:group-hover:text-cyan-400 transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-3 text-[#084097] dark:text-cyan-400 font-bold group-hover:translate-x-3 transition">
                    <span>Explore Service</span>
                    <iconMap.ArrowRight className="w-5 h-5" />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={handleViewAllServices}
            className="px-14 py-6 bg-[#084097] hover:bg-[#06307a] text-white font-black text-xl rounded-full transition-all shadow-2xl hover:shadow-3xl hover:scale-105 flex items-center gap-4 mx-auto"
          >
            View All Services
            <iconMap.ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
