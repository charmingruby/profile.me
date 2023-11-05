import { cn } from '@/libs/cn'
import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps } from 'react'

const button = cva(
  'flex items-center justify-center rounded-full font-medium',
  {
    variants: {
      variant: {
        default: 'bg-secondary-main text-gray-palette-0',
      },

      size: {
        default: 'px-4 py-1.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        button({
          className,
          variant,
        }),
      )}
      {...props}
    />
  )
}
