import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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

  metadataBase: new URL("http://localhost:3000"),

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
    <html lang="en">
      <body className="bg-[#050505] text-white antialiased">

        <Navbar />

        <main>
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}