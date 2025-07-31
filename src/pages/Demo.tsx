import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaPlay, FaYoutube, FaExternalLinkAlt } from 'react-icons/fa';

const Demo = () => {
  const videos = [
    {
      id: 'demo-1',
      title: 'Trading Management System Demo',
      description: 'Watch how our advanced trading platform streamlines operations and enhances decision-making capabilities.',
      youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      duration: '3:45'
    },
    {
      id: 'demo-2',
      title: 'Back Office Management Overview',
      description: 'Explore the comprehensive back-office management features that simplify post-trade activities.',
      youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      duration: '4:20'
    },
    {
      id: 'demo-3',
      title: 'Client Portal Walkthrough',
      description: 'See how our client portal provides seamless access to portfolio information and trading capabilities.',
      youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      duration: '5:15'
    }
  ];

  const handleVideoClick = (youtubeId: string) => {
    // Open YouTube video in new tab
    window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Watch Demo | Digi Hub - Product Demonstrations</title>
        <meta name="description" content="Watch live demonstrations of our innovative digital solutions. See how our products transform business operations and enhance user experiences." />
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
                  <FaPlay className="text-primary animate-pulse" />
                  <span className="text-gray-200 font-medium">Product Demos</span>
                  <FaYoutube className="text-red-500" />
                </motion.div>
                
                <h1 className="heading-1">
                  Watch Our <span className="text-primary-gradient">Demos</span>
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed text-justify">
                  Experience our innovative solutions in action. Watch detailed demonstrations 
                  of our products and see how they can transform your business operations.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  {[
                    { number: '3+', label: 'Demos' },
                    { number: '15+', label: 'Minutes' },
                    { number: '100%', label: 'Interactive' }
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
                    <div className="text-8xl font-bold text-primary-gradient">🎥</div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-6 -right-6 bg-gradient-to-r from-primary/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-5 border border-primary/30 shadow-xl"
                  animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="text-primary font-bold text-lg">Live</div>
                  <div className="text-xs text-gray-400">Demos</div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl p-5 border border-blue-500/30 shadow-xl"
                  animate={{ y: [0, 15, 0], rotate: [0, -2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="text-blue-400 font-bold text-lg">HD</div>
                  <div className="text-xs text-gray-400">Quality</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Videos Grid */}
        <section className="py-20 section-glass relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-white">Product Demonstrations</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto text-justify">
                Click on any video to watch the full demonstration on YouTube. 
                Our comprehensive demos showcase the power and flexibility of our solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/30 rounded-3xl overflow-hidden shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer group"
                  onClick={() => handleVideoClick(video.youtubeId)}
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Thumbnail */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <FaPlay className="text-white text-xl ml-1" />
                      </div>
                    </div>
                    
                    {/* Duration */}
                    <div className="absolute bottom-3 right-3">
                      <span className="px-2 py-1 bg-black/70 text-white text-sm rounded-md backdrop-blur-sm">
                        {video.duration}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 relative">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                      {video.title}
                    </h3>
                    <p className="text-gray-300 text-justify leading-relaxed text-base mb-4">
                      {video.description}
                    </p>
                    
                    {/* YouTube Link */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-red-500 font-semibold">
                        <FaYoutube className="text-lg" />
                        <span>Watch on YouTube</span>
                      </div>
                      <FaExternalLinkAlt className="text-gray-400 group-hover:text-primary transition-colors duration-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 section-dark relative overflow-hidden">
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
                Ready to See More?
              </h2>
              <p className="text-xl text-gray-300 mb-8 text-justify max-w-3xl mx-auto">
                Interested in a personalized demo or have questions about our solutions? 
                Let's discuss how we can help transform your business.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <a
                  href="/contact"
                  className="inline-flex items-center space-x-3 px-10 py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl font-semibold hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
                >
                  <span>Get in Touch</span>
                  <FaExternalLinkAlt className="h-5 w-5" />
                </a>
                <a
                  href="/portfolio"
                  className="inline-flex items-center space-x-3 px-10 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40"
                >
                  <span>View Portfolio</span>
                  <FaExternalLinkAlt className="h-5 w-5" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Demo; 