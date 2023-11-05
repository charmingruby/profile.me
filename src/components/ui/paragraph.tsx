import { ComponentProps } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/libs/cn'

const paragraph = cva('leading-relaxed', {
  variants: {
    size: {
      default: 'text-base',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

type ParagaphProps = ComponentProps<'p'> & VariantProps<typeof paragraph>

export function Paragraph({ size, className, ...props }: ParagaphProps) {
  return (
    <p
      className={cn(
        paragraph({
          className,
          size,
        }),
      )}
      {...props}
    />
  )
}
