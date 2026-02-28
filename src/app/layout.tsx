import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhay Kumar Sharma | Full Stack Developer",
  description: "Portfolio of Abhay Kumar Sharma, an engineer building real-world SaaS products like EventNest and Nestely.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-black text-neutral-50 antialiased min-h-screen selection:bg-white/10 selection:text-white flex flex-col`}>
        <div className="fixed inset-0 z-50 bg-noise mix-blend-overlay pointer-events-none" />
        {children}
      </body>
    </html>
  );
}
