"use client";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

const NavLink = motion(Link);

const GithubBtn = () => {
  return (
    <NavLink
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      href={"https://github.com/PremJibon"}
      target={"_blank"}
      className="text-foreground rounded-full flex items-center justify-center
        custom-bg fixed bottom-4 left-4 w-fit z-50 group px-4 py-2
        "
      aria-label={"github profile"}
      name={"github profile"}
      prefetch={false}
    >
      <Github className="w-5 h-5 mr-2" strokeWidth={1.5} />
      <span className="text-sm font-light">GitHub Profile</span>
      <span className="sr-only">Go to GitHub Profile</span>
    </NavLink>
  );
};

export default GithubBtn;
