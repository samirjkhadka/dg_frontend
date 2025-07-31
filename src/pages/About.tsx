import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaRocket, FaEye, FaUsers, FaLightbulb, FaCode, FaHeart, FaStar, FaCheckCircle } from "react-icons/fa";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

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
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '60px 60px'
            }} />
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
                  About <span className="text-primary-gradient">Digi Hub</span>
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed text-justify">
                  We are a team of passionate developers, designers, and
                  innovators dedicated to creating cutting-edge digital solutions
                  that transform businesses and enhance user experiences.
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
                    <div className="text-8xl font-bold text-primary-gradient">DH</div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-6 -right-6 bg-gradient-to-r from-primary/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-5 border border-primary/30 shadow-xl"
                  animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="text-primary font-bold text-lg">Innovation</div>
                  <div className="text-xs text-gray-400">At Core</div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl p-5 border border-blue-500/30 shadow-xl"
                  animate={{ y: [0, 15, 0], rotate: [0, -2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="text-blue-400 font-bold text-lg">Excellence</div>
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
                    At Digi Hub, our mission is to empower businesses and
                    individuals by delivering cutting-edge technology solutions
                    that boost efficiency, transparency, and accessibility across
                    various industries. We are dedicated to building seamless,
                    secure and reliable platforms that foster growth and
                    profitability, enabling our clients to reach their fullest
                    potential in a rapidly changing digital world.
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
                    Our vision is to become a global leader in technology-driven
                    solutions, revolutionizing industries and setting new
                    benchmarks for excellence in capital markets, fintech, and
                    beyond. We aim to consistently innovate, broaden our
                    offerings, and provide exceptional value to our clients,
                    while maintaining the highest standards of quality and
                    customer satisfaction.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
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
              <p className="text-xl text-gray-200 max-w-3xl mx-auto text-justify">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: FaCode,
                  title: "Innovation",
                  description: "Constantly pushing boundaries with cutting-edge technologies and creative solutions."
                },
                {
                  icon: FaUsers,
                  title: "Collaboration",
                  description: "Working together with clients and team members to achieve exceptional results."
                },
                {
                  icon: FaLightbulb,
                  title: "Excellence",
                  description: "Delivering the highest quality solutions that exceed expectations."
                },
                {
                  icon: FaHeart,
                  title: "Passion",
                  description: "Driven by our love for technology and commitment to making a difference."
                },
                {
                  icon: FaRocket,
                  title: "Growth",
                  description: "Continuously learning and evolving to stay ahead of industry trends."
                },
                {
                  icon: FaEye,
                  title: "Transparency",
                  description: "Building trust through open communication and honest relationships."
                }
              ].map((value, index) => (
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
                      <value.icon className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-200 text-base leading-relaxed text-justify">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
