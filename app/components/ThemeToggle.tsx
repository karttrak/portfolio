'use client'

import { useEffect, useState } from 'react'
import SunSvg from './SunSvg'
import MoonSvg from './MoonSvg'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark'
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

    const initialTheme = savedTheme || systemPreference

    setTheme(initialTheme)
    document.documentElement.classList.toggle('dark', initialTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'

    // Update state
    setTheme(newTheme)

    // Toggle dark class on html element
    document.documentElement.classList.toggle('dark')

    // Save preference
    localStorage.setItem('theme', newTheme)
  }

  return (
    <button
      className="relative w-6 h-6"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <MoonSvg className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      ) : (
        <SunSvg className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      )}
    </button>
  )
}