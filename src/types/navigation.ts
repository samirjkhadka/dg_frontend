export interface NavLink {
  path: string;
  label: string;
  sectionId?: string;
  hasDropdown?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  services: Service[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
} 