import { PropsWithChildren } from 'react'

export function Badge({ children }: PropsWithChildren) {
  return (
    <div className="border border-secondary-light bg-secondary-main w-fit py-0.5 px-3 rounded-sm text-white">
      <span className="font-semibold tracking-widest text-xs ">{children}</span>
    </div>
  )
}
