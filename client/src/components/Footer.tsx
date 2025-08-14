import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter, Phone, MapPin, Download, ExternalLink, Heart, Coffee } from "lucide-react";

const quickLinks = [
  { name: "About", href: "#home" },
  { name: "Skills", href: "#skillssection" },
  { name: "Projects", href: "#projectssection" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/lahori-venkatesh",
    icon: Github,
    color: "hover:text-gray-800 dark:hover:text-gray-200"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/venkatesh-lahori/",
    icon: Linkedin,
    color: "hover:text-blue-600"
  },
  {
    name: "Twitter",
    href: "https://x.com/NIT_Venkatesh",
    icon: Twitter,
    color: "hover:text-blue-400"
  }
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "lahorivenkatesh709@gmail.com",
    href: "mailto:lahorivenkatesh709@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9182928956",
    href: "tel:+9182928956"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "NIT Jaipur, Rajasthan, India",
    href: "#"
  }
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
    <footer className="bg-gradient-to-b from-background via-background to-muted/50 py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Contact Section */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              Contact
            </h3>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <info.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">{info.value}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={(e) => scrollToSection(link.href, e)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links Section */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-foreground">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
                >
                  <social.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* About Me Section */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-foreground">About Me</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I'm Venkatesh Lahori, a passionate UX Designer and Frontend Developer creating innovative digital experiences. Let's collaborate and build something amazing together.
            </p>
            <Button size="sm" className="gap-2" asChild>
              <a href="https://drive.google.com/file/d/1N6fx_pSZfJQXFmN9csaU9pCs2ePmvMla/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Copyright Notice */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-muted-foreground/20 text-center"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lahori Venkatesh. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2 flex items-center justify-center gap-1">
            Built with <Heart className="h-3 w-3 text-red-500" /> and <Coffee className="h-3 w-3 text-amber-500" /> using React, TypeScript & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}