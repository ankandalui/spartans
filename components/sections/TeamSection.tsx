"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card } from '@/components/ui/card'

const teamMembers = [
  {
    name: "Alex Chen",
    role: "AI/ML Lead",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    expertise: "Deep Learning, Computer Vision",
  },
  {
    name: "Sarah Johnson",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    expertise: "React Native, Firebase",
  },
  {
    name: "Michael Park",
    role: "Backend Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    expertise: "Cloud Architecture, APIs",
  },
]

export default function TeamSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="team" className="py-20">
      <motion.div
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <motion.div 
                  className="p-6"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground mb-4">{member.expertise}</p>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}