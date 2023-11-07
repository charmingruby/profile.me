import { ComponentProps } from 'react'

type TextareaProps = ComponentProps<'textarea'>

export function Textarea({ ...props }: TextareaProps) {
  return (
    <textarea
      className="bg-primary-300 border border-border min-h-[6rem] px-3 py-2 w-full rounded-lg outline-none focus:ring-2 ring-secondary-main"
      {...props}
    />
  )
}
