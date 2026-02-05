import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin, ExternalLink, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const experience = [
  {
    company: "TinySlash",
    role: "Software Engineer Intern",
    duration: "Oct 2025 - Present",
    location: "Remote",
    description: "Contributing to a comprehensive URL Shortening & QR Code Platform, focusing on frontend performance, security validation, and user experience enhancements.",
    projects: [
      {
        name: "URL Shortening & QR Code Platform",
        duration: "Oct 2025 - Present",
        role: "Software Engineer Intern",
        liveUrl: "https://tinyslash.com/",
        description: "Built and optimized the frontend for a dynamic QR code and URL management platform, ensuring high performance, security compliance, and seamless user flows.",
        responsibilities: [
          "Built QR code generation and management frontend used for creating dynamic QR codes mapped to platform-controlled short URLs",
          "Implemented a pre-creation URL pre-check engine on the frontend, validating protocol, domain format, and unsafe patterns",
          "Integrated frontend with backend validation APIs to deliver real-time URL safety feedback (<300ms response time)",
          "Improved the QR creation flow and form validation UX, lowering user configuration errors by ~25%",
          "Optimized frontend logic for high-frequency link generation scenarios, handling 100+ URL requests per session without UI lag",
          "Collaborated with backend and product teams to align frontend behavior with security and compliance requirements",
          "Refactored reusable UI components for link creation and QR preview, reducing duplicate frontend code by ~20%"
        ],
        achievements: [
          "Supported 1000+ link creations during internal testing",
          "Reduced invalid URL creation attempts by ~35% via pre-check engine",
          "Delivered real-time URL safety feedback with <300ms response time",
          "Lowered user configuration errors by ~25% during QA and staging tests",
          "Optimized logic to handle 100+ URL requests per session without UI lag",
          "Reduced duplicate frontend code by ~20%"
        ],
        technologies: ["React.js", "TypeScript", "Java", "Tailwind CSS", "HTML", "CSS", "JavaScript", "GitHub CI/CD", "VS Code"]
      }
    ],
    featured: true
  },
  {
    company: "The Social Artist",
    role: "Frontend Developer",
    duration: "Apr 2025 - Sep 2025",
    location: "Jaipur, India",
    description: "Leading frontend development projects for marketing solutions with focus on performance optimization and user experience.",
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
      }
    ],
    featured: true
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base px-2">
            My professional journey in creating innovative digital solutions and delivering exceptional user experiences
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className={`overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg ${job.featured ? 'ring-2 ring-primary/20' : ''
                }`}>
                <CardHeader className="pb-3 md:pb-4 p-4 md:p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 md:gap-4 w-full">
                      <div className={`p-2 md:p-3 rounded-full ${job.featured ? 'bg-gradient-to-br from-primary to-primary/80' : 'bg-primary/10'} text-white shadow-lg flex-shrink-0`}>
                        <Briefcase className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start flex-col sm:flex-row sm:items-center gap-2 mb-2">
                          <CardTitle className="text-lg md:text-xl leading-tight">{job.role}</CardTitle>
                          {job.featured && job.duration.toLowerCase().includes('present') && (
                            <div className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium flex-shrink-0">
                              <Star className="h-3 w-3" />
                              Current Role
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs md:text-sm text-muted-foreground mb-2">
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
                        <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                          {job.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0 p-4 md:p-6">
                  {/* Projects */}
                  <div className="space-y-6 md:space-y-8">
                    {job.projects?.map((project, projectIndex) => (
                      <motion.div
                        key={projectIndex}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: projectIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="border-l-2 border-primary/20 pl-4 md:pl-6 relative"
                      >
                        <div className="absolute -left-2 top-0 w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full"></div>

                        <div className="mb-3 md:mb-4">
                          <div className="flex items-start flex-col gap-2 mb-2">
                            <h4 className="font-semibold text-base md:text-lg text-foreground leading-tight">{project.name}</h4>
                            <div className="flex items-center gap-2 flex-wrap">
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
                          </div>
                          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                            {project.description}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                          <div>
                            <div className="flex items-center gap-2 mb-2 md:mb-3">
                              <TrendingUp className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                              <h5 className="font-semibold text-xs md:text-sm">Key Responsibilities</h5>
                            </div>
                            <ul className="space-y-1.5 md:space-y-2">
                              {project.responsibilities.map((item, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                                  viewport={{ once: true }}
                                  className="flex items-start gap-2 text-xs md:text-sm"
                                >
                                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-primary mt-1.5 md:mt-2 flex-shrink-0" />
                                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-4 md:mt-0">
                            <div className="flex items-center gap-2 mb-2 md:mb-3">
                              <Star className="h-3 w-3 md:h-4 md:w-4 text-yellow-500" />
                              <h5 className="font-semibold text-xs md:text-sm">Key Achievements</h5>
                            </div>
                            <ul className="space-y-1.5 md:space-y-2">
                              {project.achievements.map((item, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                                  viewport={{ once: true }}
                                  className="flex items-start gap-2 text-xs md:text-sm"
                                >
                                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-yellow-500 mt-1.5 md:mt-2 flex-shrink-0" />
                                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Project Technologies */}
                        <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-muted-foreground/10">
                          <h6 className="text-xs font-medium mb-2 text-muted-foreground">Technologies Used</h6>
                          <div className="flex flex-wrap gap-1 md:gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-1.5 py-0.5 md:px-2 md:py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
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
          className="text-center mt-8 md:mt-12"
        >
          <p className="text-muted-foreground mb-4 text-sm md:text-base px-2">
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
