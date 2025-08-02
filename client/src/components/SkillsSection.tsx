import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code2, 
  Palette, 
  Server, 
  Layout, 
  Smartphone, 
  Brush, 
  Zap,
  TrendingUp,
  Star
} from "lucide-react";

const skillCategories = [
  {
    category: "Frontend Development",
    icon: Code2,
    description: "Modern web development with cutting-edge technologies",
    skills: [
      { name: "React", proficiency: 95, level: "Expert" },
      { name: "TypeScript", proficiency: 90, level: "Advanced" },
      { name: "JavaScript", proficiency: 95, level: "Expert" },
      { name: "Next.js", proficiency: 85, level: "Advanced" },
      { name: "Tailwind CSS", proficiency: 90, level: "Expert" },
      { name: "HTML/CSS", proficiency: 95, level: "Expert" },
      { name: "Vite", proficiency: 80, level: "Advanced" },
      { name: "Shadcn UI", proficiency: 85, level: "Advanced" }
    ]
  },
  {
    category: "UI/UX Design",
    icon: Palette,
    description: "Creating intuitive and beautiful user experiences",
    skills: [
      { name: "Figma", proficiency: 90, level: "Expert" },
      { name: "Adobe XD", proficiency: 85, level: "Advanced" },
      { name: "User Research", proficiency: 80, level: "Advanced" },
      { name: "Wireframing", proficiency: 90, level: "Expert" },
      { name: "Prototyping", proficiency: 85, level: "Advanced" },
      { name: "UI Design", proficiency: 90, level: "Expert" },
      { name: "Interaction Design", proficiency: 85, level: "Advanced" },
      { name: "Responsive Design", proficiency: 95, level: "Expert" },
      { name: "Design Systems", proficiency: 80, level: "Advanced" }
    ]
  },
  {
    category: "Creative Design",
    icon: Brush,
    description: "Visual design and content creation expertise",
    skills: [
      { name: "Photoshop", proficiency: 85, level: "Advanced" },
      { name: "Illustrator", proficiency: 80, level: "Advanced" },
      { name: "Canva", proficiency: 90, level: "Expert" },
      { name: "Premiere Pro", proficiency: 75, level: "Intermediate" },
      { name: "Content Creation", proficiency: 85, level: "Advanced" }
    ]
  }
];

const getProficiencyColor = (proficiency: number) => {
  if (proficiency >= 90) return "bg-emerald-500";
  if (proficiency >= 80) return "bg-blue-500";
  if (proficiency >= 70) return "bg-yellow-500";
  return "bg-gray-500";
};

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert": return "bg-emerald-100 text-emerald-800 border-emerald-200";
    case "Advanced": return "bg-blue-100 text-blue-800 border-blue-200";
    case "Intermediate": return "bg-yellow-100 text-yellow-800 border-yellow-200";
    default: return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Combining technical expertise with creative problem-solving to deliver exceptional results. 
            Each skill represents years of hands-on experience and continuous learning.
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 border-b">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <category.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold text-foreground">
                        {category.category}
                      </CardTitle>
                      <p className="text-muted-foreground mt-1">
                        {category.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <TrendingUp className="h-4 w-4" />
                      <span>{category.skills.length} skills</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="grid gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="group/skill"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <h4 className="font-semibold text-foreground group-hover/skill:text-primary transition-colors duration-300">
                              {skill.name}
                            </h4>
                            <Badge 
                              variant="outline" 
                              className={`text-xs font-medium ${getLevelColor(skill.level)}`}
                            >
                              {skill.level}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Star className="h-3 w-3 fill-current" />
                            <span>{skill.proficiency}%</span>
                          </div>
                        </div>
                        
                        <div className="relative">
                          <Progress 
                            value={skill.proficiency} 
                            className="h-2 bg-muted"
                          />
                          <motion.div
                            className={`absolute top-0 left-0 h-2 rounded-full ${getProficiencyColor(skill.proficiency)}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 + 0.5 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}
                  </div>
                  <p className="text-muted-foreground">Total Skills</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {skillCategories.length}
                  </div>
                  <p className="text-muted-foreground">Categories</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    5+ Years
                  </div>
                  <p className="text-muted-foreground">Experience</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}