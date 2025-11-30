// src/pages/Portfolio.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { mockProject } from "@/data/mockPortfolioData";
import { iconMap } from "@/lib/icons";

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Portfolio | Digi Hub - Capital Markets Technology</title>
        <meta
          name="description"
          content="See our real-world trading platforms, mobile apps, and risk systems trusted by Nepal's leading financial institutions."
        />
      </Helmet>

      <div className="pt-24 md:pt-28 lg:pt-32 min-h-screen bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-white">
        {/* Hero */}
        <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#084097]/10 via-transparent to-cyan-500/10">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-3 bg-[#084097]/10 dark:bg-[#084097]/20 px-8 py-4 rounded-full text-lg font-bold text-[#084097] dark:text-cyan-400 border border-[#084097]/20 mb-10">
                <iconMap.Briefcase className="w-6 h-6" /> Our Success Stories
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-8">
                Built for <span className="text-[#084097]">Real Traders</span>
              </h1>
              <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-5xl mx-auto">
                From retail investors to institutional brokers — our platforms
                power Nepal’s capital markets
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {mockProject.map((project, i) => (
                <Link to={`/portfolio/${project.id}`} key={project.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group bg-white dark:bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-xl hover:shadow-2xl hover:border-[#084097] transition-all"
                    whileHover={{ y: -8 }}
                  >
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute top-6 left-6">
                        <span className="px-6 py-3 bg-[#084097] text-white font-bold rounded-full text-sm">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-3xl font-black mb-2">
                          {project.title}
                        </h3>
                        <p className="text-lg opacity-90">
                          {project.client} • {project.year}
                        </p>
                      </div>
                    </div>
                    <div className="p-10">
                      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-3 mb-8">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-gray-100 dark:bg-white/10 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 5 && (
                          <span className="px-4 py-2 bg-gray-100 dark:bg-white/10 rounded-full text-sm">
                            +{project.technologies.length - 5} more
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-[#084097] dark:text-cyan-400 font-black text-lg">
                        View Case Study
                        <iconMap.ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#084097] text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              Ready to Build Yours?
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 px-12 py-6 bg-white text-[#084097] font-black text-xl rounded-full hover:scale-105 transition shadow-2xl"
            >
              Start Your Project
              <iconMap.TrendingUp className="w-6 h-6" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
