// src/data/mockDemoData.ts
export interface DemoVideo {
  id: string;
  title: string;
  description: string;
  youtubeUrl: string;
  duration: string;
  thumbnail?: string;
  category: string;
  featured: boolean;
}

export const mockDemoVideos: DemoVideo[] = [
  {
    id: "1",
    title: "Daily Operations through Mobile App",
    description:
      "Manage your trading operations anytime, anywhere with our TMS Mobile App! In this video, we’ll walk you through how you can efficiently handle your daily trading activities right from your phone — from creating a watchlist to buying and selling shares. ",
    youtubeUrl: "https://youtu.be/4FOaL6X1y9E", // Replace with real video
    duration: "8:32",
    category: "Trading Platforms",
    featured: true,
  },
  {
    id: "2",
    title: "Onboarding process for new TMS users",
    description:
      "New to our Trading Management System (TMS)? Then don't worry this video is for you.",
    youtubeUrl: "https://youtu.be/LgK7xHjj2SY",
    duration: "6:15",
    category: "Mobile Apps",
    featured: true,
  },
];
