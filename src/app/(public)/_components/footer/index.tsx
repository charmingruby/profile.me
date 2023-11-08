import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'
import githubImg from '@/assets/socials/github.svg'
import linkedinImg from '@/assets/socials/linkedin.svg'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="w-full  border-t border-border bg-gradient-to-br from-primary-600 to-black">
      <MaxWidthWrapper className="py-8 flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          <Image src={githubImg} alt="" className="h-6 w-6" />
          <Image src={linkedinImg} alt="" className="h-6 w-6" />
        </div>
        <span className="font-medium text-base text-gray-palette-300">
          Designed and built by{' '}
          <strong className="text-secondary-main">Gustavo Dias</strong>
        </span>
      </MaxWidthWrapper>
    </footer>
  )
}
