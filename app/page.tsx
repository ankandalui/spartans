"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Brain, Code, Cpu, Github, Linkedin, Mail, MessageSquare, Rocket } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [heroRef, heroInView] = useInView({ triggerOnce: true })
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      setMousePosition({ x: clientX, y: clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

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

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
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
          <motion.h1
            initial={{ y: 20 }}
            animate={heroInView ? { y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Welcome to <span className="gradient-text">ZeroTech</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20 }}
            animate={heroInView ? { y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Pioneering AI-driven solutions for tomorrow's challenges
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-4"
          >
            <Button size="lg" className="gap-2">
              <Rocket className="w-4 h-4" />
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <MessageSquare className="w-4 h-4" />
              Contact Us
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/30">
        <motion.div
          ref={aboutRef}
          initial={{ y: 50, opacity: 0 }}
          animate={aboutInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Brain className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Innovation</h3>
              <p className="text-muted-foreground">
                Leveraging cutting-edge AI and ML technologies to create innovative solutions.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Code className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Solutions</h3>
              <p className="text-muted-foreground">
                Building intelligent systems that solve real-world problems efficiently.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Cpu className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tech Excellence</h3>
              <p className="text-muted-foreground">
                Committed to technical excellence and continuous innovation.
              </p>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <motion.div
          ref={teamRef}
          initial={{ y: 50, opacity: 0 }}
          animate={teamInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 50, opacity: 0 }}
                animate={teamInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-muted-foreground mb-4">{member.expertise}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-secondary/30">
        <motion.div
          ref={projectsRef}
          initial={{ y: 50, opacity: 0 }}
          animate={projectsInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Projects</h2>
          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
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
                <Button className="gap-2">
                  <Github className="w-4 h-4" />
                  View Project
                </Button>
              </div>
              <div className="relative h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&h=600&fit=crop"
                  alt="Smart Parking System"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <motion.div
          ref={contactRef}
          initial={{ y: 50, opacity: 0 }}
          animate={contactInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <div className="grid gap-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">contact@zerotech.ai</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">LinkedIn</h3>
                    <p className="text-muted-foreground">ZeroTech AI</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Github className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">GitHub</h3>
                    <p className="text-muted-foreground">github.com/zerotech</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </section>
    </main>
  )
}