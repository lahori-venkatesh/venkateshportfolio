import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Server, Database } from "lucide-react";

const skills = [
  {
    title: "Frontend Development",
    icon: <Code2 className="h-6 w-6" />,
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    title: "UI/UX Design",
    icon: <Palette className="h-6 w-6" />,
    items: ["Figma", "Adobe XD", "User Research", "Prototyping"]
  },
  {
    title: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    items: ["Node.js", "Express", "Python", "Java"]
  },
  {
    title: "Database",
    icon: <Database className="h-6 w-6" />,
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
  }
];

export default function SkillsSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With a diverse skill set and years of experience, I bring ideas to life through code
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">{skill.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{skill.title}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
