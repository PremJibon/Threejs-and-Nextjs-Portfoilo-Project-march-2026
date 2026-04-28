import Image from "next/image";
import bg from "../../../../public/background/tools-background.png";
import PremiumList from "@/components/PremiumList";
import { toolsData } from "../../data";

export const metadata = {
  title: "Tools | Engineering Bay",
};

export default function Tools() {
  return (
    <>
      <Image
        src={bg}
        alt="Tools background"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-40"
        priority
        sizes="100vw"
      />

      <div className="flex flex-col items-center justify-center w-full min-h-screen py-32">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent/80 to-accent/40 uppercase">
            Tech Arsenal
          </h1>
          <div className="h-1.5 w-32 bg-accent/40 rounded-full" />
          <p className="text-muted text-lg md:text-xl max-w-2xl px-6 font-medium leading-relaxed italic">
            Elite-grade tools for modern engineering. Precision-built resources 
            to accelerate development and maximize operational efficiency.
          </p>
        </div>
        
        <PremiumList items={toolsData} type="tool" />
      </div>
    </>
  );
}
