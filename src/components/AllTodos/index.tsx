'use client'

import React, { useEffect, useRef, useState } from 'react'
import Todo from '../Todo'
import { Todo as TodoState, useTodo } from '@/providers/TodoProvider'
import { usePage } from '@/providers/PageProvider'

export default function AllTodos() {
    let { todos } = useTodo()
    let { page } = usePage()

    let [newTodos,setNewTodos] = useState<TodoState[]>([])
    useEffect(() => {
      if (page === "all") {
        setNewTodos([...todos])
      } else if (page === "active") {
        setNewTodos(todos.filter((todo) =>!todo.completed))
      } else if (page === "completed") {
        setNewTodos(todos.filter((todo) => todo.completed))
      }
      console.log(page,todos)
    }, [todos, page])
      
  return (
    <>
      {
        (newTodos.length > 0)
          ? newTodos.map(todo => <Todo key={todo.id} todo={todo} />)
          : <p className="w-full text-center text-xl p-6 border-b" >No todos</p>
      }
    </>
  )
}
