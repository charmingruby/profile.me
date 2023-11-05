import logoImg from '@/assets/logo/logo.svg'
import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'
import Image from 'next/image'
import { MainNav } from './main-nav'
import { Actions } from './actions'

export function Navbar() {
  return (
    <header className="backdrop-blur-md fixed w-full">
      <MaxWidthWrapper className="h-16 flex items-center justify-between">
        <div>
          <Image
            className="w-8 h-8"
            src={logoImg}
            alt="Logo of Gustavo's portfolio"
          />
        </div>

        <div className="flex items-center gap-8">
          <MainNav />
          <Actions />
        </div>
      </MaxWidthWrapper>
    </header>
  )
}
