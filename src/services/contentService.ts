import { api, ApiResponse } from './api';

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
  technologies: string[];
  projectUrl: string;
  githubUrl: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
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
  thumbnail: string;
  isActive: boolean;
}

// Content service methods
export const contentService = {
  // Hero Section
  getHeroSection: (): Promise<ApiResponse<HeroSection>> =>
    api.get<HeroSection>('/hero/section'),

  // Hero Stats
  getHeroStats: (): Promise<ApiResponse<HeroStat[]>> =>
    api.get<HeroStat[]>('/hero/stats'),

  // Services
  getServices: (): Promise<ApiResponse<Service[]>> =>
    api.get<Service[]>('/services'),
  
  getServiceById: (id: number): Promise<ApiResponse<Service>> =>
    api.get<Service>(`/services/${id}`),
  
  getServiceCategories: (): Promise<ApiResponse<ServiceCategory[]>> =>
    api.get<ServiceCategory[]>('/services/categories'),

  // Projects
  getProjects: (): Promise<ApiResponse<Project[]>> =>
    api.get<Project[]>('/projects'),
  
  getProjectById: (id: number): Promise<ApiResponse<Project>> =>
    api.get<Project>(`/projects/${id}`),

  // About
  getAboutSection: (): Promise<ApiResponse<AboutSection>> =>
    api.get<AboutSection>('/about/section'),

   getAboutStats: (): Promise<ApiResponse<AboutStat[]>> =>
    api.get<AboutStat[]>('/about/stats'),

    getAboutValues: (): Promise<ApiResponse<AboutStat[]>> =>
    api.get<AboutStat[]>('/about/values'),

  // Contact
  getContactInfo: (): Promise<ApiResponse<ContactInfo>> =>
    api.get<ContactInfo>('/contact/section'),

  // Navigation
  getNavigation: (): Promise<ApiResponse<NavigationItem[]>> =>
    api.get<NavigationItem[]>('/navigation/active'),

  // Footer
  getFooterInfo: (): Promise<ApiResponse<FooterInfo>> =>
    api.get<FooterInfo>('/footer/section'),

  // Demo Videos
  getDemoVideos: (): Promise<ApiResponse<DemoVideo[]>> =>
    api.get<DemoVideo[]>('/demo-videos/section'),
};

export default contentService; 