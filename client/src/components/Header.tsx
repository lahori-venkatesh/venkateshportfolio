import { Button } from "@/components/ui/button";
import { Github, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Testimonials", href: "#testimonials" }
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <motion.nav 
        className="container mx-auto flex items-center justify-between h-16 px-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        <Link href="/" className="text-xl font-bold flex items-center gap-2">
          <span className="text-primary">Venkatesh</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button 
            variant="outline"
            size="sm"
            className="hidden md:flex items-center gap-2"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b"
          >
            <div className="container px-4 py-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                </motion.button>
              ))}
              <Button 
                variant="outline"
                size="sm"
                className="w-full mt-4 flex items-center justify-center gap-2"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}