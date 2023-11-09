import { ComponentProps, forwardRef } from 'react'

type TextareaProps = ComponentProps<'textarea'>

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ ...props }, ref) => {
    return (
      <textarea
        className="bg-primary-300 border border-border min-h-[6rem] px-3 py-4 w-full rounded-lg outline-none focus:ring-2 ring-secondary-main"
        {...props}
        ref={ref}
      />
    )
  },
)

Textarea.displayName = 'Textarea'
