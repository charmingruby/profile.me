import { PropsWithChildren } from 'react'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full flex flex-col items-center">
      <Navbar />

      <main className="flex w-full flex-col">{children}</main>

      <Footer />
    </div>
  )
}
