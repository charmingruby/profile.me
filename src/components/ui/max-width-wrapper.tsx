import { cn } from '@/libs/cn'
import { ReactNode } from 'react'

interface MaxWidthWrapperProps {
  children: ReactNode
  className?: string
}

export function MaxWidthWrapper({ children, className }: MaxWidthWrapperProps) {
  return (
    <div className=" px-6 md:px-16">
      <div
        className={cn('max-w-2xl lg:max-w-6xl mx-auto lg:0 w-full', className)}
      >
        {children}
      </div>
    </div>
  )
}
