import { useState, useEffect, memo, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollSection } from "../../hooks/useScrollSection";
import { useNavigation } from "../../hooks/useNavigation";
import { useNavigation as useNavigationData } from "../../hooks/useContent";
import { NavLink } from "../../types/navigation";

// Memoized navigation link component for better performance
const NavLinkComponent = memo(
  ({
    link,
    isActive,
    onClick,
  }: {
    link: NavLink;
    isActive: boolean;
    onClick: () => void;
  }) => {
    return (
      <button
        onClick={onClick}
        className={`relative px-4 py-2 text-sm font-medium transition-colors md:text-base ${
          isActive ? "text-white font-semibold" : "text-gray-300 hover:text-white"
        }`}
      >
        {link.label}
        {isActive && (
          <motion.div
            layoutId="activeSection"
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-blue-400"
            initial={false}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </button>
    );
  }
);

NavLinkComponent.displayName = "NavLinkComponent";

// Mobile menu button component
const MobileMenuButton = memo(
  ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
    return (
      <button
        onClick={onClick}
        className="md:hidden p-2 text-gray-300 hover:text-primary focus:outline-none"
        aria-label="Toggle mobile menu"
      >
        <div className="w-6 h-5 relative">
          <span
            className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
              isOpen ? "rotate-45 top-2" : "rotate-0 top-0"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-current top-2 transform transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
              isOpen ? "-rotate-45 top-2" : "rotate-0 top-4"
            }`}
          />
        </div>
      </button>
    );
  }
);

MobileMenuButton.displayName = "MobileMenuButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { handleNavClick, isActive } = useNavigation();
  
  // Fetch navigation data from API
  const { data: navigationData, isLoading: navigationLoading } = useNavigationData();
  
  const { activeSection } = useScrollSection([
    "home",
    "about",
    "services",
    "portfolio",
    "testimonials",
    "contact",
  ]);

  // Handle scroll event with debounce
  useEffect(() => {
    let timeoutId: number;

    const handleScroll = () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }

      timeoutId = window.setTimeout(() => {
        setScrolled(window.scrollY > 50);
      }, 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Check if a link is active based on current path or active section
  const checkIsActive = useCallback(
    (link: NavLink) => {
      if (link.sectionId && activeSection === link.sectionId) {
        return true;
      }
      return isActive(link);
    },
    [activeSection, isActive]
  );

  // const navigation = [
  //   { name: "Home", href: "/" },
  //   { name: "About", href: "/about" },
  //   { name: "Services", href: "/services" },
  //   { name: "Portfolio", href: "/portfolio" },
  //   { name: "Contact", href: "/contact" },
  // ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-900/90 backdrop-blur-xl shadow-lg border-b border-slate-700/30 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">
            <img src="/images/Dghub-svg-logo.svg" alt="Digi Hub Logo" className="h-12 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navigationData?.data?.map((navItem) => (
              <NavLinkComponent
                key={navItem.id}
                link={{
                  path: navItem.url,
                  label: navItem.title,
                  sectionId: navItem.url.replace('/', '').replace('#', '')
                }}
                isActive={checkIsActive({
                  path: navItem.url,
                  label: navItem.title,
                  sectionId: navItem.url.replace('/', '').replace('#', '')
                })}
                onClick={() => handleNavClick({
                  path: navItem.url,
                  label: navItem.title,
                  sectionId: navItem.url.replace('/', '').replace('#', '')
                })}
              />
            ))}
          </nav>

          <MobileMenuButton isOpen={isOpen} onClick={toggleMobileMenu} />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl shadow-lg border-b border-slate-700/30"
          >
            <div className="container mx-auto py-6">
              <nav className="flex flex-col space-y-6">
                {navigationData?.data?.map((navItem) => (
                  <NavLinkComponent
                    key={navItem.id}
                    link={{
                      path: navItem.url,
                      label: navItem.title,
                      sectionId: navItem.url.replace('/', '').replace('#', '')
                    }}
                    isActive={checkIsActive({
                      path: navItem.url,
                      label: navItem.title,
                      sectionId: navItem.url.replace('/', '').replace('#', '')
                    })}
                    onClick={() => {
                      handleNavClick({
                        path: navItem.url,
                        label: navItem.title,
                        sectionId: navItem.url.replace('/', '').replace('#', '')
                      });
                      setIsOpen(false);
                    }}
                  />
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
