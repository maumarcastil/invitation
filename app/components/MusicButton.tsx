"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Music } from "lucide-react";
import { motion } from "framer-motion";

export function MusicButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/music/background.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-white text-accent rounded-full soft-shadow flex items-center justify-center hover:bg-accent hover:text-white transition-all group"
      aria-label="Toggle music"
    >
      {isPlaying ? (
        <Pause size={22} />
      ) : (
        <Play size={22} className="ml-1" />
      )}
      
      {/* Pulse animation when playing */}
      {isPlaying && (
        <span className="absolute inset-0 rounded-full bg-accent/20 animate-ping"></span>
      )}

      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {isPlaying ? "Pausar música" : "Reproducir música"}
      </span>
    </motion.button>
  );
}


