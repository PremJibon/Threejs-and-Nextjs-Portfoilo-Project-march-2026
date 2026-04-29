"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Lock, PlayCircle } from "lucide-react";

const MissionItem = ({ mission, onLaunch, isActive }) => {
  const { title, xp, coins, completed, locked } = mission;

  return (
    <motion.div
      whileHover={!locked ? { x: 5, backgroundColor: "rgba(255,255,255,0.05)" } : {}}
      className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
          locked 
          ? "border-white/5 opacity-50 cursor-not-allowed" 
          : isActive ? "border-game-teal bg-game-teal/10" : "border-white/10 cursor-pointer hover:border-game-teal/50"
      } ${completed ? "bg-game-teal/5 border-game-teal/20" : "bg-transparent"}`}
    >
      <div className="flex items-center gap-4">
        <div className={`p-2 rounded-lg ${completed ? "text-game-teal" : locked ? "text-white/20" : "text-white/40"}`}>
          {completed ? <CheckCircle2 size={20} /> : locked ? <Lock size={20} /> : <PlayCircle size={20} />}
        </div>
        <div>
          <h4 className={`font-sora font-medium text-sm ${locked ? "text-white/40" : "text-white/90"}`}>
            {title}
          </h4>
          <div className="flex gap-3 mt-1">
            <span className="font-mono text-[10px] text-game-teal/80">+{xp} XP</span>
            <span className="font-mono text-[10px] text-amber-400/80">+{coins} COINS</span>
          </div>
        </div>
      </div>

      {!locked && !completed && (
        <button 
          onClick={() => onLaunch(mission)}
          className={`px-3 py-1 rounded-md font-mono text-[10px] uppercase tracking-wider border transition-colors ${
            isActive 
            ? "bg-game-teal text-game-dark border-game-teal" 
            : "bg-game-teal/10 hover:bg-game-teal/20 text-game-teal border-game-teal/20"
          }`}
        >
          {isActive ? "Active" : "Launch"}
        </button>
      )}
      
      {completed && (
        <span className="font-mono text-[10px] text-game-teal uppercase tracking-widest font-bold">
          Mastered
        </span>
      )}
    </motion.div>
  );
};

export default MissionItem;
