import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Typewriter from 'typewriter-effect';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container px-4 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left mt-8 lg:mt-0"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Venkatesh</span>
          </h1>
          <div className="text-xl sm:text-2xl text-muted-foreground mb-6 h-16 flex items-center justify-center lg:justify-start">
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
          className="relative aspect-square max-w-[280px] sm:max-w-md w-full mx-auto"
        >
          {/* Animated gradient background */}
          <motion.div 
            className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-primary/10 to-transparent rounded-full blur-xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Rotating circles */}
          <motion.div
            className="absolute -inset-4 border-2 border-primary/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute -inset-8 border border-primary/10 rounded-full"
            animate={{ rotate: -360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Image container with animation */}
          <motion.div
            className="relative z-10 rounded-full overflow-hidden border-4 border-background shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2"
              alt="Venkatesh"
              className="w-full h-full object-cover"
            />

            {/* Overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-300"
              whileHover={{ opacity: 1 }}
            />
          </motion.div>

          {/* Floating dots decoration */}
          <motion.div
            className="absolute -right-4 top-1/4 w-2 h-2 bg-primary rounded-full"
            animate={{
              y: [-10, 10, -10],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -left-4 bottom-1/4 w-3 h-3 bg-primary/50 rounded-full"
            animate={{
              y: [10, -10, 10],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}