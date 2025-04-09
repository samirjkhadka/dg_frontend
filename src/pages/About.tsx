import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <>
      <Helmet>
        <title>About Us | Digihub - Our Story & Mission</title>
        <meta
          name="description"
          content="Learn about Digihub - our mission, vision, and the passionate team behind our innovative digital solutions."
        />
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
                About <span className="text-primary">Digihub</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We are a team of passionate developers, designers, and
                innovators dedicated to creating cutting-edge digital solutions
                that transform businesses and enhance user experiences.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl shadow-lg"
            >
              <div className="aspect-square flex items-center justify-center">
                <div className="text-6xl font-bold text-primary">NL</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-gray-50 py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 mb-4">Our Mission & Vision</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We strive to be at the forefront of technological innovation,
                delivering solutions that drive business growth and create
                lasting impact.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                {...fadeInUp}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-justify">
                  At Digi Hub, our mission is to empower businesses and
                  individuals by delivering cutting-edge technology solutions
                  that boost efficiency, transparency, and accessibility across
                  various industries. We are dedicated to building seamless,
                  secure and reliable platforms that foster growth and
                  profitability, enabling our clients to reach their fullest
                  potential in a rapidly changing digital world.
                </p>
              </motion.div>
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Our Vision
                </h3>
                <p className="text-gray-600 text-justify">
                  Our vision is to become a global leader in technology-driven
                  solutions, revolutionizing industries and setting new
                  benchmarks for excellence in capital markets, fintech, and
                  beyond. We aim to consistently innovate, broaden our
                  offerings, and provide exceptional value to our clients,
                  shaping a future where technology is the foundation of
                  sustainable growth and success for everyone.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 mb-4">Our Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the talented individuals behind our success. Our diverse
                team brings together expertise from various domains to deliver
                exceptional results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "John Doe",
                  role: "CEO & Founder",
                  image: "https://via.placeholder.com/300",
                },
                {
                  name: "Jane Smith",
                  role: "CTO",
                  image: "https://via.placeholder.com/300",
                },
                {
                  name: "Mike Johnson",
                  role: "Lead Developer",
                  image: "https://via.placeholder.com/300",
                },
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg overflow-hidden shadow-md"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {member.name}
                    </h3>
                    <p className="text-gray-600">{member.role}</p>
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
