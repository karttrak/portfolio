"use client"

import { useEffect, useSyncExternalStore } from "react"

import SunSvg from "../components/SunSvg"
import MoonSvg from "../components/MoonSvg"

type Theme = "dark" | "light";

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot(): Theme {
  return (localStorage.getItem("theme") as Theme) || "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

function setStoredTheme(theme: Theme) {
  localStorage.setItem("theme", theme);
  listeners.forEach((listener) => listener());
}

export default function ThemeSelector() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Keep the <html> class in sync with the stored theme, including on initial hydration.
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setStoredTheme(theme === "light" ? "dark" : "light");
  }

  const classLeft = theme === "dark" ? "left-1" : "left-11";

  return (
    <div className="flex items-center text-base">
      <div className="relative flex items-center gap-4 p-2 rounded-sm bg-slate-300 dark:bg-slate-700">
        <span className={`absolute top-1 ${classLeft} transition-all w-8 h-8 bg-slate-400 dark:bg-slate-600 rounded-sm`}></span>
        <button id="theme-toggle-moon" onClick={toggleTheme} className="relative w-6 h-6 z-1 cursor-pointer" aria-label="Toggle between light and dark theme.">
          <MoonSvg />
        </button>
        <button id="theme-toggle-sun" onClick={toggleTheme} className="relative w-6 h-6 cursor-pointer" aria-label="Toggle between light and dark theme.">
          <SunSvg />
        </button>
      </div>
    </div >
  )
}
