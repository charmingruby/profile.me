import { PropsWithChildren } from 'react'
import { Navbar } from '../components/navbar'

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full flex justify-center">
      <Navbar />

      <main className="flex-col">{children}</main>
    </div>
  )
}
