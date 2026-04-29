"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, Target, Zap, Terminal } from "lucide-react";
import MissionItem from "./MissionItem";
import CodeEditor from "./CodeEditor";

const PhaseCard = ({ phase, onMissionLaunch, onMissionComplete, activeMission }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const completedMissions = phase.missions.filter(m => m.completed).length;
  const totalMissions = phase.missions.length;
  const progress = (completedMissions / totalMissions) * 100;

  return (
    <div className={`mb-6 rounded-2xl border transition-all duration-500 overflow-hidden ${
      isExpanded 
        ? "bg-game-dark/90 border-game-purple/50 shadow-[0_0_30px_rgba(168,85,247,0.15)]" 
        : "bg-game-dark/40 border-white/10 hover:border-white/20"
    }`}>
      {/* Header */}
      <div 
        className="p-6 cursor-pointer flex items-center justify-between"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-6">
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${
            isExpanded ? "bg-game-purple text-white shadow-lg shadow-game-purple/20" : "bg-white/5 text-white/40"
          }`}>
            {phase.id === 1 && <Zap size={28} />}
            {phase.id === 2 && <Target size={28} />}
            {phase.id === 3 && <Sparkles size={28} />}
            {phase.id === 4 && <Zap size={28} className="rotate-180" />}
          </div>
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-game-purple/80">Phase 0{phase.id}</span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                phase.difficulty === 'Beginner' ? 'bg-emerald-500/10 text-emerald-400' :
                phase.difficulty === 'Intermediate' ? 'bg-amber-500/10 text-amber-400' :
                'bg-rose-500/10 text-rose-400'
              }`}>
                {phase.difficulty}
              </span>
            </div>
            <h3 className="font-sora text-xl font-bold text-white mt-1">{phase.title}</h3>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden md:block w-32">
            <div className="flex justify-between mb-1">
              <span className="font-mono text-[10px] text-white/40">Progress</span>
              <span className="font-mono text-[10px] text-game-teal">{Math.round(progress)}%</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-game-teal"
              />
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className="text-white/20"
          >
            <ChevronDown size={24} />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "circOut" }}
          >
            <div className="px-6 pb-8 pt-2 border-t border-white/5">
              <p className="text-white/60 font-sora text-sm mb-6 max-w-2xl">
                {phase.description}
              </p>
              
              {/* Concept Animation Preview */}
              {phase.conceptVideo && (
                <div className="mb-8 rounded-xl overflow-hidden border border-white/10 bg-black/40 aspect-video relative group">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                  >
                    <source src={phase.conceptVideo} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-game-dark via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4">
                    <span className="font-mono text-[10px] bg-game-purple/20 text-game-purple border border-game-purple/30 px-2 py-1 rounded">
                      MANIM CONCEPT: {phase.conceptTitle}
                    </span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {phase.missions.map((mission) => (
                  <MissionItem 
                    key={mission.id} 
                    mission={mission} 
                    onLaunch={onMissionLaunch}
                    isActive={activeMission?.id === mission.id}
                  />
                ))}
              </div>

              {/* Lab Section */}
              {activeMission && phase.missions.some(m => m.id === activeMission.id) && (
                <div className="pt-6 border-t border-white/5">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Terminal size={16} className="text-game-teal" />
                      <h4 className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Phase Lab: Practice Environment</h4>
                    </div>
                  </div>
                  
                  <div className="mb-4 p-4 bg-game-teal/5 border border-game-teal/20 rounded-lg">
                    <h5 className="font-sora font-semibold text-game-teal mb-2">Briefing: {activeMission.title}</h5>
                    <p className="text-white/70 text-sm">{activeMission.lesson}</p>
                  </div>

                  <CodeEditor 
                    key={activeMission.id} // Force re-mount on mission change
                    initialCode={activeMission.starterCode} 
                    onComplete={() => onMissionComplete(activeMission.id)}
                  />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhaseCard;
