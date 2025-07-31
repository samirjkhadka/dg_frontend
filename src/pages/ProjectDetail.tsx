import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { projects } from "./Portfolio";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  features?: { title: string; description: string; icon: string }[];
  advantages?: { title: string; description: string; icon: string }[];
  gallery?: string[];
  client?: string;
  completionDate?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  testimonials?: {
    name: string;
    role: string;
    company: string;
    image: string;
    quote: string;
  }[];
}

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | undefined>();
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    const foundProject = projects.find((p: Project) => p.id === id);
    if (foundProject) {
      // Add additional project details
      const enhancedProject: Project = {
        ...foundProject,
        features: getProjectFeatures(foundProject.id),
        gallery: getProjectGallery(foundProject.id),
        client: "Confidential",
        completionDate: "2023",
        challenge: getProjectChallenge(foundProject.id),
        solution: getProjectSolution(foundProject.id),
        results: getProjectResults(foundProject.id),
        testimonials: getProjectTestimonials(foundProject.id),
        advantages: getProjectAdvantages(foundProject.id),
      };
      setProject(enhancedProject);
    }
    setLoading(false);
  }, [id]);

  const getProjectFeatures = (
    projectId: string
  ): { title: string; description: string; icon: string }[] => {
    const featuresMap: {
      [key: string]: { title: string; description: string; icon: string }[];
    } = {
      "trading-management-system": [
        {
          title: "Multi-Window Support",
          description:
            "Effortlessly manage trades by opening multiple windows to view real-time data, compare charts, and execute trades without switching screens.",
          icon: "📊",
        },
        {
          title: "Dynamic Alerts",
          description:
            "Set customizable price trigger alerts and get instant pop-up notifications to stay ahead of market movements.",
          icon: "🛡️",
        },
        {
          title: "Sector-Wise Live Data",
          description:
            "Monitor real-time sector performance to spot trends and make informed investment decisions.",
          icon: "📈",
        },
        {
          title: "OHCL Values",
          description:
            "Access detailed Open, High, Close, and Low values for specific date ranges to analyze historical performance.",
          icon: "🤖",
        },
        {
          title: "Market Depth",
          description:
            "Track market depth across multiple scrips in one window for informed order placement.",
          icon: "✅",
        },
        {
          title: "Detailed Quotes",
          description:
            "View comprehensive trade information including Trade Watch, Trade Book, Total Bids, and more, all in a single window.",
          icon: "💎",
        },
        {
          title: "Heat Map",
          description:
            "Visualize market performance with color-coded scrips to quickly spot trends.",
          icon: "💎",
        },
        {
          title: "Order Basket",
          description:
            "Streamline bulk order placement by importing CSV files, saving time and reducing errors.",
          icon: "💎",
        },
        {
          title: "Child Account Management",
          description:
            "Manage multiple child accounts under one parent account for easy portfolio oversight.",
          icon: "💎",
        },
        {
          title: "Portfolio Information",
          description:
            "Gain insights into balance, average cost price, holding percentage, and unrealized gains/losses.",
          icon: "💎",
        },
        {
          title: "Trading View Charts",
          description:
            "Access advanced Trading View charts directly for in-depth market analysis.",
          icon: "💎",
        },
        {
          title: "What-If Calculator",
          description:
            "Simulate investment scenarios to evaluate potential outcomes before trading.",
          icon: "💎",
        },
        {
          title: "Quick Sell Feature",
          description:
            "Liquidate all holdings of a scrip with one click for swift portfolio adjustments.",
          icon: "💎",
        },
        {
          title: "Right-Click Operations",
          description:
            "Quickly execute various actions from your watchlist with a simple right-click.",
          icon: "💎",
        },
      ],
      "back-office-management-system": [
        {
          title: "Settlement and Reconciliation",
          description:
            "Automates the settlement process and ensures accurate reconciliation of trades, accounts, and transactions.",
          icon: "📊",
        },
        {
          title: "Compliance Management",
          description:
            "Provides tools to manage regulatory compliance, including automated reporting and tracking of regulatory changes.",
          icon: "🛡️",
        },
        {
          title: "Integrated Reporting",
          description:
            "Generates detailed and customizable reports on financial operations, trade performance, and compliance status.",
          icon: "📈",
        },
        {
          title: "Transaction Tracking",
          description:
            "Tracks and manages all trade and transaction activities, providing transparency and a complete audit trail.",
          icon: "🤖",
        },
        {
          title: "Checker and Maker Concept",
          description:
            "Ensures a dual-layer verification process, where one user initiates and another approves or verifies transactions, enhancing accuracy and security in operations. ",
          icon: "✅",
        },
        {
          title: "Data Synchronization",
          description:
            "Ensures that all operational data is synchronized across different systems and departments, maintaining consistency and accuracy.",
          icon: "💎",
        },
        {
          title: "User Access Controls",
          description:
            "Offers granular control over user permissions and access to sensitive information, enhancing security and data protection.",
          icon: "💎",
        },
        {
          title: "Scalable Infrastructure",
          description:
            "Supports the growth of your business by accommodating increasing transaction volumes and integrating with other systems as needed.",
          icon: "💎",
        },
      ],
      "client-portal": [
        {
          title: "Seamless Onboarding",
          description:
            "Facilitates smooth client onboarding with KYC registration for Demat accounts and integration with Trading Management Systems (TMS).",
          icon: "📊",
        },
        {
          title: "Transactional and Accounting History",
          description:
            "Provides clients with detailed access to their transaction records and accounting history, ensuring transparency and easy tracking of financial activities.",
          icon: "🛡️",
        },
        {
          title: "Integrated Payment Gateway",
          description:
            "Enables secure and efficient transactions directly through the portal, simplifying payment processes and reducing administrative overhead",
          icon: "📈",
        },
        {
          title: "Portfolio Management",
          description:
            "Allows clients to manage and view multiple linked portfolios from a single interface, providing a comprehensive overview of their investments.",
          icon: "🤖",
        },
        {
          title: "Real-Time Market Insights",
          description:
            "Offers up-to-date market data and insights, helping clients make informed investment decisions with current information. ",
          icon: "✅",
        },
        {
          title: "Custom Watchlists",
          description:
            "Enables clients to create and manage custom watchlists for tracking specific stocks or assets of interest.",
          icon: "💎",
        },
        {
          title: "Alerts and Notifications",
          description:
            "Provides customizable alerts for price triggers, portfolio changes, and market events to keep clients informed of important developments.",
          icon: "💎",
        },
        {
          title: "User-Friendly Interface",
          description:
            "Features an intuitive and easy-to-navigate design, ensuring a seamless and efficient user experience.",
          icon: "💎",
        },
        {
          title: "Secure Access",
          description:
            "Implements advanced security measures to protect client data and transactions, including encryption and multi-factor authentication.",
          icon: "💎",
        },
      ],
      "hr-management-system": [
        {
          title: "Employee Onboarding",
          description:
            "Streamlined onboarding process with digital documentation",
          icon: "👋",
        },
        {
          title: "Performance Management",
          description: "360-degree feedback and performance tracking system",
          icon: "⭐",
        },
        {
          title: "Payroll Integration",
          description: "Automated payroll processing with tax compliance",
          icon: "💰",
        },
        {
          title: "Leave Management",
          description: "Flexible leave tracking and approval workflow",
          icon: "📅",
        },
        {
          title: "Training & Development",
          description: "Learning management system with course tracking",
          icon: "🎓",
        },
        {
          title: "Recruitment Tools",
          description: "Applicant tracking and interview scheduling system",
          icon: "🔍",
        },
      ],
      walletx: [
        {
          title: "Multi-currency Support",
          description:
            "Support for multiple fiat currencies and cryptocurrencies",
          icon: "🌍",
        },
        {
          title: "Secure Transactions",
          description: "End-to-end encryption and multi-factor authentication",
          icon: "🔒",
        },
        {
          title: "Crypto Integration",
          description: "Seamless integration with major blockchain networks",
          icon: "⛓️",
        },
        {
          title: "Payment Processing",
          description: "Fast and secure payment processing with low fees",
          icon: "💳",
        },
        {
          title: "Transaction History",
          description: "Detailed transaction history with export capabilities",
          icon: "📝",
        },
        {
          title: "Smart Contracts",
          description: "Support for automated smart contract execution",
          icon: "📜",
        },
      ],
      "loyalty-management-system": [
        {
          title: "Points Management",
          description: "Flexible points earning and redemption system",
          icon: "🎯",
        },
        {
          title: "Customer Analytics",
          description: "Advanced customer behavior analysis and insights",
          icon: "📊",
        },
        {
          title: "Campaign Management",
          description: "Create and manage targeted loyalty campaigns",
          icon: "🎨",
        },
        {
          title: "Member Benefits",
          description: "Customizable member benefits and rewards",
          icon: "🎁",
        },
        {
          title: "Integration Hub",
          description: "Seamless integration with existing business systems",
          icon: "🔄",
        },
        {
          title: "Mobile App",
          description: "Mobile-first experience for members",
          icon: "📱",
        },
      ],
      "agro-tech": [
        {
          title: "Crop Monitoring",
          description: "Real-time crop health monitoring using IoT sensors",
          icon: "🌱",
        },
        {
          title: "Weather Integration",
          description: "Accurate weather forecasting and alerts",
          icon: "🌤️",
        },
        {
          title: "Supply Chain",
          description: "End-to-end supply chain tracking and optimization",
          icon: "🚛",
        },
        {
          title: "Resource Management",
          description: "Efficient resource allocation and planning",
          icon: "💧",
        },
        {
          title: "Market Analysis",
          description: "Market price trends and demand forecasting",
          icon: "📈",
        },
        {
          title: "Field Mapping",
          description: "Precision agriculture with GPS mapping",
          icon: "🗺️",
        },
      ],
    };
    return featuresMap[projectId] || [];
  };

  const getProjectAdvantages = (
    projectId: string
  ): { title: string; description: string; icon: string }[] => {
    const advantagesMap: {
      [key: string]: { title: string; description: string; icon: string }[];
    } = {
      "trading-management-system": [
        {
          title: "Enhanced Decision - Making",
          description:
            "With multi-window support and real-time alerts, traders can monitor multiple data points simultaneously and respond quickly to market movements.",
          icon: "📊",
        },
        {
          title: "Customization and Flexibility",
          description:
            "The ability to create custom watchlists and view sector-specific data allows for personalized market monitoring, catering to individual trading strategies.",
          icon: "🛡️",
        },
        {
          title: "Streamlined Operations",
          description:
            "Automated features like the order basket for bulk order execution and integrated payment gateways simplify trading processes, saving time and reducing errors.",
          icon: "📈",
        },
        {
          title: "Comprehensive Market Analysis",
          description:
            "The TMS provides detailed trade books, market depth analysis, and OHCL values, offering traders a complete view of market activities and trends.",
          icon: "🤖",
        },
        {
          title: "Improved Portfolio Management",
          description:
            "Traders can easily manage multiple linked portfolios, view detailed portfolio information, and utilize tools like the What-If Calculator for better investment decisions.",
          icon: "✅",
        },
        {
          title: "User-Friendly Interface",
          description:
            "The TMS consolidates key information into single windows, such as detailed quotes and heat maps, making it easier for traders to access and interpret market data.",
          icon: "💎",
        },
        {
          title: "Efficiency and Speed",
          description:
            "The ability to execute orders at various market depths with a single click and perform multiple operations through right-click options enhances trading efficiency and speed.",
          icon: "💎",
        },
        {
          title: "Increased Profitability",
          description:
            "By providing comprehensive tools and features that optimize trading strategies and portfolio management, the TMS helps traders maximize returns and minimize risks.",
          icon: "💎",
        },
      ],
      "back-office-management-system": [
        {
          title: "Increased Efficiency",
          description:
            "Automates and streamlines post-trade activities, reducing manual effort and accelerating processing times for tasks such as settlement and reconciliation.",
          icon: "📊",
        },
        {
          title: "Error Reduction",
          description:
            "Minimizes human errors through automated processes and integrated checker and maker concept, ensuring accurate and reliable financial operations.",
          icon: "🛡️",
        },
        {
          title: "Enhanced Compliance",
          description:
            "Facilitates adherence to regulatory requirements by automating compliance checks and generating accurate, timely reports.",
          icon: "📈",
        },
        {
          title: "Improved Data Accuracy",
          description:
            "Centralizes and synchronizes operational data, leading to more accurate and consistent information across the organization.",
          icon: "🤖",
        },
        {
          title: "Operational Focus",
          description:
            "Frees up valuable time and resources, allowing your team to focus on strategic activities and business growth rather than administrative tasks.",
          icon: "✅",
        },
        {
          title: "Scalability",
          description:
            "Adapts to the growing needs of your business, supporting increased transaction volumes and complex operational requirements as your firm expands.",
          icon: "💎",
        },
        
       
      ],
      "client-portal": [
        {
          title: "Enhanced User Experience",
          description:
            "Simplifies financial management with an all-in-one platform, providing clients with easy access to their accounts, transactions, and market data.",
          icon: "📊",
        },
        {
          title: "Efficient Onboarding",
          description:
            "Streamlines the account setup process and integrates with other systems, reducing the time and complexity involved in onboarding new clients.",
          icon: "🛡️",
        },
        {
          title: "Informed Decision-Making",
          description:
            "Real-time market insights and customizable alerts enable clients to make well-informed investment decisions quickly.",
          icon: "📈",
        },
        {
          title: "Convenient Transactions",
          description:
            "Integrated payment gateway facilitates smooth and secure transactions, minimizing the need for external payment processes",
          icon: "🤖",
        },
        {
          title: "Comprehensive Portfolio Management",
          description:
            "Centralized management of multiple portfolios allows clients to monitor and optimize their investments efficiently",
          icon: "✅",
        },
        {
          title: "Increased Transparency",
          description:
            "Access to detailed transactional and accounting history ensures that clients have full visibility into their financial activities.",
          icon: "💎",
        },
        {
          title: "Enhanced Security",
          description:
            "Robust security features protect sensitive client information and ensure safe transactions, building trust and reliability.",
          icon: "💎",
        },
        {
          title: "Time Savings",
          description:
            "Automated features and streamlined processes reduce the time spent on manual tasks and administrative work, allowing clients to focus on their investments.",
          icon: "💎",
        },
        
       
      ],
      "hr-management-system": [
        {
          title: "Employee Onboarding",
          description:
            "Streamlined onboarding process with digital documentation",
          icon: "👋",
        },
        {
          title: "Performance Management",
          description: "360-degree feedback and performance tracking system",
          icon: "⭐",
        },
        {
          title: "Payroll Integration",
          description: "Automated payroll processing with tax compliance",
          icon: "💰",
        },
        {
          title: "Leave Management",
          description: "Flexible leave tracking and approval workflow",
          icon: "📅",
        },
        {
          title: "Training & Development",
          description: "Learning management system with course tracking",
          icon: "🎓",
        },
        {
          title: "Recruitment Tools",
          description: "Applicant tracking and interview scheduling system",
          icon: "🔍",
        },
      ],
      walletx: [
        {
          title: "Multi-currency Support",
          description:
            "Support for multiple fiat currencies and cryptocurrencies",
          icon: "🌍",
        },
        {
          title: "Secure Transactions",
          description: "End-to-end encryption and multi-factor authentication",
          icon: "🔒",
        },
        {
          title: "Crypto Integration",
          description: "Seamless integration with major blockchain networks",
          icon: "⛓️",
        },
        {
          title: "Payment Processing",
          description: "Fast and secure payment processing with low fees",
          icon: "💳",
        },
        {
          title: "Transaction History",
          description: "Detailed transaction history with export capabilities",
          icon: "📝",
        },
        {
          title: "Smart Contracts",
          description: "Support for automated smart contract execution",
          icon: "📜",
        },
      ],
      "loyalty-management-system": [
        {
          title: "Points Management",
          description: "Flexible points earning and redemption system",
          icon: "🎯",
        },
        {
          title: "Customer Analytics",
          description: "Advanced customer behavior analysis and insights",
          icon: "📊",
        },
        {
          title: "Campaign Management",
          description: "Create and manage targeted loyalty campaigns",
          icon: "🎨",
        },
        {
          title: "Member Benefits",
          description: "Customizable member benefits and rewards",
          icon: "🎁",
        },
        {
          title: "Integration Hub",
          description: "Seamless integration with existing business systems",
          icon: "🔄",
        },
        {
          title: "Mobile App",
          description: "Mobile-first experience for members",
          icon: "📱",
        },
      ],
      "agro-tech": [
        {
          title: "Crop Monitoring",
          description: "Real-time crop health monitoring using IoT sensors",
          icon: "🌱",
        },
        {
          title: "Weather Integration",
          description: "Accurate weather forecasting and alerts",
          icon: "🌤️",
        },
        {
          title: "Supply Chain",
          description: "End-to-end supply chain tracking and optimization",
          icon: "🚛",
        },
        {
          title: "Resource Management",
          description: "Efficient resource allocation and planning",
          icon: "💧",
        },
        {
          title: "Market Analysis",
          description: "Market price trends and demand forecasting",
          icon: "📈",
        },
        {
          title: "Field Mapping",
          description: "Precision agriculture with GPS mapping",
          icon: "🗺️",
        },
      ],
    };
    return advantagesMap[projectId] || [];
  };

  const getProjectGallery = (_projectId: string): string[] => {
    const baseImage = project?.image || "";
    return [
      baseImage,
      `${baseImage}?auto=format&fit=crop&w=1200&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `${baseImage}?auto=format&fit=crop&w=1200&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    ];
  };

  const getProjectChallenge = (projectId: string): string => {
    const challengesMap: { [key: string]: string } = {
      "trading-management-system":
        "The client needed a robust trading platform that could handle high-frequency trading while maintaining system stability and providing real-time market data analysis.",
      "hr-management-system":
        "The organization required a comprehensive HR solution that could streamline their employee management processes while ensuring compliance with various regulations.",
      walletx:
        "The challenge was to create a secure and user-friendly digital wallet that could support multiple currencies and cryptocurrencies while maintaining high performance and security standards.",
      "loyalty-management-system":
        "The client needed a scalable loyalty program platform that could handle millions of transactions while providing personalized rewards and analytics.",
      "agro-tech":
        "The challenge was to develop an agricultural management system that could integrate IoT devices, weather data, and supply chain information to optimize farming operations.",
    };
    return challengesMap[projectId] || "Project challenge description";
  };

  const getProjectSolution = (projectId: string): string => {
    const solutionsMap: { [key: string]: string } = {
      "trading-management-system":
        "We developed a high-performance trading platform using React and Node.js, implementing WebSocket for real-time data streaming and Python for advanced analytics.",
      "hr-management-system":
        "We created a comprehensive HR management system using React and Java Spring Boot, implementing microservices architecture for scalability and Docker for easy deployment.",
      walletx:
        "We built a secure digital wallet using React Native for cross-platform support, implementing blockchain technology for cryptocurrency transactions and Stripe for payment processing.",
      "loyalty-management-system":
        "We developed a scalable loyalty platform using React and Python Django, implementing Redis for caching and AWS for cloud infrastructure.",
      "agro-tech":
        "We created an agricultural management system using React and Node.js, implementing IoT integration, machine learning for predictions, and AWS for cloud infrastructure.",
    };
    return solutionsMap[projectId] || "Project solution description";
  };

  const getProjectResults = (projectId: string): string[] => {
    const resultsMap: { [key: string]: string[] } = {
      "trading-management-system": [
        "Increased trading efficiency by 40%",
        "Reduced system latency by 60%",
        "Improved risk management accuracy by 35%",
      ],
      "hr-management-system": [
        "Reduced HR processing time by 50%",
        "Improved employee satisfaction by 45%",
        "Decreased administrative costs by 30%",
      ],
      walletx: [
        "Achieved 1 million+ active users",
        "Processed $500M+ in transactions",
        "Maintained 99.99% uptime",
      ],
      "loyalty-management-system": [
        "Increased customer retention by 35%",
        "Improved reward redemption rate by 40%",
        "Enhanced customer engagement by 50%",
      ],
      "agro-tech": [
        "Increased crop yield by 25%",
        "Reduced water usage by 30%",
        "Improved supply chain efficiency by 40%",
      ],
    };
    return resultsMap[projectId] || [];
  };

  // Add a function to get project timeline
  const getProjectTimeline = (
    projectId: string
  ): { phase: string; description: string; duration: string }[] => {
    const timelineMap: {
      [key: string]: { phase: string; description: string; duration: string }[];
    } = {
      "trading-management-system": [
        {
          phase: "Discovery",
          description: "Requirements gathering and market research",
          duration: "2 weeks",
        },
        {
          phase: "Planning",
          description: "Architecture design and technology selection",
          duration: "3 weeks",
        },
        {
          phase: "Development",
          description: "Core functionality implementation",
          duration: "12 weeks",
        },
        {
          phase: "Testing",
          description: "Performance and security testing",
          duration: "4 weeks",
        },
        {
          phase: "Deployment",
          description: "Production deployment and monitoring setup",
          duration: "2 weeks",
        },
      ],
      "back-office-management-system": [
        {
          phase: "Discovery",
          description: "Requirements gathering and market research",
          duration: "2 weeks",
        },
        {
          phase: "Planning",
          description: "Architecture design and technology selection",
          duration: "3 weeks",
        },
        {
          phase: "Development",
          description: "Core functionality implementation",
          duration: "12 weeks",
        },
        {
          phase: "Testing",
          description: "Performance and security testing",
          duration: "4 weeks",
        },
        {
          phase: "Deployment",
          description: "Production deployment and monitoring setup",
          duration: "2 weeks",
        },
      ],
      "hr-management-system": [
        {
          phase: "Discovery",
          description: "Stakeholder interviews and process analysis",
          duration: "3 weeks",
        },
        {
          phase: "Planning",
          description: "System architecture and database design",
          duration: "4 weeks",
        },
        {
          phase: "Development",
          description: "Feature implementation and integration",
          duration: "16 weeks",
        },
        {
          phase: "Testing",
          description: "User acceptance testing and compliance verification",
          duration: "5 weeks",
        },
        {
          phase: "Deployment",
          description: "Phased rollout and training",
          duration: "3 weeks",
        },
      ],
      walletx: [
        {
          phase: "Discovery",
          description: "User research and security requirements analysis",
          duration: "2 weeks",
        },
        {
          phase: "Planning",
          description:
            "Security architecture and blockchain integration planning",
          duration: "3 weeks",
        },
        {
          phase: "Development",
          description: "Core wallet functionality and security implementation",
          duration: "14 weeks",
        },
        {
          phase: "Testing",
          description: "Security audits and penetration testing",
          duration: "6 weeks",
        },
        {
          phase: "Deployment",
          description: "App store submission and monitoring setup",
          duration: "2 weeks",
        },
      ],
      "loyalty-management-system": [
        {
          phase: "Discovery",
          description: "Customer behavior analysis and loyalty program design",
          duration: "3 weeks",
        },
        {
          phase: "Planning",
          description: "System architecture and integration planning",
          duration: "4 weeks",
        },
        {
          phase: "Development",
          description: "Points system and analytics implementation",
          duration: "10 weeks",
        },
        {
          phase: "Testing",
          description: "Load testing and integration verification",
          duration: "4 weeks",
        },
        {
          phase: "Deployment",
          description: "Production deployment and staff training",
          duration: "2 weeks",
        },
      ],
      "agro-tech": [
        {
          phase: "Discovery",
          description: "Field research and IoT requirements analysis",
          duration: "4 weeks",
        },
        {
          phase: "Planning",
          description: "IoT architecture and data model design",
          duration: "5 weeks",
        },
        {
          phase: "Development",
          description: "Sensor integration and analytics implementation",
          duration: "18 weeks",
        },
        {
          phase: "Testing",
          description: "Field testing and accuracy verification",
          duration: "6 weeks",
        },
        {
          phase: "Deployment",
          description: "Phased rollout and farmer training",
          duration: "3 weeks",
        },
      ],
    };
    return timelineMap[projectId] || [];
  };

  // Add a function to get project testimonials
  const getProjectTestimonials = (
    projectId: string
  ): {
    name: string;
    role: string;
    company: string;
    image: string;
    quote: string;
  }[] => {
    const testimonialsMap: {
      [key: string]: {
        name: string;
        role: string;
        company: string;
        image: string;
        quote: string;
      }[];
    } = {
      "trading-management-system": [
        {
          name: "John Smith",
          role: "Head of Trading",
          company: "Global Financial Markets",
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          quote:
            "The trading management system has revolutionized our operations. The real-time data integration and risk management tools have significantly improved our decision-making process.",
        },
        {
          name: "Sarah Johnson",
          role: "Trading Operations Manager",
          company: "Alpha Trading Solutions",
          image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          quote:
            "The automated trading capabilities and comprehensive analytics have given us a competitive edge in the market. It's a game-changer for our trading operations.",
        },
      ],
      "hr-management-system": [
        {
          name: "Michael Brown",
          role: "HR Director",
          company: "TechCorp International",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          quote:
            "The HR management system has streamlined our entire HR process. From onboarding to performance management, everything is now more efficient and user-friendly.",
        },
        {
          name: "Emily Davis",
          role: "Talent Acquisition Manager",
          company: "Innovation Labs",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          quote:
            "The recruitment tools and employee self-service portal have significantly reduced our administrative workload. It's an invaluable asset for our HR team.",
        },
      ],
      walletx: [
        {
          name: "David Wilson",
          role: "CEO",
          company: "CryptoFin Solutions",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          quote:
            "WalletX has transformed how we handle digital payments. The multi-currency support and security features give our users peace of mind.",
        },
        {
          name: "Lisa Chen",
          role: "Product Manager",
          company: "Digital Payments Inc",
          image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          quote:
            "The seamless integration with blockchain networks and smart contract support has opened up new possibilities for our payment solutions.",
        },
      ],
      "loyalty-management-system": [
        {
          name: "Robert Taylor",
          role: "Marketing Director",
          company: "Retail Giants",
          image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          quote:
            "The loyalty management system has helped us build stronger relationships with our customers. The analytics insights are invaluable for our marketing strategies.",
        },
        {
          name: "Maria Garcia",
          role: "Customer Experience Manager",
          company: "Global Retail",
          image:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          quote:
            "The points management and campaign features have significantly increased customer engagement. It's a powerful tool for driving customer loyalty.",
        },
      ],
      "agro-tech": [
        {
          name: "James Anderson",
          role: "Farm Manager",
          company: "Green Acres Farm",
          image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          quote:
            "The crop monitoring and weather integration features have revolutionized our farming operations. We've seen significant improvements in yield and resource efficiency.",
        },
        {
          name: "Patricia Lee",
          role: "Agricultural Consultant",
          company: "Agro Solutions",
          image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          quote:
            "The IoT sensor integration and field mapping capabilities have brought precision agriculture to a new level. It's transforming how we approach farming.",
        },
      ],
    };
    return testimonialsMap[projectId] || [];
  };

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
          <h1 className="text-3xl font-bold mb-4 text-white">Project Not Found</h1>
          <Link to="/portfolio" className="text-primary hover:underline">
            Return to Portfolio
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
                Portfolio
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
              <div className="flex flex-wrap justify-center gap-2">
                {project.technologies.map((tech, index) => (
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
            </motion.div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="py-16 px-4 section-glass">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {project.gallery?.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="relative aspect-video rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>



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
              <h2 className="text-4xl font-bold mb-6 text-white">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto text-justify">
                Discover the powerful features that make this solution stand
                out from the competition and deliver exceptional value to users.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {getProjectFeatures(project.id).map((feature, index) => (
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
                      <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
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
                  <h2 className="text-3xl font-bold mb-6 text-white">About the Project</h2>
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
                        {project.features?.map((feature, index) => (
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
                      <h3 className="text-xl font-semibold mb-3 text-white">Advantages</h3>
                      <ul className="grid gap-3">
                        {project.advantages?.map((advantage, index) => (
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
                        <h3 className="text-xl font-semibold mb-3 text-white">Results</h3>
                        <ul className="space-y-2">
                          {project.results.map((result, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="flex items-start space-x-2"
                            >
                              <span className="text-primary">✓</span>
                              <span className="text-gray-300">{result}</span>
                            </motion.li>
                          ))}
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
                    <h3 className="text-2xl font-bold mb-6 text-white">Project Details</h3>
                    <div className="space-y-6">
                      <div className="p-4 bg-slate-700/30 rounded-xl border border-slate-600/30">
                        <h4 className="font-semibold text-primary mb-2">Category</h4>
                        <p className="text-gray-300 text-justify">{project.category}</p>
                      </div>
                      <div className="p-4 bg-slate-700/30 rounded-xl border border-slate-600/30">
                        <h4 className="font-semibold text-primary mb-2">Client</h4>
                        <p className="text-gray-300 text-justify">{project.client}</p>
                      </div>
                      <div className="p-4 bg-slate-700/30 rounded-xl border border-slate-600/30">
                        <h4 className="font-semibold text-primary mb-2">Completion Date</h4>
                        <p className="text-gray-300 text-justify">{project.completionDate}</p>
                      </div>
                      <div className="p-4 bg-slate-700/30 rounded-xl border border-slate-600/30">
                        <h4 className="font-semibold text-primary mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-full text-sm backdrop-blur-sm border border-slate-600/30 hover:bg-primary/20 hover:border-primary/30 hover:text-primary transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
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
              <h2 className="text-4xl font-bold mb-6 text-white">Client Testimonials</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto text-justify">
                Hear what our clients have to say about their experience with
                this solution and how it has transformed their business operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {getProjectTestimonials(project.id).map((testimonial, index) => (
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
                        <h3 className="text-2xl font-bold text-white mb-2">{testimonial.name}</h3>
                        <p className="text-gray-300 text-justify mb-1">{testimonial.role}</p>
                        <p className="text-primary font-semibold">{testimonial.company}</p>
                      </div>
                    </div>
                    <blockquote className="text-gray-300 text-justify leading-relaxed text-lg italic relative">
                      <div className="absolute -top-2 -left-2 text-4xl text-primary/30">"</div>
                      {testimonial.quote}
                      <div className="absolute -bottom-2 -right-2 text-4xl text-primary/30">"</div>
                    </blockquote>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
                expertise and innovative solutions tailored to your specific needs.
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
