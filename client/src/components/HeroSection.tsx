import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight, Download, ExternalLink } from "lucide-react";
import { SiLeetcode, SiGithub, SiLinkedin } from "react-icons/si";
import { Twitter } from "lucide-react";
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

const FloatingIcon = ({ icon: Icon, delay = 0, x = 0, y = 0 }: { 
  icon: any; 
  delay?: number; 
  x?: number; 
  y?: number 
}) => (
  <motion.div
    className="absolute text-primary/30"
    style={{ left: `${x}%`, top: `${y}%` }}
    animate={{
      y: [0, -10, 0],
      opacity: [0.3, 0.6, 0.3],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Icon className="h-6 w-6" />
  </motion.div>
);

export default function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 md:py-16 mt-12 md:mt-0 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <AnimatedDot x={10} y={20} delay={0} />
        <AnimatedDot x={85} y={15} delay={0.5} />
        <AnimatedDot x={45} y={85} delay={1} />
        <AnimatedDot x={75} y={65} delay={1.5} />
        <AnimatedDot x={25} y={45} delay={2} />
        <AnimatedDot x={90} y={90} delay={2.5} />
        <AnimatedDot x={15} y={75} delay={3} />
        <AnimatedDot x={65} y={25} delay={3.5} />
        
        <FloatingIcon icon={SiGithub} x={20} y={30} delay={0.2} />
        <FloatingIcon icon={SiLinkedin} x={80} y={40} delay={0.8} />
        <FloatingIcon icon={Twitter} x={15} y={70} delay={1.2} />
      </div>

      <div className="container px-4 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left mt-8 lg:mt-0 max-w-2xl mx-auto lg:mx-0"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-xl md:text-2xl text-muted-foreground mb-2 block">
              👋 Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Lahori Venkatesh
          </motion.h1>

          {/* Typewriter */}
          <motion.div 
            className="text-xl md:text-2xl text-muted-foreground mb-6 h-[32px] flex items-center justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className="mr-2">I'm a</span>
            <Typewriter
              options={{
                strings: [
                  'UX Designer',
                  'Full-Stack Developer',
                  'Creative Problem Solver'
                ],
                autoStart: true,
                loop: true,
                delay: 80,
                deleteSpeed: 50,
              }}
            />
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Crafting beautiful digital experiences with a passion for design and innovation. 
            Transforming ideas into elegant, user-centric solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button size="lg" className="gap-2 w-full sm:w-auto px-8 group" asChild>
              <a href="https://drive.google.com/file/d/1N6fx_pSZfJQXFmN9csaU9pCs2ePmvMla/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Download Resume
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto px-8 group" asChild>
              <a href="https://dribbble.com/UX_Venkatesh" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                View Portfolio
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex justify-center lg:justify-start gap-4 mt-8"
          >
            <a href="https://github.com/lahori-venkatesh" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300 group">
              <SiGithub className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="https://linkedin.com/in/lahori-venkatesh" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300 group">
              <SiLinkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="https://twitter.com/lahori_venkatesh" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300 group">
              <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
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
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute -inset-8 border border-primary/10 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />

          {/* Image container with animation */}
          <div className="relative z-10 rounded-full overflow-hidden border-4 border-background shadow-2xl hover:shadow-primary/25 transition-shadow duration-300">
            <motion.img
              src="/images/mypic.webp"
              alt="Venkatesh"
              className="w-full h-full object-cover rounded-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>


        </motion.div>
      </div>
    </section>
  );
}