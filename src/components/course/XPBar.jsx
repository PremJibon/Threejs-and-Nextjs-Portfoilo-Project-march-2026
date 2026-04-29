"use client";
import React from "react";
import { motion } from "framer-motion";

const XPBar = ({ currentXP, maxXP, level }) => {
  const percentage = (currentXP / maxXP) * 100;

  return (
    <div className="w-full max-w-4xl mx-auto mb-12 p-6 bg-game-dark/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-game-purple to-game-teal flex items-center justify-center font-mono font-bold text-white shadow-lg">
            {level}
          </div>
          <div>
            <h3 className="font-sora font-semibold text-white/90 text-sm uppercase tracking-wider">
              Python Mastery Level
            </h3>
            <p className="font-mono text-game-teal text-xs">Rank: Aspiring Architect</p>
          </div>
        </div>
        <div className="text-right">
          <span className="font-mono text-white text-sm">
            {currentXP} <span className="text-white/40">/ {maxXP} XP</span>
          </span>
        </div>
      </div>

      <div className="relative h-4 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-game-purple via-game-teal to-game-teal shadow-[0_0_20px_rgba(45,212,191,0.5)]"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] animate-[shimmer_2s_infinite]" />
      </div>
      
      <div className="flex justify-between mt-2 px-1">
        <span className="text-[10px] font-mono text-white/30 uppercase tracking-tighter">Genesis</span>
        <span className="text-[10px] font-mono text-white/30 uppercase tracking-tighter">Ascension</span>
      </div>
    </div>
  );
};

export default XPBar;
