import { ExternalLink } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface SocialLinkProps {
  imageUrl: StaticImageData
  name: string
  url: string
}

export function SocialLink({ imageUrl, name, url }: SocialLinkProps) {
  return (
    <Link
      href={url}
      prefetch={false}
      className="flex items-center gap-2 text-gray-palette-50"
    >
      <Image src={imageUrl} className="h-4 w-4 mb-0.5" alt="" />
      <strong className="text-base">{name}</strong>
      <ExternalLink className="h-4 w-4 mb-0.5" />
    </Link>
  )
}
