import clsx from 'clsx'
import { ComponentProps, forwardRef } from 'react'

type InputProps = ComponentProps<'input'> & {
  hasError?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ hasError = false, ...props }, ref) => {
    return (
      <input
        className={clsx(
          'bg-primary-300 border border-border h-12 px-3 py-4 w-full rounded-lg outline-none focus:bg-primary-400 focus:ring-2 ring-secondary-main',
          {
            'border-red-500 placeholder-red-500': hasError,
          },
        )}
        {...props}
        ref={ref}
      />
    )
  },
)

Input.displayName = 'Input'
