import clsx from 'clsx'
import { ComponentProps, forwardRef } from 'react'

type TextareaProps = ComponentProps<'textarea'> & {
  hasError?: boolean
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ hasError = false, ...props }, ref) => {
    return (
      <textarea
        className={clsx(
          'bg-primary-300 border border-border min-h-[6rem] px-3 py-4 w-full rounded-lg outline-none focus:ring-2 ring-secondary-main',
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

Textarea.displayName = 'Textarea'
