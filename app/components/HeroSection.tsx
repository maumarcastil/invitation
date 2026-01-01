"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Allura } from "next/font/google";

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

interface HeroSectionProps {
  name: string;
  heroImage?: string;
}

export function HeroSection({
  name,
  heroImage = "/img/6.jpeg",
}: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt={`Foto de ${name}`}
          className="w-full h-full object-cover object-center md:object-[center_30%]"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-20 text-center px-4 max-w-2xl"
      >
        {/* Decorative Top */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-white/90 text-4xl drop-shadow-lg">✿</span>
        </motion.div>

        {/* Subtitle */}
        <p className="text-sm md:text-base uppercase tracking-[0.3em] text-white/80 mb-4 font-serif drop-shadow-md">
          Mis XV Años
        </p>

        {/* Name */}
        <h1
          className={`text-7xl md:text-9xl text-white mb-8 leading-tight drop-shadow-xl ${allura.className}`}
          style={{ textShadow: "2px 4px 12px rgba(0,0,0,0.4)" }}
        >
          {name}
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-white/60" />
          <span className="text-white text-xl drop-shadow-lg">♡</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-white/60" />
        </div>

        {/* Invitation Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-white/90 font-light max-w-md mx-auto leading-relaxed italic drop-shadow-md"
        >
          "Te invito a compartir conmigo este día tan especial, donde los sueños
          se hacen realidad"
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs uppercase tracking-widest">Desliza</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
