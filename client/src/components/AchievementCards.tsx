import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { SiLeetcode, SiLinkedin } from "react-icons/si";

export default function AchievementCards() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-2xl md:text-3xl"
            >
              🏆
            </motion.div>
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight">
              Competitive Programming Achievements
            </h2>
          </div>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-2">
            Showcasing my problem-solving skills and competitive programming journey across various platforms
          </p>
        </motion.div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl w-full">
          {/* LeetCode Achievement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-4 md:p-6 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="flex items-start gap-3 mb-3 md:mb-4">
                <div className="p-2 md:p-3 bg-yellow-500/20 rounded-lg flex-shrink-0">
                  <SiLeetcode className="h-6 w-6 md:h-8 md:w-8 text-yellow-500" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-base md:text-lg text-yellow-500 leading-tight">LeetCode Champion</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Problem Solver</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-3 text-sm md:text-base leading-relaxed">
                500+ problems solved on LeetCode with consistent contest participation
              </p>
              <div className="text-xs md:text-sm text-yellow-500/80 font-medium bg-yellow-500/10 px-2 py-1 rounded-md inline-block">
                Top 1% in world rankings
              </div>
            </div>
          </motion.div>

          {/* DSA + CP Achievement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gradient-to-br from-red-500/10 to-pink-500/10 backdrop-blur-sm border border-red-500/20 rounded-xl p-4 md:p-6 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="flex items-start gap-3 mb-3 md:mb-4">
                <div className="p-2 md:p-3 bg-red-500/20 rounded-lg flex-shrink-0">
                  <FileText className="h-6 w-6 md:h-8 md:w-8 text-red-500" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-base md:text-lg text-red-500 leading-tight">DSA + CP Expert</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Algorithm Master</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-3 text-sm md:text-base leading-relaxed">
                Strong foundation in Data Structures & Algorithms with competitive programming
              </p>
              <div className="text-xs md:text-sm text-red-500/80 font-medium bg-red-500/10 px-2 py-1 rounded-md inline-block">
                YouTube & LinkedIn (1 Lakh+ followers)
              </div>
            </div>
          </motion.div>

          {/* Contest Expert Achievement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 backdrop-blur-sm border border-orange-500/20 rounded-xl p-4 md:p-6 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="flex items-start gap-3 mb-3 md:mb-4">
                <div className="p-2 md:p-3 bg-orange-500/20 rounded-lg flex-shrink-0">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-xl md:text-2xl"
                  >
                    ⭐
                  </motion.div>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-base md:text-lg text-orange-500 leading-tight">Contest Expert</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Competitive Coder</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-3 text-sm md:text-base leading-relaxed">
                Active participant in LeetCode Weekly Contests and HackerRank challenges
              </p>
              <div className="text-xs md:text-sm text-orange-500/80 font-medium bg-orange-500/10 px-2 py-1 rounded-md inline-block">
                All India Rank 26 in LeetCode Weekly Contest
              </div>
            </div>
          </motion.div>

          {/* Google CodeJam Achievement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-4 md:p-6 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="flex items-start gap-3 mb-3 md:mb-4">
                <div className="p-2 md:p-3 bg-green-500/20 rounded-lg flex-shrink-0">
                  <div className="text-green-500 font-bold text-xl md:text-2xl">&lt;/&gt;</div>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-base md:text-lg text-green-500 leading-tight">Google CodeJam + KickStart</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Participant</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-3 text-sm md:text-base leading-relaxed">
                Participated in Google CodeJam and KickStart programming competitions
              </p>
              <div className="text-xs md:text-sm text-green-500/80 font-medium bg-green-500/10 px-2 py-1 rounded-md inline-block">
                All India Rank 12 in CodeJam and World Rank 360 in KickStart
              </div>
            </div>
          </motion.div>

          {/* HackerRank Achievement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 md:p-6 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="flex items-start gap-3 mb-3 md:mb-4">
                <div className="p-2 md:p-3 bg-purple-500/20 rounded-lg flex-shrink-0">
                  <div className="text-purple-500 font-bold text-xl md:text-2xl">🏆</div>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-base md:text-lg text-purple-500 leading-tight">HackerEarth</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Problem Solver</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-3 text-sm md:text-base leading-relaxed">
                Strong performance in HackerEarth contests and skill assessments
              </p>
              <div className="text-xs md:text-sm text-purple-500/80 font-medium bg-purple-500/10 px-2 py-1 rounded-md inline-block">
                All India Rank 15 out of 200,000
              </div>
            </div>
          </motion.div>

          {/* Industry Expert Achievement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4 md:p-6 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="flex items-start gap-3 mb-3 md:mb-4">
                <div className="p-2 md:p-3 bg-blue-500/20 rounded-lg flex-shrink-0">
                  <SiLinkedin className="h-6 w-6 md:h-8 md:w-8 text-blue-500" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-base md:text-lg text-blue-500 leading-tight">Industry Expert</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Professional Network</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-3 text-sm md:text-base leading-relaxed">
                Building professional network and sharing knowledge with the community
              </p>
              <div className="text-xs md:text-sm text-blue-500/80 font-medium bg-blue-500/10 px-2 py-1 rounded-md inline-block">
                YouTube & LinkedIn (1 Lakh+ followers)
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}