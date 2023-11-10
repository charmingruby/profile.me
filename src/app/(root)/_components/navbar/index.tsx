import logoImg from '@/assets/logo/logo.svg'
import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'
import Image from 'next/image'
import { MainNav } from './main-nav'
import { Actions } from './actions'
import { MenuButton } from '../drawer/menu-button'

export function Navbar() {
  return (
    <header className="backdrop-blur-md fixed top-0 z-50 w-full">
      <MaxWidthWrapper className="h-16 flex items-center justify-between">
        <div>
          <Image
            className="w-10 h-10"
            src={logoImg}
            alt="Logo of Gustavo's portfolio"
          />
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <MainNav />
          <Actions />
        </div>

        <div className="flex lg:hidden">
          <MenuButton />
        </div>
      </MaxWidthWrapper>
    </header>
  )
}
