"use client";
import { motion } from "framer-motion";
import { Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const NavLink = motion(Link);

const YoutubeBtn = () => {
  const pathname = usePathname();
  
  // Show only on the landing page (home) as requested
  if (pathname !== "/") return null;

  return (
    <NavLink
      initial={{ scale: 0, x: 50 }}
      animate={{ scale: 1, x: 0 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
      href={"https://www.youtube.com/@PremDEV-A2Z"}
      target={"_blank"}
      className="text-foreground rounded-full flex items-center justify-center
        custom-bg fixed top-24 right-4 w-fit z-50 group px-5 py-3
        hover:border-red-500/50 transition-all duration-500
        "
      aria-label={"youtube channel"}
      name={"youtube channel"}
      prefetch={false}
    >
      <div className="relative flex items-center">
        <Youtube 
          className="w-6 h-6 text-red-500 group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] transition-all duration-300 mr-3" 
          strokeWidth={2} 
        />
        <span className="text-xs font-bold tracking-[0.2em] uppercase group-hover:text-red-500 transition-colors duration-300">
          PremDEV-A2Z
        </span>
        
        {/* Hover Sparkle Effect */}
        <motion.div 
          className="absolute -inset-1 bg-red-500/20 blur-md rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      </div>
      
      <span className="sr-only">Visit my YouTube Channel</span>
    </NavLink>
  );
};

export default YoutubeBtn;
