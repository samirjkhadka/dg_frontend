// src/pages/ProjectDetail.tsx
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { iconMap } from "@/lib/icons";
import { CheckCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { mockProject } from "@/data/mockPortfolioData";

const { ArrowRight: Arrow } = iconMap;

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();

  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const projectsData = { data: mockProject };
  useEffect(() => {
    if (projectsData?.data && id) {
      const found = projectsData.data.find((p: any) => p.id === Number(id));
      if (found) {
        setProject({
          ...found,
          features: found.features || [],
          technologies: found.technologies || [],
          gallery: [], // not used in mock
          results: [], // not used
          advantages: [],
          testimonials: [],
        });
      }
    }
    setLoading(false);
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950">
        <div className="w-16 h-16 border-4 border-[#084097] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  if (!project) {
    return (
      <>
        <Helmet>
          <title>Project Not Found | DigiHub</title>
        </Helmet>
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white mb-8">
              404
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-400 mb-10">
              This project doesn't exist.
            </p>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-4 px-10 py-5 bg-[#084097] text-white font-bold text-xl rounded-full hover:bg-[#06307a] transition-all hover:scale-105 shadow-2xl"
            >
              ← Return to Our Work
            </Link>
          </motion.div>
        </section>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Digi Hub - Our Work</title>
        <meta name="description" content={project.description} />
      </Helmet>

      {/* Breadcrumb */}
      <section className="pt-32 pb-8 bg-gradient-to-b from-[#084097] to-[#084097]/90">
        <div className="container mx-auto px-6">
          <nav className="flex items-center gap-3 text-white/70 text-sm">
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>
            <span>→</span>
            <Link to="/portfolio" className="hover:text-white transition">
              Our Work
            </Link>
            <span>→</span>
            <span className="text-white font-bold">{project.title}</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#084097] via-[#084097]/95 to-cyan-600/30">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-bold mb-6 border border-white/30">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery?.length > 0 && (
        <section className="py-20 bg-white dark:bg-slate-900/30">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-black text-center mb-12">
              Project Gallery
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {project.gallery.map((img: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedImage(img)}
                  className="relative aspect-video rounded-3xl overflow-hidden cursor-zoom-in group"
                >
                  <img
                    src={`${
                      import.meta.env.VITE_API_BASE_URL_Images
                    }/uploads/${img}`}
                    alt={`Screenshot ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <span className="text-white text-5xl">+</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-24 bg-gray-50 dark:bg-slate-950">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16">
            Key Features Delivered
          </h2>
          <div className="grid lg:grid-cols-2 gap-10">
            {project.features?.map((f: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white dark:bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-gray-200 dark:border-white/10 hover:border-[#084097] transition-all hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#084097] to-cyan-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <span className="text-3xl">{f.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#084097] dark:group-hover:text-cyan-400 transition">
                  {f.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      {project.results?.length > 0 && (
        <section className="py-24 bg-gradient-to-br from-[#084097] to-cyan-600/50">
          <div className="container mx-auto px-6 text-white text-center">
            <h2 className="text-5xl md:text-7xl font-black mb-16">
              Results That Matter
            </h2>
            <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              {project.results.map((result: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20"
                >
                  <CheckCircle className="w-16 h-16 mx-auto mb-6 text-white" />
                  <p className="text-2xl font-bold">{result}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-32 bg-gradient-to-br from-[#084097] via-[#084097]/95 to-cyan-600/50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              Let's create your success story together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-4 px-16 py-7 bg-white text-[#084097] font-black text-2xl rounded-full shadow-2xl hover:scale-105 transition-all"
              >
                Start Your Project
                <Arrow className="w-8 h-8" />
              </Link>
              <a
                href="tel:+97714433999"
                className="inline-flex items-center gap-4 px-12 py-7 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full text-white font-bold text-xl hover:bg-white/20 transition"
              >
                <Phone className="w-7 h-7" />
                Schedule a Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={`${
                import.meta.env.VITE_API_BASE_URL_Images
              }/uploads/${selectedImage}`}
              alt="Enlarged"
              className="max-w-full max-h-full rounded-2xl shadow-2xl"
            />
            <button className="absolute top-8 right-8 text-white text-5xl hover:scale-125 transition">
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectDetail;
