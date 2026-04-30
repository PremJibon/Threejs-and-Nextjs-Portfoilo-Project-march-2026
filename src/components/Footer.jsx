"use client";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  if (pathname !== "/about") return null;

  return (
    <footer className="fixed bottom-2 w-full flex justify-center items-center text-[10px] sm:text-xs text-muted/50 z-40 pointer-events-none">
      <div className="bg-background/30 backdrop-blur-sm px-4 py-1 rounded-full border border-white/5 pointer-events-auto">
        © {new Date().getFullYear()} Prem Jibon. All rights reserved. |{" "}
        <a
          href="/privacy-policy"
          className="hover:text-accent transition-colors"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
