import { cn } from '@/libs/cn'
import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps } from 'react'

const button = cva(
  'flex items-center justify-center w-full gap-1 rounded-sm font-medium shadow-sm',
  {
    variants: {
      variant: {
        default:
          'bg-secondary-main hover:bg-secondary-light transition-colors active:bg-secondary-dark text-white',
        outline: 'border border-secondary-main',
      },

      size: {
        lg: 'px-4 py-1.5 md:px-8 md:py-2 text-lg',
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
