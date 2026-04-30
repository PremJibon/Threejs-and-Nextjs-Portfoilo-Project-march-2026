import Image from "next/image";
import bg from "../../../../public/background/about-background.png"; // Using about background for consistency

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Image
        src={bg}
        alt="Privacy Policy background"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-40"
        priority
        sizes="100vw"
      />

      <div className="flex flex-col items-center justify-center w-full min-h-screen py-32 px-4 md:px-16 lg:px-32">
        <div className="flex flex-col items-center text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent/80 to-accent/40 uppercase">
            Privacy Policy
          </h1>
          <div className="h-1.5 w-32 bg-accent/40 rounded-full" />
        </div>
        
        <div className="w-full max-w-4xl bg-background/80 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-accent/20 shadow-xl text-foreground font-light leading-relaxed space-y-6">
          <p>
            Welcome to the Prem Jibon Portfolio ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy.
          </p>

          <h2 className="text-2xl font-semibold text-accent mt-8 mb-4">1. Information We Collect</h2>
          <p>
            When you use our contact form, we collect the personal information you voluntarily provide, which includes your name, email address, and the content of your message. We do not collect any other personal data automatically.
          </p>

          <h2 className="text-2xl font-semibold text-accent mt-8 mb-4">2. How We Use Your Information</h2>
          <p>
            The information collected through the contact form is used solely for the purpose of communicating with you, responding to your inquiries, and discussing potential collaborations. We do not use this information for marketing purposes without your explicit consent.
          </p>

          <h2 className="text-2xl font-semibold text-accent mt-8 mb-4">3. Sharing Your Information</h2>
          <p>
            We do not share, sell, rent, or trade your personal information with third parties. Your data is kept confidential and is only accessed by Shahed Hossain Prem (Prem Jibon) for direct communication.
          </p>

          <h2 className="text-2xl font-semibold text-accent mt-8 mb-4">4. Data Security</h2>
          <p>
            We implement standard security measures to protect the information you submit. However, please note that no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
          </p>

          <h2 className="text-2xl font-semibold text-accent mt-8 mb-4">5. Changes to This Privacy Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. You are advised to review this privacy policy periodically for any changes.
          </p>

          <h2 className="text-2xl font-semibold text-accent mt-8 mb-4">6. Contact Us</h2>
          <p>
            If you have questions or comments about this policy, you may email us at <a href="mailto:prempfp96@gmail.com" className="text-accent hover:underline">prempfp96@gmail.com</a>.
          </p>
        </div>
      </div>
    </>
  );
}
