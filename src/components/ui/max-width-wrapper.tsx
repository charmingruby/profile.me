import { cn } from '@/libs/cn'
import { ReactNode } from 'react'

interface MaxWidthWrapperProps {
  children: ReactNode
  className?: string
}

export function MaxWidthWrapper({ children, className }: MaxWidthWrapperProps) {
  return (
    <div className={cn('max-w-4xl mx-auto px-4 md:px-0 w-full', className)}>
      {children}
    </div>
  )
}
