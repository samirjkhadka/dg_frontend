// src/data/mockPortfolioData.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  client?: string;
  year: string;
  features: string[];
  link?: string;
}

export const mockProject: Project[] = [
  {
    id: "1",
    title: "NEPSE Online Trading Platform",
    description:
      "Next-gen web trading terminal used by 40+ brokers in Nepal with real-time NEPSE data, advanced charting, and instant order execution.",
    category: "Trading Platform",
    image: "/images/portfolio/nepse-platform.jpg",
    technologies: [
      "React",
      "TypeScript",
      "WebSocket",
      "Chart.js",
      "Node.js",
      "PostgreSQL",
    ],
    client: "Multiple Broker Houses",
    year: "2024",
    features: [
      "Real-time Level 2 Data",
      "Advanced Order Types",
      "Portfolio Analytics",
      "Mobile Responsive",
    ],
  },
  {
    id: "2",
    title: "Himalayan Broker Pro",
    description:
      "Enterprise-grade brokerage management system with client onboarding, margin monitoring, and automated compliance reporting.",
    category: "Broker Portal",
    image: "/images/portfolio/himalayan-broker.jpg",
    technologies: ["Next.js", "Tailwind", "Prisma", "Redis", "Docker"],
    client: "Himalayan Capital Ltd.",
    year: "2024",
    features: [
      "KYC Automation",
      "Real-time Risk Engine",
      "Commission Tracking",
      "SEBON Reporting",
    ],
  },
  {
    id: "3",
    title: "Everest Mobile Trading App",
    description:
      "Native iOS & Android app with biometric login, push alerts, and offline watchlist — trusted by 100,000+ retail investors.",
    category: "Mobile App",
    image: "/images/portfolio/everest-mobile.jpg",
    technologies: ["React Native", "Firebase", "WebSocket", "Face ID"],
    client: "Everest Securities",
    year: "2023",
    features: [
      "One-Tap Trading",
      "Push Notifications",
      "Dark Mode",
      "Offline Mode",
    ],
  },
  {
    id: "4",
    title: "Sagarmatha Risk Engine",
    description:
      "Real-time risk monitoring system preventing margin breaches and ensuring regulatory compliance across 15+ broker branches.",
    category: "Risk & Compliance",
    image: "/images/portfolio/sagarmatha-risk.jpg",
    technologies: ["Go", "Kafka", "PostgreSQL", "Grafana", "Kubernetes"],
    client: "Sagarmatha Trading",
    year: "2024",
    features: [
      "Pre-trade Checks",
      "VaR Calculation",
      "Auto Margin Calls",
      "Audit Trail",
    ],
  },
  {
    id: "5",
    title: "Global IME Analytics Dashboard",
    description:
      "Institutional-grade market analytics platform with heatmaps, sector performance, and custom reporting tools.",
    category: "Analytics",
    image: "/images/portfolio/global-analytics.jpg",
    technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "Supabase"],
    client: "Global IME Bank",
    year: "2024",
    features: [
      "Interactive Heatmaps",
      "Custom Indicators",
      "PDF Reports",
      "Role-based Access",
    ],
  },
  {
    id: "6",
    title: "Kathmandu Finance Algo Bot",
    description:
      "AI-powered algorithmic trading system with backtesting, paper trading, and live deployment capabilities.",
    category: "AI & Automation",
    image: "/images/portfolio/kathmandu-bot.jpg",
    technologies: ["Python", "TensorFlow", "FastAPI", "React", "Redis"],
    client: "Kathmandu Finance",
    year: "2025",
    features: [
      "Strategy Builder",
      "Backtesting Engine",
      "Live Execution",
      "Risk Controls",
    ],
  },
];
