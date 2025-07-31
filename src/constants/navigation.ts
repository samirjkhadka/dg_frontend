import { NavLink } from '../types/navigation';

export const NAV_LINKS: NavLink[] = [
  { path: '/', label: 'Home', sectionId: 'home' },
  { path: '/about', label: 'About', sectionId: 'about' },
  { path: '/services', label: 'Services', sectionId: 'services' },
  { path: '/portfolio', label: 'Our Products', sectionId: 'portfolio' },
  { path: '/contact', label: 'Contact', sectionId: 'contact' },
];

export const HEADER_OFFSET = 80; 