'use client'

import React, { useEffect } from 'react'
import InputRadio from '../InputRadio'
import { TfiClose } from 'react-icons/tfi'

import { Todo as TodoState, useTodo } from '@/providers/TodoProvider'
import { AnimatePresence, motion } from 'framer-motion'

// Motion variants
const lineVariants = {
    initial: { width: 0 },
    animate: {
        width: '100%',
        transition: { duration: 1, type:'spring' },
    },
    exit:{ width: 0 },
}



export default function Todo({
    todo
}:{
    todo: TodoState
}) {
    let { id, completed, title } = todo
    let { removeTodo } = useTodo()
  return (
    <motion.div animate="animate" initial="initial" exit="exit"
        className="p-4 pr-2 border-b border-footer1-light dark:border-footer1-dark flex items-center w-full space-x-4">
        <InputRadio id={id} />
        <div className="h-full bg-transparent cursor-pointer grow flex items-center group ">
            <div className={`flex grow ${completed && 'completed'}`}>
                <span className="line-clamp-1 relative ">
                    {title}
                    <AnimatePresence mode='wait'>
                    {
                        completed && <motion.span variants={lineVariants} className="absolute block top-1/2 left-0 w-full -translate-y-1/2 h-px bg-completed-light dark:bg-completed-dark z-10" />
                    }
                    </AnimatePresence>
                </span>
            </div>
            <div onClick={()=>removeTodo(id)} className="px-2 transition opacity-0 group-hover:opacity-100">
                <TfiClose className="h-5 aspect-square font-semibold fill-current " />
            </div>
        </div>
    </motion.div>
  )
}
