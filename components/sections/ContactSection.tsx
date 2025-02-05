"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card } from '@/components/ui/card'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const contacts = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@zerotech.ai"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "ZeroTech AI"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/zerotech"
    }
  ]

  return (
    <section id="contact" className="py-20">
      <motion.div
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Get in Touch</h2>
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 hover:shadow-xl transition-all duration-300">
            <div className="grid gap-6">
              {contacts.map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ x: -20, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center gap-4 group"
                >
                  <contact.icon className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors" />
                  <div>
                    <h3 className="font-semibold">{contact.title}</h3>
                    <p className="text-muted-foreground">{contact.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </motion.div>
    </section>
  )
}