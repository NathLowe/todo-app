'use client'

import { useTodo } from '@/providers/TodoProvider'
import React, { forwardRef, useMemo } from 'react'
import { BsCheckLg } from 'react-icons/bs'

interface Props {
    id: number,
    title?:string,
    initialize?:() => void,
}

 export default forwardRef<HTMLLabelElement,Props>(function InputRadio({
    id,
    title,
    initialize,
},ref){
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
    }, [todos, id])
  return (
    <>
        <input defaultChecked={isActive} className="hidden radio" type="checkbox" name={`todo-${id}`} id={`todo-${id}`} />
        <label ref={ref} onClick={handleClick} htmlFor={`todo-${id > 0 && id}`}>
            <span className="relative block w-full h-full rounded-full bg-card-light dark:bg-card-dark z-20 "></span>
            <BsCheckLg className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 z-10" />
        </label>
    </>
  )
})

// export default InputRadio