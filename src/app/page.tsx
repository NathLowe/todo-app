import AddTodo from '@/components/AddTodo'
import AllTodos from '@/components/AllTodos'
import Footer from '@/components/Footer'
import InputRadio from '@/components/InputRadio'
import ThemeToggler from '@/components/ThemeToggler'

export default function Home() {
  return (
    <main className="p-6 h-full overflow-hidden py-10 ">
      {/* Header */}
      <div className="flex justify-between text-white mb-8" >
        <h1 className="text-3xl font-semibold tracking-[16px] uppercase">Todo</h1>
        <ThemeToggler/>
      </div>
      {/* Add input */}
      <AddTodo/>
      {/* Todos */}
      <div className="shadow-xl card rounded">
        <AllTodos/>
        <Footer/>
      </div>
      {/* Tip */}
      <div className="text-center text-footer2-light dark:text-footer2-dark mt-12">
        {`Drag and drop to reorder list`}
      </div>
    </main>
  )
}
