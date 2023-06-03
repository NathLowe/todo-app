import Banner from '@/components/Banner'
import './globals.css'
import { Josefin_Sans } from 'next/font/google'
import ThemeProvider from '@/providers/ThemeProvider'
import TodoProvider from '@/providers/TodoProvider'
import PageProvider from '@/providers/PageProvider'
import { Metadata } from 'next'
import logo from './logo.png'


const josefin = Josefin_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo App | by Nathan Lowe',
  description: 'Hello there, I am Nathan Lowe, a Frontend Web Developer specialized in React/NextJS. This application is a Todo App which design I have taken from Frontend Mentor. I coded in 3 hrs it using React, Typescript and Tailwind CSS.',
  icons: logo.src
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PageProvider>
      <ThemeProvider>
        <TodoProvider>
          <html lang="en">
            <body className={`${josefin.className} w-screen h-screen overflow-hidden transition duration-[1000ms] bg-body-light dark:bg-body-dark`}>
              {/* Banner */}
              <Banner/>
              <div className="max-w-xl h-full mx-auto relative z-10">
                {children}
              </div>
            </body>
          </html>
        </TodoProvider>
      </ThemeProvider>
    </PageProvider>
  )
}
