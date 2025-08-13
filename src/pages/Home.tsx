import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import HeroSection from "../components/home/Carousel";
import Testimonials from "../components/home/Testimonials";
import { useHeroSection, useHeroStats, useServices, useProjects } from "../hooks/useContent";
import LoadingSpinner from "../components/common/LoadingSpinner";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
}

const featuredProjects: Project[] = [
  {
    id: "trading-management-system",
    title: "Trading Management System",
    category: "Financial Technology",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description:
      "A comprehensive trading platform with real-time market data, automated trading strategies, and risk management tools.",
    technologies: [
      "React",
      "Node.js",
      "WebSocket",
      "Python",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    id: "hr-management-system",
    title: "HR Management System",
    category: "Enterprise Solutions",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description:
      "End-to-end HR management solution featuring employee onboarding, performance tracking, and payroll integration.",
    technologies: [
      "React",
      "Java Spring Boot",
      "MySQL",
      "Docker",
      "AWS",
      "Microservices",
    ],
  },
  {
    id: "walletx",
    title: "WalletX",
    category: "FinTech",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description:
      "Next-generation digital wallet with multi-currency support, crypto integration, and seamless payment solutions.",
    technologies: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Blockchain",
      "Stripe",
      "Firebase",
    ],
  },
  {
    id: "loyalty-management-system",
    title: "Loyalty Management System",
    category: "Customer Engagement",
    image:
      "https://images.unsplash.com/photo-1556742045-6e3c5d5c3c6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description:
      "Advanced loyalty program platform with points management, rewards automation, and customer analytics.",
    technologies: [
      "React",
      "Python Django",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Analytics",
    ],
  },
  {
    id: "agro-tech",
    title: "Agro Tech",
    category: "Agriculture Technology",
    image:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description:
      "Innovative agricultural management system with crop monitoring, weather forecasting, and supply chain optimization.",
    technologies: [
      "React",
      "Node.js",
      "IoT",
      "Machine Learning",
      "PostgreSQL",
      "AWS",
    ],
  },
];

