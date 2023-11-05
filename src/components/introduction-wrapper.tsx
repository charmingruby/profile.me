import { PropsWithChildren } from 'react'

export function IntroductionWrapper({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col justify-center gap-4 mb-6">{children}</div>
  )
}
