"use client";
import { motion } from "framer-motion";
import GameCard from "./GameCard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const GameList = ({ items }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-6xl px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {items.map((game) => (
        <GameCard key={game.id} {...game} />
      ))}
    </motion.div>
  );
};

export default GameList;
