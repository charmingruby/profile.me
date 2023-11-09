import githubImg from '@/assets/socials/github.svg'
import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'
import { githubUrl } from '@/site/contact'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <MaxWidthWrapper className="border-t border-border mt-12 py-6 flex justify-center items-center">
      <Image src={githubImg} alt="" className="h-4 w-4" />

      <span className="mx-1 group-hover:underline">
        Check all projects on my{' '}
      </span>

      <Link
        href={githubUrl}
        prefetch={false}
        className="flex items-center group hover:underline transition-all"
      >
        <strong className="text-white">Github</strong>
        <ArrowUpRight className="w-4 h-4" />
      </Link>
    </MaxWidthWrapper>
  )
}
