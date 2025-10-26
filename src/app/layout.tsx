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
  title: "Subham kumar Das",
  description: "Subhams Portfolio",
  keywords: [
    "subham kumar das",
    "subhams portfolio",
    "subham-tech ",
    "subham vercel",
    "full stack developer",
    "Silicon university",
    "GDGOC",
    "",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} w-screen h-screen bg-white text-neutral-900 flex flex-col justify-end items-center
        mx-auto p-4 max-w-2xl  gap-15`}
      >
        <div className="w-full h-full shadow-md rounded-xl bg-white  text-neutral-800 ">
          <Header />
          <main className="prose prose-neutral max-w-none mt-3">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
