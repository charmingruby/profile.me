import { PropsWithChildren } from 'react'

export function SectionBadge({ children }: PropsWithChildren) {
  return (
    <div className="border border-secondary-main w-fit py-1 px-3 rounded-full">
      <span className="font-semibold tracking-widest text-base lg:text-sm ">
        {children}
      </span>
    </div>
  )
}
