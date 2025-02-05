"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useRef, useEffect } from 'react'

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: false
  })

  useEffect(() => {
    if (videoRef.current) {
      if (inView) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }, [inView])

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Vision</h2>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.95 }}
            animate={inView ? { scale: 1 } : { scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="aspect-video">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                poster="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1200&h=800&fit=crop"
              >
                <source src="https://static.videezy.com/system/resources/previews/000/021/644/original/abstract-digital-network-communication-background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Shaping the Future with AI</h3>
              <p className="text-muted-foreground">Experience the next generation of technology</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}