import { useLocation, useNavigate } from 'react-router-dom';
import { NavLink } from '../types/navigation';
import { useCallback } from 'react';

export const useNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  const handleNavClick = useCallback((link: NavLink) => {
    if (location.pathname === '/' && link.sectionId) {
      scrollToSection(link.sectionId);
    } else {
      navigate(link.path);
      window.scrollTo(0, 0);
    }
  }, [location.pathname, navigate, scrollToSection]);

  const isActive = useCallback((link: NavLink) => {
    if (location.pathname === '/') {
      return false; // We'll handle this with useScrollSection
    }
    return location.pathname === link.path || 
           (link.path !== '/' && location.pathname.startsWith(link.path));
  }, [location.pathname]);

  return {
    scrollToSection,
    handleNavClick,
    isActive,
    currentPath: location.pathname
  };
}; 