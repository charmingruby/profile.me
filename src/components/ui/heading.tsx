import { ComponentProps } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/libs/cn'

const heading = cva('', {
  variants: {
    variant: {
      default: 'text-5xl text-gray-palette-0 font-bold',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type HeadingProps = ComponentProps<'p'> & VariantProps<typeof heading>

export function Heading({ className, variant, ...props }: HeadingProps) {
  return (
    <h2
      className={cn(
        heading({
          className,
          variant,
        }),
      )}
      {...props}
    />
  )
}
