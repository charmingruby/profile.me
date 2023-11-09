'use client'

import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'
import { drawerContext } from '@/contexts/drawer-context'
import { useContext } from 'react'
import { DrawerNavigation } from './drawer-navigation'

export function Drawer() {
  const { isOpen } = useContext(drawerContext)

  return (
    <div
      className={`${
        isOpen ? 'opacity-100 z-40' : 'opacity-0 -z-50'
      } pt-20 h-screen fixed bg-primary-500 w-full transition-opacity`}
    >
      <MaxWidthWrapper>
        <DrawerNavigation />
      </MaxWidthWrapper>
    </div>
  )
}
