import type { Metadata } from 'next'
import { GeistSans } from 'geist/font'
import '../styles/globals.css'
import { DrawerContextProvider } from '@/contexts/drawer-context'

export const metadata: Metadata = {
  title: 'Gustavo Dias | Portfolio',
  description: "Gustavo's Personal portfolio.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <DrawerContextProvider>
        <body
          className={`
          ${GeistSans.className}
          bg-gradient-to-br from-primary-500 to-primary-400 
          scrollbar-thin scrollbar-track-gray-palette-600 scrollbar-thumb-gray-palette-300
          text-gray-palette-200
          scroll-smooth
        `}
        >
          {children}
        </body>
      </DrawerContextProvider>
    </html>
  )
}
