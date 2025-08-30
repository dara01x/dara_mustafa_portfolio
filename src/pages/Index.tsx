import { Hero } from "@/components/Hero";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { MatrixRain } from "@/components/MatrixRain";
import { Navigation } from "@/components/Navigation";
import { LazySection } from "@/components/LazySection";
import { PerformanceMonitor } from "@/components/PerformanceMonitor";
import loadable from '@loadable/component';

// Lazy load heavy components
const About = loadable(() => import("@/components/About"), {
  fallback: <div className="w-full h-96 flex items-center justify-center">
    <div className="animate-pulse">
      <div className="w-8 h-8 bg-primary/20 rounded-full animate-bounce"></div>
    </div>
  </div>
});

const Experience = loadable(() => import("@/components/Experience"), {
  fallback: <div className="w-full h-96 flex items-center justify-center">
    <div className="animate-pulse">
      <div className="w-8 h-8 bg-primary/20 rounded-full animate-bounce"></div>
    </div>
  </div>
});

const Projects = loadable(() => import("@/components/Projects"), {
  fallback: <div className="w-full h-96 flex items-center justify-center">
    <div className="animate-pulse">
      <div className="w-8 h-8 bg-primary/20 rounded-full animate-bounce"></div>
    </div>
  </div>
});

const Skills = loadable(() => import("@/components/Skills"), {
  fallback: <div className="w-full h-96 flex items-center justify-center">
    <div className="animate-pulse">
      <div className="w-8 h-8 bg-primary/20 rounded-full animate-bounce"></div>
    </div>
  </div>
});

const Clients = loadable(() => import("@/components/Clients"), {
  fallback: <div className="w-full h-96 flex items-center justify-center">
    <div className="animate-pulse">
      <div className="w-8 h-8 bg-primary/20 rounded-full animate-bounce"></div>
    </div>
  </div>
});

const Contact = loadable(() => import("@/components/Contact"), {
  fallback: <div className="w-full h-96 flex items-center justify-center">
    <div className="animate-pulse">
      <div className="w-8 h-8 bg-primary/20 rounded-full animate-bounce"></div>
    </div>
  </div>
});

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <SEO />
      <StructuredData />
      <PerformanceMonitor />
      
      {/* Global Matrix Rain Background */}
      <MatrixRain />
      
      <Navigation />
      <main className="relative z-[5]">
        {/* Hero loads immediately for better LCP */}
        <Hero />
        
        {/* Lazy load other sections as user scrolls */}
        <LazySection sectionId="about">
          <About />
        </LazySection>
        
        <LazySection sectionId="experience">
          <Experience />
        </LazySection>
        
        <LazySection sectionId="clients">
          <Clients />
        </LazySection>
        
        <LazySection sectionId="projects">
          <Projects />
        </LazySection>
        
        <LazySection sectionId="skills">
          <Skills />
        </LazySection>
        
        <LazySection sectionId="contact">
          <Contact />
        </LazySection>
      </main>
    </div>
  );
};

export default Index;