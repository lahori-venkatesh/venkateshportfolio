import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Code, Terminal, Database, Zap } from "lucide-react";
import { SiGithub, SiLinkedin, SiReact, SiJavascript, SiTypescript, SiNodedotjs, SiPython, SiLeetcode, SiCodechef, SiHackerrank } from "react-icons/si";
import Typewriter from 'typewriter-effect';
import { useState, useEffect } from "react";

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

const CodeSnippet = ({ delay = 0, x = 0, y = 0, code = "" }: { 
  delay?: number; 
  x?: number; 
  y?: number; 
  code?: string;
}) => (
  <motion.div
    className="absolute text-xs font-mono text-primary/20 bg-primary/5 px-2 py-1 rounded border border-primary/10"
    style={{ left: `${x}%`, top: `${y}%` }}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ 
      opacity: [0, 0.7, 0],
      scale: [0.8, 1, 0.8],
      y: [0, -20, -40]
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {code}
  </motion.div>
);

const TechIcon = ({ icon: Icon, delay = 0, x = 0, y = 0, color = "text-primary/40" }: { 
  icon: any; 
  delay?: number; 
  x?: number; 
  y?: number;
  color?: string;
}) => (
  <motion.div
    className={`absolute ${color}`}
    style={{ left: `${x}%`, top: `${y}%` }}
    animate={{
      rotate: [0, 360],
      scale: [1, 1.2, 1],
      opacity: [0.4, 0.8, 0.4],
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Icon className="h-8 w-8" />
  </motion.div>
);

const MatrixRain = () => {
  const [drops, setDrops] = useState<Array<{ id: number; x: number; delay: number; char: string }>>([]);

  useEffect(() => {
    const chars = ['0', '1', '{', '}', '<', '>', '/', '\\', '(', ')', '[', ']', ';', ':', '=', '+', '-', '*'];
    const newDrops = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 3,
      char: chars[Math.floor(Math.random() * chars.length)],
    }));
    setDrops(newDrops);
  }, []);

  return (
    <>
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute text-primary/8 font-mono text-xs select-none pointer-events-none"
          style={{ left: `${drop.x}%`, top: '-5%' }}
          animate={{
            y: ['0vh', '105vh'],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            delay: drop.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {drop.char}
        </motion.div>
      ))}
    </>
  );
};

