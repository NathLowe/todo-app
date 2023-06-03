'use client'

import { useTodo } from '@/providers/TodoProvider'
import React, { useMemo } from 'react'
import { BsCheckLg } from 'react-icons/bs'

export default function InputRadio({
    id,
    title,
    initialize,
}:{
    id: number,
    title?:string,
    initialize?:() => void,
}) {
    let { todos, toggleTodo, addTodo } = useTodo()
    let handleClick = () => {
        if (id === 0 && title !== undefined && initialize !== undefined) {
            initialize()
            addTodo(title)
        }else{
            toggleTodo(id)
        }
    }
    const isActive = useMemo(() => {
        return todos.find(todo => todo.id === id && todo.completed)!== undefined
    }, [id])
  return (
    <>
        <input defaultChecked={isActive} className="hidden radio" type="checkbox" name={`todo-${id}`} id={`todo-${id}`} />
        <label onClick={handleClick} htmlFor={`todo-${id > 0 && id}`}>
            <span className="relative block w-full h-full rounded-full bg-card-light dark:bg-card-dark z-20 "></span>
            <BsCheckLg className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 z-10" />
        </label>
    </>
  )
}
