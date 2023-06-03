'use client'

import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from "react";

interface ThemeState {
    theme: string,
    toggle: () => void
}

const initial: ThemeState = {
    theme: 'light',
    toggle: () => {}
}

const ThemeContext = createContext(initial)


export default function ThemeProvider({
    children
}:{
    children: ReactNode
}) {
    let [theme, setTheme] = useState(initial.theme);
    let toggle = useCallback(()=>{
        let newTheme = theme === 'light'? 'dark' : 'light'
        // localStorage.setItem('theme', newTheme)
        document.documentElement.classList.toggle('dark')
        setTheme(newTheme)
    },[theme])

    useEffect(() => {
        if(theme === 'dark' && !document.documentElement.classList.contains('dark')) document.documentElement.classList.toggle('dark')
    },[])
  return (
    <ThemeContext.Provider value={{theme,toggle}}>
        {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)