import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CookingSite",
  description: "A Next.js Cooking Site",
  applicationName: "CookingSite",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript", "CookingSite"],
  creator: "Taraneh Mohebi asar",
  publisher: "Taraneh Mohebi asar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-screen-2xl mx-auto">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
