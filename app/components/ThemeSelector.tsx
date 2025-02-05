"use client"

import React from "react"

import SunSvg from "../components/SunSvg"
import MoonSvg from "../components/MoonSvg"

type Theme = "dark" | "light" | undefined;

export default function ThemeSelector() {

  const [theme, setTheme] = React.useState<Theme>();

  React.useEffect(() => {
    const storageTheme = localStorage.getItem("theme");

    if (storageTheme === "dark" || storageTheme === "light") {
      setTheme(storageTheme as Theme);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, []);

  React.useEffect(() => {
    if (theme !== undefined) localStorage.setItem("theme", theme);
  }, [theme]);

  console.log(theme);

  if (typeof document !== "undefined") {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  function setDarkTheme() {
    console.log("Switching to dark mode");
    setTheme("dark");
  }

  function setLightTheme() {
    console.log("Switching to light mode");
    setTheme("light");
  }

  const classLeft = theme === "dark" ? "left-1" : "left-11";

  return (
    <div className="flex items-center text-base">
      <span className="mr-4">Theme:</span>
      <div className="relative flex items-center gap-4 p-2 rounded bg-slate-300 dark:bg-slate-700">
        <span className={`absolute top-1 ${classLeft} transition-all w-8 h-8 bg-slate-400 dark:bg-slate-600 rounded`}></span>
        <button onClick={setDarkTheme} className="relative w-6 h-6 z-1">
          <MoonSvg />
        </button>
        <button onClick={setLightTheme} className="relative w-6 h-6">
          <SunSvg />
        </button>
      </div>
    </div >
  )
}