import { useQuery } from '@tanstack/react-query';
import { contentService } from '../services/contentService';

// Custom hook for fetching hero section
export const useHeroSection = () => {
  return useQuery({
    queryKey: ['hero-section'],
    queryFn: contentService.getHeroSection,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};

// Custom hook for fetching hero stats
export const useHeroStats = () => {
  return useQuery({
    queryKey: ['hero-stats'],
    queryFn: contentService.getHeroStats,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};

// Custom hook for fetching services
export const useServices = () => {
  return useQuery({
    queryKey: ['services'],
    queryFn: contentService.getServices,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

// Custom hook for fetching a specific service
export const useService = (id: number) => {
  return useQuery({
    queryKey: ['service', id],
    queryFn: () => contentService.getServiceById(id),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    enabled: !!id,
  });
};

// Custom hook for fetching service categories
export const useServiceCategories = () => {
  return useQuery({
    queryKey: ['service-categories'],
    queryFn: contentService.getServiceCategories,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

// Custom hook for fetching projects
export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: contentService.getProjects,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

// Custom hook for fetching a specific project
export const useProject = (id: number) => {
  return useQuery({
    queryKey: ['project', id],
    queryFn: () => contentService.getProjectById(id),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    enabled: !!id,
  });
};

// Custom hook for fetching about section
export const useAboutSection = () => {
  return useQuery({
    queryKey: ['about-section'],
    queryFn: contentService.getAboutSection,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};


export const useAboutStats = () => {
  return useQuery({
    queryKey: ['about-stats'],
    queryFn: contentService.getAboutStats,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};
export const useAboutValues = () => {
  return useQuery({
    queryKey: ['about-values'],
    queryFn: contentService.getAboutValues,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};

// Custom hook for fetching contact info
export const useContactInfo = () => {
  return useQuery({
    queryKey: ['contact-info'],
    queryFn: contentService.getContactInfo,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

// Custom hook for fetching navigation
export const useNavigation = () => {
  return useQuery({
    queryKey: ['navigation'],
    queryFn: contentService.getNavigation,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

// Custom hook for fetching footer info
export const useFooterInfo = () => {
  return useQuery({
    queryKey: ['footer-info'],
    queryFn: contentService.getFooterInfo,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

// Custom hook for fetching demo videos
export const useDemoVideos = () => {
  return useQuery({
    queryKey: ['demo-videos'],
    queryFn: contentService.getDemoVideos,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
}; 