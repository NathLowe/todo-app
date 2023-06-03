'use client'

import { ReactNode, createContext, useContext, useReducer } from "react"

// Types
export interface PageState {
    page: 'all'|'active'|'completed';
    changePage: (page: PageState['page']) => void;
}
interface PageAction {
    type: 'CHANGE_PAGE';
    page: PageState['page'];
}

// Reducers
const reducer = (state:PageState['page'], action:PageAction) => {
    switch (action.type) {
        case 'CHANGE_PAGE':
            return action.page
        default:
            return state
    }
}


let initial : PageState = {
    page: 'all',
    changePage: () => {}
}

const PageContext = createContext(initial)


export default function PageProvider({
    children,
}:{
    children: ReactNode
}) {
    const [page, dispatch] = useReducer(reducer, initial.page)
    const changePage = (page: PageState['page']) => dispatch({ type: 'CHANGE_PAGE', page })
  return (
    <PageContext.Provider value={{page,changePage}} >
        {children}
    </PageContext.Provider>
  )
}

export const usePage = () => useContext(PageContext)