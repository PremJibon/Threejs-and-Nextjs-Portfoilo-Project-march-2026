"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Star, Palette, Keyboard, Shield, Zap } from "lucide-react";

const shopItems = [
  { id: 1, name: "Dark Pro Theme", price: 50, icon: Palette, color: "text-pink-400" },
  { id: 2, name: "Virtual Keyboard", price: 120, icon: Keyboard, color: "text-blue-400" },
  { id: 3, name: "Rare Snake Skin", price: 200, icon: Shield, color: "text-emerald-400" },
  { id: 4, name: "XP Double Boost", price: 150, icon: Zap, color: "text-amber-400" },
  { id: 5, name: "Hint Token x3", price: 40, icon: Star, color: "text-purple-400" },
  { id: 6, name: "Tournament Entry", price: 300, icon: ShoppingBag, color: "text-rose-400" },
];

const DevShop = ({ userCoins, onBuy }) => {
  return (
    <div className="mt-24 mb-32">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-amber-400/10 rounded-lg text-amber-400">
          <ShoppingBag size={24} />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white font-sora tracking-tight">The Dev Shop</h2>
          <p className="text-white/40 font-mono text-xs uppercase tracking-widest mt-1">
            Spend your hard-earned coins on perks
          </p>
        </div>
        <div className="ml-auto bg-amber-400/10 border border-amber-400/20 px-4 py-2 rounded-xl flex items-center gap-2">
          <span className="font-mono text-amber-400 font-bold">{userCoins}</span>
          <span className="font-mono text-[10px] text-amber-400/60 uppercase">Coins</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {shopItems.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -5 }}
            className="p-6 bg-game-dark/60 border border-white/5 rounded-2xl flex flex-col items-center text-center group hover:border-game-purple/30 transition-colors"
          >
            <div className={`p-4 rounded-2xl bg-white/5 mb-4 group-hover:bg-white/10 transition-colors ${item.color}`}>
              <item.icon size={32} />
            </div>
            <h4 className="font-sora text-xs font-semibold text-white/80 mb-2">{item.name}</h4>
            <button 
              onClick={() => onBuy(item)}
              disabled={userCoins < item.price}
              className={`w-full py-2 rounded-lg font-mono text-[10px] font-bold transition-all ${
                userCoins >= item.price
                  ? "bg-amber-400/10 text-amber-400 hover:bg-amber-400 hover:text-game-dark"
                  : "bg-white/5 text-white/20 cursor-not-allowed"
              }`}
            >
              {item.price} COINS
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DevShop;
