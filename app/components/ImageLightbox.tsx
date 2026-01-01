"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Photo {
  id: number;
  url: string;
  alt: string;
}

interface ImageLightboxProps {
  photos: Photo[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function ImageLightbox({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: ImageLightboxProps) {
  const currentPhoto = photos[currentIndex];

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    }
  }, [currentIndex, onNavigate]);

  const goToNext = useCallback(() => {
    if (currentIndex < photos.length - 1) {
      onNavigate(currentIndex + 1);
    }
  }, [currentIndex, photos.length, onNavigate]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, goToPrevious, goToNext]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle swipe gesture
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      goToPrevious();
    } else if (info.offset.x < -threshold) {
      goToNext();
    }
  };

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < photos.length - 1;

  return (
    <AnimatePresence>
      {isOpen && currentPhoto && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50"
          />

          {/* Lightbox Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors pointer-events-auto"
              aria-label="Cerrar"
            >
              <X size={24} className="text-white" />
            </motion.button>

            {/* Navigation - Previous */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: canGoPrevious ? 1 : 0.3, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={goToPrevious}
              disabled={!canGoPrevious}
              className={`absolute left-2 md:left-6 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors pointer-events-auto ${
                !canGoPrevious ? "cursor-not-allowed" : ""
              }`}
              aria-label="Anterior"
            >
              <ChevronLeft size={28} className="text-white" />
            </motion.button>

            {/* Navigation - Next */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: canGoNext ? 1 : 0.3, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={goToNext}
              disabled={!canGoNext}
              className={`absolute right-2 md:right-6 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors pointer-events-auto ${
                !canGoNext ? "cursor-not-allowed" : ""
              }`}
              aria-label="Siguiente"
            >
              <ChevronRight size={28} className="text-white" />
            </motion.button>

            {/* Image Container with Swipe */}
            <motion.div
              key={currentPhoto.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="relative max-w-[90vw] max-h-[80vh] pointer-events-auto cursor-grab active:cursor-grabbing"
            >
              <img
                src={currentPhoto.url}
                alt={currentPhoto.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg select-none"
                draggable={false}
              />
            </motion.div>

            {/* Position Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full pointer-events-none"
            >
              <span className="text-white text-sm font-light">
                {currentIndex + 1} / {photos.length}
              </span>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

