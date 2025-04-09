import { useState, useEffect, useCallback, useRef } from 'react';

export const useScrollSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState('');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionElementsRef = useRef<Map<string, HTMLElement>>(new Map());

  // Create observer only once
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -35% 0px',
        threshold: 0.1,
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Observe sections
  useEffect(() => {
    const observer = observerRef.current;
    if (!observer) return;

    // Clear previous elements
    sectionElementsRef.current.clear();
    
    // Observe new elements
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        sectionElementsRef.current.set(id, element);
        observer.observe(element);
      }
    });

    return () => {
      // Cleanup is handled by the first useEffect
    };
  }, [sectionIds]);

  // Helper function to manually set active section
  const setActiveSectionManually = useCallback((sectionId: string) => {
    if (sectionIds.includes(sectionId)) {
      setActiveSection(sectionId);
    }
  }, [sectionIds]);

  return { activeSection, setActiveSectionManually };
}; 