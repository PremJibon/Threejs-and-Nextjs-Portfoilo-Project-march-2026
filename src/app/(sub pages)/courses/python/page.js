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
    title: "1. Hello, Python",
    difficulty: "Beginner",
    description: "A quick introduction to Python syntax, variable assignment, and numbers. The foundation of your data science journey.",
    conceptTitle: "Syntax & Variables",
    missions: [
      { 
        id: 101, title: "Initial Assignment", xp: 100, coins: 20, completed: false, locked: false,
        lesson: "Welcome to Python! Use the print() function and understand basic variable manipulation.",
        starterCode: "spam_amount = 0\nprint(spam_amount)\n\n# Ordering Spam, egg, Spam, Spam, bacon and Spam (4 more servings of Spam)\nspam_amount = spam_amount + 4\n\nif spam_amount > 0:\n    print('But I don\\'t want ANY spam!')\n\nviking_song = 'Spam ' * spam_amount\nprint(viking_song)"
      }
    ]
  },
  {
    id: 2,
    title: "2. Functions and Help",
    difficulty: "Beginner",
    description: "Defining and using functions, utilizing built-in help(), and understanding variable scope.",
    conceptTitle: "Functions",
    missions: [
      { 
        id: 201, title: "Defining Logic", xp: 150, coins: 30, completed: false, locked: true,
        lesson: "Use 'def' to create functions. Master docstrings and the help() function for professional documentation.",
        starterCode: "def least_difference(a, b, c):\n    \"\"\"Return the smallest difference between any two numbers among a, b and c.\"\"\"\n    diff1 = abs(a - b)\n    diff2 = abs(b - c)\n    diff3 = abs(a - c)\n    return min(diff1, diff2, diff3)\n\nprint(least_difference(1, 10, 100))\nhelp(least_difference)"
      }
    ]
  },
  {
    id: 3,
    title: "3. Booleans and Conditionals",
    difficulty: "Intermediate",
    description: "Using booleans for branching logic and control flow. The heart of decision-making in code.",
    conceptTitle: "Logic & Flow",
    missions: [
      { 
        id: 301, title: "Conditional Branching", xp: 200, coins: 40, completed: false, locked: true,
        lesson: "Master boolean operators (and, or, not) and conditional statements (if, elif, else) for complex logic.",
        starterCode: "def can_run_for_president(age, is_natural_born_citizen):\n    \"\"\"Can someone run for president in the US based on age and citizenship?\"\"\"\n    return is_natural_born_citizen and (age >= 35)\n\nprint(can_run_for_president(19, True))\nprint(can_run_for_president(55, False))"
      }
    ]
  },
  {
    id: 4,
    title: "4. Lists",
    difficulty: "Intermediate",
    description: "Organize data effectively using Python lists, indexing, slicing, and mutation.",
    conceptTitle: "Data Collections",
    missions: [
      { 
        id: 401, title: "Array Operations", xp: 250, coins: 50, completed: false, locked: true,
        lesson: "Learn to access list elements, perform slicing, and use list methods like append() and pop().",
        starterCode: "planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']\nprint(f'First: {planets[0]}')\nprint(f'Last: {planets[-1]}')\nprint(f'Inner Planets: {planets[0:4]}')"
      }
    ]
  },
  {
    id: 5,
    title: "5. Loops & List Comprehensions",
    difficulty: "Advanced",
    description: "Iteration and the elegant Pythonic way to transform data collections efficiently.",
    conceptTitle: "Pythonic Loops",
    missions: [
      { 
        id: 501, title: "Comprehension Quests", xp: 300, coins: 60, completed: false, locked: true,
        lesson: "Use for loops and list comprehensions to write concise, high-performance Python code.",
        starterCode: "squares = [n**2 for n in range(10)]\nprint(f'Squares: {squares}')\n\nplanets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']\nshort_planets = [p for p in planets if len(p) < 6]\nprint(f'Short Names: {short_planets}')"
      }
    ]
  },
  {
    id: 6,
    title: "6. Strings and Dictionaries",
    difficulty: "Advanced",
    description: "Working with text data and key-value mapping for structured data representation.",
    conceptTitle: "Text & Mappings",
    missions: [
      { 
        id: 601, title: "Data Structures", xp: 350, coins: 70, completed: false, locked: true,
        lesson: "Master string formatting and dictionary operations for real-world data processing.",
        starterCode: "numbers = {'one':1, 'two':2, 'three':3}\nnumbers['eleven'] = 11\nprint(f'Dict: {numbers}')\n\nclaim = \"Pluto is a planet!\"\nprint(claim.upper())\nprint(claim.split())"
      }
    ]
  },
  {
    id: 7,
    title: "7. Working with External Libraries",
    difficulty: "Expert",
    description: "Imports, using official documentation, and utilizing core libraries like math and random.",
    conceptTitle: "Library Integration",
    missions: [
      { 
        id: 701, title: "Module Mastery", xp: 400, coins: 80, completed: false, locked: true,
        lesson: "Learn how to import modules, inspect them with dir(), and use their specialized functions.",
        starterCode: "import math\nprint(f'Pi is approximately {math.pi}')\nprint(f'Log of 10 is {math.log(10)}')"
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
              { label: "Modules", value: "7" },
              { label: "Missions", value: "7+" },
              { label: "Standard", value: "PEP 8" },
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
        <XPBar currentXP={userXP} maxXP={1750} level={Math.floor(userXP / 300) + 1} />

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
          <h3 className="text-4xl font-bold font-sora mb-4">Initialize Your Training</h3>
          <p className="text-white/40 font-sora mb-10">Start Module 1 — master the core syntax of the most versatile language.</p>
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
