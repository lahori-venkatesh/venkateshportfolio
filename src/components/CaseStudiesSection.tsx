import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const caseStudies = [
  {
    title: "User Signup Optimization",
    description: "Redesigned UX with A/B testing and streamlined form validation, leading to a 25% increase in conversions",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630",
    link: "#"
  },
  {
    title: "E-commerce Platform Redesign",
    description: "Complete overhaul of the shopping experience resulting in 40% increase in sales",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&h=630",
    link: "#"
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Case Studies</h2>
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <a href={study.link} className="block relative overflow-hidden rounded-lg">
                  <div className="aspect-[16/10] md:aspect-[21/9] relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 z-10" />
                    <img
                      src={study.image}
                      alt={study.title}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-3 md:p-8 z-20 text-white flex flex-col justify-end">
                      <h3 className="text-xl md:text-4xl font-bold mb-1 md:mb-4">
                        {study.title}
                      </h3>
                      <p className="text-sm md:text-xl text-white/90 mb-3 md:mb-6 max-w-2xl line-clamp-2 md:line-clamp-none">
                        {study.description}
                      </p>
                      <Button 
                        size="sm" 
                        variant="default" 
                        className="w-fit group-hover:translate-x-2 transition-transform md:size-lg"
                      >
                        Read Case Study
                        <ChevronRight className="ml-2 h-3 w-3 md:h-5 md:w-5" />
                      </Button>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}