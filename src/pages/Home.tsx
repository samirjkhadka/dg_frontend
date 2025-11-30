// src/pages/Home.tsx
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/home/Carousel";
import Testimonials from "@/components/home/Testimonials";
import {
  mockHeroData,
  mockHeroStats,
  mockServices,
  mockProjects,
} from "@/data/mockHomeData";
import ClientMarquee from "@/components/common/ClientMarquee";

const Home = () => {
  const navigate = useNavigate();

  const handleViewAllServices = () => {
    navigate("/services");
    window.scrollTo(0, 0);
  };

  const handleViewAbout = () => {
    navigate("/about");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Helmet>
        <title>Home | Digi Hub - Transforming Capital Markets</title>
        <meta
          name="description"
          content="Digi Hub delivers cutting-edge technology solutions for capital markets — secure, efficient, and innovative."
        />
      </Helmet>

      {/* Main Wrapper */}
      <div className="pt-24 md:pt-28 lg:pt-32 min-h-screen bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {/* Hero Section */}
        <section id="home">
          <HeroSection
            heroData={mockHeroData.data}
            heroStats={mockHeroStats.data}
          />
        </section>

        <ClientMarquee />

        {/* About Section */}
        <section id="about" className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                About <span className="text-[#084097]">Us</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We are focused on using the latest technology to transform the
                capital markets, making them more efficient, transparent, and
                accessible for everyone. Our goal is to make investing simpler
                and more secure for all participants.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Features */}
              <div className="space-y-12">
                {[
                  {
                    title: "Innovation at Our Core",
                    desc: "We stay ahead of technology trends to deliver solutions that give your business a competitive edge.",
                  },
                  {
                    title: "Expert Team",
                    desc: "Our diverse team brings together years of experience across finance and technology.",
                  },
                  {
                    title: "Quality Assured",
                    desc: "We maintain the highest standards of quality throughout the development process.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="flex gap-6"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#084097] flex items-center justify-center flex-shrink-0">
                      <div className="w-8 h-8 bg-white rounded-lg" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}

                <button
                  onClick={handleViewAbout}
                  className="mt-8 px-10 py-4 bg-[#084097] hover:bg-[#06307a] text-white rounded-full font-bold text-lg transition shadow-lg"
                >
                  Learn More About Us →
                </button>
              </div>

              {/* Right: Stats + NL */}
              <div className="space-y-10">
                <div className="bg-gradient-to-br from-[#084097]/10 to-cyan-500/10 dark:from-[#084097]/20 dark:to-cyan-500/20 backdrop-blur-sm rounded-3xl p-12 border border-[#084097]/20 dark:border-cyan-500/30">
                  <div className="flex justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 6, repeat: Infinity }}
                      className="text-9xl font-black text-[#084097]"
                    >
                      NL
                    </motion.div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {mockHeroStats.data.map((stat, i) => (
                    <motion.div
                      key={stat.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200 dark:border-white/10 shadow-sm"
                    >
                      <div className="text-4xl font-bold text-[#084097] mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="py-24 bg-gray-100 dark:bg-slate-900/50"
        >
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Our Services
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive software solutions designed to transform capital
                markets.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10">
              {mockServices.data.map((service, i) => (
                <Link to={service.link} key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-white/10 hover:border-[#084097] dark:hover:border-cyan-500 transition-all group shadow-lg hover:shadow-2xl"
                    whileHover={{ y: -8 }}
                  >
                    <div
                      className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-6 text-white group-hover:scale-110 transition`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="text-[#084097] dark:text-cyan-400 font-bold group-hover:translate-x-2 transition">
                      Learn More →
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-16">
              <button
                onClick={handleViewAllServices}
                className="px-12 py-5 bg-[#084097] hover:bg-[#06307a] text-white rounded-full font-bold text-lg transition shadow-xl"
              >
                View All Services →
              </button>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Our Products
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Real-world solutions trusted by leading financial institutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10">
              {mockProjects.data.slice(0, 6).map((project, i) => (
                <Link to={`/portfolio/${project.id}`} key={project.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white dark:bg-white/5 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
                  >
                    <div className="h-48 bg-gray-200 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-700" />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                        {project.description}
                      </p>
                      <div className="mt-4 text-[#084097] dark:text-cyan-400 font-medium group-hover:translate-x-1 transition">
                        View Details →
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          id="testimonials"
          className="py-24 bg-gray-100 dark:bg-slate-900/50"
        >
          <Testimonials />
        </section>

        {/* Contact */}
        <section id="contact" className="py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Let’s Build the Future Together
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              Ready to transform your capital markets operations?
            </p>
            <Link
              to="/contact"
              className="inline-block px-16 py-6 bg-[#084097] hover:bg-[#06307a] text-white text-xl font-bold rounded-full shadow-2xl transition hover:scale-105"
            >
              Start Your Project
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
