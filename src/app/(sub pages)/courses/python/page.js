"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import XPBar from "@/components/course/XPBar";
import PhaseCard from "@/components/course/PhaseCard";
import DevShop from "@/components/course/DevShop";
import bg from "../../../../../public/background/courses-background.png";

const INITIAL_PHASES = [
  {
    id: 1,
    title: "The Newbie Narrative",
    difficulty: "Beginner",
    description: "Start your quest here. Master the syntax, variables, and the logic of the Python serpent. This phase focuses on core Python and visual feedback.",
    conceptTitle: "Variable Boxes & Basic Flow",
    missions: [
      { 
        id: 101, 
        title: "Setup + First Code", 
        xp: 50, coins: 10, completed: false, locked: false,
        lesson: "Welcome to Python! To get started, you just need to know how to print output to the screen. Use the print() function.",
        starterCode: "# Print a welcome message to the console\nprint('Hello, Python Explorer!')"
      },
      { 
        id: 102, 
        title: "Variables (Visual Box System)", 
        xp: 100, coins: 25, completed: false, locked: true,
        lesson: "Variables are like boxes where you store data. Just name it and assign a value! Try creating variables for your player name and health.",
        starterCode: "player_name = 'Hero'\nplayer_health = 100\n\n# Print the variables\nprint('Player:', player_name)\nprint('Health:', player_health)"
      },
      { 
        id: 103, 
        title: "Data Types", 
        xp: 150, coins: 30, completed: false, locked: true,
        lesson: "Python has different types of data: Strings (text), Integers (whole numbers), and Floats (decimals). Let's see how they work together.",
        starterCode: "coins = 50       # Integer\nmultiplier = 1.5 # Float\n\ntotal = coins * multiplier\nprint('Total Coins:', total)"
      },
      { 
        id: 104, 
        title: "Conditionals (Decision Gates)", 
        xp: 200, coins: 40, completed: false, locked: true,
        lesson: "Code needs to make decisions. Use 'if' to execute code when a condition is True, and 'else' for when it's False.",
        starterCode: "player_level = 5\n\nif player_level >= 10:\n    print('You can enter the dungeon!')\nelse:\n    print('You need more XP.')"
      },
      { 
        id: 105, 
        title: "Loops (Animation-based)", 
        xp: 250, coins: 50, completed: false, locked: true,
        lesson: "Loops allow you to repeat actions. A 'for' loop iterates over a sequence. Let's count down from 3.",
        starterCode: "for count in range(3, 0, -1):\n    print(count)\nprint('Go!')"
      }
    ]
  },
  {
    id: 2,
    title: "The Logic Labyrinth",
    difficulty: "Intermediate",
    description: "Make users build actual games. Focus on Real Logic + Mini Games using Pygame Zero principles.",
    conceptTitle: "Game Loops & Events",
    missions: [
      { 
        id: 201, 
        title: "Lists & Dictionaries", 
        xp: 300, coins: 60, completed: false, locked: true,
        lesson: "Lists store multiple items in an ordered sequence. Dictionaries store data in key-value pairs. They are essential for game inventory systems.",
        starterCode: "inventory = ['sword', 'shield', 'potion']\nplayer_stats = {'strength': 15, 'agility': 10}\n\nprint('Inventory:', inventory)\nprint('Strength:', player_stats['strength'])"
      },
      { 
        id: 202, 
        title: "Functions (Reusable Magic)", 
        xp: 400, coins: 80, completed: false, locked: true,
        lesson: "Functions let you bundle code into reusable blocks. Define a function using 'def' and call it whenever you need that logic.",
        starterCode: "def attack_enemy(damage):\n    print('You dealt', damage, 'damage!')\n\n# Call the function\nattack_enemy(25)"
      }
    ]
  },
  {
    id: 3,
    title: "Architecting the Mind",
    difficulty: "Advanced",
    description: "Systems Thinking. Make them think like engineers with deep OOP, Data structures, and File handling.",
    conceptTitle: "Object-Oriented Programming",
    missions: [
      { 
        id: 301, 
        title: "Classes and Objects", 
        xp: 500, coins: 100, completed: false, locked: true,
        lesson: "Classes are blueprints for creating objects. An object bundles data (attributes) and behavior (methods) together.",
        starterCode: "class Player:\n    def __init__(self, name):\n        self.name = name\n        self.score = 0\n\np1 = Player('Zora')\nprint(p1.name, 'joined the game.')"
      }
    ]
  },
  {
    id: 4,
    title: "Expert / Monetizable Skills",
    difficulty: "Expert",
    description: "Real-world SaaS development. Make users job-ready with APIs, Authentication, Databases, and Deployment.",
    conceptTitle: "APIs & Databases",
    missions: [
      { 
        id: 401, 
        title: "Mock API Fetch", 
        xp: 1000, coins: 200, completed: false, locked: true,
        lesson: "In the real world, you fetch data from APIs. Let's simulate a basic API response handling.",
        starterCode: "import json\n\nmock_response = '{\"user\": \"Alex\", \"role\": \"admin\"}'\ndata = json.loads(mock_response)\n\nprint('Welcome back,', data['user'])"
      }
    ]
  }
];

