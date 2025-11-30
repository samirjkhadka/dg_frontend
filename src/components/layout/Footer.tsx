// src/components/Footer.tsx
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect, memo } from "react";
import { iconMap } from "@/lib/icons";
import { mockContactInfo } from "@/data/mockContactData";

// Safe destructuring — only icons we KNOW exist
const { ArrowUp, Mail, Phone, MapPin, Copyright } = iconMap;

// Fallback icons if social ones are missing (prevents crash)
const fallbackIcons: Record<string, React.FC<any>> = {
  LinkedIn: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  Facebook: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.648c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.925-1.956 1.874v2.255h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />
    </svg>
  ),
  Twitter: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
};

const FooterLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <motion.li
    whileHover={{ x: 6 }}
    transition={{ type: "spring", stiffness: 400 }}
  >
    <Link
      to={to}
      className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
    >
      {children}
    </Link>
  </motion.li>
);

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollUp}
          className="fixed bottom-8 right-8 bg-[#084097] text-white p-4 rounded-full shadow-2xl z-50 border border-white/20 backdrop-blur-sm"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setProgress(height > 0 ? (winScroll / height) * 100 : 0);
    };
    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#084097] to-cyan-500 z-50"
      style={{ width: `${progress}%` }}
    />
  );
};

const Footer = () => {
  const year = new Date().getFullYear();

  const quickLinks = [
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contact", label: "Contact" },
  ];

  const socials = mockContactInfo.socialLinks;

  return (
    <>
      <ScrollProgress />

      <footer className="relative bg-gradient-to-t from-black via-slate-950 to-slate-900 text-white pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#084097]/20 via-transparent to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#084097] to-cyan-600 rounded-xl flex items-center justify-center font-black text-white text-2xl">
                  DH
                </div>
                <span className="text-2xl font-black">Digi Hub</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Nepal’s leading technology partner for capital markets. Building
                secure, high-performance trading systems trusted by top brokers.
              </p>

              {/* Social Icons — Now 100% safe */}
              <div className="flex gap-4">
                {socials.map((social) => {
                  const IconFromMap =
                    iconMap[social.icon as keyof typeof iconMap];
                  const Icon =
                    IconFromMap ||
                    fallbackIcons[social.name] ||
                    fallbackIcons.Twitter;

                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-[#084097] transition-all hover:scale-110"
                      whileHover={{ y: -4 }}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-bold mb-6 text-cyan-400">
                Quick Links
              </h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <FooterLink key={link.to} to={link.to}>
                    {link.label}
                  </FooterLink>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-bold mb-6 text-cyan-400">
                Our Services
              </h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <FooterLink to="/services#category-1">
                  Trading Platforms
                </FooterLink>
                <FooterLink to="/services#category-2">
                  Risk & Compliance
                </FooterLink>
                <FooterLink to="/services#category-3">Market Data</FooterLink>
                <FooterLink to="/services#category-4">Mobile Apps</FooterLink>
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-bold mb-6 text-cyan-400">
                Get in Touch
              </h3>
              <div className="space-y-5 text-sm">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-[#084097]" />
                  <p className="text-gray-400">{mockContactInfo.address}</p>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-[#084097]" />
                  <a
                    href={`tel:${mockContactInfo.phone.replace(/\s/g, "")}`}
                    className="hover:text-white transition"
                  >
                    {mockContactInfo.phone}
                  </a>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-[#084097]" />
                  <a
                    href={`mailto:${mockContactInfo.email}`}
                    className="hover:text-white transition"
                  >
                    {mockContactInfo.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <Copyright className="w-4 h-4" />
              <span>{year} Digi Hub. All rights reserved.</span>
            </div>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition">
                Terms of Service
              </Link>
            </div>
          </motion.div>
        </div>
      </footer>

      <ScrollToTopButton />
    </>
  );
};

export default memo(Footer);
