import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, GraduationCap, Trophy } from "lucide-react";

const achievements = [
  {
    type: "award",
    title: "2024 Aspire Leaders Program Completion",
    description: "Successfully completed 30 hours of coursework in the Aspire Leaders Program.",
    date: "March 2022",
    icon: Trophy
  },
  {
    type: "certification",
    title: "UX Kickstarter Workshop Completion",
    description: "Successfully completed the UX Kickstarter Workshop",
    date: "November 20224",
    icon: GraduationCap
  },
  {
    type: "certification",
    title: "Delta Full Stack Web Development",
    description: "Successfully completed the Delta Full Stack Web Development course",
    date: "Feb 2024",
    icon: GraduationCap
  },
  // Add more achievements
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-full bg-primary/10">
                        <achievement.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{achievement.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {achievement.date}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
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