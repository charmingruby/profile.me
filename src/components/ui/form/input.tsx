import { ComponentProps, forwardRef } from 'react'

type InputProps = ComponentProps<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    return (
      <input
        className="bg-primary-300 border border-border h-12 px-3 py-4 w-full rounded-lg outline-none focus:ring-2 ring-secondary-main"
        {...props}
        ref={ref}
      />
    )
  },
)

Input.displayName = 'Input'
