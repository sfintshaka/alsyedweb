import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {Navbar } from '@/components'
import {Footer} from '@/components'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AL-SYED: Student Accomodation',
  description: 'Comfort for students',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
      <Navbar/>
        {children}
        </body>
    </html>
  )
}
