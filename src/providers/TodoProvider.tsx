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
    reorderTodos: (todos:Todo[]) => void;
    clearCompletedTodos: () => void;
}
interface TodoAction {
    type: 'ADD_TODO' | 'REMOVE_TODO' | 'TOGGLE_TODO' | 'REORDER_TODO' | 'CLEAR_COMPLETED';
    id?: number;
    title?: string;
    completed?: boolean;
    todos?: Todo[];
}

const initial : TodoState = {
    todos: [],
    addTodo: () => {},
    removeTodo: () => {},
    toggleTodo: () => {},
    reorderTodos: () => {},
    clearCompletedTodos: () => {},
}

const TodoContext = createContext(initial)

const reducer = (state:Todo[], action:TodoAction) => {
    let id = action.id? action.id : 1
    let title = action.title? action.title : ''
    let todos = action.todos? action.todos : []
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
      case "REORDER_TODO":
        return todos;
      case "CLEAR_COMPLETED":
        return state.filter((todo) =>!todo.completed);
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

    const actions = {
        addTodo : (title:string) => {
            dispatch({ type: "ADD_TODO", id: id.current, title, completed: false })
            id.current += 1
        },
        removeTodo : (id:number) => dispatch({ type: "REMOVE_TODO", id }),
        toggleTodo : (id:number) => dispatch({ type: "TOGGLE_TODO", id }),
        reorderTodos : (newOrder:Todo[]) => dispatch({ type: "REORDER_TODO", todos: newOrder }),
        clearCompletedTodos : () => dispatch({ type: "CLEAR_COMPLETED" }),
    }
    
    
  return (
    <TodoContext.Provider value={{todos,...actions}} >
        {children}
    </TodoContext.Provider>
  )
}

export const useTodo = () => useContext(TodoContext)

