"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const NavLink = motion(Link);

const OldPortfolioBtn = () => {
  const pathname = usePathname();
  if (pathname?.startsWith("/courses/")) return null;

  return (
    <NavLink
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5 }}
      href={"https://premjibon.ct.ws"}
      target={"_blank"}
      className="text-foreground rounded-full flex items-center justify-center
        custom-bg fixed bottom-20 left-4 w-fit z-50 group px-4 py-2
        "
      aria-label={"old portfolio"}
      name={"old portfolio"}
      prefetch={false}
    >
      <ExternalLink className="w-5 h-5 mr-2" strokeWidth={1.5} />
      <span className="text-sm font-light">My Old Portfolio</span>
      <span className="sr-only">Go to Old Portfolio Page</span>
    </NavLink>
  );
};

export default OldPortfolioBtn;
