"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Brain, Code, Cpu } from "lucide-react";

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    {
      icon: Brain,
      title: "AI Innovation",
      description:
        "Leveraging cutting-edge AI and ML technologies to create innovative solutions.",
    },
    {
      icon: Code,
      title: "Smart Solutions",
      description:
        "Building intelligent systems that solve real-world problems efficiently.",
    },
    {
      icon: Cpu,
      title: "Tech Excellence",
      description:
        "Committed to technical excellence and continuous innovation.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-6 hover:shadow-lg transition-all duration-300 group hover:-translate-y-2">
                <motion.div whileHover={{ scale: 1.1 }} className="mb-4">
                  <feature.icon className="w-12 h-12 text-primary group-hover:text-primary/80 transition-colors" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
