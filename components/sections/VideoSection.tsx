"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { PlayCircle } from "lucide-react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.4, // Start playing when 40% of the video is in view
    triggerOnce: true, // Play only once when it comes into view
  });

  useEffect(() => {
    if (inView) {
      setIsPlaying(true);
    }
  }, [inView]);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Our Vision
        </h2>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.95 }}
            animate={inView ? { scale: 1 } : { scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="aspect-video relative">
              {!isPlaying ? (
                <>
                  {/* Thumbnail Image */}
                  <img
                    src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1200&h=800&fit=crop"
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover"
                  />
                  {/* Play Button */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/60 transition-all"
                  >
                    <PlayCircle className="w-20 h-20 text-white opacity-80 hover:opacity-100 transition" />
                  </button>
                </>
              ) : (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/9IRqBsf7xvg?si=qgz-qxyf4GQDMYA"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">
                Shaping the Future with AI
              </h3>
              <p className="text-muted-foreground">
                Experience the next generation of technology
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
