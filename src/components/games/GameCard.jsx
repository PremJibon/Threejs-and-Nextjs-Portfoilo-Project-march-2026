"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, Zap } from "lucide-react";

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

const GameCard = ({ name, thumbnail, demoLink, badge }) => {
  return (
    <motion.div
      variants={item}
      className="group relative w-full aspect-[16/9] rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-accent/20 transition-all duration-300"
    >
      <Link href={demoLink} target="_blank" className="block w-full h-full">
        <Image
          src={thumbnail}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <h3 className="text-foreground font-bold text-lg drop-shadow-md">
            {name}
          </h3>
        </div>

        {/* Badge */}
        {badge && (
          <div className="absolute top-2 left-2 flex items-center gap-1 bg-accent text-background text-[10px] font-bold px-2 py-0.5 rounded shadow-md uppercase tracking-wider">
            {badge === "Original" ? <Zap size={10} fill="currentColor" /> : <Star size={10} fill="currentColor" />}
            {badge}
          </div>
        )}

        {/* Hover Border */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 rounded-xl transition-colors duration-300 pointer-events-none" />
      </Link>
    </motion.div>
  );
};

export default GameCard;
