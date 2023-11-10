import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import Link from 'next/link'
import { ElementType } from 'react'

interface MeanOfContactItemProps {
  icon?: ElementType
  image?: StaticImport
  url: string
}

export function MeanOfContactItem({
  icon: Icon,
  image,
  url,
}: MeanOfContactItemProps) {
  return (
    <Link
      href={url}
      prefetch={false}
      className="flex flex-col items-center gap-4 bg-primary-300 w-fit p-2 sm:p-2.5 rounded-lg border border-border hover:bg-primary-400 transition-colors"
    >
      {image ? (
        <Image src={image} alt={url} className="h-8 w-8" />
      ) : (
        Icon && <Icon className="h-8 w-8" />
      )}
    </Link>
  )
}
