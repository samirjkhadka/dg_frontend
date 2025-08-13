import { useState, useEffect, createElement } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaRocket,
  FaCode,
  FaMobile,
  FaDesktop,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";
import { useServices, useServiceCategories } from "../hooks/useContent";
import LoadingSpinner from "../components/common/LoadingSpinner";

const renderIcon = (iconString: string, className: string = "") => {
  // Check if the iconString is an emoji
  const isEmoji = /\p{Emoji}/u.test(iconString);

  if (isEmoji) {
    return <span className={`text-3xl ${className}`}>{iconString}</span>;
  }

  return <span className={`text-3xl ${className}`}>{iconString}</span>;
};
const Services = () => {
  const location = useLocation();

  // Fetch data from API
  const {
    data: servicesData,
    isLoading: servicesLoading,
    error: servicesError,
  } = useServices();
  const {
    data: categoriesData,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useServiceCategories();

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Set initial selected category when categories are loaded
  useEffect(() => {
    if (categoriesData?.data && categoriesData.data.length > 0) {
      setSelectedCategory(categoriesData.data[0].id.toString());
    }
  }, [categoriesData]);

  // Scroll to top when the page is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle hash navigation from dropdown menu
  useEffect(() => {
    if (location.hash && categoriesData?.data) {
      const categoryId = location.hash.replace("#", "");
      const category = categoriesData.data.find(
        (cat) => cat.id.toString() === categoryId
      );
      if (category) {
        setSelectedCategory(categoryId);
        // Scroll to the category section
        const element = document.getElementById(categoryId);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    }
  }, [location.hash, categoriesData]);

  // Handle scroll for sticky navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const getCategoryIcon = (categoryId: string) => {
  //   const icons: { [key: string]: any } = {
  //     'software-development': FaCode,
  //     'design': FaDesktop,
  //     'mobile-development': FaMobile,
  //     'cloud-services': FaCloud,
  //     'data-analytics': FaDatabase,
  //   };
  //   return icons[categoryId] || FaRocket;
  // };

  // Show loading spinner if data is loading
  if (servicesLoading || categoriesLoading) {
    return <LoadingSpinner />;
  }

  // Show error message if data failed to load
  if (servicesError || categoriesError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Error Loading Services
          </h2>
          <p className="text-gray-600">Please try refreshing the page.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Our Services | Digi Hub - Digital Solutions & Expertise</title>
        <meta
          name="description"
          content="Explore our comprehensive range of digital services including web development, mobile apps, AI solutions, and more. Transform your business with Digi Hub."
        />
      </Helmet>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-dark py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary/20 to-blue-500/20 px-6 py-3 rounded-full text-sm border border-primary/30 backdrop-blur-sm"
              >
                <FaRocket className="text-primary animate-pulse" />
                <span className="text-gray-200 font-medium">What We Offer</span>
              </motion.div>

              <h1 className="heading-1">
                Our <span className="text-primary-gradient">Services</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto text-justify">
                We offer a comprehensive range of services to help your business
                grow and succeed in the digital world. Our team of experts is
                dedicated to delivering high-quality solutions tailored to your
                specific needs.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                {[
                  { number: "10+", label: "Years Experience" },
                  { number: "200+", label: "Projects Completed" },
                  { number: "50+", label: "Team Members" },
                  { number: "98%", label: "Client Satisfaction" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold text-primary-gradient mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Navigation - Sticky */}
        <div
          className={`sticky top-20 z-10 transition-all duration-300 ${
            isScrolled
              ? "bg-slate-800/80 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl"
              : "bg-transparent"
          }`}
        >
          <section className="py-6">
            <div className="container">
              <div className="flex flex-wrap justify-center gap-4">
                {categoriesData?.data?.map((category) => {
                  // const Icon = getCategoryIcon(category.name.toLowerCase().replace(/\s+/g, '-'));
                  return (
                    <motion.button
                      key={category.id}
                      onClick={() =>
                        setSelectedCategory(category.id.toString())
                      }
                      className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                        selectedCategory === category.id.toString()
                          ? "bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg"
                          : "bg-slate-700/80 text-gray-200 hover:bg-slate-600/80 backdrop-blur-sm border border-slate-600/50 shadow-lg"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {renderIcon(category.icon, "text-lg")}
                      {/* <Icon className="text-lg" /> */}
                      <span>{category.name}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        {/* Services Content */}
        <section className="section-dark py-12">
          <div className="container">
            {categoriesData?.data?.map((category, categoryIndex) => {
              const categoryServices =
                servicesData?.data?.filter(
                  (service) => service.categoryId === category.id
                ) || [];

              return (
                <div
                  key={category.id}
                  id={category.id.toString()}
                  className={
                    categoryIndex < (categoriesData.data?.length || 0) - 1
                      ? "mb-16"
                      : ""
                  }
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                  >
                    <div className="flex items-center justify-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                        {/* {createElement(
                          getCategoryIcon(
                            category.name.toLowerCase().replace(/\s+/g, "-")
                          ),
                          { className: "text-white text-2xl" }
                        )} */}
                        {renderIcon(category.icon, "text-white text-2xl")}
                      </div>
                      <h2 className="heading-2">{category.title}</h2>
                    </div>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                      {category.description}
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryServices.map((service, index) => (
                      <Link
                        // to={`/services/${service.id}`}
                        to={service.link}
                        key={service.id}
                        className="block"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                        >
                          <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg hover:shadow-primary/25 transition-shadow duration-300">
                            <span className="text-3xl">{service.icon}</span>
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-4">
                            {service.title}
                          </h3>
                          <p className="text-gray-200 mb-6 leading-relaxed text-base text-justify">
                            {service.description}
                          </p>
                          <ul className="space-y-3">
                            {service.features.map((feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className="flex items-center space-x-3 text-gray-200"
                              >
                                <div className="w-2 h-2 bg-primary rounded-full shadow-sm"></div>
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-dark py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="heading-2 mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Let's discuss your project and how we can help bring your vision
                to life. Our team is ready to create something amazing for you.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
              >
                <span>Start Your Project</span>
                <FaRocket />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
