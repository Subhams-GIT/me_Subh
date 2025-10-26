"use client";
import Link from "next/link";
import { Book, Calendar, Code, Home, LucideGithub } from "lucide-react";

const Header = () => {
  return (
    // Fixed position, centered at the top (with a margin)
    <div className="bg-white text-black flex justify-center items-center border border-neutral-400 rounded-full px-4 py-2 mt-5 fixed top-0 left-1/2 -translate-x-1/2 shadow-lg z-50">
      <nav className="flex justify-between items-center gap-6 text-sm sm:text-base font-medium">
        {/* Home Link */}
        <Link
          href="/"
          className="flex items-center space-x-1 hover:text-blue-600 transition duration-150 group"
        >
          <Home className="w-5 h-5 text-black group-hover:text-blue-600 transition duration-150" />
        </Link>

        {/* Blogs Link */}
        <Link
          href="/Blog"
          className="flex items-center space-x-1 hover:text-blue-600 transition duration-150 group"
        >
          <Book className="w-5 h-5 text-black group-hover:text-blue-600 transition duration-150" />
        </Link>

        {/* Code/Work Link */}
        <Link
          href="/Work"
          className="flex items-center space-x-1 hover:text-blue-600 transition duration-150 group"
        >
          <Code className="w-5 h-5 text-black group-hover:text-blue-600 transition duration-150" />
        </Link>

        {/* Current/Updates Link */}
        <Link
          href="/Current"
          className="flex items-center space-x-1 hover:text-blue-600 transition duration-150 group"
        >
          <Calendar className="w-5 h-5 text-black group-hover:text-blue-600 transition duration-150" />
        </Link>
        <Link
          href="https://github.com/Subhams-GIT"
          className="flex items-center space-x-1 hover:text-blue-600 transition duration-150 group"
        >
          <LucideGithub className="w-5 h-5 text-black group-hover:text-blue-600 transition duration-150" />
        </Link>
      </nav>
    </div>
  );
};

export default Header;
