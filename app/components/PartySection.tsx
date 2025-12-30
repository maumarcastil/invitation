"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, PartyPopper } from "lucide-react";

interface PartySectionProps {
  time: string;
  venue: string;
  address: string;
  mapLink: string;
}

export function PartySection({ time, venue, address, mapLink }: PartySectionProps) {
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
            <PartyPopper size={36} strokeWidth={1.5} />
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-cursive text-accent mb-8">
            La Fiesta
          </h2>

          {/* Time */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Clock size={18} className="text-accent" />
            <span className="text-xl font-serif text-gray-700">{time}</span>
          </div>

          {/* Venue */}
          <h3 className="text-2xl font-serif text-gray-800 mb-2">{venue}</h3>
          
          {/* Address */}
          <div className="flex items-center justify-center gap-2 mb-8 text-gray-500">
            <MapPin size={16} />
            <span>{address}</span>
          </div>

          {/* Map Button */}
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white rounded-full font-medium uppercase tracking-wider text-sm hover:bg-accent-dark transition-colors soft-shadow"
          >
            <MapPin size={18} />
            Cómo Llegar
          </a>

          {/* Note */}
          <p className="mt-10 text-gray-400 text-sm italic">
            ¡Te esperamos para celebrar juntos!
          </p>
        </motion.div>
      </div>
    </section>
  );
}


