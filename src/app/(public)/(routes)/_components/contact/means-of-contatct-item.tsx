import Image, { StaticImageData } from 'next/image'
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
    <div className="flex items-center gap-2">
      <div className="bg-primary-300 w-fit p-2 rounded-lg border border-border">
        <Icon className="text-white h-6 w-6" />
      </div>

      <div className="flex flex-col gap-1">
        <span>{message}</span>
        <strong className="text-secondary-main">{content}</strong>
      </div>
    </div>
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
    <div className="flex items-center gap-2">
      <div className="bg-primary-300 w-fit p-2 rounded-lg border border-border">
        <Image src={icon} alt={url} className="h-6 w-6" />
      </div>

      <div className="flex flex-col gap-1">
        <span>{message}</span>
        <strong className="text-secondary-main">{content}</strong>
      </div>
    </div>
  )
}
