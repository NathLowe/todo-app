'use client'

import { motion } from 'framer-motion'


// const variants 

export default function Banner() {
  return (
    <motion.div layout transition={{type:'spring',duration:500}} className="banner fixed top-0 left-0 w-screen h-60 "/>
  )
}
