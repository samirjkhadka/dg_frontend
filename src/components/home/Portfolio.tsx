import { mockProject } from "@/data/mockPortfolioData";
import { iconMap } from "@/lib/icons";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="py-24 md:py-32 bg-gray-50 dark:bg-slate-950"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            Our <span className="text-[#084097]">Products</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Real-world trading solutions trusted by Nepal’s top brokers and
            financial institutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {mockProject.slice(0, 6).map((project, i) => (
            <Link to={`/portfolio/${project.id}`} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white dark:bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-2xl hover:border-[#084097] transition-all duration-500"
                whileHover={{ y: -12 }}
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#084097]/20 to-cyan-500/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                  <span className="absolute top-4 left-4 px-4 py-2 bg-[#084097]/80 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#084097] dark:group-hover:text-cyan-400 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#084097] dark:text-cyan-400 font-bold">
                    <span>View Project</span>
                    <iconMap.ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-4 px-12 py-6 bg-[#084097] hover:bg-[#06307a] text-white font-black text-xl rounded-full transition-all shadow-2xl hover:shadow-3xl hover:scale-105"
          >
            Explore All Projects
            <iconMap.ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
