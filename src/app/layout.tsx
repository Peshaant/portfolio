import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peshaant Gunness | CS Student · Cybersecurity & AI",
  description:
    "Portfolio of Peshaant Gunness — CS student at Monash University Malaysia, focused on cybersecurity, data science, and AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0a0a0a] text-[#e5e5e5]`}>
        {children}
      </body>
    </html>
  );
}