const Home = () => {
  const navigate = useNavigate();
  
  // Fetch data from API
  const { data: heroData, isLoading: heroLoading, error: heroError } = useHeroSection();
  const { data: heroStats, isLoading: heroStatsLoading, error: heroStatsError } = useHeroStats();
  const { data: servicesData, isLoading: servicesLoading, error: servicesError } = useServices();
  const { data: projectsData, isLoading: projectsLoading, error: projectsError } = useProjects();

  const handleViewAllServices = () => {
    // Navigate to services page and scroll to top
    navigate("/services");
    window.scrollTo(0, 0);
  };

  const handleViewPortfolio = () => {
    // Navigate to portfolio page and scroll to top
    navigate("/portfolio");
    window.scrollTo(0, 0);
  };

  const handleViewAbout = () => {
    // Navigate to about page and scroll to top
    navigate("/about");
    window.scrollTo(0, 0);
  };

  // Show loading spinner if any data is loading
  if (heroLoading || heroStatsLoading || servicesLoading || projectsLoading) {
    return <LoadingSpinner />;
  }

  // Show error message if any data failed to load
  if (heroError || heroStatsError || servicesError || projectsError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Error Loading Content</h2>
          <p className="text-gray-600">Please try refreshing the page.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Home | Digi Hub - Innovative Digital Solutions</title>
        <meta
          name="description"
          content="Welcome to Digi Hub - Your partner in digital innovation. We specialize in creating cutting-edge solutions for businesses across various industries."
        />
      </Helmet>
      <div className="pt-20">
        {/* Hero Section */}
        <section id="home">
          <HeroSection heroData={heroData?.data} heroStats={heroStats?.data} />
        </section>

        {/* About Section */}
        <section id="about" className="py-20 section-dark">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 mb-4">
                About <span className="text-primary-gradient">Us</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-justify">
                We are focused on using the latest technology to transform the
                capital markets, making them more efficient, transparent, and
                accessible for everyone. By improving how investors and
                institutions interact with the market, we aim to create a
                smoother, more reliable, and fair environment where decisions
                are driven by real-time data and advanced tools. Our goal is to
                make investing simpler and more secure for all participants.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-primary/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      Innovation at Our Core
                    </h3>
                    <p className="text-gray-300">
                      We stay ahead of technology trends to deliver solutions
                      that give your business a competitive edge.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-primary/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Expert Team</h3>
                    <p className="text-gray-300">
                      Our diverse team brings together years of experience
                      across various industries and technologies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-primary/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      Quality Assured
                    </h3>
                    <p className="text-gray-300">
                      We maintain the highest standards of quality throughout
                      the development process.
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleViewAbout}
                    className="inline-flex items-center bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
                  >
                    Learn More About Us
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="card-glass p-8 rounded-2xl shadow-lg overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full -ml-16 -mb-16"></div>

                  <div className="relative z-10">
                    <div className="aspect-square flex items-center justify-center">
                      <motion.div
                        className="text-6xl font-bold text-primary-gradient"
                        animate={{
                          scale: [1, 1.05, 1],
                          rotate: [0, 5, 0, -5, 0],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        NL
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {heroStats?.data && heroStats.data.length > 0 ? (
                    heroStats.data.slice(0, 4).map((stat, index) => (
                      <motion.div
                        key={stat.id}
                        className="card-glass p-4 rounded-lg shadow-md text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="text-3xl font-bold text-primary-gradient mb-1">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-300">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <>
                      <motion.div
                        className="card-glass p-4 rounded-lg shadow-md text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <div className="text-3xl font-bold text-primary-gradient mb-1">
                          50+
                        </div>
                        <div className="text-sm text-gray-300">
                          Projects Completed
                        </div>
                      </motion.div>
                      <motion.div
                        className="card-glass p-4 rounded-lg shadow-md text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <div className="text-3xl font-bold text-primary-gradient mb-1">
                          25+
                        </div>
                        <div className="text-sm text-gray-300">Team Members</div>
                      </motion.div>
                      <motion.div
                        className="card-glass p-4 rounded-lg shadow-md text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="text-3xl font-bold text-primary-gradient mb-1">
                          5+
                        </div>
                        <div className="text-sm text-gray-300">
                          Years Experience
                        </div>
                      </motion.div>
                      <motion.div
                        className="card-glass p-4 rounded-lg shadow-md text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <div className="text-3xl font-bold text-primary-gradient mb-1">
                          100%
                        </div>
                        <div className="text-sm text-gray-300">
                          Client Satisfaction
                        </div>
                      </motion.div>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        {servicesData && servicesData.data.length > 0 && (
        <section id="services" className="py-20 section-glass">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 mb-4">Our Services</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-justify">
                We offer a comprehensive range of software development services
                to help businesses thrive in the digital age.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* {[
                {
                  title: "Web Development",
                  description:
                    "Custom web applications built with modern technologies and best practices.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  ),
                  color: "bg-blue-500",
                  features: [
                    "Responsive Design",
                    "Progressive Web Apps",
                    "E-commerce Solutions",
                    "CMS Development",
                  ],
                  link: "/services#web-development",
                },
                {
                  title: "Mobile Development",
                  description:
                    "Native and cross-platform mobile applications for iOS and Android.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                  color: "bg-green-500",
                  features: [
                    "iOS Development",
                    "Android Development",
                    "React Native Apps",
                    "Flutter Development",
                  ],
                  link: "/services#mobile-development",
                },
                {
                  title: "UI/UX Design",
                  description:
                    "Beautiful and intuitive user interfaces with exceptional user experiences.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                  ),
                  color: "bg-purple-500",
                  features: [
                    "User Research",
                    "Wireframing",
                    "Prototyping",
                    "Visual Design",
                  ],
                  link: "/services#ui-ux-design",
                },
              ]. */}

              
             {servicesData?.data.map((service, index) => (
                <Link
                  to={service.link}
                  key={service.title}
                  className="block"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card-glass p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    whileHover={{ y: -5 }}
                  >
                    <div
                      className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 text-justify">{service.description}</p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-primary mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* View All Services Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <button
                onClick={handleViewAllServices}
                className="inline-flex items-center bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
              >
                View All Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </motion.div>
          </div>
        </section>)}

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 section-dark">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Our Products
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-justify">
                Explore some of our recent successful projects and see how we've
                helped businesses achieve their goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <Link
                  to={`/portfolio/${project.id}`}
                  key={project.id}
                  className="block"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card-glass rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  >
                    <div className="relative h-48">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-sm text-white/90 font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-4 text-justify">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm backdrop-blur-sm border border-slate-600/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="inline-block w-full text-center bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 transform hover:scale-105">
                        View Product Details
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link
                to="/portfolio"
                className="inline-block bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
              >
                View All Projects
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
          <Testimonials />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 section-glass">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 mb-4">Contact Us</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-justify">
                Have a project in mind? Get in touch with us to discuss how we
                can help bring your ideas to life.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="card-glass p-8 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">Get in Touch</h3>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-slate-800/50 border border-slate-600/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-gray-400 backdrop-blur-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-slate-800/50 border border-slate-600/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-gray-400 backdrop-blur-sm"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 bg-slate-800/50 border border-slate-600/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-gray-400 backdrop-blur-sm"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-3 rounded-md font-medium hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="card-glass p-8 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-primary mr-4 text-xl">📍</div>
                    <div>
                      <h4 className="font-medium text-white">Address</h4>
                      <p className="text-gray-300">
                        Kalash Building, Bhatbhateni, Naxal, <br /> Kathmandu
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-primary mr-4 text-xl">📧</div>
                    <div>
                      <h4 className="font-medium text-white">Email</h4>
                      <p className="text-gray-300">info@digihub.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-primary mr-4 text-xl">📱</div>
                    <div>
                      <h4 className="font-medium text-white">Phone</h4>
                      <p className="text-gray-300">+977 01 4333333</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-primary mr-4 text-xl">⏰</div>
                    <div>
                      <h4 className="font-medium text-white">Business Hours</h4>
                      <p className="text-gray-300 text-justify">
                        Sunday - Thursday: 9:00 AM - 6:00 PM <br />
                        Friday: 9:30 AM - 1:30 PM
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Map removed */}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 section-dark">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="heading-2 mb-4">Ready to Start Your Project?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-justify">
                Let's discuss how we can help bring your ideas to life with our
                expertise and innovative solutions.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
