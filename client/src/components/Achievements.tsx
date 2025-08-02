import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, GraduationCap, Trophy, Star, Calendar, ExternalLink } from "lucide-react";

const achievements = [
  {
    type: "award",
    title: "2024 Aspire Leaders Program Completion",
    description: "Successfully completed 30 hours of coursework in the Aspire Leaders Program, demonstrating leadership and professional development skills.",
    date: "March 2024",
    icon: Trophy,
    color: "from-yellow-500 to-orange-500",
    badge: "Leadership",
    link: "#"
  },
  {
    type: "certification",
    title: "UX Kickstarter Workshop Completion",
    description: "Successfully completed the UX Kickstarter Workshop, gaining hands-on experience in user research, wireframing, and prototyping.",
    date: "November 2024",
    icon: GraduationCap,
    color: "from-blue-500 to-purple-500",
    badge: "UX Design",
    link: "#"
  },
  {
    type: "certification",
    title: "Delta Full Stack Web Development",
    description: "Successfully completed the Delta Full Stack Web Development course, mastering modern web technologies and best practices.",
    date: "February 2024",
    icon: GraduationCap,
    color: "from-green-500 to-teal-500",
    badge: "Web Development",
    link: "#"
  },
  {
    type: "award",
    title: "Best UI/UX Design Project",
    description: "Recognized for outstanding design work and innovative user experience solutions in academic projects.",
    date: "December 2023",
    icon: Award,
    color: "from-pink-500 to-rose-500",
    badge: "Design Excellence",
    link: "#"
  },
  {
    type: "certification",
    title: "React & TypeScript Mastery",
    description: "Advanced certification in React development with TypeScript, covering modern patterns and best practices.",
    date: "January 2024",
    icon: Star,
    color: "from-indigo-500 to-blue-500",
    badge: "Frontend",
    link: "#"
  },
  {
    type: "award",
    title: "Innovation in Digital Solutions",
    description: "Awarded for creating innovative digital solutions that solve real-world problems effectively.",
    date: "October 2023",
    icon: Trophy,
    color: "from-emerald-500 to-green-500",
    badge: "Innovation",
    link: "#"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Achievements & Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognitions and certifications that showcase my commitment to continuous learning and professional growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden relative">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground shadow-sm">
                    {achievement.badge}
                  </span>
                </div>

                <CardHeader className="pb-4 pr-20">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full bg-gradient-to-br ${achievement.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <achievement.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors duration-300">
                        {achievement.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{achievement.date}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {achievement.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground/60 capitalize">
                      {achievement.type}
                    </span>
                    <a 
                      href={achievement.link} 
                      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300 group/link"
                    >
                      <ExternalLink className="h-4 w-4 text-primary group-hover/link:scale-110 transition-transform duration-300" />
                    </a>
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
            Always learning and growing. Let's achieve great things together!
          </p>
          <div className="flex justify-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Trophy className="h-4 w-4 text-yellow-500" />
              <span>{achievements.filter(a => a.type === 'award').length} Awards</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <GraduationCap className="h-4 w-4 text-blue-500" />
              <span>{achievements.filter(a => a.type === 'certification').length} Certifications</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}