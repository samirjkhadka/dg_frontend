import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { serviceCategories } from '../data/services';

const Services = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState(serviceCategories[0].id);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll to top when the page is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle hash navigation from dropdown menu
  useEffect(() => {
    if (location.hash) {
      const categoryId = location.hash.replace('#', '');
      const category = serviceCategories.find(cat => cat.id === categoryId);
      if (category) {
        setSelectedCategory(categoryId);
        // Scroll to the category section
        const element = document.getElementById(categoryId);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }
    }
  }, [location.hash]);

  // Handle scroll for sticky navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Services | Digihub - Digital Solutions & Expertise</title>
        <meta name="description" content="Explore our comprehensive range of digital services including web development, mobile apps, AI solutions, and more. Transform your business with Digihub." />
      </Helmet>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="heading-1 mb-6">Our Services</h1>
              <p className="text-lg text-gray-600 mb-8">
                We offer a comprehensive range of services to help your business grow
                and succeed in the digital world. Our team of experts is dedicated to
                delivering high-quality solutions tailored to your specific needs.
              </p>
              <div className="flex flex-wrap justify-center gap-8 mt-12">
                {[
                  { number: '10+', label: 'Years Experience' },
                  { number: '200+', label: 'Projects Completed' },
                  { number: '50+', label: 'Team Members' },
                  { number: '98%', label: 'Client Satisfaction' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Navigation - Sticky */}
        <div className={`sticky top-20 z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
          <section className="py-4 border-b">
            <div className="container">
              <div className="flex flex-wrap justify-center gap-4">
                {serviceCategories.map((category) => (
                  <motion.button
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-2 rounded-full font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    id={category.id}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.title}
                  </motion.button>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Category Description */}
        <section className="py-12 bg-gray-50">
          <div className="container">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="heading-2 mb-4">
                {serviceCategories.find(cat => cat.id === selectedCategory)?.title}
              </h2>
              <p className="text-gray-600">
                {serviceCategories.find(cat => cat.id === selectedCategory)?.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories
                .find((cat) => cat.id === selectedCategory)
                ?.services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="p-8">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-3xl mb-6">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <ul className="space-y-2 mb-8">
                        {service.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary mr-2">✓</span>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li className="text-primary font-medium">
                            +{service.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                      <Link
                        to={`/services/${service.id}`}
                        className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 mb-4">Explore Other Categories</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our other service categories to find the perfect solution for your business needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceCategories
                .filter(cat => cat.id !== selectedCategory)
                .map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl mb-4">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <button
                      onClick={() => setSelectedCategory(category.id)}
                      className="text-primary font-medium hover:underline"
                    >
                      View Services
                    </button>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="heading-2 mb-4">Ready to Get Started?</h2>
              <p className="text-gray-600 mb-8">
                Let's discuss how our services can help your business grow and succeed.
                Contact us today for a free consultation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-block bg-gray-100 text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  View Our Work
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services; 