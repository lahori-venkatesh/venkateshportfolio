import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


import { 
  Code2, 
  Palette, 
  Brush, 
  Zap,
  TrendingUp,
  GitBranch
} from "lucide-react";

const skillCategories = [
  {
    category: "Full-Stack Development",
    icon: Code2,
    description: "End-to-end web development with modern technologies",
    skills: [
      { name: "React", proficiency: 75 },
      { name: "TypeScript", proficiency: 65 },
      { name: "JavaScript", proficiency: 78 },
      { name: "Java with DSA", proficiency: 70 },
      { name: "Node.js", proficiency: 72 },
      { name: "Express.js", proficiency: 68 },
      { name: "MongoDB", proficiency: 65 },
      { name: "PostgreSQL", proficiency: 60 },
      { name: "Tailwind CSS", proficiency: 75 },
      { name: "HTML/CSS", proficiency: 78 },
      { name: "REST APIs", proficiency: 70 },
      { name: "GraphQL", proficiency: 55 }
    ]
  },
  {
    category: "DevOps & Version Control",
    icon: GitBranch,
    description: "Development workflow and deployment automation",
    skills: [
      { name: "Git", proficiency: 75 },
      { name: "GitHub", proficiency: 72 },
      { name: "CI/CD", proficiency: 60 },
      { name: "Docker", proficiency: 55 },
      { name: "AWS", proficiency: 50 },
      { name: "Vercel", proficiency: 65 }
    ]
  },
  {
    category: "UI/UX Design",
    icon: Palette,
    description: "Creating intuitive and beautiful user experiences",
    skills: [
      { name: "Figma", proficiency: 78 },
      { name: "Adobe XD", proficiency: 65 },
      { name: "User Research", proficiency: 60 },
      { name: "Wireframing", proficiency: 75 },
      { name: "Prototyping", proficiency: 70 },
      { name: "UI Design", proficiency: 75 },
      { name: "Interaction Design", proficiency: 68 },
      { name: "Responsive Design", proficiency: 78 },
      { name: "Design Systems", proficiency: 65 }
    ]
  },
  {
    category: "Creative Design",
    icon: Brush,
    description: "Visual design and content creation expertise",
    skills: [
      { name: "Photoshop", proficiency: 70 },
      { name: "Illustrator", proficiency: 65 },
      { name: "Canva", proficiency: 75 },
      { name: "Premiere Pro", proficiency: 60 },
      { name: "Content Creation", proficiency: 72 }
    ]
  }
];

const getProficiencyColor = (proficiency: number) => {
  if (proficiency >= 75) return "bg-emerald-500 border-emerald-500";
  if (proficiency >= 65) return "bg-blue-500 border-blue-500";
  if (proficiency >= 55) return "bg-yellow-500 border-yellow-500";
  return "bg-gray-500 border-gray-500";
};



export default function Skills() {
  return (
    <section id="skills" className="py-12 md:py-20 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
            <Zap className="h-6 w-6 md:h-8 md:w-8 text-primary" />
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight">
              Skills & Expertise
            </h2>
          </div>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-2">
            Combining technical expertise with creative problem-solving to deliver exceptional results. 
            Each skill represents years of hands-on experience and continuous learning.
          </p>
        </motion.div>

        <div className="space-y-6 md:space-y-12">
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
                <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 border-b p-4 md:p-6">
                  <div className="flex items-start md:items-center gap-3 md:gap-4">
                    <div className="p-2 md:p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                      <category.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg md:text-2xl font-bold text-foreground leading-tight">
                        {category.category}
                      </CardTitle>
                      <p className="text-muted-foreground mt-1 text-sm md:text-base leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center gap-1 text-xs md:text-sm text-muted-foreground flex-shrink-0">
                      <TrendingUp className="h-3 w-3 md:h-4 md:w-4" />
                      <span>{category.skills.length} skills</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-4 md:p-6">
                  <div className="text-left">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="group/skill inline-block m-0.5 md:m-1.5"
                      >
                        <div className={`
                          relative px-2 py-1 md:px-4 md:py-2 rounded-full border md:border-2 transition-all duration-300 cursor-pointer
                          ${getProficiencyColor(skill.proficiency)} bg-opacity-10 border-opacity-20
                          hover:bg-opacity-20 hover:border-opacity-40 hover:shadow-lg
                        `}>
                          <div className="flex items-center gap-1 md:gap-2">
                            <span className="font-medium text-xs md:text-sm text-foreground group-hover/skill:text-primary transition-colors duration-300 leading-tight">
                              {skill.name}
                            </span>
                            <div className={`
                              px-1 py-0.5 md:px-2 rounded-full text-xs font-semibold
                              ${getProficiencyColor(skill.proficiency)} bg-opacity-20 text-foreground
                            `}>
                              {skill.proficiency}%
                            </div>
                          </div>
                          
                          {/* Animated background fill */}
                          <motion.div
                            className={`absolute inset-0 rounded-full ${getProficiencyColor(skill.proficiency)} opacity-5`}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.6, delay: skillIndex * 0.05 + 0.2 }}
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

        
      </div>
    </section>
  );
}