const GeometricShape = ({ delay = 0, x = 0, y = 0, size = 20 }: { 
  delay?: number; 
  x?: number; 
  y?: number; 
  size?: number;
}) => (
  <motion.div
    className="absolute border border-primary/10 rounded-lg"
    style={{ 
      left: `${x}%`, 
      top: `${y}%`,
      width: `${size}px`,
      height: `${size}px`
    }}
    animate={{
      rotate: [0, 180, 360],
      scale: [1, 1.2, 1],
      opacity: [0.1, 0.3, 0.1],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const PulsingGrid = () => (
  <motion.div
    className="absolute inset-0 opacity-[0.02]"
    style={{
      backgroundImage: `
        linear-gradient(rgba(var(--primary), 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(var(--primary), 0.1) 1px, transparent 1px)
      `,
      backgroundSize: '50px 50px',
    }}
    animate={{
      opacity: [0.02, 0.05, 0.02],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const ParticleSystem = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; size: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      size: Math.random() * 3 + 1,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/10"
          style={{ 
            left: `${particle.x}%`, 
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

export default function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 md:py-16 mt-12 md:mt-0 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Pulsing Grid Background */}
        <PulsingGrid />
        
        {/* Particle System */}
        <ParticleSystem />
        
        {/* Matrix Rain Effect */}
        <MatrixRain />
        
        {/* Geometric Shapes */}
        <GeometricShape x={5} y={10} delay={0} size={15} />
        <GeometricShape x={95} y={20} delay={1} size={20} />
        <GeometricShape x={10} y={85} delay={2} size={18} />
        <GeometricShape x={85} y={90} delay={3} size={16} />
        <GeometricShape x={50} y={5} delay={4} size={12} />
        
        {/* Animated Dots */}
        <AnimatedDot x={10} y={20} delay={0} />
        <AnimatedDot x={85} y={15} delay={0.5} />
        <AnimatedDot x={45} y={85} delay={1} />
        <AnimatedDot x={75} y={65} delay={1.5} />
        <AnimatedDot x={25} y={45} delay={2} />
        <AnimatedDot x={90} y={90} delay={2.5} />
        <AnimatedDot x={15} y={75} delay={3} />
        <AnimatedDot x={65} y={25} delay={3.5} />
        
        {/* Floating Tech Icons */}
        <TechIcon icon={SiReact} x={15} y={25} delay={0.2} color="text-blue-400/25" />
        <TechIcon icon={SiJavascript} x={85} y={30} delay={0.8} color="text-yellow-400/25" />
        <TechIcon icon={SiTypescript} x={20} y={70} delay={1.2} color="text-blue-600/25" />
        <TechIcon icon={SiNodedotjs} x={80} y={75} delay={1.8} color="text-green-500/25" />
        <TechIcon icon={SiPython} x={10} y={50} delay={2.4} color="text-blue-500/25" />
        <TechIcon icon={Code} x={90} y={50} delay={3.0} color="text-primary/25" />
        <TechIcon icon={Terminal} x={70} y={20} delay={3.6} color="text-gray-400/25" />
        <TechIcon icon={Database} x={30} y={80} delay={4.2} color="text-purple-400/25" />
        
        {/* Floating Code Snippets */}
        <CodeSnippet x={25} y={15} delay={1} code="const dev = 'awesome';" />
        <CodeSnippet x={75} y={85} delay={2.5} code="function() { return true; }" />
        <CodeSnippet x={5} y={60} delay={4} code="<Component />" />
        <CodeSnippet x={85} y={55} delay={5.5} code="npm run build" />
        <CodeSnippet x={50} y={10} delay={7} code="git commit -m 'feat'" />
        <CodeSnippet x={60} y={90} delay={8.5} code="console.log('Hello');" />
        
        {/* Social & Coding Platform Icons */}
        <FloatingIcon icon={SiGithub} x={20} y={30} delay={0.2} />
        <FloatingIcon icon={SiLinkedin} x={80} y={40} delay={0.8} />
        <FloatingIcon icon={SiLeetcode} x={15} y={70} delay={1.2} />
        <FloatingIcon icon={SiCodechef} x={90} y={15} delay={1.8} />
        <FloatingIcon icon={SiHackerrank} x={5} y={85} delay={2.4} />
        <FloatingIcon icon={Zap} x={95} y={70} delay={3.0} />
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
            <span className="text-primary font-semibold">NIT Jaipur</span> student passionate about software applications and full-stack development. 
            Crafting innovative digital solutions with modern technologies and user-centric design.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <Button size="lg" className="gap-2 px-8 group" asChild>
              <a href="https://drive.google.com/file/d/1N6fx_pSZfJQXFmN9csaU9pCs2ePmvMla/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Download Resume
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
          </motion.div>

          {/* Social & Coding Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-8"
          >
            <motion.div 
              className="text-sm text-muted-foreground mb-4 text-center lg:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.4 }}
            >
              Connect with me
            </motion.div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {/* Professional Links */}
              <motion.a 
                href="https://github.com/lahori-venkatesh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/10 hover:bg-gray-900/20 dark:bg-gray-100/10 dark:hover:bg-gray-100/20 transition-all duration-300 group border border-gray-200/20 hover:border-gray-300/40"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SiGithub className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">GitHub</span>
              </motion.a>

              <motion.a 
                href="https://linkedin.com/in/lahori-venkatesh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 hover:bg-blue-600/20 transition-all duration-300 group border border-blue-200/20 hover:border-blue-300/40"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SiLinkedin className="h-4 w-4 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">LinkedIn</span>
              </motion.a>

              {/* Coding Platforms */}
              <motion.a 
                href="https://leetcode.com/lahori_venkatesh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 hover:bg-orange-500/20 transition-all duration-300 group border border-orange-200/20 hover:border-orange-300/40"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.7, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SiLeetcode className="h-4 w-4 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">LeetCode</span>
              </motion.a>

              <motion.a 
                href="https://www.codechef.com/users/lahori_venkat" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-600/10 hover:bg-amber-600/20 transition-all duration-300 group border border-amber-200/20 hover:border-amber-300/40"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SiCodechef className="h-4 w-4 text-amber-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">CodeChef</span>
              </motion.a>

              <motion.a 
                href="https://www.hackerrank.com/lahori_venkatesh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-600/10 hover:bg-green-600/20 transition-all duration-300 group border border-green-200/20 hover:border-green-300/40"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.9, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SiHackerrank className="h-4 w-4 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">HackerRank</span>
              </motion.a>
            </div>
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