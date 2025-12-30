"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageLightbox } from "./ImageLightbox";

const photos = [
  { id: 1, url: "/img/1.jpeg", alt: "Foto 1" },
  { id: 2, url: "/img/2.jpeg", alt: "Foto 2" },
  { id: 3, url: "/img/3.jpeg", alt: "Foto 3" },
  { id: 4, url: "/img/4.jpeg", alt: "Foto 4" },
  { id: 5, url: "/img/5.jpeg", alt: "Foto 5" },
  { id: 6, url: "/img/6.jpeg", alt: "Foto 6" },
  { id: 7, url: "/img/7.jpeg", alt: "Foto 7" },
  { id: 8, url: "/img/8.jpeg", alt: "Foto 8" },
  { id: 9, url: "/img/9.jpeg", alt: "Foto 9" },
  { id: 10, url: "/img/10.jpeg", alt: "Foto 10" },
];

export function GallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 bg-accent-light/20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 px-4"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white text-accent mb-8 soft-shadow">
            <Camera size={36} strokeWidth={1.5} />
          </div>

          <h2 className="text-4xl md:text-5xl font-cursive text-accent mb-4">
            Galería
          </h2>
          <p className="text-gray-500 font-light">
            Algunos momentos especiales
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full soft-shadow flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300 ${
              canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full soft-shadow flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300 ${
              canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Siguiente"
          >
            <ChevronRight size={24} />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-4 md:px-8 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex-shrink-0 snap-center"
              >
                <div
                  onClick={() => setSelectedIndex(index)}
                  className="w-56 md:w-72 aspect-[3/4] rounded-2xl soft-shadow overflow-hidden bg-white group/card cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-6 text-gray-400 text-sm flex items-center justify-center gap-2"
        >
          <span>←</span>
          <span>Desliza para ver más</span>
          <span>→</span>
        </motion.p>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        photos={photos}
        currentIndex={selectedIndex ?? 0}
        isOpen={selectedIndex !== null}
        onClose={() => setSelectedIndex(null)}
        onNavigate={setSelectedIndex}
      />
    </section>
  );
}
