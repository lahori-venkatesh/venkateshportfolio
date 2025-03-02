import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import Experience from "@/components/Experience";
import ProjectsSection from "@/components/ProjectsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import Achievements from "@/components/Achievements";
import TestimonialsSection from "@/components/TestimonialsSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Animated Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      />
      <Header />
      <main>
        {/* 1️⃣ Hero Section (Introduction) */}
        <section id="home">
          <HeroSection />
        </section>

        {/* 2️⃣ Skills (Capabilities) */}
        <section id="skillssection">
          <SkillsSection />
        </section>

        {/* 3️⃣ Experience (Work History) */}
        <section id="experience">
          <Experience />
        </section>

        {/* 4️⃣ Projects (Portfolio Showcase) */}
        <section id="projectssection">
          <ProjectsSection />
        </section>

        {/* 5️⃣ Case Studies (Problem-Solving) */}
        <section id="casestudiessection">
          <CaseStudiesSection />
        </section>

        {/* 6️⃣ Achievements (Awards & Recognitions) */}
        <section id="achievements">
          <Achievements />
        </section>

        {/* 7️⃣ Testimonials (Social Proof) */}
        <section id="testimonialssection">
          <TestimonialsSection />
        </section>

        {/* 8️⃣ Contact (Final Call to Action) */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* 9️⃣ Footer (Links & Socials) */}
      <Footer />
    </div>
  );
}
