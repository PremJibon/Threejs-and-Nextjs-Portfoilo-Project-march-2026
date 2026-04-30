import Image from "next/image";
import bg from "../../../../public/background/games-background.png";
import GameVaultClient from "@/components/games/GameVaultClient";
import { gamesData } from "../../data";

export const metadata = {
  title: "Games | Interactive Zone",
};

export default function Games() {
  return (
    <>
      <Image
        src={bg}
        alt="Games background"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-40"
        priority
        sizes="100vw"
      />

      <GameVaultClient gamesData={gamesData} />
    </>
  );
}
