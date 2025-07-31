import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export const projects = [
  {
    id: 'trading-management-system',
    title: 'Trading Management System',
    category: 'Financial Technology',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description:
      'Our Trading Management System is designed for traders and financial institutions seeking precision, speed, and reliability. TMS offers integrated technical analysis chart and is accessible via web, mobile and desktop applications, providing seamless trading on the go. We understand the complexities of the market and offer a robust platform that supports real-time data analysis, and comprehensive risk management. With our solution, clients can confidently execute trades and manage portfolios, knowing they have the tools to stay ahead of market trends.',
    technologies: ['React', 'Java', 'WebSocket', 'Python', 'PostgreSQL','Sql Server', 'Redis'],
  },
  {
    id: 'back-office-management-system',
    title: 'Back Office Management',
    category: 'Financial Technology',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description:
      'Efficient back-office operations are the backbone of any successful trading environment. Our Back Office Management System simplifies the complexities of post-trade activities, from settlement and reconciliation to compliance and reporting. We focus on reducing errors, and ensuring that every aspect of your operations is in sync, allowing you to concentrate on what matters most—growing your business.',
    technologies: ['React', 'Java', 'WebSocket', 'Python', 'PostgreSQL','Sql Server', 'Redis'],
  },
  {
    id: 'client-portal',
    title: 'Client Portal',
    category: 'Financial Technology',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description:
      'The Client Portal is a comprehensive platform that streamlines client onboarding, including KYC registration for Demat accounts and TMS integration. It provides access to transactional and accounting history with an integrated payment gateway for seamless transactions. Clients can manage multiple linked portfolios and gain real-time market insights. This all-in-one solution simplifies financial management and enhances the user experience.',
    technologies: ['React', 'Java', 'WebSocket', 'Python', 'PostgreSQL','Sql Server', 'Redis'],
  },
  {
    id: 'hr-management-system',
    title: 'HR Management System',
    category: 'Enterprise Solutions',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description:
      'End-to-end HR management solution featuring employee onboarding, performance tracking, and payroll integration.',
    technologies: ['React', 'Java Spring Boot', 'MySQL', 'Docker', 'AWS', 'Microservices'],
  },
  {
    id: 'walletx',
    title: 'WalletX',
    category: 'FinTech',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description:
      'Next-generation digital wallet with multi-currency support, crypto integration, and seamless payment solutions.',
    technologies: ['React Native','Swift','SQL SERVER', 'Node.js', 'MongoDB', 'ASP.NET', 'Payment Gateway', 'Firebase'],
  },
  {
    id: 'loyalty-management-system',
    title: 'Loyalty Management System',
    category: 'Customer Engagement',
    image: 'https://images.unsplash.com/photo-1556742045-6e3c5d5c3c6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description:
      'Advanced loyalty program platform with points management, rewards automation, and customer analytics.',
    technologies: ['React', 'ASP.NET', 'PostgreSQL', 'Redis', 'SQL SERVER', 'Analytics'],
  },
  {
    id: 'agro-tech',
    title: 'Agro Tech',
    category: 'Agriculture Technology',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description:
      'Innovative agricultural management system with crop monitoring, weather forecasting, and supply chain optimization.',
    technologies: ['React', 'Node.js', 'React Native', 'SQL SERVER'],
  },
];

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Our Portfolio | Digihub - Success Stories & Projects</title>
        <meta name="description" content="Explore Digihub' portfolio of successful digital projects. See how we've helped businesses achieve their digital transformation goals through innovative solutions." />
      </Helmet>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 overflow-hidden">
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
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary/20 to-blue-500/20 px-6 py-3 rounded-full text-sm border border-primary/30 backdrop-blur-sm"
                >
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-gray-200 font-medium">Our Portfolio</span>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                </motion.div>
                
                <h1 className="heading-1">
                  Our <span className="text-primary-gradient">Products</span>
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed text-justify">
                  Explore our successful products and see how we've helped businesses
                  achieve their digital transformation goals through innovative solutions.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  {[
                    { number: '50+', label: 'Projects' },
                    { number: '98%', label: 'Success Rate' },
                    { number: '24/7', label: 'Support' }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-primary-gradient mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="bg-slate-800/60 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/50 shadow-2xl">
                  <div className="aspect-square flex items-center justify-center">
                    <div className="text-8xl font-bold text-primary-gradient">💼</div>
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

        {/* Projects Grid */}
        <section className="py-20 section-glass relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {projects.map((project, index) => (
                <Link
                  to={`/portfolio/${project.id}`}
                  key={project.id}
                  className="block group"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/30 rounded-3xl overflow-hidden shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer group-hover:scale-[1.02] group-hover:-translate-y-2"
                  >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary font-medium rounded-full text-sm">
                          {project.category}
                        </span>
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 relative">
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-6 text-justify leading-relaxed text-base">
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-full text-sm backdrop-blur-sm border border-slate-600/30 hover:bg-primary/20 hover:border-primary/30 hover:text-primary transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-3 rounded-xl font-semibold group-hover:from-primary/90 group-hover:to-blue-600/90 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary/25">
                          <span>View Details</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"
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
                        
                        {/* Floating Elements */}
                        <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-150"></div>
                          <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-300"></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
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
              <motion.a
                href="/contact"
                className="inline-block bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio; 