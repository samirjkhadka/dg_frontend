// src/components/layout/Header.tsx
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>("home");

  // Theme toggle
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Active section detection on scroll (only on Home page)
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = ["home", "about", "services", "portfolio", "contact"];
    const handleScroll = () => {
      let current = "home";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Smart navigation handler
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: (typeof navItems)[0]
  ) => {
    e.preventDefault();

    const isHomePage = location.pathname === "/";
    const sectionId = item.name.toLowerCase();

    if (
      isHomePage &&
      ["about", "services", "portfolio", "contact"].includes(item.name)
    ) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(sectionId);
        setIsOpen(false);
      }
    } else {
      navigate(item.href);
      if (item.name === "Home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b border-gray-200 dark:border-white/10">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="absolute inset-0  rounded-full scale-110 opacity-70 group-hover:opacity-100 transition" />
                {/* <div className="relative p-2 bg-white dark:bg-black rounded-full shadow-2xl"> */}
                  <img
                    src="/images/Dghub-svg-logo.svg"
                    alt="DigiHub"
                    className="h-25 w-25 relative rounded-full z-10 "
                  />
                {/* </div> */}
              </div>
              {/* <span className="text-2xl font-black tracking-tight">
                <span className="text-[#084097] dark:text-white">DIGIHUB</span>
              </span> */}
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-10">
              {navItems.map((item) => {
                const sectionId = item.name.toLowerCase();
                const isActive =
                  (location.pathname === "/" && activeSection === sectionId) ||
                  (location.pathname === item.href && item.name !== "Home");

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className="relative font-medium transition-all duration-300"
                  >
                    <span
                      className={`${
                        isActive
                          ? "text-[#084097] dark:text-cyan-400"
                          : "text-gray-700 dark:text-gray-300 hover:text-[#084097] dark:hover:text-cyan-400"
                      }`}
                    >
                      {item.name}
                    </span>

                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-8 left-0 right-0 h-1 bg-[#084097] rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}

              {/* Theme Toggle */}
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-3 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition"
              >
                {isDark ? (
                  <svg
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.708.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <Link
                to="/contact"
                className="px-8 py-3.5 bg-[#084097] hover:bg-[#06307a] text-white rounded-full font-bold text-lg transition shadow-lg"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-700 dark:text-gray-300"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:hidden mt-6 pb-6 border-t border-gray-200 dark:border-white/10 pt-6"
            >
              <div className="flex flex-col space-y-6 text-center">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={(e) => {
                      handleNavClick(e, item);
                      setIsOpen(false);
                    }}
                    className="text-xl font-medium text-gray-700 dark:text-gray-300 hover:text-[#084097] dark:hover:text-cyan-400"
                  >
                    {item.name}
                  </Link>
                ))}
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="mx-auto p-3 rounded-full bg-gray-100 dark:bg-white/10"
                >
                  {isDark ? "Light Mode" : "Dark Mode"}
                </button>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-block py-4 px-12 bg-[#084097] text-white rounded-full font-bold text-xl"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </header>
  );
}
