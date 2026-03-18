"use client";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MessengerBtn = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-24 right-6 z-50 group"
    >
      <Link
        href="https://m.me/prem.jibon.7"
        target={"_blank"}
        className="text-foreground  rounded-full flex items-center justify-center
        custom-bg w-14 h-14
        "
        aria-label={"Messenger"}
        name={"Messenger"}
      >
        <span className="relative  w-14 h-14 p-4 hover:text-accent transition-colors duration-300">
          <MessageCircle className="w-full h-auto" strokeWidth={1.5} />

          <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

          <span className="absolute hidden peer-hover:block px-2 py-1 right-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
            Messenger
          </span>
        </span>
      </Link>
    </motion.div>
  );
};

export default MessengerBtn;
