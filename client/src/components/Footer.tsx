import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const quickLinks = [
  { name: "About", href: "#home" },
  { name: "Projects", href: "#projectssection" },
  { name: "Experience", href: "#experience" },
];

export default function Footer() {
  const scrollToSection = (sectionId: string, event: React.MouseEvent) => {
    event.preventDefault();
    const id = sectionId.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const offset = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: offset, behavior: "smooth" });
    } else {
      console.warn(`Section with ID "${id}" not found.`);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-background to-muted py-12">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Contact Section */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Contact</h3>
            <Button
              variant="link"
              className="h-auto p-0 text-muted-foreground hover:text-primary transition-colors"
              asChild
            >
              <a href="mailto:lahorivenkatesh709@gmail.com" className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                lahorivenkatesh709@gmail.com
              </a>
            </Button>
          </motion.div>

          {/* Social Section */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Connect</h3>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-accent hover:text-primary transition-colors"
                asChild
                aria-label="GitHub Profile"
              >
                <a href="https://github.com/lahori-venkatesh" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-accent hover:text-primary transition-colors"
                asChild
                aria-label="LinkedIn Profile"
              >
                <a href="https://www.linkedin.com/in/venkatesh-lahori/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-accent hover:text-primary transition-colors"
                asChild
                aria-label="Twitter Profile"
              >
                <a href="https://x.com/NIT_Venkatesh" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-muted-foreground hover:text-primary transition-colors"
                    onClick={(e) => scrollToSection(link.href, e)}
                  >
                    {link.name}
                  </Button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* About Me Section */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <h3 className="text-xl font-semibold mb-4 text-foreground">About Me</h3>
            <p className="text-sm text-muted-foreground">
              I’m Venkatesh Lahori, a passionate developer building innovative web solutions. Explore my projects and let’s connect to create something amazing together.
            </p>
          </motion.div>
        </motion.div>

        {/* Copyright Notice */}
        <div className="mt-12 pt-8 border-t border-muted-foreground/20 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Lahori Venkatesh. All rights reserved.
        </div>
      </div>
    </footer>
  );
}