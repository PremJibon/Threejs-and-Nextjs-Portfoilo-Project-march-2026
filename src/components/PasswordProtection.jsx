"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lock, ShieldAlert, KeyRound } from "lucide-react";

const PasswordProtection = ({ children, correctPassword = "4346" }) => {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authorized = sessionStorage.getItem("tools_authorized");
    if (authorized === "true") {
      setIsAuthorized(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthorized(true);
      sessionStorage.setItem("tools_authorized", "true");
      setError(false);
    } else {
      setError(true);
      setPassword("");
      // Reset error after animation
      setTimeout(() => setError(false), 500);
    }
  };

  if (isLoading) return null;

  if (isAuthorized) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/80 backdrop-blur-md px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-md p-8 rounded-2xl custom-bg border-accent/50 flex flex-col items-center gap-6"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full" />
          <div className="relative p-4 bg-background border border-accent/30 rounded-full">
            <Lock className="w-12 h-12 text-accent" />
          </div>
        </div>

        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-foreground uppercase">
            Restricted Access
          </h2>
          <p className="text-muted text-sm font-medium">
            Enter terminal clearance code to access the Tech Arsenal
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <motion.div
            animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="CLEARANCE CODE"
              className="w-full bg-background/50 border-2 border-accent/20 focus:border-accent text-center text-3xl tracking-[1em] py-4 rounded-xl outline-none transition-all placeholder:text-muted/30 placeholder:tracking-normal placeholder:text-sm font-mono text-accent"
              autoFocus
              maxLength={4}
            />
            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute -bottom-6 left-0 right-0 text-center text-red-500 text-[10px] font-bold uppercase tracking-widest"
              >
                INVALID CLEARANCE CODE
              </motion.div>
            )}
          </motion.div>

          <button
            type="submit"
            className="w-full py-4 bg-accent text-background font-black rounded-xl hover:bg-accent/80 transition-all active:scale-95 uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-accent/20"
          >
            <KeyRound className="w-5 h-5" />
            Authenticate
          </button>
        </form>

        <div className="flex items-center gap-2 text-[10px] text-muted font-mono opacity-50">
          <ShieldAlert className="w-3 h-3" />
          ENCRYPTED BIOMETRIC HANDSHAKE REQUIRED
        </div>
      </motion.div>
    </div>
  );
};

export default PasswordProtection;
