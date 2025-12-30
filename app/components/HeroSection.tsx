"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface HeroSectionProps {
  name: string;
  heroImage?: string;
}

export function HeroSection({ name, heroImage = "/img/6.jpeg" }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden"
    >
      {/* Left Side - Photo with Parallax */}
      <div className="relative h-[60vh] md:h-screen overflow-hidden bg-accent-light/20">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 scale-110"
        >
          <img
            src={heroImage}
            alt={`Foto de ${name}`}
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent md:bg-gradient-to-t md:from-transparent md:via-transparent md:to-accent/5" />
        </motion.div>

        {/* Decorative frame corners */}
        <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-white/50" />
        <div className="absolute top-6 right-6 w-16 h-16 border-r-2 border-t-2 border-white/50" />
        <div className="absolute bottom-6 left-6 w-16 h-16 border-l-2 border-b-2 border-white/50" />
        <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-white/50" />
      </div>

      {/* Right Side - Content */}
      <div className="relative flex flex-col items-center justify-center px-8 py-16 md:py-0 bg-white">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center z-10 max-w-md"
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
          <h1 className="text-6xl md:text-8xl font-cursive text-accent mb-8 leading-tight">
            {name}
          </h1>

          {/* Divider */}
          <div className="divider mb-8">
            <span className="text-accent text-xl">♡</span>
          </div>

          {/* Invitation Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-gray-500 font-light leading-relaxed italic"
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
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
      </div>
    </section>
  );
}
