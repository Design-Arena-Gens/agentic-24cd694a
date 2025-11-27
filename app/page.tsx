"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Mail, Linkedin, Instagram, Award, Film, Zap } from "lucide-react";
import Scene3D from "@/components/Scene3D";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const projects = [
    {
      title: "Urban Dreams",
      category: "Commercial",
      year: "2024",
      description: "A cinematic journey through modern cityscapes, blending time-lapse photography with narrative storytelling.",
      tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
      thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
      videoUrl: "#"
    },
    {
      title: "Echoes of Silence",
      category: "Short Film",
      year: "2024",
      description: "An emotional exploration of memory and loss through non-linear storytelling and atmospheric grading.",
      tools: ["Premiere Pro", "Color Grading", "Sound Design"],
      thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
      videoUrl: "#"
    },
    {
      title: "TechFlow Launch",
      category: "Brand Campaign",
      year: "2023",
      description: "High-energy product launch video featuring dynamic motion graphics and seamless transitions.",
      tools: ["After Effects", "Cinema 4D", "Premiere Pro"],
      thumbnail: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80",
      videoUrl: "#"
    },
    {
      title: "Nature's Symphony",
      category: "Documentary",
      year: "2023",
      description: "Wildlife documentary segment featuring stunning slow-motion captures and environmental storytelling.",
      tools: ["DaVinci Resolve", "Premiere Pro", "Color Science"],
      thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
      videoUrl: "#"
    }
  ];

  const skills = [
    { name: "Premiere Pro", level: "Expert" },
    { name: "After Effects", level: "Expert" },
    { name: "DaVinci Resolve", level: "Advanced" },
    { name: "Color Grading", level: "Advanced" },
    { name: "Motion Graphics", level: "Advanced" },
    { name: "Sound Design", level: "Intermediate" },
    { name: "Cinema 4D", level: "Intermediate" },
    { name: "Storytelling", level: "Expert" }
  ];

  return (
    <div ref={containerRef} className="relative">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Scene3D />
      </div>

      {/* Hero Section */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative z-10 min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="font-playfair text-7xl md:text-9xl font-bold text-textPrimary mb-4 tracking-tight">
              JESHUA DAVID
            </h1>
            <p className="font-mono text-accentGlow text-lg md:text-xl mb-8 tracking-widest">
              VIDEO EDITOR & VISUAL STORYTELLER
            </p>
            <p className="font-inter text-textSecondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Crafting cinematic narratives through the art of editing.
              Specializing in commercial, documentary, and narrative content
              that resonates emotionally and visually.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-12 flex justify-center gap-6"
            >
              <a
                href="#projects"
                className="group bg-accentGlow text-background px-8 py-4 rounded-sm font-inter font-medium flex items-center gap-2 hover:bg-textPrimary transition-colors"
              >
                <Play size={20} />
                View Work
              </a>
              <a
                href="#contact"
                className="border border-accentGlow text-accentGlow px-8 py-4 rounded-sm font-inter font-medium hover:bg-accentGlow hover:text-background transition-colors"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-32">
        <div className="max-w-5xl w-full bg-surface/80 backdrop-blur-xl border border-textSecondary/20 p-12 rounded-sm">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-textPrimary mb-8">
              About
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="font-inter text-textSecondary text-lg leading-relaxed mb-6">
                  With over 5 years of experience in video editing and post-production,
                  I bring stories to life through meticulous attention to pacing,
                  color, and emotional resonance.
                </p>
                <p className="font-inter text-textSecondary text-lg leading-relaxed mb-6">
                  My work spans commercial campaigns, documentary features, and narrative
                  content, always with a focus on visual storytelling that connects with
                  audiences on a deeper level.
                </p>
                <div className="flex gap-4 mt-8">
                  <div className="flex items-center gap-2 text-accentGlow">
                    <Award size={24} />
                    <span className="font-mono text-sm">15+ Awards</span>
                  </div>
                  <div className="flex items-center gap-2 text-accentGlow">
                    <Film size={24} />
                    <span className="font-mono text-sm">100+ Projects</span>
                  </div>
                  <div className="flex items-center gap-2 text-accentGlow">
                    <Zap size={24} />
                    <span className="font-mono text-sm">5+ Years</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold text-textPrimary mb-6">
                  Skills & Expertise
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <SkillBadge key={index} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 min-h-screen px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-textPrimary mb-4">
              Selected Work
            </h2>
            <p className="font-inter text-textSecondary text-lg">
              A curated collection of recent projects
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 min-h-screen flex items-center justify-center px-6 py-32">
        <div className="max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-surface/80 backdrop-blur-xl border border-textSecondary/20 p-12 rounded-sm text-center"
          >
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-textPrimary mb-6">
              Let&apos;s Create Together
            </h2>
            <p className="font-inter text-textSecondary text-lg mb-12 max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>
            <div className="flex justify-center gap-6 mb-12">
              <a
                href="mailto:jeshua@example.com"
                className="flex items-center gap-2 text-accentGlow hover:text-textPrimary transition-colors"
              >
                <Mail size={24} />
                <span className="font-mono">Email</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accentGlow hover:text-textPrimary transition-colors"
              >
                <Linkedin size={24} />
                <span className="font-mono">LinkedIn</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accentGlow hover:text-textPrimary transition-colors"
              >
                <Instagram size={24} />
                <span className="font-mono">Instagram</span>
              </a>
            </div>
            <a
              href="mailto:jeshua@example.com"
              className="inline-block bg-accentGlow text-background px-10 py-5 rounded-sm font-inter font-medium text-lg hover:bg-textPrimary transition-colors"
            >
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-textSecondary/20 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-mono text-textSecondary text-sm">
            © 2024 Jeshua David. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
