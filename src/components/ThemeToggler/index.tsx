'use client'

import { useTheme } from "@/providers/ThemeProvider";
import { AnimatePresence, motion } from "framer-motion";
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

export default function ThemeToggler() {
    let { theme, toggle } = useTheme()
  return (
    <div onClick={toggle} className="w-fit flex-none cursor-pointer" >
        <AnimatePresence mode="wait">
        {
            (theme === 'dark')
            ? <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5}} ><BsFillMoonFill className="text-2xl fill-current" /></motion.div>
            
            : <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5}} ><BsFillSunFill className="text-2xl fill-current" /></motion.div>
        }
        </AnimatePresence>
    </div>
    
  )
}
