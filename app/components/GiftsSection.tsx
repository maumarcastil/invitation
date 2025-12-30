"use client";

import { motion } from "framer-motion";
import { Gift } from "lucide-react";

export function GiftsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 text-accent mb-8">
            <Gift size={36} strokeWidth={1.5} />
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-cursive text-accent mb-6">
            Regalos
          </h2>

          {/* Text */}
          <p className="text-gray-600 leading-relaxed mb-8 max-w-md mx-auto">
            ¡Tu presencia es el mejor regalo!<br />
            Pero si deseas tener un detalle conmigo, lo recibiré con mucho cariño.
          </p>

          {/* Lluvia de Sobres - Info directa */}
          <div className="inline-flex items-center gap-2 px-8 py-3 border-2 border-accent text-accent rounded-full font-medium uppercase tracking-wider text-sm">
            Lluvia de Sobres
          </div>
        </motion.div>
      </div>
    </section>
  );
}
