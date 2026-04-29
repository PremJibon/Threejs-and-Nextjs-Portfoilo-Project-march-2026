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
    description: "Start your quest here. Master the syntax, variable assignment, and numbers in the Python world. Your first steps towards data science mastery.",
    conceptTitle: "Syntax & Variables",
    missions: [
      { 
        id: 101, 
        title: "Hello, Python", 
        xp: 100, coins: 20, completed: false, locked: false,
        lesson: "Welcome to Python! A quick introduction to syntax, variable assignment, and arithmetic operations.",
        starterCode: "spam_amount = 0\nprint(spam_amount)\n\n# Ordering Spam, egg, Spam, Spam, bacon and Spam (4 more servings of Spam)\nspam_amount = spam_amount + 4\nprint(spam_amount)"
      }
    ]
  },
  {
    id: 2,
    title: "2. Functions and Getting Help",
    difficulty: "Beginner",
    description: "Calling functions and defining our own, and using Python's built-in documentation.",
    conceptTitle: "Functions & Docstrings",
    missions: [
      { 
        id: 201, 
        title: "Defining Functions", 
        xp: 150, coins: 30, completed: false, locked: true,
        lesson: "Learn to use the help() function and define your own functions using the 'def' keyword.",
        starterCode: "def least_difference(a, b, c):\n    \"\"\"Return the smallest difference between any two numbers among a, b and c.\"\"\"\n    diff1 = abs(a - b)\n    diff2 = abs(b - c)\n    diff3 = abs(a - c)\n    return min(diff1, diff2, diff3)\n\nprint(least_difference(1, 10, 100))"
      }
    ]
  },
  {
    id: 3,
    title: "3. Booleans and Conditionals",
    difficulty: "Beginner",
    description: "Using booleans for branching logic. Make your code make decisions.",
    conceptTitle: "Control Flow",
    missions: [
      { 
        id: 301, 
        title: "If, Elif, and Else", 
        xp: 200, coins: 40, completed: false, locked: true,
        lesson: "Python uses booleans to evaluate conditions. Use if, elif, and else statements to control the flow of your program.",
        starterCode: "def inspect(x):\n    if x == 0:\n        print(x, 'is zero')\n    elif x > 0:\n        print(x, 'is positive')\n    elif x < 0:\n        print(x, 'is negative')\n    else:\n        print(x, 'is unlike anything I\\'ve ever seen...')\n\ninspect(0)\ninspect(-15)"
      }
    ]
  },
  {
    id: 4,
    title: "4. Lists",
    difficulty: "Intermediate",
    description: "Lists and the things you can do with them. Includes indexing, slicing and mutating.",
    conceptTitle: "Lists & Mutability",
    missions: [
      { 
        id: 401, 
        title: "Lists and Indexing", 
        xp: 250, coins: 50, completed: false, locked: true,
        lesson: "Lists represent ordered sequences of values. Learn how to index, slice, and modify them.",
        starterCode: "planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']\n\n# Get the planet closest to the sun\nprint('Closest:', planets[0])\n\n# Get the last planet\nprint('Farthest:', planets[-1])\n\n# Slicing\nprint('First 3 planets:', planets[0:3])"
      }
    ]
  },
  {
    id: 5,
    title: "5. Loops and List Comprehensions",
    difficulty: "Intermediate",
    description: "For and while loops, and a much-loved Python feature: list comprehensions.",
    conceptTitle: "Loops & Comprehensions",
    missions: [
      { 
        id: 501, 
        title: "For Loops & Comprehensions", 
        xp: 300, coins: 60, completed: false, locked: true,
        lesson: "For loops let you iterate over lists. List comprehensions provide a concise way to create lists.",
        starterCode: "planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']\n\n# Standard loop\nfor planet in planets:\n    print(planet, end=' ')\nprint()\n\n# List comprehension: uppercase all planets\nupper_planets = [planet.upper() for planet in planets]\nprint(upper_planets)"
      }
    ]
  },
  {
    id: 6,
    title: "6. Strings and Dictionaries",
    difficulty: "Intermediate",
    description: "Working with strings and dictionaries, two of Python's most powerful data structures.",
    conceptTitle: "Strings & Dictionaries",
    missions: [
      { 
        id: 601, 
        title: "Dictionaries", 
        xp: 350, coins: 70, completed: false, locked: true,
        lesson: "Dictionaries are built-in Python data structures for mapping keys to values.",
        starterCode: "numbers = {'one':1, 'two':2, 'three':3}\n\nprint('Value for one:', numbers['one'])\n\n# Add a new key-value pair\nnumbers['eleven'] = 11\n\n# Iterate over dictionary\nfor k, v in numbers.items():\n    print('{} = {}'.format(k, v))"
      }
    ]
  },
  {
    id: 7,
    title: "7. Working with External Libraries",
    difficulty: "Advanced",
    description: "Imports, operator overloading, and namespaces. Learn how to leverage the Python ecosystem.",
    conceptTitle: "Imports & Libraries",
    missions: [
      { 
        id: 701, 
        title: "Imports and Namespaces", 
        xp: 400, coins: 100, completed: false, locked: true,
        lesson: "The power of Python lies in its ecosystem. Learn how to import external libraries like math.",
        starterCode: "import math\n\nprint('Pi is approximately', math.pi)\nprint('Log of 32 base 2 is', math.log(32, 2))\n\n# Using aliases\nimport numpy as np\nrolls = np.random.randint(low=1, high=6, size=10)\nprint('10 dice rolls:', rolls)"
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
              { label: "Phases", value: "7" },
              { label: "Missions", value: "7+" },
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
