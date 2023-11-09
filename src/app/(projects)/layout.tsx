import { PropsWithChildren } from 'react'
import { Breadcrumb } from './(routes)/_components/breadcrumb'
import { Footer } from './(routes)/_components/footer'

export default function ProjectsLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Breadcrumb />
      {children}
      <Footer />
    </div>
  )
}
