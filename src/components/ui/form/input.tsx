import { ComponentProps } from 'react'

type InputProps = ComponentProps<'input'>

export function Input({ ...props }: InputProps) {
  return (
    <input
      className="bg-primary-300 border border-border h-10 px-3 py-2 w-full rounded-lg outline-none focus:ring-2 ring-secondary-main"
      {...props}
    />
  )
}
