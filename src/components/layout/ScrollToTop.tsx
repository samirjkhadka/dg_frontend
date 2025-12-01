// src/components/layout/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Option 1: Instant scroll to top
    //window.scrollTo(0, 0);

    // Option 2: Smooth scroll
     window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}