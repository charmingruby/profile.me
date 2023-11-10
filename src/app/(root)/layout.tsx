import { PropsWithChildren } from 'react'
import { Footer } from './_components/footer'
import { Navbar } from './_components/navbar'
import { Drawer } from './_components/drawer'

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full flex flex-col items-center">
      <Navbar />
      <Drawer />
      <main className="flex w-full flex-col">{children}</main>

      <Footer />
    </div>
  )
}
