import { cn } from '@/libs/cn'
import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps } from 'react'

const button = cva(
  'flex items-center justify-center gap-1 rounded-full font-medium shadow-sm',
  {
    variants: {
      variant: {
        default: 'bg-secondary-main text-white',
      },

      size: {
        default: 'px-6 py-2',
        sm: 'px-4 py-1.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        button({
          className,
          variant,
          size,
        }),
      )}
      {...props}
    />
  )
}
