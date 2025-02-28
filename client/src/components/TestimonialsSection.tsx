import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { QuoteIcon } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    content: "Working with Venkatesh was a game-changer for our startup. His technical expertise and attention to detail helped us launch our product ahead of schedule."
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    content: "Venkatesh's ability to understand complex requirements and transform them into elegant solutions is remarkable. A true professional who delivers excellence."
  },
  {
    name: "Emily Rodriguez",
    role: "Design Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    content: "The combination of technical skill and creative vision that Venkatesh brings to projects is rare. He's an asset to any development team."
  },
  {
    name: "David Kim",
    role: "Tech Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    content: "Exceptional problem-solving skills and a great team player. Venkatesh consistently delivers high-quality solutions."
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

        <div className="relative">
          {/* Scroll container */}
          <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-none w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] snap-center"
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center mb-6">
                      <Avatar className="w-16 h-16 mb-4">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <QuoteIcon className="h-8 w-8 text-primary mb-4" />
                      <p className="text-muted-foreground text-center mb-6">{testimonial.content}</p>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Scroll indicators */}
          <div className="hidden md:flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-primary/20 transition-colors duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}