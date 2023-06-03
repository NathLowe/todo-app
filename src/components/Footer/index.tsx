'use client'

import { PageState, usePage } from '@/providers/PageProvider'
import { useTodo } from '@/providers/TodoProvider'
import React from 'react'

export default function Footer() {
    let { page, changePage } = usePage()
    let { todos } = useTodo()

    const isActive = (text:string) => text === page
    const handleClick = (text:PageState['page']) => () => changePage(text)

    const allPages:PageState['page'][] = ['all','active','completed']
  return (
    <div className="p-4 w-full text-sm font-light flex items-center">
        <div className="hidden sm:block" >{todos.filter(todo=>!todo.completed).length} items left</div>
        <div className="flex justify-center items-center grow">
            {
                allPages.map(text => (
                    <div 
                        onClick={handleClick(text)}
                        key={text}
                        className={`w-fit capitalize cursor-pointer transition-all px-2 [&.active]:text-primary [&.active]:font-semibold [&:not(.active):hover]:font-semibold ${isActive(text) && 'active'}`}>
                        {text}
                    </div>
                ))
            }
            
        </div>
        <div className="hidden sm:block">Clear Completed</div>
    </div>
  )
}
