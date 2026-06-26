import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peshaant | CS Student · AI & Cybersecurity",
  description:
    "Portfolio of Peshaant — CS student at Monash University Malaysia, focused on AI and data science.",
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