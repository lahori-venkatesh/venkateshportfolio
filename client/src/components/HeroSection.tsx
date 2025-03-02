import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import Typewriter from 'typewriter-effect';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 mt-8 md:mt-0">
      <div className="container px-4 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left mt-8 lg:mt-0"
        >
          <span className="text-xl md:text-2xl text-muted-foreground mb-2 block">
              Hello, I am
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">
              Lahori Venkatesh
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground mb-6 h-[32px]">
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
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button size="lg" className="gap-2">
              <FileText className="h-5 w-5" />
              View Resume
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer">
                <SiLeetcode className="h-5 w-5" />
                LeetCode
              </a>
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
          <div className="absolute -inset-4 border-2 border-primary/20 rounded-full" />
          <div className="absolute -inset-8 border border-primary/10 rounded-full" />

          {/* Image container with animation */}
          <div className="relative z-10 rounded-full overflow-hidden border-4 border-background shadow-xl ">
            <img
              src="/images/mypic.svg"
              alt="Venkatesh"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}