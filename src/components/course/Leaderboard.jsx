"use client";
import React from "react";
import { Trophy, Medal, Crown } from "lucide-react";

const leaderboardData = [
  { id: 1, name: "Zora Ahmed", phase: 4, level: "AI Expert", xp: 4820, avatar: "ZA" },
  { id: 2, name: "Karim Reza", phase: 3, level: "Advanced", xp: 3630, avatar: "KR" },
  { id: 3, name: "Nadia Islam", phase: 2, level: "Intermediate", xp: 3200, avatar: "NI" },
  { id: 4, name: "Mehdi Hassan", phase: 2, level: "Intermediate", xp: 2140, avatar: "MH" },
];

const Leaderboard = ({ userXP }) => {
  return (
    <div className="mt-24 mb-24 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-10">
        <div className="p-2 bg-game-purple/10 rounded-lg text-game-purple">
          <Trophy size={24} />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white font-sora tracking-tight">Top Learners This Week</h2>
          <p className="text-white/40 font-mono text-xs uppercase tracking-widest mt-1">
            Compete with the neural network community
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {leaderboardData.map((user, index) => (
          <div 
            key={user.id}
            className="flex items-center p-4 bg-game-dark/60 border border-white/5 rounded-2xl hover:border-game-teal/30 transition-all group"
          >
            <div className="w-10 font-mono text-white/20 font-bold text-lg group-hover:text-game-teal transition-colors">
              #0{index + 1}
            </div>
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center font-bold text-white/60 border border-white/10 group-hover:border-game-teal/40 transition-all">
              {user.avatar}
            </div>
            <div className="ml-6 flex-1">
              <h4 className="text-white font-sora font-semibold text-sm">{user.name}</h4>
              <p className="text-white/30 font-mono text-[10px] uppercase tracking-wider">
                Phase {user.phase} — {user.level}
              </p>
            </div>
            <div className="text-right">
              <span className="font-mono text-game-teal font-bold">{user.xp.toLocaleString()}</span>
              <span className="font-mono text-[10px] text-white/20 uppercase ml-2 tracking-tighter">XP</span>
            </div>
            <div className="ml-6 text-amber-400">
              {index === 0 && <Crown size={20} />}
              {index === 1 && <Medal size={20} />}
              {index === 2 && <Medal size={20} className="opacity-60" />}
            </div>
          </div>
        ))}

        {/* User Rank */}
        <div className="mt-6 flex items-center p-4 bg-game-purple/10 border border-game-purple/20 rounded-2xl shadow-lg shadow-game-purple/5">
          <div className="w-10 font-mono text-game-purple font-bold text-lg">#13</div>
          <div className="w-12 h-12 rounded-full bg-game-purple/20 flex items-center justify-center font-bold text-game-purple border border-game-purple/40">
            YOU
          </div>
          <div className="ml-6 flex-1">
            <h4 className="text-white font-sora font-semibold text-sm">Shahed Hossain Prem</h4>
            <p className="text-game-purple/60 font-mono text-[10px] uppercase tracking-wider">
              Phase 1 — Beginner
            </p>
          </div>
          <div className="text-right">
            <span className="font-mono text-game-purple font-bold">{userXP.toLocaleString()}</span>
            <span className="font-mono text-[10px] text-game-purple/40 uppercase ml-2 tracking-tighter">XP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
