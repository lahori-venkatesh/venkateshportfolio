import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted py-2">
      <div className="container px-4 ml-24 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div>
            <h3 className="text-lg font-semibold mb-4 ">Contact</h3>
            <Button variant="link" className="h-auto p-0 text-muted-foreground">
              <Mail className="h-4 w-4 mr-2" />
             lahorivenkatesh709@gmail.com
            </Button>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/lahori-venkatesh" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/venkatesh-lahori/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://x.com/NIT_Venkatesh" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="h-auto p-0 text-muted-foreground">
                  About
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-muted-foreground">
                  Projects
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-muted-foreground">
                  Case Studies
                </Button>
              </li>
            </ul>
          </div>

          
        </motion.div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Venkatesh. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
