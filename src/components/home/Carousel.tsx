import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaCode, 
  FaMobile, 
  FaDesktop, 
  FaDatabase, 
  FaCloud, 
  FaRocket,
  FaArrowRight,
  FaPlay,
  FaStar,
  FaCheckCircle
} from 'react-icons/fa';

// Floating tech icons with their positions
const floatingIcons = [
  { icon: FaCode, x: 10, y: 20, delay: 0, color: 'text-blue-400' },
  { icon: FaMobile, x: 85, y: 15, delay: 0.5, color: 'text-purple-400' },
  { icon: FaDesktop, x: 15, y: 70, delay: 1, color: 'text-green-400' },
  { icon: FaDatabase, x: 80, y: 75, delay: 1.5, color: 'text-orange-400' },
  { icon: FaCloud, x: 50, y: 10, delay: 2, color: 'text-pink-400' },
];

// Animated code snippets with syntax highlighting
const codeSnippets = [
  {
    code: `const digiHub = {
  innovation: true,
  expertise: ['React', 'Node.js', 'Python'],
  mission: 'Transform ideas into reality'
};`,
    language: 'javascript'
  },
  {
    code: `function buildFuture() {
  return {
    technology: 'cutting-edge',
    solutions: 'scalable',
    impact: 'transformative'
  };
}`,
    language: 'javascript'
  },
  {
    code: `class DigitalSolutions {
  constructor() {
    this.quality = 'excellent';
    this.delivery = 'on-time';
    this.support = '24/7';
  }
}`,
    language: 'javascript'
  }
];

interface HeroStat {
  id: number;
  label: string;
  number: string;
  icon: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface HeroSectionProps {
  heroData?: {
    title: string;
    subtitle: string;
    description: string;
    backgroundImage: string;
    ctaText: string;
    ctaLink: string;
  };
  heroStats?: HeroStat[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ heroData, heroStats }) => {
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Rotate through code snippets
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCodeIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Mouse-following gradient orbs */}
      <motion.div 
        className="absolute w-72 h-72 bg-primary/20 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * 200 - 100,
          y: mousePosition.y * 200 - 100,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
      <motion.div 
        className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: -mousePosition.x * 300 + 150,
          y: -mousePosition.y * 300 + 150,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 25 }}
      />

      {/* Mouse-following floating tech icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.color} opacity-30`}
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3], 
              scale: [1, 1.3, 1],
              rotate: [0, 5, 0],
              x: mousePosition.x * (10 + index * 5),
              y: mousePosition.y * (10 + index * 5),
            }}
            transition={{
              duration: 6,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
              x: { type: "spring", stiffness: 40, damping: 15 },
              y: { type: "spring", stiffness: 40, damping: 15 }
            }}
          >
            <item.icon size={50} />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="container relative z-10 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary/20 to-blue-500/20 px-6 py-3 rounded-full text-sm border border-primary/30 backdrop-blur-sm"
            >
              <FaRocket className="text-primary animate-pulse" />
              <span className="text-gray-200 font-medium">Innovation at its finest</span>
              <FaStar className="text-yellow-400" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-6xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-white">{heroData?.title || "We Build"}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-400">
                {heroData?.subtitle || "Digital Solutions"}
              </span>
              {/* <span className="text-white">That Matter</span> */}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed max-w-lg"
            >
              {heroData?.description || "Transform your ideas into powerful software solutions. We specialize in web development, mobile apps, and enterprise software that drives business growth."}
            </motion.p>

            {/* Feature highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center space-x-2 text-gray-300">
                <FaCheckCircle className="text-green-400" />
                <span className="text-sm">Modern Technologies</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <FaCheckCircle className="text-green-400" />
                <span className="text-sm">Scalable Solutions</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <FaCheckCircle className="text-green-400" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to={heroData?.ctaLink || "/services"}
                className="group inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
              >
                <span>{heroData?.ctaText || "Explore Services"}</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/demo"
                className="group inline-flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40"
              >
                <FaPlay size={14} className="group-hover:scale-110 transition-transform" />
                <span>Watch Demo</span>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10"
            >
              {heroStats && heroStats.length > 0 ? (
                heroStats.slice(0, 3).map((stat, index) => (
                  <div key={stat.id} className="text-center">
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                  </div>
                ))
              ) : (
                <>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">100+</div>
                    <div className="text-sm text-gray-400 font-medium">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">50+</div>
                    <div className="text-sm text-gray-400 font-medium">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">24/7</div>
                    <div className="text-sm text-gray-400 font-medium">Support</div>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>

          {/* Right side - Code animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
              {/* Code header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-300 text-sm font-medium ml-4">digi-hub.js</div>
                </div>
                <div className="text-xs text-gray-500 bg-slate-700/50 px-3 py-1 rounded-full">
                  {codeSnippets[currentCodeIndex].language}
                </div>
              </div>

              {/* Animated code */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.pre
                    key={currentCodeIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="text-sm text-gray-200 font-mono leading-relaxed"
                  >
                    <code className="block">
                      {codeSnippets[currentCodeIndex].code.split('\n').map((line, index) => (
                        <div key={index} className="flex">
                          <span className="text-gray-500 mr-4 select-none">{index + 1}</span>
                          <span className="text-gray-200">{line}</span>
                        </div>
                      ))}
                    </code>
                  </motion.pre>
                </AnimatePresence>

                {/* Typing cursor */}
                <motion.div
                  className="absolute top-0 left-8 w-2 h-6 bg-primary rounded-sm"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
            </div>

            {/* Mouse-following floating elements */}
            <motion.div
              className="absolute -top-6 -right-6 bg-gradient-to-r from-primary/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-5 border border-primary/30 shadow-xl"
              animate={{ 
                y: [0, -15, 0], 
                rotate: [0, 2, 0],
                x: mousePosition.x * 20,
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut",
                x: { type: "spring", stiffness: 100, damping: 30 }
              }}
            >
              <div className="text-primary font-bold text-lg">React</div>
              <div className="text-xs text-gray-400">Frontend</div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl p-5 border border-blue-500/30 shadow-xl"
              animate={{ 
                y: [0, 15, 0], 
                rotate: [0, -2, 0],
                x: -mousePosition.x * 15,
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: 1,
                x: { type: "spring", stiffness: 80, damping: 25 }
              }}
            >
              <div className="text-blue-400 font-bold text-lg">Node.js</div>
              <div className="text-xs text-gray-400">Backend</div>
            </motion.div>

            {/* Additional floating badge */}
            <motion.div
              className="absolute top-1/2 -right-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-2xl p-4 border border-green-500/30 shadow-xl"
              animate={{ 
                rotate: [0, 3, 0],
                x: mousePosition.x * 10,
                y: mousePosition.y * 10,
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: 2,
                x: { type: "spring", stiffness: 60, damping: 20 },
                y: { type: "spring", stiffness: 60, damping: 20 }
              }}
            >
              <div className="text-green-400 font-bold">Python</div>
              <div className="text-xs text-gray-400">AI/ML</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
          <motion.div
            className="w-1 h-4 bg-gradient-to-b from-primary to-blue-400 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection; 