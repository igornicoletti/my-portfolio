import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

type Theme = 'dark' | 'light'

interface ProviderThemeProps {
  children: ReactNode
  storageKey?: string
}

interface ProviderThemeContextProps {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const initialState: ProviderThemeContextProps = {
  theme: 'dark',
  setTheme: () => null,
  toggleTheme: () => null
}

const ProviderThemeContext = createContext<ProviderThemeContextProps>(initialState)

export const ProviderTheme = ({ children, storageKey = 'vite-ui-theme' }: ProviderThemeProps) => {
  const [theme, setThemeState] = useState<Theme>('dark')

  useEffect(() => {
    const stored = localStorage.getItem(storageKey)
    if (stored === 'light' || stored === 'dark') {
      setThemeState(stored)
      document.documentElement.classList.add(stored)
    } else {
      document.documentElement.classList.add('dark')
    }
  }, [storageKey])

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    localStorage.setItem(storageKey, theme)
  }, [theme, storageKey])


  useEffect(() => {
    const listener = (e: StorageEvent) => {
      if (e.key === storageKey && e.newValue) {
        const newTheme = e.newValue as Theme
        if (newTheme === 'light' || newTheme === 'dark') setThemeState(newTheme)
      }
    }
    window.addEventListener('storage', listener)
    return () => window.removeEventListener('storage', listener)
  }, [storageKey])

  const setTheme = (newTheme: Theme) => setThemeState(newTheme)
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <ProviderThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ProviderThemeContext.Provider>
  )
}

export const useTheme = () => {
  const ctx = useContext(ProviderThemeContext)
  if (ctx === undefined)
    throw new Error('useTheme must be used within a ProviderTheme')
  return ctx
}
