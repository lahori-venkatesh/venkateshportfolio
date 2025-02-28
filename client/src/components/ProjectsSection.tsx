import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    link: "#"
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization and analytics platform",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    link: "#"
  },
  {
    title: "Social Network App",
    description: "A modern social networking platform with real-time features",
    image: "https://images.unsplash.com/photo-1739514984003-330f7c1d2007",
    link: "#"
  },
  {
    title: "Task Management",
    description: "Collaborative task management system with team features",
    image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
    link: "#"
  },
  {
    title: "Learning Platform",
    description: "Interactive online learning platform with video courses",
    image: "https://images.unsplash.com/photo-1660592868727-858d28c3ba52",
    link: "#"
  },
  {
    title: "Health Tracking App",
    description: "Personal health and fitness tracking application",
    image: "https://images.unsplash.com/photo-1685478237595-f452cb125f27",
    link: "#"
  }
];

export default function ProjectsSection() {
  return (
    <section className="py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Button variant="outline" asChild>
                    <a href={project.link} className="flex items-center gap-2">
                      View Project
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
