"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wand2, X, Send, Sparkles } from "lucide-react";
import clsx from "clsx";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Welcome, traveler! I am Prem's Magical Twin. With 4 years of wizardry in the digital arts, I am here to guide you through his work. How may I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await response.json();
      if (data.message) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.message }]);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: "Mage failure! My magic is lagging. Try again." }]);
      }
    } catch (error) {
      setMessages((prev) => [...prev, { role: "assistant", content: "The connection to the ethereal network was lost." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-[320px] sm:w-[400px] h-[500px] flex flex-col rounded-2xl border border-accent/30 bg-background/80 backdrop-blur-md shadow-glass-inset overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-accent/20 flex items-center justify-between bg-accent/10">
              <div className="flex items-center space-x-2">
                <Wand2 className="text-accent w-5 h-5 animate-pulse" />
                <span className="font-bold text-accent text-sm uppercase tracking-widest">
                  Prem's Magical Twin
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-foreground/60 hover:text-accent transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={clsx(
                    "flex flex-col max-w-[80%] space-y-1",
                    msg.role === "user" ? "ml-auto items-end" : "items-start"
                  )}
                >
                  <div
                    className={clsx(
                      "p-3 rounded-2xl text-sm leading-relaxed",
                      msg.role === "user"
                        ? "bg-accent/20 text-foreground border border-accent/30 rounded-tr-none"
                        : "bg-background/40 text-foreground/90 border border-white/10 rounded-tl-none shadow-glass-sm"
                    )}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex space-x-2 items-center text-accent/60">
                  <Sparkles className="w-4 h-4 animate-spin" />
                  <span className="text-xs italic">Casting a spell...</span>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-accent/20 flex items-center space-x-2 bg-background/20">
              <input
                type="text"
                placeholder="Ask the mage..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 bg-transparent border-none outline-none text-sm text-foreground placeholder:text-foreground/30"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="p-2 text-accent hover:scale-110 transition-transform disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Wand Toggle */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-background/20 backdrop-blur-md border border-accent/50 shadow-glass-inset flex items-center justify-center group relative"
      >
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Wand2 className="w-8 h-8 text-accent group-hover:drop-shadow-[0_0_8px_rgba(254,254,91,0.8)]" />
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: [0, (i - 1) * 20, 0],
                y: [0, -30, -60],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.6,
              }}
              className="absolute top-1/2 left-1/2 w-1 h-1 bg-accent rounded-full"
            />
          ))}
        </div>
      </motion.button>
    </div>
  );
};

export default Chatbot;
