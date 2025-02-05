"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'

export default function ProjectsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <motion.div
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Projects</h2>
        <Card className="p-8 hover:shadow-xl transition-all duration-300">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Smart Parking Management System</h3>
              <p className="text-muted-foreground mb-6">
                An innovative solution using Machine Learning and Deep Learning to optimize parking space utilization and enhance user experience.
              </p>
              <div className="space-y-2 mb-6">
                <p className="font-medium">Tech Stack:</p>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>React Native for mobile applications</li>
                  <li>Firebase for real-time data management</li>
                  <li>TensorFlow for ML model deployment</li>
                  <li>Computer Vision for space detection</li>
                </ul>
              </div>
              <Button className="gap-2 group relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <Github className="w-4 h-4" />
                View Project
              </Button>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="relative h-[400px] group"
            >
              <img
                src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&h=600&fit=crop"
                alt="Smart Parking System"
                className="rounded-lg object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </section>
  )
}