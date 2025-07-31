import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { serviceCategories } from '../data/services';

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [service, setService] = useState<any>(null);
  const [category, setCategory] = useState<any>(null);

  useEffect(() => {
    // Find the service and its category
    for (const cat of serviceCategories) {
      const foundService = cat.services.find(s => s.id === serviceId);
      if (foundService) {
        setService(foundService);
        setCategory(cat);
        break;
      }
    }
  }, [serviceId]);

  if (!service || !category) {
    return (
      <>
        <Helmet>
          <title>Service Not Found | Digihub</title>
        </Helmet>
        <div className="pt-20">
          <div className="section-dark py-20 text-center">
            <div className="container">
              <h1 className="heading-1 mb-4">Service Not Found</h1>
              <p className="text-gray-300 mb-8">The service you're looking for doesn't exist.</p>
              <Link
                to="/services"
                className="inline-block bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
              >
                Back to Services
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{service.title} | Digihub - {category.title}</title>
        <meta name="description" content={service.description} />
      </Helmet>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-dark py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-block mb-4">
                <Link
                  to="/services"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  ← Back to Services
                </Link>
              </div>
              <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center text-3xl mx-auto mb-6 backdrop-blur-sm border border-primary/30">
                {service.icon}
              </div>
              <h1 className="heading-1 mb-6">{service.title}</h1>
              <p className="text-lg text-gray-300">{service.description}</p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 section-glass">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="heading-2 mb-6">What We Offer</h2>
                <ul className="space-y-4">
                  {service.features.map((feature: string, index: number) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start text-gray-300"
                    >
                      <span className="text-primary mr-2">✓</span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="card-glass p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">Why Choose Us</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <h4 className="font-medium mb-1 text-white">Expert Team</h4>
                      <p className="text-gray-300">Our experienced professionals deliver high-quality solutions.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <h4 className="font-medium mb-1 text-white">Customized Approach</h4>
                      <p className="text-gray-300">We tailor our services to meet your specific needs and goals.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <h4 className="font-medium mb-1 text-white">Proven Track Record</h4>
                      <p className="text-gray-300">We have a history of successful projects and satisfied clients.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <div>
                      <h4 className="font-medium mb-1 text-white">Ongoing Support</h4>
                      <p className="text-gray-300">We provide continuous support and maintenance for your solutions.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 section-dark">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 mb-4">Our Process</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We follow a systematic approach to deliver high-quality solutions that
                meet your business needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery',
                  description:
                    'Understanding your requirements and business objectives.',
                },
                {
                  step: '02',
                  title: 'Planning',
                  description:
                    'Creating a detailed project plan and defining milestones.',
                },
                {
                  step: '03',
                  title: 'Development',
                  description:
                    'Building your solution with clean, efficient code.',
                },
                {
                  step: '04',
                  title: 'Delivery',
                  description:
                    'Testing, deployment, and ongoing support and maintenance.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 section-glass">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="heading-2 mb-4">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-8">
                Let's discuss how our {service.title.toLowerCase()} services can help your business grow and succeed.
                Contact us today for a free consultation.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceDetail; 