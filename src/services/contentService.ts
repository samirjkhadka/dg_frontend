// import { api, ApiResponse } from './api';
import { ApiResponse } from "./api";

// Content types based on backend entities
export interface HeroSection {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  ctaText: string;
  ctaLink: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  stats?: HeroStat[];
}

export interface HeroStat {
  id: number;
  label: string;
  number: string;
  icon: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  icon: string;
  image: string;
  link: string;
  color: string;
  title: string;
  route?: string; // Optional route for navigation
  categoryId: number;
  category: ServiceCategory;
  categoryTitle: string; // Title of the service category
  categoryIcon: string; // Icon of the service category
  categoryDescription: string; // Description of the service category
  categoryImage: string; // Image of the service category
  features: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ServiceCategory {
  id: number;
  name: string;
  description: string;
  image: string;
  title: string;
  icon: string;
  isActive: boolean;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  client: string;
  category: string;
  technologies?: string;
  projectUrl: string;
  githubUrl: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  features: string;
  advantages: string;
  gallery: string;
  results: string;
  testimonials: string | string[];
}

export interface AboutSection {
  id: number;
  title: string;
  description: string;
  image: string;
  stats: AboutStat[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  mission?: string; // Optional field for mission statement
  vision?: string; // Optional field for vision statement
}

export interface AboutStat {
  id: number;
  label: string;
  value: string;
  icon: string;
  color: string;
  title: string;
  description: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  mission?: string; // Optional field for mission statement
  vision?: string; // Optional field for vision statement
}

export interface ContactInfo {
  id: number;
  address: string;
  phone: string;
  email: string;
  socialLinks: SocialLink[];
  officeHours: string;
  isActive: boolean;
}

export interface SocialLink {
  id: number;
  platform: string;
  url: string;
  icon: string;
}

export interface NavigationItem {
  id: number;
  title: string;
  url: string;
  order: number;
  isActive: boolean;
}

export interface FooterInfo {
  id: number;
  description: string;
  links: FooterLink[];
  isActive: boolean;
  logo: string;
  companyName: string;
  createdAt: string;
  updatedAt: string;
  copyrightText: string;
}

export interface FooterLink {
  id: number;
  title: string;
  url: string;
  order: number;
}

export interface DemoVideo {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  youtubeUrl: string;
  duration: string;
  thumbnail: string;
  isActive: boolean;
}

// Dummy data
const dummyHeroSection: HeroSection = {
  id: 1,
  title: "We Build",
  subtitle: "Digital Solutions",
  description:
    "Transform your ideas into powerful software solutions. We specialize in web development, mobile apps, and enterprise software that drives business growth.",
  backgroundImage: "/images/slides/hero-1.webp",
  ctaText: "Explore Services",
  ctaLink: "/services",
  isActive: true,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

const dummyHeroStats: HeroStat[] = [
  {
    id: 1,
    label: "Projects Delivered",
    number: "100+",
    icon: "🚀",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    label: "Happy Clients",
    number: "50+",
    icon: "😊",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 3,
    label: "Support",
    number: "24/7",
    icon: "💬",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 4,
    label: "Team Members",
    number: "25+",
    icon: "👥",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const dummyServiceCategories: ServiceCategory[] = [
  {
    id: 1,
    name: "software-development",
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs",
    icon: "💻",
    image: "/images/services/software.jpg",
    isActive: true,
  },
  {
    id: 2,
    name: "design",
    title: "Design",
    description: "Creative design solutions for digital products",
    icon: "🎨",
    image: "/images/services/design.jpg",
    isActive: true,
  },
  {
    id: 3,
    name: "maintenance",
    title: "Maintenance",
    description: "Ongoing support and maintenance services",
    icon: "🔧",
    image: "/images/services/maintenance.jpg",
    isActive: true,
  },
  {
    id: 4,
    name: "digital-marketing",
    title: "Digital Marketing",
    description: "Comprehensive digital marketing solutions",
    icon: "📈",
    image: "/images/services/marketing.jpg",
    isActive: true,
  },
];

const dummyServices: Service[] = [
  {
    id: 1,
    name: "web-development",
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies and best practices.",
    icon: "🌐",
    image: "/images/services/web.jpg",
    link: "/services/1",
    color: "bg-blue-500",
    categoryId: 1,
    category: dummyServiceCategories[0],
    categoryTitle: dummyServiceCategories[0].title,
    categoryIcon: dummyServiceCategories[0].icon,
    categoryDescription: dummyServiceCategories[0].description,
    categoryImage: dummyServiceCategories[0].image,
    features: [
      "Responsive web applications",
      "Progressive Web Apps (PWA)",
      "E-commerce solutions",
      "Content Management Systems",
      "API development and integration",
      "Web application maintenance",
    ],
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "mobile-development",
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    icon: "📱",
    image: "/images/services/mobile.jpg",
    link: "/services/2",
    color: "bg-green-500",
    categoryId: 1,
    category: dummyServiceCategories[0],
    categoryTitle: dummyServiceCategories[0].title,
    categoryIcon: dummyServiceCategories[0].icon,
    categoryDescription: dummyServiceCategories[0].description,
    categoryImage: dummyServiceCategories[0].image,
    features: [
      "iOS application development",
      "Android application development",
      "Cross-platform solutions",
      "Mobile app maintenance",
      "Push notification integration",
      "App store optimization",
    ],
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 3,
    name: "ui-design",
    title: "UI Design",
    description: "Beautiful and intuitive user interfaces",
    icon: "✨",
    image: "/images/services/ui.jpg",
    link: "/services/3",
    color: "bg-purple-500",
    categoryId: 2,
    category: dummyServiceCategories[1],
    categoryTitle: dummyServiceCategories[1].title,
    categoryIcon: dummyServiceCategories[1].icon,
    categoryDescription: dummyServiceCategories[1].description,
    categoryImage: dummyServiceCategories[1].image,
    features: [
      "User interface design",
      "Design systems",
      "Component libraries",
      "Style guides",
      "Interactive prototypes",
      "Design handoff",
    ],
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 4,
    name: "ux-design",
    title: "UX Design",
    description: "User-centered design solutions",
    icon: "🧠",
    image: "/images/services/ux.jpg",
    link: "/services/4",
    color: "bg-indigo-500",
    categoryId: 2,
    category: dummyServiceCategories[1],
    categoryTitle: dummyServiceCategories[1].title,
    categoryIcon: dummyServiceCategories[1].icon,
    categoryDescription: dummyServiceCategories[1].description,
    categoryImage: dummyServiceCategories[1].image,
    features: [
      "User research",
      "Information architecture",
      "Wireframing",
      "Usability testing",
      "User journey mapping",
      "Interaction design",
    ],
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 5,
    name: "quality-assurance",
    title: "Quality Assurance",
    description: "Comprehensive testing and quality control",
    icon: "✅",
    image: "/images/services/qa.jpg",
    link: "/services/5",
    color: "bg-yellow-500",
    categoryId: 3,
    category: dummyServiceCategories[2],
    categoryTitle: dummyServiceCategories[2].title,
    categoryIcon: dummyServiceCategories[2].icon,
    categoryDescription: dummyServiceCategories[2].description,
    categoryImage: dummyServiceCategories[2].image,
    features: [
      "Manual testing",
      "Automated testing",
      "Performance testing",
      "Security testing",
      "User acceptance testing",
      "Test automation frameworks",
    ],
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 6,
    name: "seo",
    title: "SEO",
    description: "Search engine optimization services",
    icon: "🔍",
    image: "/images/services/seo.jpg",
    link: "/services/6",
    color: "bg-orange-500",
    categoryId: 4,
    category: dummyServiceCategories[3],
    categoryTitle: dummyServiceCategories[3].title,
    categoryIcon: dummyServiceCategories[3].icon,
    categoryDescription: dummyServiceCategories[3].description,
    categoryImage: dummyServiceCategories[3].image,
    features: [
      "Keyword research",
      "On-page optimization",
      "Technical SEO",
      "Content optimization",
      "Link building",
      "SEO analytics",
    ],
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const dummyProjects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce solution with advanced features for online retail businesses.",
    image: "/images/slides/caseStudy1.webp",
    client: "Retail Corp",
    category: "E-Commerce",
    technologies: "React, Node.js, MongoDB, Stripe",
    projectUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    features: JSON.stringify([
      {
        icon: "🛒",
        title: "Shopping Cart",
        description: "Advanced cart management system",
      },
      {
        icon: "💳",
        title: "Payment Integration",
        description: "Multiple payment gateway support",
      },
      {
        icon: "📊",
        title: "Analytics Dashboard",
        description: "Real-time sales and inventory tracking",
      },
    ]),
    advantages: JSON.stringify([
      {
        title: "Scalability",
        description: "Handles millions of products and users",
      },
      {
        title: "Performance",
        description: "Fast page load times and optimized queries",
      },
    ]),
    gallery: "image1.jpg,image2.jpg,image3.jpg",
    results:
      "Increased sales by 200%@Improved user engagement by 150%@Reduced checkout time by 60%",
    testimonials: JSON.stringify([
      {
        image: "/images/testimonial1.jpg",
        name: "John Doe",
        role: "CEO",
        company: "Retail Corp",
        quote: "Outstanding platform that transformed our online business.",
      },
    ]),
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description:
      "Secure and user-friendly mobile banking application with advanced security features.",
    image: "/images/slides/caseStudy2.webp",
    client: "Finance Bank",
    category: "Fintech",
    technologies: "React Native, Node.js, PostgreSQL",
    projectUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    features: JSON.stringify([
      {
        icon: "🔐",
        title: "Security",
        description: "Bank-level encryption and authentication",
      },
      {
        icon: "💰",
        title: "Transactions",
        description: "Real-time money transfers",
      },
      {
        icon: "📈",
        title: "Analytics",
        description: "Spending insights and budgeting tools",
      },
    ]),
    advantages: JSON.stringify([
      {
        title: "Security",
        description: "Multi-factor authentication and encryption",
      },
      {
        title: "User Experience",
        description: "Intuitive interface for all age groups",
      },
    ]),
    gallery: "bank1.jpg,bank2.jpg,bank3.jpg",
    results: "1M+ downloads@4.8 star rating@99.9% uptime",
    testimonials: JSON.stringify([]),
  },
  {
    id: 3,
    title: "Healthcare Management System",
    description:
      "Comprehensive healthcare management system for hospitals and clinics.",
    image: "/images/slides/casestudy3.webp",
    client: "HealthCare Plus",
    category: "Healthcare",
    technologies: "Vue.js, Python, MySQL",
    projectUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    features: JSON.stringify([
      {
        icon: "🏥",
        title: "Patient Management",
        description: "Complete patient records system",
      },
      {
        icon: "📋",
        title: "Appointment Scheduling",
        description: "Automated appointment booking",
      },
      {
        icon: "💊",
        title: "Pharmacy Integration",
        description: "Direct prescription to pharmacy",
      },
    ]),
    advantages: JSON.stringify([
      {
        title: "Efficiency",
        description: "Reduced administrative workload by 70%",
      },
      { title: "Accuracy", description: "Minimized errors in patient records" },
    ]),
    gallery: "health1.jpg,health2.jpg,health3.jpg",
    results:
      "Streamlined operations@Improved patient satisfaction@Reduced wait times",
    testimonials: JSON.stringify([]),
  },
];

const dummyAboutSection: AboutSection = {
  id: 1,
  title: "About Digi Hub",
  description:
    "We are a team of passionate developers, designers, and innovators dedicated to creating cutting-edge digital solutions that transform businesses and enhance user experiences.",
  image: "/images/about.jpg",
  stats: [],
  isActive: true,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  mission:
    "At Digi Hub, our mission is to empower businesses and individuals by delivering cutting-edge technology solutions that boost efficiency, transparency, and accessibility across various industries. We are dedicated to building seamless, secure and reliable platforms that foster growth and profitability, enabling our clients to reach their fullest potential in a rapidly changing digital world.",
  vision:
    "Our vision is to become a global leader in technology-driven solutions, revolutionizing industries and setting new benchmarks for excellence in capital markets, fintech, and beyond. We aim to consistently innovate, broaden our offerings, and provide exceptional value to our clients, while maintaining the highest standards of quality and customer satisfaction.",
};

const dummyAboutStats: AboutStat[] = [
  {
    id: 1,
    label: "Projects",
    value: "50+",
    icon: "🚀",
    color: "primary",
    title: "Projects Completed",
    description: "Successfully delivered projects across various industries",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    label: "Team",
    value: "25+",
    icon: "👥",
    color: "blue",
    title: "Team Members",
    description: "Experienced professionals dedicated to excellence",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 3,
    label: "Experience",
    value: "5+",
    icon: "⭐",
    color: "yellow",
    title: "Years Experience",
    description: "Years of combined experience in digital solutions",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 4,
    label: "Satisfaction",
    value: "100%",
    icon: "😊",
    color: "green",
    title: "Client Satisfaction",
    description: "Dedicated to exceeding client expectations",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const dummyAboutValues: AboutStat[] = [
  {
    id: 1,
    label: "Innovation",
    value: "",
    icon: "💡",
    color: "primary",
    title: "Innovation",
    description:
      "We constantly explore new technologies and methodologies to deliver cutting-edge solutions that give our clients a competitive advantage.",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    label: "Quality",
    value: "",
    icon: "✨",
    color: "blue",
    title: "Quality",
    description:
      "We maintain the highest standards of quality in everything we do, from code to customer service, ensuring excellence at every step.",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 3,
    label: "Integrity",
    value: "",
    icon: "🤝",
    color: "green",
    title: "Integrity",
    description:
      "We build trust through transparency, honesty, and ethical practices in all our business relationships.",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const dummyContactInfo: ContactInfo = {
  id: 1,
  address: "Kalash Building, Naxal, Bhatbhateni, Kathmandu, Nepal",
  phone: "+977 01 4333333",
  email: "info@digihub.io",
  officeHours:
    "Monday - Friday: 9:00 AM - 6:00 PM, Saturday: 10:00 AM - 4:00 PM",
  isActive: true,
  socialLinks: [
    { id: 1, platform: "Facebook", url: "https://facebook.com", icon: "📘" },
    { id: 2, platform: "LinkedIn", url: "https://linkedin.com", icon: "💼" },
    { id: 3, platform: "Twitter", url: "https://twitter.com", icon: "🐦" },
    { id: 4, platform: "GitHub", url: "https://github.com", icon: "💻" },
  ],
};

const dummyNavigation: NavigationItem[] = [
  { id: 1, title: "Home", url: "/", order: 1, isActive: true },
  { id: 2, title: "About", url: "/about", order: 2, isActive: true },
  { id: 3, title: "Services", url: "/services", order: 3, isActive: true },
  { id: 4, title: "Portfolio", url: "/portfolio", order: 4, isActive: true },
  { id: 5, title: "Contact", url: "/contact", order: 5, isActive: true },
];

const dummyFooterInfo: FooterInfo = {
  id: 1,
  description: "Transforming ideas into innovative digital solutions.",
  logo: "/images/Dghub-svg-logo.svg",
  companyName: "Digi Hub",
  copyrightText: "Digi Hub. All rights reserved.",
  isActive: true,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  links: [
    { id: 1, title: "About Us", url: "/about", order: 1 },
    { id: 2, title: "Our Services", url: "/services", order: 2 },
    { id: 3, title: "Our Products", url: "/portfolio", order: 3 },
    { id: 4, title: "Contact", url: "/contact", order: 4 },
  ],
};

const dummyDemoVideos: DemoVideo[] = [
  {
    id: 1,
    title: "E-Commerce Platform Demo",
    description:
      "Watch how our e-commerce platform transforms online retail businesses with advanced features and seamless user experience.",
    videoUrl: "https://example.com/video1.mp4",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: "5:30",
    thumbnail: "/images/demo1.jpg",
    isActive: true,
  },
  {
    id: 2,
    title: "Mobile Banking App Overview",
    description:
      "Explore the features and security of our mobile banking application designed for modern financial institutions.",
    videoUrl: "https://example.com/video2.mp4",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: "7:15",
    thumbnail: "/images/demo2.jpg",
    isActive: true,
  },
  {
    id: 3,
    title: "Healthcare Management System",
    description:
      "See how our healthcare management system streamlines hospital operations and improves patient care.",
    videoUrl: "https://example.com/video3.mp4",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: "6:45",
    thumbnail: "/images/demo3.jpg",
    isActive: true,
  },
];

// Helper function to simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Content service methods
export const contentService = {
  // Hero Section
  getHeroSection: async (): Promise<ApiResponse<HeroSection>> => {
    await delay(300); // Simulate network delay
    return {
      success: true,
      data: dummyHeroSection,
    };
    // Original API call (commented):
    // return api.get<HeroSection>('/hero/section');
  },

  // Hero Stats
  getHeroStats: async (): Promise<ApiResponse<HeroStat[]>> => {
    await delay(300);
    return {
      success: true,
      data: dummyHeroStats,
    };
    // Original API call (commented):
    // return api.get<HeroStat[]>('/hero/stats');
  },

  // Services
  getServices: async (): Promise<ApiResponse<Service[]>> => {
    await delay(300);
    return {
      success: true,
      data: dummyServices,
    };
    // Original API call (commented):
    // return api.get<Service[]>('/services');
  },

  getServiceById: async (id: number): Promise<ApiResponse<Service>> => {
    await delay(300);
    const service = dummyServices.find((s) => s.id === id);
    if (!service) {
      return {
        success: false,
        data: {} as Service,
        message: "Service not found",
      };
    }
    return {
      success: true,
      data: service,
    };
    // Original API call (commented):
    // return api.get<Service>(`/services/${id}`);
  },

  getServiceCategories: async (): Promise<ApiResponse<ServiceCategory[]>> => {
    await delay(300);
    return {
      success: true,
      data: dummyServiceCategories,
    };
    // Original API call (commented):
    // return api.get<ServiceCategory[]>('/services/categories');
  },

  // Projects
  getProjects: async (): Promise<ApiResponse<Project[]>> => {
    await delay(300);
    return {
      success: true,
      data: dummyProjects,
    };
    // Original API call (commented):
    // return api.get<Project[]>('/projects');
  },

  getProjectById: async (id: number): Promise<ApiResponse<Project>> => {
    await delay(300);
    const project = dummyProjects.find((p) => p.id === id);
    if (!project) {
      return {
        success: false,
        data: {} as Project,
        message: "Project not found",
      };
    }
    return {
      success: true,
      data: project,
    };
    // Original API call (commented):
    // return api.get<Project>(`/projects/${id}`);
  },

  // About
  getAboutSection: async (): Promise<ApiResponse<AboutSection>> => {
    await delay(300);
    return {
      success: true,
      data: dummyAboutSection,
    };
    // Original API call (commented):
    // return api.get<AboutSection>('/about/section');
  },

  getAboutStats: async (): Promise<ApiResponse<AboutStat[]>> => {
    await delay(300);
    return {
      success: true,
      data: dummyAboutStats,
    };
    // Original API call (commented):
    // return api.get<AboutStat[]>('/about/stats');
  },

  getAboutValues: async (): Promise<ApiResponse<AboutStat[]>> => {
    await delay(300);
    return {
      success: true,
      data: dummyAboutValues,
    };
    // Original API call (commented):
    // return api.get<AboutStat[]>('/about/values');
  },

  // Contact
  getContactInfo: async (): Promise<ApiResponse<ContactInfo>> => {
    await delay(300);
    return {
      success: true,
      data: dummyContactInfo,
    };
    // Original API call (commented):
    // return api.get<ContactInfo>('/contact/section');
  },

  // Navigation
  getNavigation: async (): Promise<ApiResponse<NavigationItem[]>> => {
    await delay(300);
    return {
      success: true,
      data: dummyNavigation,
    };
    // Original API call (commented):
    // return api.get<NavigationItem[]>('/navigation/active');
  },

  // Footer
  getFooterInfo: async (): Promise<ApiResponse<FooterInfo>> => {
    await delay(300);
    return {
      success: true,
      data: dummyFooterInfo,
    };
    // Original API call (commented):
    // return api.get<FooterInfo>('/footer/section');
  },

  // Demo Videos
  getDemoVideos: async (): Promise<ApiResponse<DemoVideo[]>> => {
    await delay(300);
    return {
      success: true,
      data: dummyDemoVideos,
    };
    // Original API call (commented):
    // return api.get<DemoVideo[]>('/demo-videos');
  },
};

export default contentService;
