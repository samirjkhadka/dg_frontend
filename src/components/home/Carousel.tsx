import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const slides = [
  {
    id: 1,
    title: 'Innovative Web Solutions',
    description: 'Creating cutting-edge web applications with modern technologies',
    image: '/images/slides/hero-1.webp',
    color: 'from-blue-500/20 to-blue-600/20',
    ctaText: 'Explore Our Services',
    ctaLink: '/services',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Building powerful mobile applications for iOS and Android',
    image: '/images/slides/hero-2.webp',
    color: 'from-purple-500/20 to-purple-600/20',
    ctaText: 'View Our Portfolio',
    ctaLink: '/portfolio',
  },
  {
    id: 3,
    title: 'All New Trading Management System',
    description: 'Designed for traders and financial institutions',
    image: '/images/slides/hero-3.webp',
    color: 'from-green-500/20 to-green-600/20',
    ctaText: 'Contact Us',
    ctaLink: '/contact',
  },
  {
    id: 4,
    title: 'Building Agro Tech',
    description: 'Digitalising Agriculture and Supply Chain Management',
    image: '/images/slides/hero-3.webp',
    color: 'from-green-500/20 to-green-600/20',
    ctaText: 'Contact Us',
    ctaLink: '/contact',
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideInterval = useRef<number | null>(null);
  const SLIDE_DURATION = 5000; // 5 seconds

  // Handle slide change
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    resetTimers();
  };

  // Navigate to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetTimers();
  };

  // Navigate to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetTimers();
  };

  // Reset timers when manually changing slides
  const resetTimers = () => {
    if (slideInterval.current) clearInterval(slideInterval.current);
    startTimers();
  };

  // Start timers for automatic rotation
  const startTimers = () => {
    // Slide change timer
    slideInterval.current = window.setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, SLIDE_DURATION);
  };

  // Handle mouse enter/leave to pause/resume
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Initialize timers
  useEffect(() => {
    startTimers();
    return () => {
      if (slideInterval.current) clearInterval(slideInterval.current);
    };
  }, []);

  return (
    <div 
      className="relative h-[500px] md:h-[600px] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />
      
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
            }}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].color}`}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container relative z-20 h-full flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl text-white"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {slides[currentSlide].description}
            </motion.p>
            <motion.a
              href={slides[currentSlide].ctaLink}
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {slides[currentSlide].ctaText}
            </motion.a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 z-20">
        <motion.button
          onClick={prevSlide}
          className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Previous slide"
        >
          <FaChevronLeft size={24} />
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Next slide"
        >
          <FaChevronRight size={24} />
        </motion.button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className="relative"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`} />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Carousel; 