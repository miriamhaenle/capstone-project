import { useEffect, useState } from 'react'

export default function useDarkMode() {
  const [theme, setTheme] = useState('light')
  const [componentMounted, setComponentMounted] = useState(false)

  function setMode(mode) {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  function toggleTheme() {
    theme === 'light' ? setMode('dark') : setMode('light')
  }

  useEffect(() => {
    const themeFromLocalStorage = window.localStorage.getItem('theme')
    themeFromLocalStorage && setTheme(themeFromLocalStorage)
    setComponentMounted(true)
  }, [])

  return [theme, toggleTheme, componentMounted]
}
