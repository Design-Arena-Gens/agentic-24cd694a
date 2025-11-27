"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface Project {
  title: string;
  category: string;
  year: string;
  description: string;
  tools: string[];
  thumbnail: string;
  videoUrl: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-surface/60 backdrop-blur-sm border border-textSecondary/20 rounded-sm overflow-hidden hover:border-accentGlow/50 transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.videoUrl}
            className="bg-accentGlow text-background p-4 rounded-full hover:scale-110 transition-transform"
          >
            <Play size={32} fill="currentColor" />
          </a>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-playfair text-2xl font-bold text-textPrimary mb-1">
              {project.title}
            </h3>
            <p className="font-mono text-accentGlow text-sm">
              {project.category} • {project.year}
            </p>
          </div>
        </div>
        <p className="font-inter text-textSecondary text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool, i) => (
            <span
              key={i}
              className="font-mono text-xs text-textSecondary border border-textSecondary/30 px-3 py-1 rounded-sm"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
