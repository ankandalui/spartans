"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { MessageSquare, Rocket } from 'lucide-react'
import { MouseEvent, useState, useEffect } from 'react'

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [ref, inView] = useInView({ triggerOnce: true })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      setMousePosition({ x: clientX, y: clientY })
    }

    window.addEventListener('mousemove', handleMouseMove as any)
    return () => window.removeEventListener('mousemove', handleMouseMove as any)
  }, [])

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Interactive Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-cyan-300/30 to-purple-400/30"
        animate={{
          background: [
            `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.3) 0%, rgba(59, 130, 246, 0.2) 25%, rgba(147, 51, 234, 0.1) 50%, rgba(0, 0, 0, 0) 100%)`,
          ],
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.2) 0%, rgba(59, 130, 246, 0.1) 25%, rgba(147, 51, 234, 0.05) 50%, rgba(0, 0, 0, 0) 100%)`,
          filter: 'blur(40px)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background/80" />

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 text-center relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 mx-auto mb-6"
          >
            <div className="w-full h-full rounded-full border-4 border-primary/30 relative">
              <div className="absolute inset-2 rounded-full border-4 border-primary/40 animate-pulse" />
              <div className="absolute inset-4 rounded-full border-4 border-primary/50" />
            </div>
          </motion.div>
        </motion.div>
        <motion.h1
          initial={{ y: 20 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-7xl font-bold mb-6"
        >
          Welcome to <span className="gradient-text">ZeroTech</span>
        </motion.h1>
        <motion.p
          initial={{ y: 20 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Pioneering AI-driven solutions for tomorrow's challenges
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-4"
        >
          <Button size="lg" className="gap-2 relative overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            <Rocket className="w-4 h-4" />
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="gap-2 relative overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <MessageSquare className="w-4 h-4" />
            Contact Us
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}