'use client'

import { drawerContext } from '@/contexts/drawer-context'
import { Menu } from 'lucide-react'
import { useContext } from 'react'

export function MenuButton() {
  const { toggleMenu } = useContext(drawerContext)

  return (
    <button onClick={toggleMenu}>
      <Menu className="text-gray-palette-0 h-7 w-7" />
    </button>
  )
}
