import { PropsWithChildren } from 'react'
import { Footer } from '../_components/footer'
import { Navbar } from '../_components/navbar'

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full flex flex-col items-center">
      <Navbar />

      <main className="flex w-full flex-col">{children}</main>

      <Footer />
    </div>
  )
}
