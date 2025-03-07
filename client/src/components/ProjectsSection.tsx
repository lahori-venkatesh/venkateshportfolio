import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';

const projects = [
  {
    title: "InfyCo - Peer-to-Peer Knowledge Sharing Platform",
    description: "InfyCo connects students with industry professionals for mentorship, career guidance, project assistance, and resume reviews, empowering students to enhance their skills and career growth.",
    images: [
      "images/infyco1.png",
      "images/infyco2.png",
      "images/infyco3.png",
    ],
    category: "Web",
    tech: ["React", "Next.js", "Tailwind CSS", "Radix UI Primitives" , "Zustand State Management" , "date-fns & React Day Picker" , "Recharts for visualizations" , " Netlify Hosting"],
    github: "https://github.com/lahori-venkatesh/infyco-public",
    live: "live link : https://infyco.in/",
  },
  {
    title: "Medivars - Doctor Consultation platform for Healthcare Solutions",
    description: "A cutting-edge Doctor Consultation platform connecting patients with healthcare providers through video consultations, messaging, and appointment management, offering features for patients, doctors, and administrators.",
    images: [
      "images/medivars1.png",
      "images/medivars2.png",
      "images/medivars3.png",
    ],
    category: "Web",
    tech: ["React", "Typescript", "Tailwind CSS", "Vite" , " React Router"],
    github: "https://github.com/lahori-venkatesh/medivars-public",
    live: " https://medivars.netlify.app/",
  },
  {
    title: "Flexora - Connecting Freelancers with Startups & Bussinesses",
    description: "A freelancing platform designed to connect talented freelancers with startups and small businesses. Clients can post projects, review proposals, and communicate in real-time with freelancers.",
    images: [
      "images/flexora1.png",
      "images/flexora2.png",
      "images/flexora3.png",
    ],
    category: "Web",
    tech: ["React", "Typescript", "Tailwind CSS", "Vite " , "Shadcn UI Components" , "React Router" , "Recharts for visualizations" , "Axios"," Sonner Toasts" ],
    github: " https://github.com/lahori-venkatesh/flexora-public",
    live: "https://flexorafree.netlify.app/",
  },
  {
    title: "Personal Portfolio Project for Showcase my skills & Projects",
    description: "A personal portfolio showcasing my skills, projects, and experience in UX design, frontend development, and more. Built with React, TypeScript, and Tailwind CSS for a modern and responsive design..",
    images: [
      "images/portfolio1.png",
      "images/portfolio2.png",
      "images/portfolio3.png",
    ],
    category: "Web",
    tech: ["React", "TypeScript", "Tailwind CSS" , "Vite" , "Typewrite.js" , "Shadcn-ui"],
    github: " https://githuZb.com/lahori-venkatesh/LahoriVenkatesh",
    live: "https://lahorivenkatesh.netlify.app/",
  },
  {
    title: "TheSocialArt - Digital Marketing Agency Landing Page",
    description: "A sleek landing page for TheSocialArt, a digital marketing agency, built with HTML, JavaScript, and Tailwind CSS, offering a responsive, interactive, and engaging user experience.",
    images: [
      "images/socialartist1.png",
      "images/socialartist2.png",
      "images/socialartist3.png",
    ],
    category: "Web",
    tech: ["HTML", "JavaScript", "Tailwind CSS"],
    github: " https://github.com/lahori-venkatesh/freelancing-project-thesocialartist",
    live: "https://thesocialartist.in/",
  },
];

const categories = ["All", "Web", "Mobile"];

function ProjectCarousel({ images }: { images: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  // Update selected index for dots
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div key={index} className="relative flex-[0_0_100%]">
              <img
                src={image}
                alt="Project preview"
                className="object-cover w-full aspect-video"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm z-10"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm z-10"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === selectedIndex 
                ? 'bg-primary' 
                : 'bg-primary/20'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="flex justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="px-4"
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  <ProjectCarousel images={project.images} />
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto space-y-4  sm:space-y-0 sm:flex sm:gap-2">
                      <Button className="w-full sm:w-auto" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className=" h-4 w-6" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" className="w-full sm:w-auto" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className=" h-4 w-6" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}