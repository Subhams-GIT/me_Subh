"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { MoonIcon } from "lucide-react";
import { SunIcon } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const current = resolvedTheme === "dark" ? "dark" : "light";

  return (
    <button
      onClick={() =>
        setTheme(current === "dark" ? "light" : "dark")
      }
      aria-label="Toggle Dark Mode"
    >
      {current === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
