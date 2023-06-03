'use client'

import { useTheme } from '@/providers/ThemeProvider'
import { AnimatePresence, motion } from 'framer-motion'


// const variants 
const variants = {
  initial: {
    opacity: 0,
    scale: 1.1,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    scale: 1.1,
    transition: {
      duration: 0.8,
    },
  },
}

export default function Banner() {
  let { theme } = useTheme()
  return (
    <AnimatePresence mode='wait'>
      {
        (theme === 'light')
          ? (<motion.div key={1} variants={variants} initial="initial" animate="enter" exit="exit" transition={{type:'spring',duration:500}} className="banner fixed top-0 left-0 w-screen h-60 "/>)
          : (<motion.div key={2} variants={variants} initial="initial" animate="enter" exit="exit" transition={{type:'spring',duration:500}} className="banner-dark fixed top-0 left-0 w-screen h-60 "/>)
      }
    </AnimatePresence>
  )
}
