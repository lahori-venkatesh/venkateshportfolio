import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Typewriter from 'typewriter-effect';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Venkatesh</span>
          </h1>
          <div className="text-xl sm:text-2xl text-muted-foreground mb-8 h-12">
            <Typewriter
              options={{
                strings: [
                  'Content Creator',
                  'UX Designer',
                  'Frontend Developer'
                ],
                autoStart: true,
                loop: true,
                delay: 80,
                deleteSpeed: 50,
              }}
            />
          </div>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
            Crafting beautiful digital experiences with a passion for design and innovation
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button size="lg" className="gap-2">
              <FileText className="h-5 w-5" />
              View Resume
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative aspect-square max-w-md mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full animate-pulse" />
          <img
            src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2"
            alt="Venkatesh"
            className="rounded-full object-cover shadow-xl relative z-10"
          />
          <motion.div
            className="absolute -inset-4 border border-primary/20 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}