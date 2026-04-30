"use client";
import dynamic from "next/dynamic";

const GameList = dynamic(() => import("@/components/games/GameList"), {
  ssr: false,
  loading: () => <p className="text-accent animate-pulse text-xl">Entering the vault...</p>,
});

const GameVaultClient = ({ gamesData }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen py-32">
      <div className="flex flex-col items-center text-center mb-16 space-y-4 px-4">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent/80 to-accent/40 uppercase">
          Gaming Vault
        </h1>
        <div className="h-1.5 w-32 bg-accent/40 rounded-full" />
        <p className="text-muted text-lg md:text-xl max-w-2xl font-medium leading-relaxed italic">
          Step into the arena. A collection of interactive experiences, 
          from retro revivals to modern experiments.
        </p>
      </div>
      
      <GameList items={gamesData} />
    </div>
  );
};

export default GameVaultClient;
