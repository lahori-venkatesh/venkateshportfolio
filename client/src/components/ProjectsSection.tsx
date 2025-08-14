import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, ChevronLeft, ChevronRight, Star, Eye } from "lucide-react";

const projects = [
  {
    title: "Medivars - Doctor Consultation platform for Healthcare Solutions",
    description: "A cutting-edge Doctor Consultation platform connecting patients with healthcare providers through video consultations, messaging, and appointment management, offering features for patients, doctors, and administrators.",
    image: "images/medivars1.png",
    category: "Web",
    tech: ["React", "Typescript", "Tailwind CSS", "Vite" , " React Router"],
    github: "https://github.com/lahori-venkatesh/medivars-public",
    live: " https://medivars.netlify.app/",
    featured: true,
  },
  {
    title: "pdfCircle – PDF & Image Processing Web Application",
    description: "Engineered a secure, offline-first web platform achieving an 85% Lighthouse score by leveraging React 18, TypeScript, and Vite, ensuring 100% client-side processing for maximum data privacy. Developed 17+ PDF tools and advanced image utilities with drag-and-drop functionality, boosting user retention by 35%.",
    image: "images/pdfcircle.png",
    category: "Web",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "SEO", "Google AdSense"],
    github: "https://github.com/lahori-venkatesh/pdfcircle",
    live: "https://pdfcircle.com",
    featured: true,
    duration: "June 2023 - Jan 2024",
    achievements: [
      "Achieved 85% Lighthouse score with offline-first architecture",
      "Boosted user retention by 35% through comprehensive tool suite",
      "Reduced perceived load times by 50% and improved processing speeds 3×",
      "Integrated multilingual support (English, Hindi, Kannada, Tamil, Telugu)",
      "Secured Google AdSense approval and implemented SEO best practices",
      "Architected responsive platform with code-splitting, lazy loading, caching strategies"
    ]
  },
];

const categories = ["All", "Featured", "Web", "Mobile"];

export default function Projects() {

  return (
    <section id="projects" className="py-16 bg-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work showcasing innovative solutions and creative design approaches
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      <Star className="h-3 w-3" />
                      Featured
                    </div>
                  </div>
                )}
                
                {/* Single Image Display */}
                <div className="relative group">
                  <div className="overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt="Project preview"
                      className="object-cover w-full aspect-video transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-auto space-y-3 sm:space-y-0 sm:flex sm:gap-3">
                    <Button className="w-full sm:w-auto group/btn" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Eye className="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full sm:w-auto group/btn" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {projects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}