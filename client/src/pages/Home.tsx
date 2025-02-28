import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
        <CaseStudiesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
