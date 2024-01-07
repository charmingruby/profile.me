import { cn } from '@/libs/cn'
import { ReactNode } from 'react'

interface CardProps {
  className?: string
  children: ReactNode
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'flex flex-col w-full gap-4 border border-primary-300 bg-primary-400 rounded-sm shadow-md sm:px-4 py-6',
        className,
      )}
    >
      {children}
    </div>
  )
}
