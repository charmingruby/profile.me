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
      <div className="bg-primary-300 w-fit p-2.5 rounded-lg border border-border">
        <Icon className="text-white h-6 w-6" />
      </div>

      <div className="flex flex-col gap-0.5">
        <strong className="font-semibold text-lg">{message}</strong>
        <span className="text-gray-400 font-medium">{content}</span>
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
      <div className="bg-primary-300 w-fit p-2.5 rounded-lg border border-border">
        <Image src={icon} alt={url} className="h-6 w-6" />
      </div>

      <div className="flex flex-col gap-0.5">
        <strong className="font-semibold text-lg">{message}</strong>
        <span className="text-gray-400 font-medium">{content}</span>
      </div>
    </div>
  )
}
