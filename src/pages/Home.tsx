// src/pages/Home.tsx
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/home/Carousel";
import Testimonials from "@/components/home/Testimonials";
import { mockHeroData, mockHeroStats } from "@/data/mockHomeData";
import ClientMarquee from "@/components/common/ClientMarquee";
import { mockService } from "@/data/mockServicesData";
import { iconMap } from "@/lib/icons";
import { mockProject } from "@/data/mockPortfolioData";
import WhyChoose from "@/components/home/WhyChoose";
import Features from "@/components/home/Features";
import FloatingDemoButton from "@/components/layout/FloatingDemoButton";
import { MoveRight } from "lucide-react";

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
        <FloatingDemoButton />
        <ClientMarquee />

        {/* UPDATED ABOUT SECTION — NOW ELITE */}
        {/* NEW ELITE ABOUT SECTION */}
        <section id="about" className="py-24 md:py-32 overflow-hidden">
          <div className="container mx-auto px-6">
            {/* Hero Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8">
                Built for Nepal’s{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#084097] to-cyan-600">
                  Capital Markets
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed">
                We don’t just build software — we power the systems that move
                billions in daily trading volume. From real-time NEPSE terminals
                to enterprise brokerage platforms, we are the silent engine
                behind Nepal’s financial future.
              </p>
            </motion.div>

            {/* Three Pillars — Clean, Powerful, Animated */}
            <div className="grid lg:grid-cols-3 gap-10 mb-24">
              {[
                {
                  title: "Domain Mastery",
                  desc: "15+ years exclusively in capital markets. We speak NEPSE, SEBON, and broker workflows fluently.",
                  icon: "Trophy",
                  gradient: "from-[#084097] to-blue-700",
                },
                {
                  title: "Engineering Excellence",
                  desc: "Sub-50ms latency, 99.99% uptime, and systems that scale from 100 to 100,000 concurrent traders.",
                  icon: "Zap",
                  gradient: "from-cyan-600 to-teal-600",
                },
                {
                  title: "Unbreakable Trust",
                  desc: "Bank-grade security, regular pentests, and full regulatory compliance — your reputation is safe with us.",
                  icon: "Shield",
                  gradient: "from-emerald-600 to-green-600",
                },
              ].map((pillar, i) => {
                const Icon = iconMap[pillar.icon as keyof typeof iconMap];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.2,
                      duration: 0.8,
                      type: "spring",
                      stiffness: 80,
                    }}
                    className="group relative"
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-3xl blur-2xl"
                      style={{
                        backgroundImage: `linear-gradient(to bottom right, ${
                          pillar.gradient.split(" ")[1]
                        }, ${pillar.gradient.split(" ")[3]})`,
                      }}
                    />
                    <div className="relative bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-10 border border-gray-200/50 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                      <div
                        className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${pillar.gradient} p-5 shadow-lg mb-8`}
                      >
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900 dark:text-white">
                        {pillar.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Trust Bar — Stats + CTA */}
            <div className="bg-gradient-to-r from-[#084097] to-cyan-700 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10 grid md:grid-cols-4 gap-10 text-center">
                {[
                  { number: "50+", label: "Institutions" },
                  { number: "10+", label: "Years Leading" },
                  { number: "200+", label: "Projects Delivered" },
                  { number: "100K+", label: "Active Traders" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                  >
                    <div className="text-5xl md:text-6xl font-black mb-3">
                      {stat.number}
                    </div>
                    <div className="text-xl font-medium opacity-90">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="relative z-10 text-center mt-16"
              >
                <h3 className="text-3xl md:text-4xl font-black mb-6">
                  Ready to Transform Your Trading Platform?
                </h3>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-4 px-12 py-6 bg-white text-[#084097] font-black text-xl rounded-full hover:scale-110 transition-all shadow-2xl hover:shadow-cyan-400/50"
                >
                  Start Your Project Today
                  <span className="text-2xl">
                    <MoveRight />
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <WhyChoose />

        {/* UPDATED SERVICES SECTION  */}
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
                  iconMap[service.icon as keyof typeof iconMap] ||
                  iconMap.Laptop;

                return (
                  <div
                    key={service.id}
                    onClick={() => {
                      navigate("/services");
                      setTimeout(() => {
                        const element = document.getElementById(
                          `category-${service.categoryId}`
                        );
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                          window.scrollBy(0, -120); // Adjust for sticky header
                        }
                      }, 150);
                    }}
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

        <Features />
        {/* PORTFOLIO SECTION — HOME PAGE */}
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

        {/* Testimonials */}
        <section
          id="testimonials"
          className="py-24 bg-gray-100 dark:bg-slate-900/50"
        >
          <Testimonials />
        </section>

        {/* Contact */}
        {/* CONTACT CTA — HOME PAGE */}
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
                <span className="text-cyan-300">Together</span>
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
                  hello@digihub.com.np
                </div>
                <div className="flex items-center gap-3">
                  <iconMap.Phone className="w-6 h-6" />
                  +977 1 4433 999
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
