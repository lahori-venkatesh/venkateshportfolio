import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin, ExternalLink, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const experience = [
  {
    company: "The Social Artist",
    role: "Full-Stack Developer",
    duration: "Apr 2025 - Present",
    location: "Jaipur, India",
    description: "Leading full-stack development projects for marketing solutions and resume building platforms with focus on performance optimization and user experience.",
    projects: [
      {
        name: "Marketing Agency Website",
        duration: "Apr - Jul 2025",
        role: "Frontend Developer",
        liveUrl: "https://thesocialartist.in",
        description: "Delivered a modern, responsive, SEO-optimized website that improved user engagement by 30% and strengthened the agency's online presence.",
        responsibilities: [
          "Implemented mobile-first layouts with cross-browser compatibility",
          "Developed interactive UI components with dynamic portfolio filtering",
          "Created animated navigation and infinite scrolling testimonials",
          "Ensured WCAG-compliant accessibility for inclusive user experience"
        ],
        achievements: [
          "Improved user engagement by 30%",
          "Achieved Core Web Vitals compliance",
          "Enhanced search rankings through structured data integration",
          "Optimized assets for better performance"
        ],
        technologies: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "EmailJS", "Calendly", "GitHub CI/CD", "VS Code"]
      },
      {
        name: "FixItCV - Resume Builder Platform",
        duration: "Jul 2025 - Present",
        role: "Full-Stack Developer",
        liveUrl: "https://fixitcv.com",
        description: "Leading full-stack development of a dynamic resume builder with real-time previews, customizable templates, and PDF generation capabilities.",
        responsibilities: [
          "Developing full-stack application with React frontend and backend integration",
          "Implementing user authentication and authorization with Clerk",
          "Building PDF generation functionality using Puppeteer",
          "Managing database operations and user data with Supabase",
          "Coordinating development workflow using Git and GitHub"
        ],
        achievements: [
          "Built complete full-stack resume builder platform",
          "Implemented secure user authentication and data management",
          "Created high-quality PDF generation with custom templates",
          "Optimized application performance with modern development tools",
          "Established efficient development workflow and version control"
        ],
        technologies: ["React", "TypeScript", "Vite", "Git", "GitHub", "VS Code", "Supabase", "Clerk Auth", "Puppeteer"]
      }
    ],
    featured: true
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in creating innovative digital solutions and delivering exceptional user experiences
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className={`overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg ${
                job.featured ? 'ring-2 ring-primary/20' : ''
              }`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full ${job.featured ? 'bg-gradient-to-br from-primary to-primary/80' : 'bg-primary/10'} text-white shadow-lg`}>
                        <Briefcase className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-xl">{job.role}</CardTitle>
                          {job.featured && (
                            <div className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                              <Star className="h-3 w-3" />
                              Current Role
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1 font-medium text-primary">
                            <Briefcase className="h-3 w-3" />
                            <span>{job.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{job.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {job.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {/* Projects */}
                  <div className="space-y-8">
                    {job.projects?.map((project, projectIndex) => (
                      <motion.div
                        key={projectIndex}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: projectIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="border-l-2 border-primary/20 pl-6 relative"
                      >
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                        
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <h4 className="font-semibold text-lg text-foreground">{project.name}</h4>
                            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                              {project.duration}
                            </span>
                            {project.role && (
                              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded font-medium">
                                {project.role}
                              </span>
                            )}
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs bg-green-100 text-green-700 hover:bg-green-200 px-2 py-1 rounded font-medium transition-colors duration-200"
                              >
                                <ExternalLink className="h-3 w-3" />
                                Live Site
                              </a>
                            )}
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                            {project.description}
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <TrendingUp className="h-4 w-4 text-primary" />
                              <h5 className="font-semibold text-sm">Key Responsibilities</h5>
                            </div>
                            <ul className="space-y-2">
                              {project.responsibilities.map((item, i) => (
                                <motion.li 
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                                  viewport={{ once: true }}
                                  className="flex items-start gap-2 text-sm"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                  <span className="text-muted-foreground">{item}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <Star className="h-4 w-4 text-yellow-500" />
                              <h5 className="font-semibold text-sm">Key Achievements</h5>
                            </div>
                            <ul className="space-y-2">
                              {project.achievements.map((item, i) => (
                                <motion.li 
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                                  viewport={{ once: true }}
                                  className="flex items-start gap-2 text-sm"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0" />
                                  <span className="text-muted-foreground">{item}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Project Technologies */}
                        <div className="mt-4 pt-4 border-t border-muted-foreground/10">
                          <h6 className="text-xs font-medium mb-2 text-muted-foreground">Technologies Used</h6>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Always looking for new opportunities to grow and create amazing experiences!
          </p>
          <Button asChild>
            <a href="#contact">
              Let's Work Together
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
