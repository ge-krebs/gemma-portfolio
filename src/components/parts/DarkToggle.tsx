import { useEffect, useState } from "react"
import { Moon, Sun, ToggleRight, ToggleLeft } from 'lucide-react'

function DarkToggle () {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return systemPrefersDark ? 'dark' : 'light'
    }
    return 'light'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('light', darkMode === 'light')
    const root = window.document.documentElement
    if (darkMode === 'dark') {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }, [darkMode]);

  function toggleSwitch() {
    setDarkMode(darkMode == 'light' ? 'dark' : 'light')
  }
  return (
    <>
      <span aria-hidden="true" className="flex items-center justify-center">{darkMode == 'dark' ? <Moon className="w-5" color="var(--color-accent)"/> : <Sun className="w-5" color="#E5C168"/>}</span>
      <button aria-label="dark light mode toggle" onClick={toggleSwitch} className="pointer">{darkMode == 'dark' ? <ToggleRight /> : <ToggleLeft color="var(--color-text)" />}</button>
    </>
  )
}

export default DarkToggle