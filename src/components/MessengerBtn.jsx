"use client";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const MessengerBtn = () => {
  const pathname = usePathname();
  if (pathname !== "/contact") return null;

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.8 }}
      className="fixed bottom-40 right-6 z-50 group"
    >
      <Link
        href="https://m.me/prem.jibon.7"
        target={"_blank"}
        className="text-foreground  rounded-full flex items-center justify-center
        custom-bg w-14 h-14 hover:border-blue-500/50 transition-all duration-500 shadow-lg shadow-blue-500/20
        "
        aria-label={"Messenger"}
        name={"Messenger"}
      >
        <span className="relative w-14 h-14 p-3.5 hover:text-blue-500 transition-colors duration-300">
          <svg
            viewBox="0 0 24 24"
            className="w-full h-auto fill-blue-500 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
          >
            <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.107.307 2.271.472 3.443.472 6.627 0 12-4.974 12-11.111S18.627 0 12 0zm1.31 14.993l-3.348-3.57-6.54 3.57 7.19-7.625 3.348 3.57 6.54-3.57-7.19 7.625z" />
          </svg>

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
