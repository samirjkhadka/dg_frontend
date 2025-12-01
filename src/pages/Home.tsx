import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/home/Carousel";
import { mockHeroData, mockHeroStats } from "@/data/mockHomeData";
import ClientMarquee from "@/components/common/ClientMarquee";
import WhyChoose from "@/components/home/WhyChoose";
import Features from "@/components/home/Features";
import FloatingDemoButton from "@/components/layout/FloatingDemoButton";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Contact from "@/components/home/Contact";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Digi Hub - Transforming Capital Markets</title>
        <meta
          name="description"
          content="Digi Hub delivers cutting-edge technology solutions for capital markets — secure, efficient, and innovative."
        />
      </Helmet>

      {/* Main Wrapper */}
      <div className="min-h-screen bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {/* Hero Section */}

        <section id="home">
          <HeroSection
            heroData={mockHeroData.data}
            heroStats={mockHeroStats.data}
          />
        </section>
        <FloatingDemoButton />
        <ClientMarquee />
        <About />

        <WhyChoose />
        <Services />

        <Features />

        {/* <Tutorials /> */}
        {/* <TestimonialsSection /> */}

        <Contact />
      </div>
    </>
  );
};

export default Home;
