"use client";

import { motion } from "framer-motion";
import { MessageCircle, Heart } from "lucide-react";
import confetti from "canvas-confetti";

interface RSVPSectionProps {
  phoneNumber: string;
  message: string;
}

export function RSVPSection({ phoneNumber, message }: RSVPSectionProps) {
  const handleClick = () => {
    const end = Date.now() + 1500;
    const colors = ["#b76e79", "#f8e8e8", "#ffffff", "#d4a574"];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section className="py-24 px-4 animated-gradient">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Decorative */}
          <div className="mb-8">
            <Heart
              className="inline-block text-accent"
              size={32}
              fill="currentColor"
            />
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-cursive text-accent mb-6">
            Confirmación
          </h2>

          {/* Text */}
          <p className="text-gray-600 leading-relaxed mb-10 max-w-md mx-auto">
            Espero con mucha ilusión que puedas acompañarme en este día tan
            especial.
            <br />
            <span className="font-medium">¡Confirma tu asistencia!</span>
          </p>

          {/* CTA Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="inline-flex items-center gap-3 px-10 py-4 bg-accent text-white rounded-full font-medium uppercase tracking-wider text-sm hover:bg-accent-dark transition-all soft-shadow transform hover:scale-105"
          >
            <MessageCircle size={22} />
            Confirmar por WhatsApp
          </a>

          {/* Footer Note */}
          <p className="mt-12 text-gray-400 text-sm italic">
            ¡Gracias por ser parte de mi historia! ♡
          </p>
        </motion.div>
      </div>
    </section>
  );
}
