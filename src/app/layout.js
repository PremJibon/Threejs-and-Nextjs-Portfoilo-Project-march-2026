import { Inter, Space_Mono, Sora } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";
import OldPortfolioBtn from "@/components/OldPortfolioBtn";
import YoutubeBtn from "@/components/YoutubeBtn";
import Chatbot from "@/components/Chat/Chatbot";
import WhatsappBtn from "@/components/WhatsappBtn";
import MessengerBtn from "@/components/MessengerBtn";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata = {
  metadataBase: new URL("https://premjibon.ct.ws"),
  title: {
    template:
      "Prem Jibon's Portfolio | %s",
    default:
      "Prem Jibon | Full-stack Developer Portfolio",
  },
  description:
    "A creative portfolio for Shahed Hossain Prem (Prem Jibon), a full-stack developer specializing in modern web technologies like Next.js, Three.js, and Framer Motion.",
  openGraph: {
    title: "Prem Jibon | Full-stack Developer Portfolio",
    description: "A creative portfolio for Shahed Hossain Prem (Prem Jibon), a full-stack developer specializing in modern web technologies, Python, and n8n automation.",
    url: "https://premjibon.ct.ws",
    siteName: "Prem Jibon Portfolio",
    images: [
      {
        url: "/background/home-background.png", // using an existing image as OG
        width: 1200,
        height: 630,
        alt: "Prem Jibon Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          spaceMono.variable,
          sora.variable,
          "bg-background text-foreground font-inter"
        )}
        suppressHydrationWarning
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <OldPortfolioBtn />
        <YoutubeBtn />
        <Chatbot />
        <WhatsappBtn />
        <MessengerBtn />
        <div id="my-modal" />
        <Footer />
      </body>
    </html>
  );
}


