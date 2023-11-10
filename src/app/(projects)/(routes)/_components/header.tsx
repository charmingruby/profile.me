import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import logoImg from '@/assets/logo/logo.svg'
import Image from 'next/image'

export function Header() {
  return (
    <MaxWidthWrapper className="w-full flex items-center justify-between border-b border-border mb-8">
      <Link href="/" prefetch={false}>
        <button className="w-fit flex items-center gap-1 mb-4 mt-8 text-gray-palette-300 hover:text-secondary-main transition-colors">
          <ChevronLeft className="h-4 w-4" />
          <span className="mt-0.5 font-medium">Return to home</span>
        </button>
      </Link>
      <Image src={logoImg} alt="" className="h-10 w-10" />
    </MaxWidthWrapper>
  )
}
