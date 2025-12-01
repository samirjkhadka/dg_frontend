// src/data/mockServicesData.ts
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  categoryId: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const mockCategories: Category[] = [
  {
    id: "1",
    title: "Trading Platforms",
    description:
      "High-performance, secure trading systems for brokers and exchanges",
    icon: "ChartLine",
  },
  {
    id: "2",
    title: "Risk & Compliance",
    description:
      "Real-time monitoring, KYC/AML, and regulatory reporting solutions",
    icon: "Shield",
  },
  {
    id: "3",
    title: "Market Data & Analytics",
    description:
      "Live feeds, historical data, and advanced analytics dashboards",
    icon: "TrendingUp",
  },
  {
    id: "4",
    title: "Mobile Trading Apps",
    description:
      "Native iOS & Android apps with real-time sync and biometric login",
    icon: "Smartphone",
  },
];

export const mockService: Service[] = [
  // Trading Platforms
  {
    id: 1,
    categoryId: "1",
    title: "Online Trading System",
    icon: "Laptop",
    description:
      "Full-featured web platform with real-time quotes, order execution, and portfolio management.",
    features: [
      "Real-time P&L",
      "Advanced Charting",
      "Order Types (Limit, Market, Stop)",
      "Multi-device Sync",
    ],
  },
  {
    id: 2,
    categoryId: "1",
    title: "Broker Management Portal",
    icon: "Users",
    description:
      "Admin dashboard for brokers to manage clients, margins, and settlements.",
    features: [
      "Client Onboarding",
      "Margin Monitoring",
      "Commission Tracking",
      "Audit Logs",
    ],
  },

  // Risk & Compliance
  {
    id: 3,
    categoryId: "2",
    title: "Real-Time Risk Engine",
    icon: "AlertTriangle",
    description: "Monitor exposure, VaR, and stress testing in real-time.",
    features: [
      "Pre-trade Checks",
      "Position Limits",
      "Margin Call Automation",
      "Regulatory Alerts",
    ],
  },
  // Market Data
  {
    id: 4,
    categoryId: "3",
    title: "Live Market Feed",
    icon: "Radio",
    description: "Ultra-low latency data from NEPSE and global exchanges.",
    features: [
      "Level 2 Depth",
      "Tick-by-Tick Data",
      "Historical API",
      "WebSocket Delivery",
    ],
  },
  {
    id: 5,
    categoryId: "3",
    title: "Analytics Dashboard",
    icon: "BarChart3",
    description:
      "Interactive charts and insights for traders and institutions.",
    features: [
      "Technical Indicators",
      "Heatmaps",
      "Sector Analysis",
      "Custom Reports",
    ],
  },

  // Mobile
  {
    id: 6,
    categoryId: "4",
    title: "iOS & Android Apps",
    icon: "Smartphone",
    description:
      "Native trading apps with push notifications and biometric login.",
    features: [
      "Face ID / Fingerprint",
      "Push Alerts",
      "Offline Watchlist",
      "One-Tap Trading",
    ],
  },

  // // Backend
  // {
  //   id: 8,
  //   categoryId: "5",
  //   title: "High-Frequency Core",
  //   icon: "Zap",
  //   description: "Sub-millisecond order matching engine built for scale.",
  //   features: [
  //     "FIX Protocol Support",
  //     "Co-location Ready",
  //     "99.99% Uptime",
  //     "Auto-scaling",
  //   ],
  // },

  // AI
  // {
  //   id: 9,
  //   categoryId: "6",
  //   title: "Algo Trading Bots",
  //   icon: "Bot",
  //   description: "Automated strategies with backtesting and live execution.",
  //   features: [
  //     "Strategy Builder",
  //     "Paper Trading",
  //     "Risk Controls",
  //     "Performance Analytics",
  //   ],
  // },
];
