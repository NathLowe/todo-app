'use client'

import { ReactNode, createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

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
    let timer = useRef<number>(new Date().getTime())
    let toggle = useCallback(()=>{
        let timestamp = new Date().getTime()
        if(timestamp - timer.current > 1500){
            let newTheme = theme === 'light'? 'dark' : 'light'
            document.documentElement.classList.toggle('dark')
            setTheme(theme === 'light'? 'dark' : 'light')
            timer.current = new Date().getTime()
        }
        // localStorage.setItem('theme', newTheme)
        
    },[theme])

    useEffect(() => {
        if(theme === 'dark' && !document.documentElement.classList.contains('dark')) document.documentElement.classList.toggle('dark')
    },[theme])
  return (
    <ThemeContext.Provider value={{theme,toggle}}>
        {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)