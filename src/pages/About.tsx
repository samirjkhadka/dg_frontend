import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaRocket,
  FaEye,
//  FaUsers,
 // FaLightbulb,
 // FaCode,
 // FaHeart,
  FaStar,
 // FaCheckCircle,
} from "react-icons/fa";
import {
  useAboutSection,
  useAboutStats,
  useAboutValues,
} from "../hooks/useContent";
import LoadingSpinner from "../components/common/LoadingSpinner";

const About = () => {
  // Fetch about section data from API
  const {
    data: aboutData,
    isLoading: aboutLoading,
    error: aboutError,
  } = useAboutSection();

  const {
    data: aboutStats,
   // isLoading: aboutStatsLoading,
   // error: aboutStatsError,
  } = useAboutStats();
  const {
    data: aboutValues,
   // isLoading: aboutValuesLoading,
   // error: aboutValuesError,
  } = useAboutValues();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  // Show loading spinner if data is loading
  if (aboutLoading) {
    return <LoadingSpinner />;
  }

  // Show error message if data failed to load
  if (aboutError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Error Loading About Section
          </h2>
          <p className="text-gray-600">Please try refreshing the page.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>About Us | Digi Hub - Our Story & Mission</title>
        <meta
          name="description"
          content="Learn about Digi Hub - our mission, vision, and the passionate team behind our innovative digital solutions."
        />
      </Helmet>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900 overflow-hidden">
          {/* Animated background grid */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          {/* Gradient orbs */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

          <div className="container relative z-10 h-screen flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary/20 to-blue-500/20 px-6 py-3 rounded-full text-sm border border-primary/30 backdrop-blur-sm"
                >
                  <FaRocket className="text-primary animate-pulse" />
                  <span className="text-gray-200 font-medium">Our Story</span>
                  <FaStar className="text-yellow-400" />
                </motion.div>

                <h1 className="heading-1">
                  {aboutData?.data?.title || "About Digi Hub"}
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed text-justify">
                  {aboutData?.data?.description ||
                    "We are a team of passionate developers, designers, and innovators dedicated to creating cutting-edge digital solutions that transform businesses and enhance user experiences."}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
                  <div className="aspect-square flex items-center justify-center">
                    {aboutData?.data?.image ? (
                      <img
                        src={
                          aboutData.data.image
                            ? `${import.meta.env.VITE_API_BASE_URL_Images}/uploads/${
                                aboutData.data.image
                              }`
                            : "/images/placeholder.png"
                        }
                        alt="Digi Hub"
                        className="w-full h-full object-cover rounded-3xl"
                        crossOrigin="anonymous"
                      />
                    ) : (
                      <div className="text-8xl font-bold text-primary-gradient">
                        DH
                      </div>
                    )}
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-6 -right-6 bg-gradient-to-r from-primary/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-5 border border-primary/30 shadow-xl"
                  animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="text-primary font-bold text-lg">
                    Innovation
                  </div>
                  <div className="text-xs text-gray-400">At Core</div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl p-5 border border-blue-500/30 shadow-xl"
                  animate={{ y: [0, 15, 0], rotate: [0, -2, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <div className="text-blue-400 font-bold text-lg">
                    Excellence
                  </div>
                  <div className="text-xs text-gray-400">In Delivery</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}

        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 overflow-hidden">
          {/* Background effects */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="heading-2 mb-6">Our Mission & Vision</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed text-justify">
                We strive to be at the forefront of technological innovation,
                delivering solutions that drive business growth and create
                lasting impact.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                {...fadeInUp}
                className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                      <FaRocket className="text-white text-xl" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-gray-200 leading-relaxed text-base text-justify">
                    {aboutData?.data?.mission ||
                      " At Digi Hub, our mission is to empower businesses and individuals by delivering cutting-edge technology solutions                    that boost efficiency, transparency, and accessibilityacross various industries. We are dedicated to buildingseamless, secure and reliable platforms that foster growthand profitability, enabling our clients to reach their  fullest potential in a rapidly changing digital world."}
                  </p>
                </div>
              </motion.div>
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                      <FaEye className="text-white text-xl" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-gray-200 leading-relaxed text-base text-justify">
                    {aboutData?.data?.vision ||
                      "Our vision is to become a global leader in technology-driven solutions, revolutionizing industries and setting new benchmarks for excellence in capital markets, fintech, and beyond. We aim to consistently innovate, broaden our offerings, and provide exceptional value to our clients, while maintaining the highest standards of quality and customer satisfaction."}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        {aboutStats?.data && aboutStats.data.length > 0 && (
          <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-10 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

            <div className="container relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="heading-2 mb-6">Our Achievements</h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  Numbers that reflect our commitment to excellence
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {aboutStats?.data.map((stat, index) => (
                  <motion.div
                    key={stat.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300">
                      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 mb-4">
                        {stat.value}
                      </div>
                      <div className="text-lg text-gray-300 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Values */}
        {aboutValues?.data && aboutValues.data.length > 0 && (
          <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900 overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-300"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700"></div>

            <div className="container relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="heading-2 mb-6">Our Core Values</h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto text-center">
                  The principles that guide everything we do
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {aboutValues?.data.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl text-center hover:scale-105 transition-transform duration-300 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-primary/25 transition-shadow duration-300">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4">
                        {value.title}
                      </h3>
                      <p className="text-gray-200 text-base leading-relaxed text-justify">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default About;
