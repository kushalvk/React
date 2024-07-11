import { useContext } from "react"
import { createContext } from "react"


export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})
// method functionality is automaticaly defaind you can se in App.jsx

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
}