'use client'

import { ReactNode, createContext, useContext, useMemo, useReducer, useRef } from 'react'
import { usePage } from './PageProvider';

// Types
export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}   
interface TodoState {
    todos: Todo[];
    addTodo: (title: string) => void;
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}
interface TodoAction {
    type: 'ADD_TODO' | 'REMOVE_TODO' | 'TOGGLE_TODO';
    id?: number;
    title?: string;
    completed?: boolean;
}

const initial : TodoState = {
    todos: [],
    addTodo: () => {},
    removeTodo: () => {},
    toggleTodo: () => {},
}

const TodoContext = createContext(initial)

const reducer = (state:Todo[], action:TodoAction) => {
    let id = action.id? action.id : 1
    let title = action.title? action.title : ''
    let completed = action.completed? action.completed : false
    switch (action.type) {
      case "TOGGLE_TODO":
        return state.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        });
      case "ADD_TODO":
        return [...state, { id: id, title: title, completed: false }];
      case "REMOVE_TODO":
        return state.filter((todo) => todo.id!== action.id);
      default:
        return state;
    }
  };

export default function TodoProvider({
    children,
}:{
    children: ReactNode
}) {
    let id = useRef(1)
    const [todos, dispatch] = useReducer(reducer, initial.todos)
    const addTodo = (title:string) => {
        dispatch({ type: "ADD_TODO", id: id.current, title, completed: false })
        id.current += 1
    }
    const removeTodo = (id:number) => dispatch({ type: "REMOVE_TODO", id })
    const toggleTodo = (id:number) => dispatch({ type: "TOGGLE_TODO", id })
    
  return (
    <TodoContext.Provider value={{todos,addTodo,removeTodo,toggleTodo}} >
        {children}
    </TodoContext.Provider>
  )
}

export const useTodo = () => useContext(TodoContext)

