import { cn } from '@/libs/cn'
import { ReactNode } from 'react'

interface MaxWidthWrapperProps {
  children: ReactNode
  className?: string
}

export function MaxWidthWrapper({ children, className }: MaxWidthWrapperProps) {
  return (
    <div className={cn('max-w-5xl mx-auto px-6 md:px-0 w-full', className)}>
      {children}
    </div>
  )
}
