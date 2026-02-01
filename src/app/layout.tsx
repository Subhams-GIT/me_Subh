import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Subham Kumar Das",
  description: "Subham's Portfolio",
  keywords: [
    "subham kumar das",
    "subhams portfolio",
    "subham-tech",
    "subham vercel",
    "full stack developer",
    "Silicon university",
    "GDGOC",
    "subh-tech.vercel",
    "subham",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <head>
        <style>
        @import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap);
        </style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} 
          w-screen h-screen  text-neutral-900 
          flex justify-center items-center `}
      >
        <div className="w-full max-w-2xl h-[90%] border-none rounded-2xl bg-white text-neutral-800 p-4  scrollbar-hide border-blur">
          <main className="prose prose-neutral max-w-none mt-3">{children}</main>
         
        </div>
      </body>
    </html>
  );
}
