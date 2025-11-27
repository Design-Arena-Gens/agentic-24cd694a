"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  level: string;
}

export default function SkillBadge({ name, level }: SkillBadgeProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "border-accentGlow text-accentGlow";
      case "Advanced":
        return "border-textPrimary text-textPrimary";
      case "Intermediate":
        return "border-textSecondary text-textSecondary";
      default:
        return "border-textSecondary text-textSecondary";
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`border ${getLevelColor(level)} px-4 py-2 rounded-sm`}
    >
      <span className="font-inter text-sm font-medium">{name}</span>
      <span className="font-mono text-xs ml-2 opacity-70">({level})</span>
    </motion.div>
  );
}
