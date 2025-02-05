"use client"

import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import TeamSection from '@/components/sections/TeamSection'
import VideoSection from '@/components/sections/VideoSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <VideoSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}