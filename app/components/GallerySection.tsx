"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";

// Fotos locales de la galería
const photos = [
  {
    id: 1,
    aspect: "aspect-[3/4]",
    url: "/img/1.jpeg",
    alt: "Foto 1",
  },
  {
    id: 2,
    aspect: "aspect-square",
    url: "/img/2.jpeg",
    alt: "Foto 2",
  },
  {
    id: 3,
    aspect: "aspect-[3/4]",
    url: "/img/3.jpeg",
    alt: "Foto 3",
  },
  {
    id: 4,
    aspect: "aspect-square",
    url: "/img/4.jpeg",
    alt: "Foto 4",
  },
  {
    id: 5,
    aspect: "aspect-[4/3]",
    url: "/img/5.jpeg",
    alt: "Foto 5",
  },
  {
    id: 6,
    aspect: "aspect-[3/4]",
    url: "/img/6.jpeg",
    alt: "Foto 6",
  },
  {
    id: 7,
    aspect: "aspect-square",
    url: "/img/7.jpeg",
    alt: "Foto 7",
  },
  {
    id: 8,
    aspect: "aspect-[3/4]",
    url: "/img/8.jpeg",
    alt: "Foto 8",
  },
  {
    id: 9,
    aspect: "aspect-[4/3]",
    url: "/img/9.jpeg",
    alt: "Foto 9",
  },
  {
    id: 10,
    aspect: "aspect-[3/4]",
    url: "/img/10.jpeg",
    alt: "Foto 10",
  },
];

export function GallerySection() {
  return (
    <section className="py-20 px-4 bg-accent-light/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white text-accent mb-8 soft-shadow">
            <Camera size={36} strokeWidth={1.5} />
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-cursive text-accent mb-4">
            Galería
          </h2>
          <p className="text-gray-500 font-light">
            Algunos momentos especiales
          </p>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${photo.aspect} rounded-2xl soft-shadow overflow-hidden group cursor-pointer relative`}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
