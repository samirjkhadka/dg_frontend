import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";

// Layout Components
import Layout from "./components/layout/Layout";
import ErrorBoundary from "./components/common/ErrorBoundary";
import LoadingSpinner from "./components/common/LoadingSpinner";
import ScrollToTop from "./components/layout/ScrollToTop";

// Lazy load page components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const Demo = lazy(() => import("./pages/Demo"));

// Configure React Query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 300000, // 5 minutes
      gcTime: 600000, // 10 minutes
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <Helmet>
            <title>Digi Hub - Innovative Digital Solutions</title>
            <meta
              name="description"
              content="Digi Hub - Transforming ideas into innovative digital solutions. Specializing in Fintech, Sports tech, Ecommerce, Agro Tech, and Hospitality & Tourism products."
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </Helmet>
          <Router>
            <Layout>
              <AnimatePresence mode="wait">
                <Suspense fallback={<LoadingSpinner />}>
                  <ScrollToTop />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route
                      path="/services/:serviceId"
                      element={<ServiceDetail />}
                    />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/portfolio/:id" element={<ProjectDetail />} />
                    <Route path="/demo" element={<Demo />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </Suspense>
              </AnimatePresence>
            </Layout>
          </Router>
        </HelmetProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
