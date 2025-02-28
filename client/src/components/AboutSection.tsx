import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-muted-foreground">
              I'm a passionate full-stack developer with over 5 years of experience in
              creating web applications. My journey in tech started with a curiosity
              about how things work on the internet, which led me to pursue a career
              in web development.
            </p>
            <p className="text-muted-foreground">
              I specialize in building scalable web applications using modern
              technologies and best practices. My approach combines technical
              expertise with a keen eye for design to create engaging user experiences.
            </p>
            <Button className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-primary/10 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="bg-primary/10 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="bg-primary/10 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="bg-primary/10 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
