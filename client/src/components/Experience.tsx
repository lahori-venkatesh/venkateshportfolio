import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin, ExternalLink, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const experience = [
  {
    company: "Freelance Work",
    role: "Frontend Developer & UX Designer",
    duration: "Feb 2024 - Present",
    location: "Remote",
    description: "Working with clients to create beautiful, functional, and user-centered digital experiences.",
    responsibilities: [
      "Designed and Developed responsive Landing Pages",
      "Created user-centered design solutions",
      "Implemented modern web technologies",
      "Collaborated with clients to understand requirements"
    ],
    achievements: [
      "Reduced load time by 30% through optimization",
      "Increased user engagement by 25%",
      "Improved conversion rates by 40%",
      "Received 5-star client feedback consistently"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Figma", "Next.js"],
    featured: true
  },
  {
    company: "Personal Projects",
    role: "Full Stack Developer",
    duration: "Jan 2024 - Present",
    location: "Remote",
    description: "Building innovative web applications and digital solutions to solve real-world problems.",
    responsibilities: [
      "Developed full-stack web applications",
      "Implemented responsive design principles",
      "Integrated third-party APIs and services",
      "Maintained and optimized application performance"
    ],
    achievements: [
      "Built 5+ successful web applications",
      "Achieved 95%+ performance scores",
      "Implemented modern development practices",
      "Created reusable component libraries"
    ],
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "Vite"],
    featured: false
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
                              Featured
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
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
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <h4 className="font-semibold text-sm">Key Responsibilities</h4>
                      </div>
                      <ul className="space-y-2">
                        {job.responsibilities.map((item, i) => (
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
                      <div className="flex items-center gap-2 mb-4">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <h4 className="font-semibold text-sm">Key Achievements</h4>
                      </div>
                      <ul className="space-y-2">
                        {job.achievements.map((item, i) => (
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

                  {/* Technologies */}
                  <div className="mt-6 pt-6 border-t border-muted-foreground/20">
                    <h5 className="text-sm font-medium mb-3">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
