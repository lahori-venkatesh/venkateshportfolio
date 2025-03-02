import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, GraduationCap, Briefcase, Rocket, Heart, Star } from "lucide-react";

const timeline = [
  {
    year: "2015",
    title: "Started Coding Journey",
    description: "Discovered my passion for web development and began learning HTML, CSS, and JavaScript.",
    icon: Code2,
    color: "from-blue-500/20 to-purple-500/20",
    illustration: (
      <div className="relative w-full h-32 group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg transform group-hover:scale-105 transition-transform duration-300" />
        <Code2 className="w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary group-hover:scale-110 transition-transform duration-300" />
      </div>
    )
  },
  {
    year: "2018",
    title: "Computer Science Degree",
    description: "Graduated with honors, specializing in software engineering and UI/UX design.",
    icon: GraduationCap,
    color: "from-green-500/20 to-emerald-500/20",
    illustration: (
      <div className="relative w-full h-32 group">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg transform group-hover:scale-105 transition-transform duration-300" />
        <GraduationCap className="w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary group-hover:scale-110 transition-transform duration-300" />
      </div>
    )
  },
  {
    year: "2020",
    title: "First Developer Role",
    description: "Joined a startup as a frontend developer, working on innovative web applications.",
    icon: Briefcase,
    color: "from-orange-500/20 to-red-500/20",
    illustration: (
      <div className="relative w-full h-32 group">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg transform group-hover:scale-105 transition-transform duration-300" />
        <Briefcase className="w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary group-hover:scale-110 transition-transform duration-300" />
      </div>
    )
  },
  {
    year: "2022",
    title: "Tech Lead",
    description: "Led a team of developers, focusing on scalable and maintainable solutions.",
    icon: Star,
    color: "from-yellow-500/20 to-amber-500/20",
    illustration: (
      <div className="relative w-full h-32 group">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-lg transform group-hover:scale-105 transition-transform duration-300" />
        <Star className="w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary group-hover:scale-110 transition-transform duration-300" />
      </div>
    )
  },
  {
    year: "Present",
    title: "Freelance Developer",
    description: "Working on exciting projects while sharing knowledge through mentoring and writing.",
    icon: Heart,
    color: "from-pink-500/20 to-rose-500/20",
    illustration: (
      <div className="relative w-full h-32 group">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-lg transform group-hover:scale-105 transition-transform duration-300" />
        <Heart className="w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary group-hover:scale-110 transition-transform duration-300" />
      </div>
    )
  }
];

export default function MyStory() {
  return (
    <section id="story" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
            Every line of code tells a story. Here's mine - a journey of continuous learning, growth, and innovation.
          </p>

          <div className="relative max-w-4xl mx-auto">
            {/* Central line - hidden on mobile */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border hidden md:block" />

            {/* Timeline items */}
            <div className="space-y-8 md:space-y-0">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative md:py-8"
                >
                  <Card className={`w-full md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                  } relative hover:shadow-lg transition-all duration-300 group hover:-translate-y-1`}>
                    <CardContent className="p-6">
                      {/* Illustration */}
                      <div className="mb-6">
                        {item.illustration}
                      </div>

                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-2 rounded-full bg-gradient-to-r ${item.color} group-hover:scale-105 transition-transform duration-300`}>
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-xl font-semibold">{item.year}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>

                  {/* Timeline dot - hidden on mobile */}
                  <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50" />
                  </div>

                  {/* Connecting line for mobile */}
                  <div className="absolute left-4 top-0 h-full w-px bg-border md:hidden">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}