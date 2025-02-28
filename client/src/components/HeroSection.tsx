import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container px-4 grid lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Venkatesh</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            A passionate full-stack developer crafting beautiful and functional web experiences
          </p>
          <Button size="lg" className="gap-2">
            View My Work
            <ArrowDown className="h-4 w-4" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-square max-w-md mx-auto"
        >
          <img
            src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2"
            alt="Venkatesh"
            className="rounded-full object-cover shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
