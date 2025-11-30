// src/data/mockHomeData.ts
export const mockHeroData = {
  data: {
    title: "Transforming Capital Markets with Technology",
    subtitle:
      "Innovative digital solutions that make markets more efficient, transparent, and accessible.",
    ctaText: "Explore Our Solutions",
    ctaLink: "/services",
  },
};

export const mockHeroStats = {
  data: [
    { id: 1, number: "50+", label: "Projects Completed" },
    { id: 2, number: "25+", label: "Expert Team Members" },
    { id: 3, number: "5+", label: "Years of Excellence" },
    { id: 4, number: "100%", label: "Client Satisfaction" },
  ],
};

export const mockServices = {
  data: [
    {
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies and best practices for optimal performance.",
      icon: "Code",
      color: "bg-blue-500",
      features: ["React/Vue/Angular", "Next.js & Vite", "PWA", "SEO Optimized"],
      link: "/services#web-development",
    },
    {
      title: "Mobile Development",
      description:
        "Native and cross-platform apps that deliver seamless experience across iOS and Android.",
      icon: "Smartphone",
      color: "bg-green-500",
      features: ["React Native", "Flutter", "iOS Native", "Android Native"],
      link: "/services#mobile-development",
    },
    {
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive designs focused on user experience and conversion.",
      icon: "Palette",
      color: "bg-purple-500",
      features: [
        "Figma & Adobe XD",
        "Prototyping",
        "User Research",
        "Brand Identity",
      ],
      link: "/services#ui-ux-design",
    },
  ],
};

export const mockProjects = {
  data: [
    {
      id: 1,
      title: "TradeFlow Pro",
      description:
        "Real-time trading platform with advanced analytics and institutional-grade security.",
      category: "FinTech",
      image: "project1.jpg",
      technologies: ["React", "Node.js", "WebSocket", "PostgreSQL"],
    },
    {
      id: 2,
      title: "DigiBank Mobile",
      description:
        "Next-gen banking app with biometric login and instant transfers.",
      category: "Mobile App",
      image: "project2.jpg",
      technologies: ["React Native", "TypeScript", "Firebase"],
    },
    {
      id: 3,
      title: "MarketPulse Dashboard",
      description:
        "Live market analytics dashboard used by 10,000+ traders daily.",
      category: "Data Visualization",
      image: "project3.jpg",
      technologies: ["Vue.js", "D3.js", "Python", "AWS"],
    },
  ],
};

export const mockContactInfo = {
  data: {
    address: "446 Ramshah Path, Kathmandu, Nepal",
    email: "info@digihub.com.np",
    phone: "+977 980-0000000",
    officeHours: "Sunday - Friday: 10:00 AM - 6:00 PM",
  },
};
