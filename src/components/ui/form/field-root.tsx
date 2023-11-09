import { PropsWithChildren } from 'react'

export function FieldRoot({ children }: PropsWithChildren) {
  return <div className="flex w-full flex-col">{children}</div>
}
