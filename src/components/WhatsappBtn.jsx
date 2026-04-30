"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react"; // Using MessageCircle as a generic chat/whatsapp icon since Lucide doesn't have a direct WhatsApp icon by default
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const NavLink = motion(Link);

const WhatsappBtn = () => {
  const pathname = usePathname();
  
  // Show only on the contact page as requested
  if (pathname !== "/contact") return null;

  return (
    <NavLink
      initial={{ scale: 0, y: 50 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      href={"https://wa.me/8801712310452"}
      target={"_blank"}
      className="text-foreground rounded-full flex items-center justify-center
        custom-bg fixed bottom-24 right-6 w-fit z-50 group px-5 py-3
        hover:border-green-500/50 transition-all duration-500 shadow-lg shadow-green-500/20
        "
      aria-label={"whatsapp chat"}
      name={"whatsapp chat"}
      prefetch={false}
    >
      <div className="relative flex items-center">
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-green-500 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)] transition-all duration-300 mr-3"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.123.544 4.197 1.582 6.015L0 24l6.117-1.604a11.803 11.803 0 005.931 1.603h.005c6.634 0 12.032-5.394 12.036-12.031a11.811 11.811 0 00-3.535-8.414z" />
        </svg>
        <span className="text-xs font-bold tracking-[0.1em] uppercase group-hover:text-green-500 transition-colors duration-300">
          Chat on WhatsApp
        </span>
        
        {/* Hover Sparkle Effect */}
        <motion.div 
          className="absolute -inset-1 bg-green-500/20 blur-md rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      </div>
      
      <span className="sr-only">Chat with me on WhatsApp</span>
    </NavLink>
  );
};

export default WhatsappBtn;
