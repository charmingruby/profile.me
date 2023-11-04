import { PropsWithChildren } from 'react'
import { Navbar } from '../components/navbar'

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />

      <main className="flex-col"></main>
    </>
  )
}
