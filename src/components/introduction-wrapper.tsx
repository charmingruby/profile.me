import { cn } from '@/libs/cn'
import { ComponentProps } from 'react'

type IntroductionWrapperProps = ComponentProps<'div'>

export function IntroductionWrapper({
  className,
  children,
  ...props
}: IntroductionWrapperProps) {
  return (
    <div
      className={cn('flex flex-col justify-center gap-4 mb-10', className)}
      {...props}
    >
      {children}
    </div>
  )
}
