import logoImg from '@/assets/logo/logo.svg'
import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'
import Image from 'next/image'

export function Navbar() {
  return (
    <MaxWidthWrapper className="h-16 flex justify-between items-center">
      <Image
        className="w-8 h-8"
        src={logoImg}
        alt="Logo of Gustavo's portfolio"
      />
    </MaxWidthWrapper>
  )
}
