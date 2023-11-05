import { ArrowUpRight } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface SocialLinkProps {
  imageUrl: StaticImageData
  name: string
  url: string
}

export function SocialLink({ imageUrl, name, url }: SocialLinkProps) {
  return (
    <Link href={url} prefetch={false} className="flex items-center gap-2">
      <Image src={imageUrl} className="h-4 w-4 mb-px" alt="" />
      <strong className="text-lg">{name}</strong>
      <ArrowUpRight className="h-4 w-4" />
    </Link>
  )
}
