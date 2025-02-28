import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <motion.nav 
        className="container mx-auto flex items-center justify-between h-16 px-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        <a href="/" className="text-xl font-bold flex items-center gap-2">
          <span className="text-primary">Venkatesh</span>
        </a>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button 
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>
      </motion.nav>
    </header>
  );
}
