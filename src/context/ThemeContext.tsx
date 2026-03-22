import { createContext } from "react"

interface ThemeContextType {
  theme: "calm" | "energy"
  setTheme: (theme: "calm" | "energy") => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
)
