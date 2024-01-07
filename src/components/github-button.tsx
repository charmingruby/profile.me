import Link from 'next/link'
import githubImg from '@/assets/socials/github.svg'
import Image from 'next/image'

interface GithubButtonProps {
  url: string
}

export function GithubButton({ url }: GithubButtonProps) {
  return (
    <Link href={url} prefetch={false}>
      <button className="border border-border px-3 bg-primary-500 py-1 z flex items-center text-base font-medium gap-2 text-gray-palette-200 hover:bg-primary-500/60 cursor-pointer transition-colors rounded-sm">
        <span className="mt-0.5">Github</span>
        <Image src={githubImg} alt="" className="h-4 w-4" />
      </button>
    </Link>
  )
}
