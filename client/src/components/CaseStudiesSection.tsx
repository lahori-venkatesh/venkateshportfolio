import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Enterprise Dashboard Redesign",
    description: "Improving user experience and efficiency for a Fortune 500 company",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    link: "#"
  },
  {
    title: "E-learning Platform Development",
    description: "Building a scalable online education platform from scratch",
    image: "https://images.unsplash.com/photo-1471107191679-f26174d2d41e",
    link: "#"
  },
  {
    title: "Healthcare App Innovation",
    description: "Revolutionizing patient care through digital transformation",
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf",
    link: "#"
  }
];

export default function CaseStudiesSection() {
  return (
    <section className="py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Case Studies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Detailed analysis of some of my most impactful projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">
                    {study.description}
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={study.link} className="flex items-center justify-center gap-2">
                      Read Case Study
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
