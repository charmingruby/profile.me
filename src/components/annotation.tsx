import { PropsWithChildren } from 'react'

export function Annotation({ children }: PropsWithChildren) {
  return <small className="text-lg font-medium text-gray-400">{children}</small>
}
