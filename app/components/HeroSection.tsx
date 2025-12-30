"use client";

import { motion } from "framer-motion";

interface HeroSectionProps {
  name: string;
  date: string;
}

export function HeroSection({ name, date }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden animated-gradient">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center px-4 z-10"
      >
        {/* Decorative Top */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-accent text-4xl">✿</span>
        </motion.div>

        {/* Subtitle */}
        <p className="text-sm md:text-base uppercase tracking-[0.3em] text-accent mb-4 font-serif">
          Mis XV Años
        </p>

        {/* Name */}
        <h1 className="text-7xl md:text-9xl font-cursive text-accent mb-8 leading-tight">
          {name}
        </h1>

        {/* Divider */}
        <div className="divider mb-8">
          <span className="text-accent text-xl">♡</span>
        </div>

        {/* Date */}
        <p className="text-xl md:text-2xl font-serif text-gray-600 tracking-wider">
          {date}
        </p>

        {/* Invitation Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-10 text-gray-500 font-light max-w-md mx-auto leading-relaxed italic"
        >
          "Te invito a compartir conmigo este día tan especial, 
          donde los sueños se hacen realidad"
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-accent/50">
          <span className="text-xs uppercase tracking-widest">Desliza</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-accent to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}


