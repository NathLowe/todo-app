'use client'

import React, { useCallback, useState } from 'react'
import InputRadio from '../InputRadio'

export default function AddTodo() {
    let [ title , setTitle ] = useState('')
    const initialize = useCallback(()=>setTitle(''),[setTitle])
  return (
    <div className="p-4 card my-6 bg-card-light dark:bg-card-dark rounded flex items-center w-full space-x-4">
        <InputRadio id={0} title={title} initialize={initialize} />
        <input value={title} onChange={e=>setTitle(e.target.value)} className="h-full bg-transparent outline-none caret-primary grow" type="text" name="ad-todo-text" id="ad-todo-text" />
    </div>
  )
}
