import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <Button variant="link" className="h-auto p-0 text-muted-foreground">
              <Mail className="h-4 w-4 mr-2" />
              contact@venkatesh.dev
            </Button>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
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

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to my newsletter for updates and insights
            </p>
            <Button>Subscribe</Button>
          </div>
        </motion.div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Venkatesh. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
