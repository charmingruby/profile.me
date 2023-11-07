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
      <Image
        src={imageUrl}
        className="hover:opacity-100 opacity-75 h-5 w-5 transition-opacity"
        alt={`Gustavo's ${name} profile link.`}
      />
    </Link>
  )
}
