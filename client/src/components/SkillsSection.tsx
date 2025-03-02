import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Server, Layout, Smartphone, Brush } from "lucide-react";

const skills = [
  {
    name: "Frontend Development",
    description: "Building responsive web applications with React and TypeScript",
    icon: Code2,
    technologies: ["JavaScript", "React", "TypeScript", "HTML/CSS"]
  },
  {
    name: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces",
    icon: Palette,
    technologies: ["Figma", "Adobe XD", "User Research"]
  },
  {
    name: "Backend Development",
    description: "Developing scalable server-side applications",
    icon: Server,
    technologies: ["Node.js", "Express", "PostgreSQL"]
  },
  {
    name: "Web Design",
    description: "Crafting modern and responsive layouts",
    icon: Layout,
    technologies: ["Tailwind CSS", "SASS", "Bootstrap"]
  },
  {
    name: "Mobile Development",
    description: "Building cross-platform mobile applications",
    icon: Smartphone,
    technologies: ["React Native", "Flutter"]
  },
  {
    name: "Creative Design",
    description: "Creating visual assets and branding materials",
    icon: Brush,
    technologies: ["Photoshop", "Illustrator"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Combining technical expertise with creative problem-solving to deliver exceptional results
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-full bg-primary/10">
                        <skill.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {skill.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
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