'use client'

import React, { useEffect, useRef, useState } from 'react'
import Todo from '../Todo'
import { Todo as TodoState, useTodo } from '@/providers/TodoProvider'
import { usePage } from '@/providers/PageProvider'
import { Reorder } from 'framer-motion'

export default function AllTodos() {
    let { todos, reorderTodos } = useTodo()
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
    }, [todos, page])
      
  return (
    <div className="w-full max-h-[60vh] overflow-y-auto" >
      {
        (newTodos.length > 0)
          ? (
            <Reorder.Group axis="y" values={newTodos} onReorder={reorderTodos}>
              {newTodos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
              ))}
            </Reorder.Group>
            )
          : <p className="w-full text-center text-xl p-6 border-b" >No todos</p>
      }
    </div>
  )
}
