import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { ElementType } from 'react'

interface MeanOfContactItemUsingImageProps {
  icon: ElementType
  message: string
  content: string
  url: string
}

export function MeanOfContactItemUsingImage({
  icon: Icon,
  content,
  message,
  url,
}: MeanOfContactItemUsingImageProps) {
  return (
    <Link
      href={url}
      prefetch={false}
      className="flex flex-col sm:flex-row sm:items-center gap-2"
    >
      <div className="bg-primary-300 w-fit p-2 sm:p-2.5 rounded-lg border border-border">
        <Icon className="h-6 w-6" />
      </div>

      <div className="hidden sm:flex flex-col gap-0.5">
        <strong className="font-semibold text-xl">{message}</strong>
        <span className="text-base sm:text-base text-gray-400 font-medium break-all">
          {content}
        </span>
      </div>
    </Link>
  )
}

interface MeanOfContactItemUsingIconProps {
  icon: StaticImageData
  message: string
  content: string
  url: string
}

export function MeanOfContactItemUsingIcon({
  icon,
  content,
  message,
  url,
}: MeanOfContactItemUsingIconProps) {
  return (
    <Link
      href={url}
      prefetch={false}
      className="flex flex-col sm:flex-row sm:items-center gap-2"
    >
      <div className="bg-primary-300 w-fit p-2 sm:p-2.5 rounded-lg border border-border">
        <Image src={icon} alt={url} className="h-6 w-6" />
      </div>

      <div className="hidden sm:flex flex-col gap-0.5">
        <strong className="font-semibold text-xl">{message}</strong>
        <span className="text-base sm:text-base text-gray-400 font-medium break-all">
          {content}
        </span>
      </div>
    </Link>
  )
}
