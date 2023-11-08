import { PropsWithChildren } from 'react'
import { Navbar } from './_components/navbar'
import { Footer } from './_components/footer'

export function RootLayoutComponent({ children }: PropsWithChildren) {
  return (
    <div className="w-full flex flex-col items-center">
      <Navbar />

      <main className="flex w-full flex-col">{children}</main>

      <Footer />
    </div>
  )
}