export default function PythonCoursePage() {
  const [phases, setPhases] = useState(INITIAL_PHASES);
  const [userXP, setUserXP] = useState(0);
  const [userCoins, setUserCoins] = useState(0);
  const [activeMission, setActiveMission] = useState(INITIAL_PHASES[0].missions[0]);

  const handleMissionLaunch = (mission) => {
    setActiveMission(mission);
    // Auto-scroll to lab could go here
  };

  const handleMissionComplete = (missionId) => {
    setPhases(prevPhases => prevPhases.map(phase => ({
      ...phase,
      missions: phase.missions.map((m, index, array) => {
        if (m.id === missionId && !m.completed) {
          setUserXP(prev => prev + m.xp);
          setUserCoins(prev => prev + m.coins);
          
          // Unlock the next mission in the array if it exists
          if (index + 1 < array.length) {
             array[index + 1].locked = false;
          }
          
          return { ...m, completed: true };
        }
        return m;
      })
    })));
  };

  const handleBuyItem = (item) => {
    if (userCoins >= item.price) {
      setUserCoins(prev => prev - item.price);
      alert(`Unlocked: ${item.name}! Check your profile perks.`);
    }
  };

  return (
    <div className="min-h-screen bg-game-dark text-white selection:bg-game-teal selection:text-game-dark overflow-x-hidden">
      {/* Background Image with darker overlay for gaming vibe */}
      <Image
        src={bg}
        alt="Courses background"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-20 grayscale brightness-50"
        priority
        sizes="100vw"
      />

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-game-teal/10 border border-game-teal/20 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-game-teal animate-pulse" />
            <span className="font-mono text-[10px] text-game-teal uppercase tracking-widest font-bold">
              Gamified Python Academy
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-bold font-sora tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40"
          >
            Learn Python.<br />
            <span className="text-game-teal drop-shadow-[0_0_15px_rgba(45,212,191,0.3)]">Level Up For Real.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 font-sora text-lg max-w-2xl mb-12"
          >
            Learn Python by writing actual code. Read the mission briefings, 
            experiment in the built-in terminal, and earn XP to level up.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl">
            {[
              { label: "Phases", value: "4" },
              { label: "Missions", value: "40+" },
              { label: "System", value: "XP" },
              { label: "Rewards", value: "Shop" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="p-4 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="text-2xl font-bold font-mono text-game-teal">{stat.value}</div>
                <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* XP Bar Component */}
        <XPBar currentXP={userXP} maxXP={1400} level={Math.floor(userXP / 300) + 1} />

        {/* Phase Cards Section */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">Course Phases — Click to Explore</h2>
            <div className="flex-1 h-[1px] bg-white/5" />
          </div>
          
          {phases.map((phase) => (
            <PhaseCard 
              key={phase.id} 
              phase={phase} 
              onMissionLaunch={handleMissionLaunch}
              onMissionComplete={handleMissionComplete}
              activeMission={activeMission}
            />
          ))}
        </div>

        {/* Shop Section */}
        <DevShop userCoins={userCoins} onBuy={handleBuyItem} />



        {/* Call to Action */}
        <div className="text-center py-20 border-t border-white/5">
          <h3 className="text-4xl font-bold font-sora mb-4">Ready to start your quest?</h3>
          <p className="text-white/40 font-sora mb-10">Begin Phase 1 — it takes 5 minutes to earn your first XP.</p>
          <button 
            onClick={() => handleMissionLaunch(phases[0].missions[0])}
            className="px-8 py-4 bg-game-teal text-game-dark font-bold rounded-xl font-mono uppercase tracking-widest hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(45,212,191,0.2)]"
          >
            Start Phase 1 Free
          </button>
        </div>
      </main>

      <footer className="py-10 text-center border-t border-white/5">
        <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em]">
          &copy; 2026 Neural Modules — Gamified Learning System
        </p>
      </footer>
    </div>
  );
}
