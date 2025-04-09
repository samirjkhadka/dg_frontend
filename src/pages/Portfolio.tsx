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
        <section className="container py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="heading-1 mb-6">
                Our <span className="text-primary">Products</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Explore our successful products and see how we've helped businesses
                achieve their digital transformation goals.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl shadow-lg"
            >
              <div className="aspect-square flex items-center justify-center">
                <div className="text-6xl">💼</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-sm text-primary font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 text-justify">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link 
                      to={`/portfolio/${project.id}`}
                      className="inline-block bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
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
              className="text-center"
            >
              <h2 className="heading-2 mb-4">Ready to Start Your Project?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Let's discuss how we can help bring your ideas to life with our
                expertise and innovative solutions.
              </p>
              <motion.a
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
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