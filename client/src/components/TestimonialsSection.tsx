import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    content: "Working with Venkatesh was a game-changer for our startup. His technical expertise and attention to detail helped us launch our product ahead of schedule."
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    content: "Venkatesh's ability to understand complex requirements and transform them into elegant solutions is remarkable. A true professional who delivers excellence."
  },
  {
    name: "Emily Rodriguez",
    role: "Design Director",
    content: "The combination of technical skill and creative vision that Venkatesh brings to projects is rare. He's an asset to any development team."
  }
];

export default function TestimonialsSection() {
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
          <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <QuoteIcon className="h-8 w-8 text-primary mb-4" />
                  <p className="text-muted-foreground mb-6">{testimonial.content}</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
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
