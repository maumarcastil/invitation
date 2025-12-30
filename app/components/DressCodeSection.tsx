"use client";

import { motion } from "framer-motion";
import { Shirt } from "lucide-react";

interface DressCodeSectionProps {
  code: string;
  description?: string;
  avoidColor?: string;
}

export function DressCodeSection({ code, description, avoidColor }: DressCodeSectionProps) {
  return (
    <section className="py-20 px-4 bg-accent-light/20">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white text-accent mb-8 soft-shadow">
            <Shirt size={36} strokeWidth={1.5} />
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-cursive text-accent mb-6">
            Dress Code
          </h2>

          {/* Code */}
          <p className="text-2xl font-serif text-gray-800 mb-4">{code}</p>

          {/* Description */}
          {description && (
            <p className="text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
              {description}
            </p>
          )}

          {/* Avoid Color Note */}
          {avoidColor && (
            <div className="inline-block px-6 py-3 bg-white rounded-xl soft-shadow border border-accent/10">
              <p className="text-sm text-gray-500">
                Por favor evitar el color: <span className="font-bold text-accent">{avoidColor}</span>
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}


