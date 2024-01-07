import { PropsWithChildren } from 'react'

export function SectionBadge({ children }: PropsWithChildren) {
  return (
    <div className="border border-secondary-main w-fit py-1 px-6 rounded-sm">
      <span className="font-semibold tracking-widest text-sm lg:text-base">
        {children}
      </span>
    </div>
  )
}
