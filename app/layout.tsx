import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";
import "./profile-chatbot.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import PortfolioChatbot from "./components/PortfolioChatbot";

import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: {
    default:
      "Sahil Biswas — Web Developer, AI Engineer & Business Professional",
    template: "%s | Sahil Biswas",
  },

  description:
    "Sahil Biswas is a Web Developer, AI Engineer & Business Professional building modern websites, AI-powered applications, and practical digital solutions.",

  keywords: [
    "Sahil Biswas",
    "Web Developer",
    "AI Engineer",
    "Business Professional",
    "Next.js Developer",
    "React Developer",
    "JavaScript Developer",
    "AI Developer",
    "Web Development",
    "AI Applications",
    "Portfolio",
  ],

  authors: [
    {
      name: "Sahil Biswas",
    },
  ],

  creator: "Sahil Biswas",

  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "http://localhost:3000",
  ),

  openGraph: {
    title:
      "Sahil Biswas — Web Developer, AI Engineer & Business Professional",

    description:
      "Portfolio of Sahil Biswas — Web Developer, AI Engineer & Business Professional creating modern digital experiences and practical technology solutions.",

    type: "website",
    locale: "en_IN",
    siteName: "Sahil Biswas Portfolio",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Sahil Biswas — Web Developer, AI Engineer & Business Professional",

    description:
      "Portfolio of Sahil Biswas — Web Developer, AI Engineer & Business Professional.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn(
        "font-sans",
        geist.variable,
      )}
    >
      <body className="bg-[#050505] text-white antialiased">
        <ScrollProgress />

        <Navbar />

        {children}

        <Footer />

        <BackToTop />

        <PortfolioChatbot />
      </body>
    </html>
  );
}