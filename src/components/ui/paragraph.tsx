import { ComponentProps } from 'react'
import { VariantProps, cva } from 'class-variance-authority'

const paragraph = cva('', {
  variants: {},
  defaultVariants: {},
})

type ParagaphProps = ComponentProps<'p'> & VariantProps<typeof paragraph>

export function Paragraph({ children }: ParagaphProps) {
  return <p>{children}</p>
}
