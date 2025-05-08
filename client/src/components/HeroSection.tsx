import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import Typewriter from 'typewriter-effect';

const AnimatedDot = ({ delay = 0, x = 0, y = 0 }: { delay?: number; x?: number; y?: number }) => (
  <motion.div
    className="absolute w-2 h-2 rounded-full bg-primary/20"
    style={{ left: `${x}%`, top: `${y}%` }}
    animate={{
      scale: [1, 1.5, 1],
      opacity: [0.3, 0.5, 0.3],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

export default function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-8 md:py-24 md:pt-32 mt-16 md:mt-0 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <AnimatedDot x={10} y={20} delay={0} />
        <AnimatedDot x={85} y={15} delay={0.5} />
        <AnimatedDot x={45} y={85} delay={1} />
        <AnimatedDot x={75} y={65} delay={1.5} />
        <AnimatedDot x={25} y={45} delay={2} />
        <AnimatedDot x={90} y={90} delay={2.5} />
        <AnimatedDot x={15} y={75} delay={3} />
        <AnimatedDot x={65} y={25} delay={3.5} />
      </div>
      <div className="container px-4 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left mt-8 lg:mt-0 max-w-2xl mx-auto lg:mx-0"
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
                  //'Content Creator',
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
            <a href="https://drive.google.com/file/d/1N6fx_pSZfJQXFmN9csaU9pCs2ePmvMla/view?usp=sharing"   target="_blank"  rel="noopener noreferrer">
             <Button size="lg" className="gap-2 w-full sm:w-auto px-8">
               <FileText className="h-5 w-5" />
                 View Resume
              </Button>
            </a>
            <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto px-8" asChild>
              <a href="https://dribbble.com/UX_Venkatesh" target="_blank" rel="noopener noreferrer">
                <SiLeetcode className="h-5 w-5" />
               Dribble
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
              src="/images/mypic.webp"
              alt="Venkatesh"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}