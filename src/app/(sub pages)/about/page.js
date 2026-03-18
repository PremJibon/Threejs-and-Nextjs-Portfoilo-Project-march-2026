import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import AboutDetails from "@/components/about";
import AboutClient from "@/components/about/AboutClient";

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <AboutClient 
        name="Prem Jibon" 
        description="Meet the wizard behind this portfolio" 
      />

      <AboutDetails />
    </>
  );
}
