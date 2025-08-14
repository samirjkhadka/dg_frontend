import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useProjects } from "./../hooks/useContent";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Advantage {
  title: string;
  description: string;
}

interface Testimonial {
  image: string;
  name: string;
  role: string;
  company: string;
  quote: string;
}

interface Project {
  id: number | string;
  title: string;
  description: string;
  image?: string;
  link?: string;
  technologies?: string[];
  gallery?: string[];
  features?: Feature[];
  advantages?: Advantage[];
  results?: string[];
  testimonials?: Testimonial[];
  category?: string;
  client?: string;
  completionDate?: string;
  challenge?: string;
  solution?: string;
  [key: string]: any; // for other dynamic API fields
}
const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const { data: productData } = useProjects();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (productData?.data && id) {
      const foundProduct = productData.data.find(
        (p: any) =>
          p.id === Number(id) || p.id === id || p.link?.split("/").pop() === id
      );
      if (foundProduct) {
        const features = foundProduct.features
          ? JSON.parse(foundProduct.features)
          : [];
        const advantages = foundProduct.advantages
          ? JSON.parse(foundProduct.advantages)
          : [];

        const technologies: string[] = Array.isArray(foundProduct.technologies)
          ? foundProduct.technologies
          : typeof foundProduct.technologies === "string"
          ? foundProduct.technologies.split(",")
          : [];
        const gallery = foundProduct.gallery
          ? foundProduct.gallery.split(",")
          : [];
        const results = foundProduct.results
          ? foundProduct.results.split("@").map((r: string) => r.trim())
          : [];

        let testimonials: Testimonial[] = [];
        try {
          if (typeof foundProduct.testimonials === "string") {
            testimonials = JSON.parse(foundProduct.testimonials);
          } else if (Array.isArray(foundProduct.testimonials)) {
            testimonials = []
          }
        } catch (e) {
          console.error("Failed to parse testimonials:", e);
        }

        const enhancedProduct = {
          ...foundProduct,
          features,
          advantages,
          gallery,
          technologies,
          results,
          testimonials,
        };
        setProject(enhancedProduct);
      } else {
        setProject(null);
      }
    }

    setLoading(false);
  }, [id, productData]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center section-dark">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-white">
            Project Not Found
          </h1>
          <Link to="/portfolio" className="text-primary hover:underline">
            Return to Our Products
          </Link>
        </div>
      </div>
    );
  }
  return (
    <>
      <Helmet>
        <title>{project.title} - Digihub</title>
        <meta name="description" content={project.description} />
      </Helmet>
      <div className="min-h-screen">
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="pt-24 pb-4 px-4 section-dark"
        >
          <div className="container mx-auto">
            <nav className="flex items-center text-sm">
              <Link
                to="/"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                Home
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <Link
                to="/portfolio"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                Our Products
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-primary font-medium">{project.title}</span>
            </nav>
          </div>
        </motion.div>

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 section-dark">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-primary/30">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                {project.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 text-justify">
                {project.description}
              </p>
              {Array.isArray(project.technologies) &&
                project.technologies.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.technologies.map((tech: string, index: number) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-full text-sm backdrop-blur-sm border border-slate-600/30"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                )}
            </motion.div>
          </div>
        </section>

        {/* Project Gallery */}
        {Array.isArray(project.gallery) && project.gallery.length > 0 && (
          <section className="py-16 px-4 section-glass">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                {project.gallery?.map((image: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="relative aspect-video rounded-lg overflow-hidden cursor-pointer"
                    onClick={() =>
                      setSelectedImage(
                        `${
                          import.meta.env.VITE_API_BASE_URL_Images
                        }/uploads/${image}`
                      )
                    }
                  >
                    <img
                      src={`$import.meta.env.VITE_API_BASE_URL_Images}/uploads/${image}`}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* Features Showcase */}
        <section className="py-20 px-4 section-glass relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-white">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto text-justify">
                Discover the powerful features that make this solution stand out
                from the competition and deliver exceptional value to users.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {project.features?.map((feature, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/30 rounded-3xl p-8 shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer"
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-3xl">{feature.icon}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-justify leading-relaxed text-base">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16 px-4 section-dark">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-white">
                    About the Project
                  </h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-white">
                        The Challenge
                      </h3>
                      <p className="text-gray-300">{project.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-white">
                        Our Solution
                      </h3>
                      <p className="text-gray-300">{project.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-white">
                        Key Features
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.features?.map((feature, index: number) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-start space-x-2"
                          >
                            <span className="text-primary">•</span>
                            <span className="text-gray-300">
                              {feature.title}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-white">
                        Advantages
                      </h3>
                      <ul className="grid gap-3">
                        {project.advantages?.map((advantage, index: number) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="grid items-start space-x-2"
                          >
                            <span className="text-gray-300 font-bold">
                              • {advantage.title}
                            </span>
                            <span className="text-gray-300 text-justify">
                              {advantage.description}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    {project.results && project.results.length > 0 && (
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-white">
                          Results
                        </h3>
                        <ul className="space-y-2">
                          {project.results.map(
                            (result: string, index: number) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.3,
                                  delay: index * 0.1,
                                }}
                                className="flex items-start space-x-2"
                              >
                                <span className="text-primary">✓</span>
                                <span className="text-gray-300">{result}</span>
                              </motion.li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/30 rounded-3xl p-8 shadow-2xl sticky top-24"
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 rounded-3xl"></div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-6 text-white">
                      Project Details
                    </h3>
                    <div className="space-y-6">
                      <div className="p-4 bg-slate-700/30 rounded-xl border border-slate-600/30">
                        <h4 className="font-semibold text-primary mb-2">
                          Category
                        </h4>
                        <p className="text-gray-300 text-justify">
                          {project.category}
                        </p>
                      </div>
                      <div className="p-4 bg-slate-700/30 rounded-xl border border-slate-600/30">
                        <h4 className="font-semibold text-primary mb-2">
                          Client
                        </h4>
                        <p className="text-gray-300 text-justify">
                          {project.client}
                        </p>
                      </div>
                      <div className="p-4 bg-slate-700/30 rounded-xl border border-slate-600/30">
                        <h4 className="font-semibold text-primary mb-2">
                          Completion Date
                        </h4>
                        <p className="text-gray-300 text-justify">
                          {new Date(
                            project.completionDate!
                          ).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                      <div className="p-4 bg-slate-700/30 rounded-xl border border-slate-600/30">
                        <h4 className="font-semibold text-primary mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies?.map(
                            (tech: string, index: number) => (
                              <span
                                key={index}
                                className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-full text-sm backdrop-blur-sm border border-slate-600/30 hover:bg-primary/20 hover:border-primary/30 hover:text-primary transition-all duration-300"
                              >
                                {tech}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        {project.testimonials && project.testimonials.length > 0 && (
          <section className="py-20 px-4 section-glass relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-20 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>

            <div className="container mx-auto relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-6 text-white">
                  Client Testimonials
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto text-justify">
                  Hear what our clients have to say about their experience with
                  this solution and how it has transformed their business
                  operations.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {project.testimonials.map((testimonial, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/30 rounded-3xl p-8 shadow-2xl hover:shadow-primary/10 transition-all duration-500"
                  >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                    <div className="relative z-10">
                      <div className="flex items-center mb-8">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden mr-6 border-2 border-primary/30">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {testimonial.name}
                          </h3>
                          <p className="text-gray-300 text-justify mb-1">
                            {testimonial.role}
                          </p>
                          <p className="text-primary font-semibold">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <blockquote className="text-gray-300 text-justify leading-relaxed text-lg italic relative">
                        <div className="absolute -top-2 -left-2 text-4xl text-primary/30">
                          "
                        </div>
                        {testimonial.quote}
                        <div className="absolute -bottom-2 -right-2 text-4xl text-primary/30">
                          "
                        </div>
                      </blockquote>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="py-20 px-4 section-dark relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

          <div className="container mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">
                Interested in a Similar Project?
              </h2>
              <p className="text-xl text-gray-300 mb-8 text-justify max-w-3xl mx-auto">
                Let's discuss how we can help bring your ideas to life with our
                expertise and innovative solutions tailored to your specific
                needs.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-3 px-10 py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl font-semibold hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
                >
                  <span>Get in Touch</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
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
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full"
            >
              <img
                src={selectedImage}
                alt="Project screenshot"
                className="w-full h-auto rounded-lg"
              />
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectDetail;
