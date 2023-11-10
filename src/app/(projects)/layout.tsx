import { PropsWithChildren } from 'react'
import { Header } from './(routes)/_components/header'
import { Footer } from './(routes)/_components/footer'

export default function ProjectsLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
