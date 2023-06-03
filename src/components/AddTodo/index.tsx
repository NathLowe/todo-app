'use client'

import React, { useCallback, useRef, useState } from 'react'
import InputRadio from '../InputRadio'

export default function AddTodo() {
    let [ title , setTitle ] = useState('')
    const initialize = useCallback(()=>setTitle(''),[setTitle])
    
    let labelButton = useRef<HTMLLabelElement>(null)

    const handleKeyEnter = (e:React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        if(labelButton.current) labelButton.current.click()
      }
    }
  return (
    <div className="p-4 card my-6 bg-card-light dark:bg-card-dark rounded flex items-center w-full space-x-4">
        <InputRadio ref={labelButton} id={0} title={title} initialize={initialize} />
        <input onKeyDown={handleKeyEnter} value={title} onChange={e=>setTitle(e.target.value)} placeholder="Add a todo..."
         className="h-full bg-transparent outline-none placeholder:text-primary/50 caret-primary grow" type="text" name="ad-todo-text" id="ad-todo-text" />
    </div>
  )
}
