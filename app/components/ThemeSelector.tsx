"use client"

import { useState, useEffect } from "react"

import SunSvg from "../components/SunSvg"
import MoonSvg from "../components/MoonSvg"

type Theme = "dark" | "light";

export default function ThemeSelector() {
  const [theme, setTheme] = useState<Theme>("dark");

  // Check for saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    const initialTheme = savedTheme || "dark";

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  }

  const classLeft = theme === "dark" ? "left-1" : "left-11";

  return (
    <div className="flex items-center text-base">
      <span className="mr-4">Theme:</span>
      <div className="relative flex items-center gap-4 p-2 rounded bg-slate-300 dark:bg-slate-700">
        <span className={`absolute top-1 ${classLeft} transition-all w-8 h-8 bg-slate-400 dark:bg-slate-600 rounded`}></span>
        <button onClick={toggleTheme} className="relative w-6 h-6 z-1">
          <MoonSvg />
        </button>
        <button onClick={toggleTheme} className="relative w-6 h-6">
          <SunSvg />
        </button>
      </div>
    </div >
  )
}