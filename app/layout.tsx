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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://my-portfolio-next-blue.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Sahil Biswas — Web Developer, AI Engineer & Business Professional",
    template: "%s | Sahil Biswas",
  },

  description:
    "Sahil Biswas is a Web Developer, AI Engineer and Business Professional building modern websites, AI-powered applications and practical digital solutions.",

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
      url: siteUrl,
    },
  ],

  creator: "Sahil Biswas",
  publisher: "Sahil Biswas",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Sahil Biswas — Web Developer, AI Engineer & Business Professional",
    description:
      "Portfolio of Sahil Biswas — a Web Developer, AI Engineer and Business Professional creating modern digital experiences and practical technology solutions.",
    url: siteUrl,
    siteName: "Sahil Biswas Portfolio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sahil Biswas — Web Developer, AI Engineer & Business Professional",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sahil Biswas — Web Developer, AI Engineer & Business Professional",
    description:
      "Portfolio of Sahil Biswas — Web Developer, AI Engineer and Business Professional.",
    images: ["/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
      className={cn("font-sans", geist.variable)}
    >
      <body className="bg-[#050505] text-white antialiased">
        <ScrollProgress />

        <Navbar />

        <div id="main-content" tabIndex={-1}>
          {children}
        </div>

        <Footer />

        <BackToTop />

        <PortfolioChatbot />
      </body>
    </html>
  );
}