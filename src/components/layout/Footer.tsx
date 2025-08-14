import { memo, useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useFooterInfo, useContactInfo } from "../../hooks/useContent";

// Memoized social icon component with enhanced animations
const SocialIcon = memo(
  ({
    href,
    icon: Icon,
    label,
  }: {
    href: string;
    icon: React.ElementType;
    label: string;
  }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-white transition-colors"
      aria-label={label}
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Icon size={20} />
    </motion.a>
  )
);

SocialIcon.displayName = "SocialIcon";

// Memoized footer link component with enhanced animations
const FooterLink = memo(
  ({ to, children }: { to: string; children: React.ReactNode }) => (
    <motion.li
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Link
        to={to}
        className="text-gray-300 hover:text-white transition-colors text-sm"
      >
        {children}
      </Link>
    </motion.li>
  )
);

FooterLink.displayName = "FooterLink";

// Contact info item component with icon
const ContactItem = memo(
  ({
    icon: Icon,
    children,
  }: {
    icon: React.ElementType;
    children: React.ReactNode;
  }) => (
    <motion.li
      className="flex items-center space-x-2 text-gray-300 text-sm"
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Icon className="text-primary" size={14} />
      <span>{children}</span>
    </motion.li>
  )
);

ContactItem.displayName = "ContactItem";

// Scroll to top button component
const ScrollToTopButton = memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
          exit={{
            opacity: 0,
            scale: 0.5,
            y: 20,
            transition: {
              duration: 0.2,
            },
          }}
          whileHover={{
            scale: 1.1,
            boxShadow:
              "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 10,
            },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg z-50 max-w-[90vw]"
          aria-label="Scroll to top"
        >
          <motion.div
            animate={{
              y: [0, -3, 0],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          >
            <FaArrowUp size={20} />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
});

ScrollToTopButton.displayName = "ScrollToTopButton";

// Custom scrollbar styles
const ScrollbarStyles = memo(() => {
  useEffect(() => {
    // Add custom scrollbar styles
    const style = document.createElement("style");
    style.innerHTML = `
      /* Hide scrollbar for Chrome, Safari and Opera */
      ::-webkit-scrollbar {
        width: 0px;
        height: 0px;
      }
      
      /* Hide scrollbar for IE, Edge and Firefox */
      * {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
});

ScrollbarStyles.displayName = "ScrollbarStyles";

// Scroll progress indicator component
const ScrollProgressIndicator = memo(() => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-primary z-50"
      style={{ width: `${scrollProgress}%` }}
      initial={{ width: 0 }}
      animate={{ width: `${scrollProgress}%` }}
      transition={{ type: "spring", stiffness: 100, damping: 30 }}
    />
  );
});

ScrollProgressIndicator.displayName = "ScrollProgressIndicator";

const Footer = () => {
  // Fetch footer and contact data from API
  const { data: footerData } = useFooterInfo();
  const { data: contactData } = useContactInfo();
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <>
      <ScrollbarStyles />
      <ScrollProgressIndicator />
      <footer className="bg-dark text-white py-6">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Company Info */}
            <motion.div
              className="col-span-1"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <img
                src={footerData?.data?.logo || "/images/Dghub-svg-logo.svg"}
                alt={footerData?.data?.companyName || "Digi Hub Logo"}
                className="h-8 w-auto mb-2"
              />
              <p className="text-gray-300 mb-2 text-sm">
                {footerData?.data?.description ||
                  "Transforming ideas into innovative digital solutions."}
              </p>
              <div className="flex space-x-3">
                <SocialIcon
                  href="https://github.com"
                  icon={FaGithub}
                  label="GitHub"
                />
                <SocialIcon
                  href="https://linkedin.com"
                  icon={FaLinkedin}
                  label="LinkedIn"
                />
                <SocialIcon
                  href="https://twitter.com"
                  icon={FaTwitter}
                  label="Twitter"
                />
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-1">
                {footerData?.data?.links?.map((link) => (
                  <FooterLink key={link.id} to={link.url}>
                    {link.title}
                  </FooterLink>
                )) || (
                  <>
                    <FooterLink to="/about">About Us</FooterLink>
                    <FooterLink to="/services">Our Services</FooterLink>
                    <FooterLink to="/portfolio">Our Products</FooterLink>
                    <FooterLink to="/contact">Contact</FooterLink>
                  </>
                )}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base font-semibold mb-2">Contact</h4>
              <ul className="space-y-1">
                <ContactItem icon={FaMapMarkerAlt}>
                  {contactData?.data?.address ||
                    "Kalash Building, Naxal, Bhatbhateni, Kathmandu, Nepal"}
                </ContactItem>
                <ContactItem icon={FaEnvelope}>
                  {contactData?.data?.email || "info@digihub.io"}
                </ContactItem>
                <ContactItem icon={FaPhone}>
                  {contactData?.data?.phone || "+977 01 4333333"}
                </ContactItem>
              </ul>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 pt-4 border-t border-gray-800 text-center text-gray-400 text-xs"
          >
            <p>
              &copy; {currentYear}{" "}
              {footerData?.data?.copyrightText ||
                "Digi Hub. All rights reserved."}
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <ScrollToTopButton />
    </>
  );
};

export default memo(Footer);
