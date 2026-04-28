"use client";
import { motion } from "framer-motion";
import PremiumCard from "./PremiumCard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const PremiumList = ({ items, type }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full flex flex-col items-center gap-6 px-4"
    >
      {items.map((item, index) => (
        <PremiumCard key={index} {...item} type={type} />
      ))}
    </motion.div>
  );
};

export default PremiumList;
