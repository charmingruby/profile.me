import { PropsWithChildren } from 'react'
import { RootLayoutComponent } from '@/layouts/root'

export default function PublicLayout({ children }: PropsWithChildren) {
  return <RootLayoutComponent>{children}</RootLayoutComponent>
}
