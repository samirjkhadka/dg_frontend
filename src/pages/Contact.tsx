import { motion } from 'framer-motion';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Digihub - Let's Discuss Your Project</title>
        <meta name="description" content="Get in touch with Digihub. Have a project in mind? Let's discuss how we can help bring your ideas to life with our innovative digital solutions." />
      </Helmet>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-dark py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="heading-1 mb-6">
                  Get in <span className="text-primary-gradient">Touch</span>
                </h1>
                <p className="text-lg text-gray-300 mb-8 text-justify">
                  Have a project in mind? Let's discuss how we can help bring your
                  ideas to life.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="card-glass p-8 rounded-2xl shadow-lg"
              >
                <div className="aspect-square flex items-center justify-center">
                  <div className="text-6xl">📧</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="section-glass py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="card-glass p-8 rounded-lg shadow-md"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-slate-800/50 border border-slate-600/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-slate-800/50 border border-slate-600/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-slate-800/50 border border-slate-600/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 bg-slate-800/50 border border-slate-600/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-blue-600 text-white py-3 rounded-lg font-medium hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </motion.form>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 section-dark">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Address',
                  content: 'Kalash Building, Bhatbhateni, Naxal, Kathmandu',
                  icon: '📍',
                },
                {
                  title: 'Email',
                  content: 'info@digihub.com',
                  icon: '📧',
                },
                {
                  title: 'Phone',
                  content: '+977 01 4333333',
                  icon: '📱',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-glass text-center p-6 rounded-lg shadow-md"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-300">{item.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact; 